import { useCallback } from "react";

const CampaignPreview = ({ state, dispatch }) => {

    const configJSON = JSON.stringify(state, null, 4);
    const save = useCallback(async () => {
        // try {
        //     const response = await fetch("/api/campaigns", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(state)
        //     })
        //     const json = await response.json();
        //     dispatch({ type: "step", payload: 4 });
        //     dispatch({ type: "result", payload: json });
        //     console.log(json);
        // } catch (e) {
        //     console.log(e);
        // }
        dispatch({ type: "step", payload: 5 });

    }, []);
    return (
        <fieldset className="flex flex-col justify-center items-center border p-4">
            <legend className="text-lg">Campaign Preview</legend>
            <img src={state.image} alt="Campaign" className="w-1/2 h-1/2" />
            <h1 className="text-2xl font-bold">
                {state.name}
            </h1>
            <p className="text-lg font-semibold">
                {state.config.description}
            </p>
            <button
                type="button"
                className="border w-1/3 bg-green-700 text-white disabled:bg-opacity-50 rounded-lg px-3 py-2 mt-3"
                onClick={save} >
                Confirm and Create Campaign
            </button>
        </fieldset>
    )
}
export default CampaignPreview;