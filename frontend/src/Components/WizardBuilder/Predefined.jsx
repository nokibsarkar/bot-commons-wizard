import AddCategory from "./CategorySearcher";
import WikiTextParser from "./WikiTextInput";
const Categories = ({ categories, updatePrefix, dispatch }) => {
    return (
        <fieldset className="flex flex-col justify-center items-center border p-4 w-1/2">
            <legend className="text-lg">Categories</legend>
            <table className="p-3 border-collapse border w-full m-2">
                <tbody>
                    <tr>
                        <th>Category Name</th>
                        <th>Remove</th>
                    </tr>
                    {
                        categories.map((category, i) => {
                            return (
                                <tr key={i} className="even:bg-slate-100 odd:bg-slate-200 text-black  table-row mx-2 border-y-2 text-center p-1 m-1">
                                    <td className="py-3 whitespace-break-spaces w-10/12">{category}</td>
                                    <td><button type="button" className="border w-2/12 bg-red-600 rounded-lg p-1 px-4 m-1 text-2xl text-white text-center" onClick={() => dispatch({ type: updatePrefix + "categories", payload: categories.filter((_, index) => index !== i) })}> - </button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <AddCategory onAdd={(category) => dispatch({ type: updatePrefix + "categories", payload: [...categories, category] })} />
        </fieldset>
    )
}
const CompagnPredefinedParameters = ({ state, dispatch }) => {
    const readyToGotNext = state?.config?.autoAdd?.categories?.length > 0 || state?.config?.defaults?.categories?.length > 0;
    return (
        <div className="flex flex-col justify-center items-center">
            <fieldset className="flex flex-col items-center border-solid border border-gray-600 p-5">
                <legend className="text-lg">Suggestions</legend>
                <p className="text-gray-400">These are the suggestions that will be shown to the user when they aare uplaoding a file. These can be removed by the user.</p>
                <WikiTextParser fieldName="Description" onChooseTemplate={(wikitext) => dispatch({ type: "config.defaults.description", payload: wikitext })} />
                
                <Categories categories={state.config.defaults.categories} updatePrefix="config.defaults." dispatch={dispatch} />
                <fieldset className="flex flex-col items-center border-solid border border-gray-600 p-5">
                    <legend className="text-lg">Coordinates</legend>
                    <p className="flex flex-row">
                        <label htmlFor="latitude">Latitude</label>
                        <input
                            className="border border-gray-400 rounded-lg px-4 py-2 m-2"
                            type="number"
                            placeholder="Latitude"
                            value={state.defaults?.latitude}
                            onChange={(e) => dispatch({ type: "defaults.latitude", payload: e.target.value })}
                        />
                    </p>
                    <p className="flex flex-row">
                    <label htmlFor="longitude">Longitude</label>
                    <input
                        className="border border-gray-400 rounded-lg px-4 py-2 m-2"
                        type="number"
                        placeholder="Longitude"
                        value={state.defaults?.longitude}
                        onChange={(e) => dispatch({ type: "defaults.longitude", payload: e.target.value })}
                    />
                    </p>
                </fieldset>
            </fieldset>

            <fieldset className="flex flex-col justify-center items-center border p-4">
                <legend className="text-lg">Requirements</legend>
                <p className="text-gray-400">These are the requirements that the user must meet in order to upload a file to this campaign. These cannot be removed by the user.</p>
                <fieldset className="flex flex-col border p-2">
                    <legend>Add some text </legend>
                    <p className="p-2">
                        This text would be added between licence and categories
                    </p>
                    <textarea
                        className="border border-gray-400 rounded-lg p-3 mr-2 m-1"
                        type="text"
                        placeholder="Prefill Summary box with this text"
                        value={state.config.autoAdd.wikitext}
                        onChange={(e) => dispatch({ type: "config.autoAdd.wikitext", payload: e.target.value })}
                    />
                </fieldset>
                <Categories categories={state.config.autoAdd.categories} updatePrefix="config.autoAdd." dispatch={dispatch} />

                <button
                    type="button"
                    className="border w-1/3 bg-green-700 text-white disabled:bg-opacity-50 rounded-lg px-3 py-2 mt-3"
                    onClick={() => dispatch({ type: "step", payload: 3 })} disabled={!readyToGotNext}>
                    Add Campaign License
                </button>
            </fieldset>
        </div>
    )
}
export default CompagnPredefinedParameters;