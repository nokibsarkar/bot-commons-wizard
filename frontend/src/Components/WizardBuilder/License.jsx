import Options from "./Options";

const License = ({ name, code, description, selected, defaultSelected, toggleSelection }) => {
    const bgColor = selected ? "bg-green-500" : "bg-green-100";
    const textColor = selected ? "text-white" : "text-black";
    const buttonBgColor = selected ? "bg-red-600" : "bg-green-600";
    const buttonTextColor = selected ? "text-white" : "text-black";

    return (
        <div onClick={e => toggleSelection(code)} className={`${bgColor} cursor-pointer border border-gray-400 m-2 p-4 w-30 h-50 flex flex-col justify-center items-center rounded-lg`}>
            <span className={`${textColor}`}>{code}</span>
            <span className={`${textColor}`}>{name}</span>
            <button type="button" className={` ${buttonBgColor} text-white border w-fit border-gray-400 rounded-lg px-4 py-2 m-0`} >
                {selected ? "Unselect" : "Select"}
            </button>
        </div>
    )
}
const OwnLicence = ({ state, dispatch }) => {
    const selectedLicenses = state?.config.licensing.ownWork.licenses;
    const availableLicenses = Object.keys(state?.config?.licenses)?.map(code => ({ ...state?.config?.licenses[code], code, selected: selectedLicenses?.includes(code) }));
    const selectLicense = (code) => {
        if (selectedLicenses?.includes(code))
            return dispatch({ type: "config.licensing.ownWork.licenses", payload: selectedLicenses.filter(license => license !== code) })
        else
            dispatch({ type: "config.licensing.ownWork.licenses", payload: [...selectedLicenses, code] })
    }
    return (
        <fieldset className="flex flex-col justify-center items-center border p-4">
            <legend className="text-lg">Own Work License</legend>
            <p className="text-gray-900">This campaign allows users to upload their own work. Please select the licenses that you want to allow.</p>
            <div className="flex flex-row flex-wrap justify-center items-center">
                {availableLicenses?.map((license, i) => <License key={i} {...license} toggleSelection={selectLicense} />)}
            </div>
        </fieldset>
    )
}
const ThirdPartyLicence = ({ state, dispatch }) => {

}
const CampaignLicense = ({ state, dispatch }) => {
    
    const choiceSelected = state?.config?.licensing?.ownWorkDefault;
    const readyToGotNext = (
        choiceSelected === "own" && state?.config?.licensing?.ownWork?.licenses?.length > 0 ||
        choiceSelected === "notown" && state?.config?.licensing?.thirdParty?.licenses?.length > 0 ||
        choiceSelected === "choice" && state?.config?.licensing?.ownWork?.licenses?.length > 0 && state?.config?.licensing?.thirdPartyWork?.licenses?.length > 0
    );
    const allowOwn = state?.config?.licensing?.ownWorkDefault === "own" || state?.config?.licensing?.ownWorkDefault === "choice";
    const allowThirdParty = state?.config?.licensing?.ownWorkDefault === "notown" || state?.config?.licensing?.ownWorkDefault === "choice";
    const licenceOptions = [
        {
            name: "Only Own Work",
            value: "own",
            description: "This campaign only allows users to upload their own work",
            selected: choiceSelected === "own",
            defaultSelected: false,
            toggleSelection: () => { },
            selectedClass: "bg-green-700 text-white",
            unSelectedClass: "bg-green-200 text-gray-700"
        },
        {
            name: "Only Third Party Work",
            value: "notown",
            description: "This campaign only allows users to upload third party work",
            selected: choiceSelected === "notown",
            disabled: true,
            toggleSelection: () => { },
            selectedClass: "bg-green-700 text-white",
            unSelectedClass: "bg-green-200 text-gray-700"
        },
        {
            name: "Both Own and Third Party Work",
            value: "choice",
            description: "This campaign allows users to upload both their own work and third party work",
            selected: choiceSelected === "choice",
            disabled: true,
            selectedClass: "bg-green-700 text-white",
            unSelectedClass: "bg-green-200 text-gray-700"
        },
    ]
    return <fieldset className="flex flex-col justify-center items-center border p-4">
        <legend className="text-lg">Campaign License</legend>
        <Options
            options={licenceOptions}
            onSelect={code => dispatch({ type: "config.licensing.ownWorkDefault", payload: code })}
            description=""
            fieldName="Allow License Types"
        />
        {allowOwn && <OwnLicence state={state} dispatch={dispatch} />}
        {allowThirdParty && <ThirdPartyLicence state={state} dispatch={dispatch} />}
        <button
            type="button"
            className="border w-1/3 bg-green-700 text-white disabled:bg-opacity-50 rounded-lg px-3 py-2 mt-5"
            onClick={() => dispatch({ type: "step", payload: 4 })} disabled={!readyToGotNext}>
            Show Campaign Preview
        </button>
    </fieldset>
}
export default CampaignLicense;