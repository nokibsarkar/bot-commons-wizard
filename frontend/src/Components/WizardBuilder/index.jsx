import { useReducer, useState } from "react";
import CampaignDetails from "./Details";
const reducer = (state, action) => {
    switch (action.type) {
        case "name":
            return { ...state, name: action.payload };
        case "description":
            return { ...state, description: action.payload };
        case "endDate":
            return { ...state, endDate: action.payload };
        case "image":
            return { ...state, image: action.payload };
        case "reward":
            return { ...state, reward: action.payload };
        case "rewardDescription":
            return { ...state, rewardDescription: action.payload };
        case "step":
            return { ...state, step: action.payload };
        default:
            return state;
    }
}
const initialState = {
    name: "Campaign Name",
    description: "Campaign Description",
    endDate: "2020-10-20",
    image: "https://via.placeholder.com/220x221",
    reward: "Reward",
    rewardDescription: "Reward Description",
    step: 0
}
const Stepper = ({ steps, step, setStep }) => {
    return (
        <div className="flex flex-row justify-evenly w-full p-2">
            {steps.map((s, i) => {
                const isCompleted = i < step;
                const isActive = i === step;
                const divBg = isActive ? "bg-blue-800" : isCompleted ? "bg-blue-500" : "bg-blue-200";
                const indexBg = isActive ? "bg-violet-900" : isCompleted ? "bg-violet-500" : "bg-violet-200";
                return (
                    <div key={i} className={`${divBg} flex flex-col justify-center items-center text-center rounded-lg p-2  text-white`}>
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
        // case 1:
        //     return <CampaignImages {...props} />;
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
    const [step, setStep] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="flex flex-col justify-center items-center">
            <Stepper steps={steps} step={step} setStep={setStep} />
            <div className="flex flex-row  items-center">
                <button className="bg-blue-500 text-white rounded-lg px-4 py-2 m-2" onClick={() => step && setStep(step - 1)}>
                    Back</button>
                <button className="bg-blue-500 text-white rounded-lg px-4 py-2
                m-2" onClick={() => step < steps.length - 1 && setStep(step + 1)}>
                    Next</button>
            </div>
            <div className="flex flex-col justify-center items-center">
                {StageSelector(step, { state, dispatch })}
            </div>
        </div>
    )
}
export default WizardBuilder;