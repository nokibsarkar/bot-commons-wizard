const classes = 'border cursor-pointer p-2 text-center m-1 w-full rounded-lg shadow-md'
const Options = ({ options, onSelect, description, fieldName }) => {
    return (
        <fieldset data-testid={fieldName} className="flex flex-col items-center border-solid border border-gray-600 p-5">
            <legend data-testid={`${fieldName}-legend`} className="text-lg">{fieldName}</legend>
            <p className="" data-testid={`${fieldName}-description`}>{description}</p>
            {options?.map((option, i) => <p data-testid={`${fieldName}-option`} key={i} className={(`${classes} ${!option?.disabled && option.selected ? (option?.selectedClass || "bg-green-700 text-white") : (option?.unSelectedClass || "bg-green-200 text-gray-700")}`)} onClick={e => !option?.disabled && onSelect(option.value)} data-checked={option.selected}>
                {option.name}
            </p>)}
        </fieldset>
    )
};
export default Options;