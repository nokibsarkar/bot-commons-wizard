import { useReducer, useState } from "react";
import CampaignDetails from "./Details";
import CampaignLicense from "./License";
import CampaignPredefinedParameters from "./Predefined";
import CampaignPreview from "./Preview";
// import PageSearcher from "./PageSearcher";
import TutorialPage from "./TutorialPage";
import CampaignResult from "./Result";
const defaultConfig = {
    "step": 0,
    name : "Campaign Name",
    config: {
        enabled : true,
        title : "",
        "enableLicensePreference": true,
        "fileExtensions": ["png", "gif", "jpg", "jpeg", "tiff", "tif", "xcf", "pdf", "mid", "ogg", "ogv", "svg", "djvu", "ogg", "ogv", "oga", "flac", "wav", "webm"],
        "apiUrl": "//commons.wikimedia.org/w/api.php",
        "autoAdd": {
            "categories": ["Uploaded with UploadWizard"],
            "wikitext": ""
        },
        "missingCategoriesWikiText": "{{subst:unc}}",
        "display": {
            "headerLabel": "",
            "thanksLabel": ""
        },
        "tutorial": {
            "skip": false,
            "template": "Licensing_tutorial_$1.svg",
            "width": 720,
            "helpdeskCoords": "27, 1319, 691, 1384"
        },
        "fields": [{
            "wikitext": "",
            "label": "",
            "maxLength": 25,
            "initialValue": "",
            "required": false
        }],
        "defaults": {
            "categories": [],
            "description": ""
        },
        "licenseCategory": "License tags",
        "licenseTagFilters": ["self"],
        "licensing": {
            "defaultType": "ownwork",
            "ownWorkDefault": "own",
            "ownWork": {
                "type": "or",
                "template": "self",
                "licenses": ["cc-by-sa-3.0", "cc-by-3.0", "cc-zero"],
                "defaults": ["cc-by-sa-3.0"]
            },
            "thirdParty": {
                "type": "or",
                "licenseGroups": [{
                    "head": "mwe-upwiz-license-cc-head",
                    "subhead": "mwe-upwiz-license-cc-subhead",
                    "licenses": ["cc-by-sa-3.0", "cc-by-sa-2.5", "cc-by-3.0", "cc-by-2.5", "cc-zero"]
                }, {
                    "head": "mwe-upwiz-license-flickr-head",
                    "subhead": "mwe-upwiz-license-flickr-subhead",
                    "prependTemplates": ["flickrreview"],
                    "licenses": ["cc-by-sa-2.0", "cc-by-2.0", "pd-usgov"]
                }, {
                    "head": "mwe-upwiz-license-public-domain-usa-head",
                    "subhead": "mwe-upwiz-license-public-domain-usa-subhead",
                    "licenses": ["pd-us", "pd-art"]
                }, {
                    "head": "mwe-upwiz-license-usgov-head",
                    "licenses": ["pd-usgov", "pd-usgov-nasa"]
                }, {
                    "head": "mwe-upwiz-license-custom-head",
                    "special": "custom",
                    "licenses": ["custom"]
                }, {
                    "head": "mwe-upwiz-license-none-head",
                    "licenses": ["none"]
                }]
            }
        },
        // "thumbnailWidth": 100,
        // "thumbnailMaxHeight": 100,
        // "largeThumbnailWidth": 500,
        // "largeThumbnailMaxHeight": 500,
        // "maxAuthorLength": 10000,
        // "minAuthorLength": 1,
        // "maxSourceLength": 10000,
        // "minSourceLength": 5,
        // "maxTitleLength": 500,
        // "minTitleLength": 5,
        // "maxDescriptionLength": 10000,
        // "minDescriptionLength": 5,
        // "maxOtherInformationLength": 10000,
        // "maxSimultaneousConnections": 3,
        "maxUploads": 50,
        // "minCustomLicenseLength": 6,
        // "maxCustomLicenseLength": 10000,
        // "feedbackPage": "Commons:Upload_Wizard_feedback",
        // "bugList": "https://bugzilla.wikimedia.org/buglist.cgi?query_format=advanced&component=UploadWizard&resolution=---&product=MediaWiki+extensions",
        // "translateHelp": "//translatewiki.net/w/i.php?title=Special:Translate&group=ext-uploadwizard",
        // "enableMultiFileSelect": true,
        // "copyMetadataFeature": true,
        "enableMultipleFiles": true,
        "UploadFromUrl": true
    }
}
function updateNestedProperty(obj, path, value) {
    if (path.length === 1) {
        return { ...obj, [path[0]]: value };
    }
    return { ...obj, [path[0]]: updateNestedProperty(obj[path[0]], path.slice(1), value) };
}
const reducerConfig = (state, action) => {
    const path = action.type.split('.');

    if (path[0] === 'config') {

        return {
            ...state,
            config: updateNestedProperty(state.config, path.slice(1), action.payload)
        };
    }
    // console.log(state)
    switch (action.type) {
        case 'step':
            return { ...state, step: action.payload };
        case 'name':
            return { ...state, name: action.payload };
        case 'reset':
            return defaultConfig;
        default:
            console.error('Unknown action type', action.type);
            return state;
    }
};




const Stepper = ({ steps, step, setStep }) => {
    return (
        <div className="flex flex-row justify-evenly w-full p-2 cursor-pointer" data-testid="stepper">
            {steps.map((s, i) => {
                const isCompleted = i < step;
                const isActive = i === step;
                const divBg = isActive ? "bg-blue-800" : isCompleted ? "bg-blue-500" : "bg-blue-200";
                const indexBg = isActive ? "bg-violet-900" : isCompleted ? "bg-violet-500" : "bg-violet-200";
                return (
                    <div key={i} className={`${divBg} flex flex-col justify-center items-center text-center rounded-lg p-2  text-white`} onClick={() => setStep(i)} data-testid={`step-${i}`} data-selected={isActive} data-completed={isCompleted}>
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
            return <TutorialPage {...props} />;
        case 2:
            return <CampaignPredefinedParameters {...props} />;
        case 3:
            return <CampaignLicense {...props} />;
        case 4:
            return <CampaignPreview {...props} />;
        case 5:
            return <CampaignResult {...props} />;
    }
}

const WizardBuilder = () => {
    const steps = ["Campaign Details", "Tutorial Page", "Predefined Paramters", "Campaign Licenses", "Campaign Preview", "Campaign Result"];
    const [config, configDispatch] = useReducer(reducerConfig, defaultConfig);
    const [step, setStep] = [config.step, (step) => configDispatch({ type: "step", payload: step })];
    return (
        <div className="flex flex-col justify-center items-center">
            <Stepper steps={steps} step={step} setStep={setStep} />
            {StageSelector(step, { state : config, dispatch : configDispatch, config, configDispatch })}
        </div>
    )
}
export default WizardBuilder;