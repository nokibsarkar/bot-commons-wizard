import Options from "./Options";
import WikiTextParser from "./WikiTextInput";




const TutorialPage = ({ state, dispatch, config, dispatchConfig }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <Options fieldName="Skippable" description="Can the user skip this tutorial?" options={[{ name: "Yes, the user can skip this tutorial", value: true, selected: config.config.tutorial.skip, selectedClass: "bg-green-700 text-white", unSelectedClass: "bg-green-200 text-gray-700" }, { name: "No, the user cannot skip this tutorial", value: false, selected: !config.config.tutorial.skip, selectedClass: "bg-red-700 text-white", unSelectedClass: "bg-red-200 text-gray-700" }]} onSelect={v => dispatch({ type: "config.tutorial.skip", payload: v })} />
            <WikiTextParser campaignName={config.config.name} fieldName="Tutorial Template Name" onChooseTemplate={(wikitext) => dispatch({ type: "config.tutorial.template", payload: wikitext })} formatter={v => `{{${v}}}`} />
            {/* <fieldset className="flex flex-col items-center border-solid border border-gray-600 p-5">
                <legend>Width</legend>
                <label htmlFor="width">Width of the tutorial</label>
                <input type="number" value={state.config.tutorial.width} onChange={(e) => dispatch({ type: "config.tutorial.width", payload: e.target.value })} id="width" />
            </fieldset> */}
            <button type="button" className="border min-w-full bg-green-700 text-white disabled:bg-opacity-50 rounded-lg px-3 py-2 mt-3" onClick={() => dispatch({ type: "step", payload: 2 })}>
                Add Some Predefined Parameters
            </button>
        </div>
    )
};
export default TutorialPage;