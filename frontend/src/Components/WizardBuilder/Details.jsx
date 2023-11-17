import ImageSearcher from "./ImageSearcher";
import WikiTextParser from "./WikiTextInput";

const CampaignDetails = ({ state, dispatch }) => {
    const readyToGotNext = (
        // state.config.title?.length > 0 &&
        // state.config.description?.length > 0 &&
        // state.config.display?.headerLabel?.length > 0 &&
        state.name?.length > 0 &&
        state.config.start?.length > 0 &&
        state.config.end?.length > 0
    )
    return <form>
        <div className="flex flex-col justify-center items-center">
            <fieldset className="flex flex-col items-center border-solid border border-gray-600 p-5">
                <legend className="text-lg">Campaign Name</legend>
                <p className="text-black">This is the name of the campaign. It will be used in the title of the campaign page.</p>
                <input
                    className="border border-gray-400 rounded-lg px-4 py-2 m-2"
                    type="text"
                    placeholder="Campaign Name"
                    value={state.name}
                    onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
                />
            </fieldset>
            <WikiTextParser campaignName={state.name} fieldName="Title" onChooseTemplate={(wikitext) => dispatch({ type: "config.title", payload: wikitext })} placeholder={`Default is "${state.name}"`} />
            <WikiTextParser campaignName={state.name} fieldName="Description" onChooseTemplate={(wikitext) => dispatch({ type: "config.description", payload: wikitext })} />
            <WikiTextParser campaignName={state.name} fieldName="Campaign Banner" onChooseTemplate={(wikitext) => dispatch({ type: "config.display.headerLabel", payload: wikitext })} />
            <fieldset className="flex flex-row  border-solid border-gray-600 border p-5">
                <legend className="text-lg">Campaign Duration</legend>
                <input
                    className="border border-gray-400 rounded-lg px-4 py-2 m-2"
                    type="date" value={state.startDate} onChange={(e) => dispatch({ type: "config.start", payload: e.target.value })} />
                <span className="mx-2">to</span>
                <input
                    className="border border-gray-400 rounded-lg px-4 py-2 m-2"
                    type="date" value={state.endDate} onChange={(e) => dispatch({ type: "config.end", payload: e.target.value })} />
            </fieldset>
            <button type="button" disabled={!readyToGotNext} className="border disabled:bg-opacity-70 text-white bg-green-700 w-1/2 border-gray-400 rounded-lg px-4 py-2 m-2" onClick={() => dispatch({ type: "step", payload: 1 })}>
                Add Tutorial Settings
            </button>
        </div>
    </form>
};
export default CampaignDetails;