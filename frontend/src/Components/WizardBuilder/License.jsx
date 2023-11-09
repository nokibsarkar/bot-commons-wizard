const CampaignLicense = ({ state, dispatch }) => {
    const readyToGotNext = state?.licenses?.some(license => license.selected);
    return <fieldset className="flex flex-col justify-center items-center border p-4">
        <legend className="text-lg">Campaign License</legend>
        <div className="flex flex-col justify-center items-center">
            {state?.licenses?.map((license, i) => {
                const bgColor = license.selected ? "bg-green-500" : "bg-green-100";
                const textColor = license.selected ? "text-white" : "text-black";
                const buttonBgColor = license.selected ? "bg-red-600" : "bg-green-600";
                const buttonTextColor = license.selected ? "text-white" : "text-black";
                const toggleSelection = () => {
                    license.selected = !license.selected;
                    dispatch({ type: "licenses", payload: [...state.licenses] })
                }
                return (
                    <div key={i} onClick={toggleSelection} className={`${bgColor} cursor-pointer border border-gray-400 m-2 p-4 w-30 h-50 flex flex-col justify-center items-center rounded-lg`}>
                        <span className={`${textColor}`}>{license.code}</span>
                        <span className={`${textColor}`}>{license.name}</span>
                        <button type="button" className={` ${buttonBgColor} text-white border w-fit border-gray-400 rounded-lg px-4 py-2 m-0`} >
                            {license.selected ? "Unselect" : "Select"}
                            </button>
                    </div>
                )
            })}
            {/* <button
                type="button" className="border w-1/2 border-gray-400 rounded-lg px-4 py-2 m-4"
            onClick={() => dispatch({ type: "licenseCustom", payload: !state.licenseCustom })}>
                {state.licenseCustom ? "Allow Only Standard License" : "Include Custom License"}
                </button> */}

            {/* {state?.licenseCustom && <fieldset className="border border-gray-500 m-2">
                <legend>Custom License</legend>
                <input
                    className="border border-gray-400 rounded-lg px-4 py-2 m-2"
                    type="text"
                    placeholder="License Name"
                    value={state.licenseName}
                    onChange={(e) => dispatch({ type: "licenseName", payload: e.target.value })}
                />
                <input
                    className="border border-gray-400 rounded-lg px-4 py-2 m-2"
                    type="text"
                    placeholder="License Template"
                    value={state.licenseURL}
                    onChange={(e) => dispatch({ type: "licenseURL", payload: e.target.value })}
                />
            </fieldset>
            } */}
        </div>

        <button
            type="button"
            className="border w-1/3 bg-green-700 text-white disabled:bg-opacity-50 rounded-lg px-3 py-2 mt-5"
            onClick={() => dispatch({ type: "step", payload: 3 })} disabled={!readyToGotNext}>
                Show Campaign Preview
                </button>
    </fieldset>
}
export default CampaignLicense;