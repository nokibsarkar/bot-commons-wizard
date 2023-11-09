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
            <textarea
                className="border border-gray-400 rounded-lg px-4 py-2 m-2"
                type="text"
                placeholder="Campaign Description"
                value={state.description}
                onChange={(e) => dispatch({ type: "description", payload: e.target.value })}
            />
        </div>
    </form>
};
export default CampaignDetails;