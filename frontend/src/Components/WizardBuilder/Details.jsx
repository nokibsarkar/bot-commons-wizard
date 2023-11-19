import ImageSearcher from "./ImageSearcher";
import WikiTextParser from "./WikiTextInput";

const CampaignDetails = ({ state, dispatch }) => {
    const readyToGotNext = (
        // state.config.title?.length > 0 &&
        // state.config.description?.length > 0 &&
        // state.config.display?.headerLabel?.length > 0 &&
        state.name?.length > 0
        // state.config.start?.length > 0 &&
        // state.config.end?.length > 0
    )
    return <form>
        <div className="flex flex-col justify-center items-center">
            <fieldset data-testid="campaign-name" className="flex flex-col items-center border-solid border border-gray-600 p-5">
                <legend className="text-lg" data-testid="campaign-name-legend">Campaign Name</legend>
                <p className="text-black" data-testid="campaign-name-helper">This is the name of the campaign. It will be used in the title of the campaign page.</p>
                <input
                    className="border border-gray-400 rounded-lg px-4 py-2 m-2"
                    type="text"
                    placeholder="Campaign Name"
                    value={state.name}
                    data-testid="campaign-name-input"
                    onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
                    required
                />
            </fieldset>
            <WikiTextParser campaignName={state.name} fieldName="Title" onChooseTemplate={(wikitext) => dispatch({ type: "config.title", payload: wikitext })} placeholder={`Default is "${state.name}"`} />
            <WikiTextParser campaignName={state.name} fieldName="Description" onChooseTemplate={(wikitext) => dispatch({ type: "config.description", payload: wikitext })} />
            <WikiTextParser campaignName={state.name} fieldName="Campaign Banner" onChooseTemplate={(wikitext) => dispatch({ type: "config.display.headerLabel", payload: wikitext })} />
            <fieldset className="flex flex-row  border-solid border-gray-600 border p-5">
                <legend className="text-lg" data-testid="details-campaign-duration-legend" >Campaign Duration</legend>
                <input
                    data-testid="details-start-date"
                    className="border border-gray-400 rounded-lg px-4 py-2 m-2"
                    type="date" value={state.startDate} onChange={(e) => dispatch({ type: "config.start", payload: e.target.value })} />
                <span className="mx-2">to</span>
                <input
                    data-testid="details-end-date"
                    className="border border-gray-400 rounded-lg px-4 py-2 m-2"
                    type="date" value={state.endDate} onChange={(e) => dispatch({ type: "config.end", payload: e.target.value })} />
            </fieldset>
            <button data-testid="details-next-button" type="button" disabled={!readyToGotNext} className="border disabled:bg-opacity-70 text-white bg-green-700 w-1/2 border-gray-400 rounded-lg px-4 py-2 m-2" onClick={() => dispatch({ type: "step", payload: 1 })}>
                Add Tutorial Settings
            </button>
        </div>
    </form>
};
export default CampaignDetails;