import AddCategory from "./CategorySearcher";

const CompagnPredefinedParameters = ({ state, dispatch }) => {
    const readyToGotNext = state?.categories?.length > 0;
    return (<fieldset className="flex flex-col justify-center items-center border p-4">
        <legend className="text-lg">Campaign Predefined Parameters</legend>
        <fieldset className="border w-full">
            <legend>Summary Box</legend>
            <textarea
                className="w-full border border-gray-400 rounded-lg px-4 py-2 m-2"
                type="text"
                placeholder="Prefill Summary box with this text"
                value={state.prefillSummary}
                onChange={(e) => dispatch({ type: "prefillSummary", payload: e.target.value })}
            />
        </fieldset>
        <fieldset className="">
            <legend>Categories</legend>
            <table className="p-3 border-collapse border">
                <tbody>
                    <tr>
                        <th>Category Name</th>
                        <th>Remove</th>
                    </tr>
                    {
                        state.categories.map((category, i) => {
                            return (
                                <tr key={i} className="even:bg-slate-400 odd:bg-slate-300 odd:text-black even:text-white table-row mx-2 border-y-2 text-center p-1">
                                    <td className="py-3 whitespace-break-spaces w-11/12">{category}</td>
                                    <td><button type="button" className="border w-1/12 border-gray-400 rounded-lg px-4 py-2 m-0 text-2xl" onClick={() => dispatch({ type: "categories", payload: state.categories.filter((_, index) => index !== i) })}> - </button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <AddCategory onAdd={(category) => dispatch({ type: "categories", payload: [...state.categories, category] })} />
        </fieldset>

        <button
            type="button"
            className="border w-1/3 bg-green-700 text-white disabled:bg-opacity-50 rounded-lg px-3 py-2 mt-3"
            onClick={() => dispatch({ type: "step", payload: 2 })} disabled={!readyToGotNext}>
            Add Campaign License
        </button>
    </fieldset>)
}
export default CompagnPredefinedParameters;