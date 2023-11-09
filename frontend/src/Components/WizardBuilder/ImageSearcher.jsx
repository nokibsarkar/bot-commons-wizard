import { useCallback, useRef, useState } from "react";

const ImageSearcher = ({ setImageURL, defaultImageURL, fieldName = "Select Image" }) => {
    const [imageURL, setLocalImageURL] = useState('');
    const [absoluteImageURL, setAbsoluteImageURL] = useState(defaultImageURL);
    const previewRef = useRef(null);
    const fetchImage = useCallback(async () => {
        const width = previewRef?.current?.clientWidth;
        const height = previewRef?.current?.clientHeight;
        console.log(width, height)
        const base = "https://commons.wikimedia.org/w/api.php"
        const params = new URLSearchParams({
            "action": "query",
            "format": "json",
            "prop": "imageinfo",
            "titles": "File:" + imageURL?.replace(/^[Ff]ile:/, ""),
            "formatversion": "2",
            "iiurlwidth": width,
            "iiurlheight": height,
            "iiprop": "url|mime|metadata",
            "origin": "*"
        });
        const url = `${base}?${params}`;
        const response = await fetch(url);
        const json = await response.json();
        const page = json?.query?.pages[0]
        if (page.missing || page.invalid) {
            setImageURL(defaultImageURL);

        } else {
            const url = page?.imageinfo[0]?.thumburl
            setImageURL(url);
            setAbsoluteImageURL(url);
        }
    }, [imageURL, defaultImageURL, previewRef]);
    return (
        <fieldset className="flex flex-col items-center border-solid border border-gray-600 p-5">
            <legend className="text-lg">{fieldName}</legend>
            <img ref={previewRef} src={absoluteImageURL} alt="Campaign Image" className="w-44 h-auto" />
            <div className="flex flex-row justify-center items-center">
                <input
                    className="border border-gray-400 rounded-lg px-4 py-2 m-2"
                    type="text"
                    placeholder="Image URL"
                    value={imageURL}
                    onChange={(e) => setLocalImageURL(e.target.value)}
                />
                <button type="button" className="border w-fit border-gray-400 rounded-lg px-4 py-2 m-0" onClick={fetchImage}>Fetch Image</button>
            </div>
        </fieldset>

    )
}
export default ImageSearcher;
