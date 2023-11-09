import { useReducer, useState } from "react";
import CampaignDetails from "./Details";
import CampaignLicense from "./License";
const initialState = {
    step: 0,
    name: "Campaign Name",
    description: "Campaign Description",
    startDate: "",
    endDate: "",
    image: "https://via.placeholder.com/220x220",
    banner: "https://via.placeholder.com/220x220",
    tutorialFile: "",
    tutorialLink: "",
    licenseOnlyAuthor: false,
    licenseCustom: true,
    licenses: [
        {
            name: "Creative Commons Attribution-ShareAlike 4.0 International",
            link: "https://creativecommons.org/licenses/by-sa/4.0/",
            code: "CC BY-SA 4.0",
            selected: false,
        },
        {
            name: "Creative Commons Attribution 4.0 International",
            link: "https://creativecommons.org/licenses/by/4.0/",
            code: "CC BY 4.0",
            selected: false,
        },
        {
            name: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International",
            link: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
            code: "CC BY-NC-SA 4.0",
            selected: false,
        },
        {
            name: "Creative Commons Attribution-NonCommercial 4.0 International",
            link: "https://creativecommons.org/licenses/by-nc/4.0/",
            code: "CC BY-NC 4.0",
            selected: false,
        },
        {
            name: "Creative Commons Attribution-NoDerivatives 4.0 International",
            link: "https://creativecommons.org/licenses/by-nd/4.0/",
            code: "CC BY-ND 4.0",
            selected: false,
        },
        {
            name: "Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International",
            link: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
            code: "CC BY-NC-ND 4.0",
            selected: false,
        },
        {
            name: "Creative Commons Zero v1.0 Universal",
            link: "https://creativecommons.org/publicdomain/zero/1.0/",
            code: "CC0 1.0",
            selected: false,
        }
    ],
    categories: [
        "Category:Images published using Campaign Wizards created with the Korikath Campaign Wizard Builder",
    ]

}
const reducer = (state, action) => {
    switch (action.type) {
        case "name":
            return { ...state, name: action.payload };
        case "description":
            return { ...state, description: action.payload };
        case "startDate":
            return { ...state, startDate: action.payload };
        case "endDate":
            return { ...state, endDate: action.payload };
        case "image":
            return { ...state, image: action.payload };
        case "banner":
            return { ...state, banner: action.payload };
        case "tutorialFile":
            return { ...state, tutorialFile: action.payload };
        case "tutorialLink":
            return { ...state, tutorialLink: action.payload };
        case "licenseOnlyAuthor":
            return { ...state, licenseOnlyAuthor: action.payload };
        case "licenseCustom":
            return { ...state, licenseCustom: action.payload };
        case "licenses":
            return { ...state, licenses: action.payload };
        case "categories":
            return { ...state, categories: action.payload };
        case "step":
            {
                if (typeof action.payload !== "number")
                    try {
                        action.payload = parseInt(action.payload);
                    } catch (e) {
                        return state;
                    }
                if (action.payload < 0)
                    action.payload = 0;
                return { ...state, step: action.payload };
            }
        default:
            return state;
    }
}

const Stepper = ({ steps, step, setStep }) => {
    return (
        <div className="flex flex-row justify-evenly w-full p-2 cursor-pointer">
            {steps.map((s, i) => {
                const isCompleted = i < step;
                const isActive = i === step;
                const divBg = isActive ? "bg-blue-800" : isCompleted ? "bg-blue-500" : "bg-blue-200";
                const indexBg = isActive ? "bg-violet-900" : isCompleted ? "bg-violet-500" : "bg-violet-200";
                return (
                    <div key={i} className={`${divBg} flex flex-col justify-center items-center text-center rounded-lg p-2  text-white`} onClick={() => setStep(i)}>
                        <span className={`text-white rounded-full ${indexBg} inline-block w-8`}>{i + 1}</span>
                        <span>{s}</span>
                    </div>
                )
            })}
        </div>
    )

}
const StageSelector = (step, props) => {
    switch (step) {
        case 0:
            return <CampaignDetails {...props} />;
        case 1:
            return <CampaignLicense {...props} />;
        // case 2:
        //     return <CampaignRewards {...props} />;
        // case 3:
        //     return <CampaignPreview {...props} />;
        default:
            return <></>;
    }
}

const WizardBuilder = () => {
    const steps = ["Campaign Details", "Campaign Images", "Campaign Rewards", "Campaign Preview"];
    const [state, dispatch] = useReducer(reducer, initialState);
    const [step, setStep] = [state.step, (step) => dispatch({ type: "step", payload: step })];

    return (
        <div className="flex flex-col justify-center items-center">
            <Stepper steps={steps} step={step} setStep={setStep} />
            {StageSelector(step, { state, dispatch })}
        </div>
    )
}
export default WizardBuilder;