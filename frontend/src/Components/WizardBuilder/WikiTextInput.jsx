import { useCallback, useEffect, useState } from "react";

const WikiTextParser = ({ onChooseTemplate, campaignName, defaultValue = '', description = '', placeholder = 'Enter Wikitext', component='textarea', fieldName = "Select Wikitext", formatter = v => v, extraParams = [] }) => {
    const [wikitext, _setWikitext] = useState(defaultValue);
    const [previewText, setPreviewText] = useState('');
    const [loading, setLoading] = useState(false);
    const setWikitext = useCallback((v) => {
        _setWikitext(v);
        onChooseTemplate(v);
        setPreviewText("");
    }, [_setWikitext, setPreviewText]);
    const fetchPreview = useCallback(() => {
        if (!wikitext) return;
        if (loading) return;
        const params = new URLSearchParams({
            "action": "parse",
            "format": "json",
            "text": formatter(wikitext),
            'title': campaignName || 'Campaign name',
            "origin": "*"
        });
        setLoading(true);
        const url = `https://commons.wikimedia.org/w/api.php?${params}`;
        fetch(url).then(response => response.json()).then(json => {
            const previewText = json?.parse?.text?.["*"];
            setPreviewText(previewText);
            setLoading(false);
        })
    }, [wikitext, loading, formatter]);
    return (
        <fieldset className="flex flex-col items-center border-solid border border-gray-600 p-1">
            <legend className="text-lg">{fieldName}</legend>
            <p className="text-gray-400">{description}</p>
            <div className="flex flex-row justify-center items-center">
                {component === 'textarea' ? <textarea
                    className="border border-gray-400 rounded-lg px-4 py-2 m-2"
                    type="text"
                    placeholder={placeholder}
                    value={wikitext}
                    onChange={(e) => setWikitext(e.target.value)}
                /> : <input
                    className="border border-gray-400 rounded-lg p-1 m-1"
                    type="text"
                    placeholder={placeholder}
                    value={wikitext}
                    onChange={(e) => setWikitext(e.target.value)}
                />}
                
                <button type="button" className="w-fit bg-green-800 rounded-lg px-4 py-2 m-0 text-white hover:bg-green-600" onClick={fetchPreview}>Preview</button>
                
            </div>
            {loading ? <span className="text-gray-400">Loading Preview...</span> :
                    <div className="flex flex-col justify-center items-center" dangerouslySetInnerHTML={{ __html: previewText }}>

                    </div>}
        </fieldset>
    )
}
export default WikiTextParser;