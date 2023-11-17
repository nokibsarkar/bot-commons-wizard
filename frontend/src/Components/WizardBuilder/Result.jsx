import { useMemo, useState } from "react";

const CampaignResult = ({ state, dispatch }) => {
    const configJSON = useMemo(() => JSON.stringify(state.config, null, 4), [state.config]);
    const [copied, setCopied] = useState(false);
    const copy = () => {
        navigator.clipboard.writeText(configJSON);
        setCopied(true);
        setTimeout(() => setCopied(false), 10000);
    }
    return <fieldset className="flex flex-col justify-center items-center border p-4">
        <legend className="text-lg">Campaign Result</legend>
        <p className="text-gray-900">
            Copy the following JSON to your clipboard and paste it into the &nbsp;
            <a className="p-2 border underline mx-2 bg-gray-300 font-mono" href={`https://commons.wikimedia.org/wiki/Campaign:${state.name}`} target="_blank" rel="noreferrer">Campaign:{state.name}</a> to create your campaign.
        </p>
        <p className="flex flex-row w-full justify-center">
            <button
                type="button"
                className="border bg-green-700 text-white disabled:bg-green-400 rounded-lg px-3 py-2 mt-5"
                onClick={copy}
                disabled={copied}>
                Copy to Clipboard
            </button>
            <button
                type="button"
                className="border bg-green-700 text-white disabled:bg-opacity-50 rounded-lg px-3 py-2 mt-5"
                onClick={() => dispatch({ type: "reset", payload: 0 })}>
                Create Another Campaign
            </button>
        </p>
        <pre className="border border-gray-400 rounded-lg p-2 m-2">{configJSON}</pre>

    </fieldset>
}
export default CampaignResult;