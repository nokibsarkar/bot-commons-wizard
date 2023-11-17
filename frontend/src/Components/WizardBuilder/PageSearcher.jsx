import { useCallback, useEffect, useState } from "react";

const PageSearcher = ({ onAdd, placeholder="", arbitrary = false, namespace="0", domain = "commons.wikimedia.org" }) => {
    const [newCategoryName, setNewCategoryName] = useState("");
    const [options, setOptions] = useState([]);
    const [optionCollapsed, setOptionCollapsed] = useState(true);
    const [loading, setLoading] = useState(false);
    const onAddWrapper = useCallback((name) => {
        if (!name) return;
        if (arbitrary && !options.includes(name))
            return;
        else
            onAdd(name);
    }, [onAdd, options, arbitrary]);
    useEffect(() => {
        if(!newCategoryName) return;
        if(loading) return;
        if (arbitrary) return;
        const params = new URLSearchParams({
            "action": "query",
            "format": "json",
            "list": "prefixsearch",
            "pssearch": newCategoryName,
            "psnamespace": namespace,
            "pslimit": 10,
            "origin": "*"
        });
        setLoading(true);
        const url = `https://${domain}/w/api.php?${params}`;
        fetch(url).then(response => response.json()).then(json => {
            const options = json?.query?.prefixsearch?.map(v => v.title);
            setOptions(options);
            setLoading(false);
        })
    }, [newCategoryName])
    return (
        <fieldset className="flex flex-col border p-2">
            {/* <legend className="text-sm">Add Category</legend> */}
            <div className="flex flex-row">
                <input
                    className="border border-gray-400 rounded-lg px-4 py-2 m-0 w-10/12"
                    type="text"
                    placeholder={placeholder}
                    value={newCategoryName}
                    list="categories"
                    onChange={(e) => setOptionCollapsed(false) || setNewCategoryName(e.target.value)}
                />
                <button type="button" className="border w-2/12 border-gray-400 rounded-lg px-4 py-2 m-0 text-2xl text-white bg-green-700" onClick={() => onAddWrapper(newCategoryName)}> + </button>
            </div>
            {!optionCollapsed && <ul className="p-2 z-10 shadow shadow-slate-500 m-1">
                {loading && <li className="border-spacing-1 border p-1 cursor-pointer hover:bg-slate-400 text-center">Loading...</li>}
                {options.filter(v => v.toLowerCase().startsWith(newCategoryName.toLowerCase())).map((option, index) => <li value={option} onClick={e => setNewCategoryName(option) || setOptionCollapsed(true)} className="border-spacing-1 border p-1 cursor-pointer hover:bg-slate-400" key={index}>{option}</li>)}
            </ul>}

        </fieldset>
    )
}
export default PageSearcher;