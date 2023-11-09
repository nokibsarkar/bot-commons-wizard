const CampaignPreview = ({ state, dispatch }) => {
    return (
        <fieldset className="flex flex-col justify-center items-center border p-4">
            <legend className="text-lg">Campaign Preview</legend>
            <h1>
                {JSON.stringify(state)}
            </h1>
            <button
                type="button"
                className="border w-1/3 bg-green-700 text-white disabled:bg-opacity-50 rounded-lg px-3 py-2 mt-3"
                onClick={() => dispatch({ type: "step", payload: 2 })} >
                Confirm and Create Campaign
            </button>
        </fieldset>
    )
}
export default CampaignPreview;