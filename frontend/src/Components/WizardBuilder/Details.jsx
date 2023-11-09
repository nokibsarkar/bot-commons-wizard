import ImageSearcher from "./ImageSearcher";

const CampaignDetails = ({ state, dispatch }) => {
    return <form>
        <div className="flex flex-col justify-center items-center">
            <input
                className="border border-gray-400 rounded-lg px-4 py-2 m-2"
                type="text"
                placeholder="Campaign Name"
                value={state.name}
                onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
            />
            <ImageSearcher setImageURL={(url) => dispatch({ type: "image", payload: url })} defaultImageURL={state.image} />
            <fieldset className="flex flex-row  border-solid border-gray-600 border p-5">
                <legend className="text-lg">Campaign Duration</legend>
                <input
                    className="border border-gray-400 rounded-lg px-4 py-2 m-2"
                    type="date" value={state.startDate} onChange={(e) => dispatch({ type: "startDate", payload: e.target.value })} />
                <span className="mx-2">to</span>
                <input
                    className="border border-gray-400 rounded-lg px-4 py-2 m-2"
                    type="date" value={state.endDate} onChange={(e) => dispatch({ type: "endDate", payload: e.target.value })} />
            </fieldset>

            <textarea
                className="w-full border border-gray-400 rounded-lg px-4 py-2 m-2"
                type="text"
                placeholder="Campaign Description"
                value={state.description}
                onChange={(e) => dispatch({ type: "description", payload: e.target.value })}
            />
            <button type="button" className="border w-fit border-gray-400 rounded-lg px-4 py-2 m-0" onClick={() => dispatch({ type: "step", payload: 1 })}>Next</button>
        </div>
    </form>
};
export default CampaignDetails;