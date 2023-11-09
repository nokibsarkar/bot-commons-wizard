import { useState } from "react";
const Preview = ({src}) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <img src={src} alt="Campaign Image" className="w-50 h-auto" />
        </div>
    )
}
const UploadUnit = ({image, onUploaded, onRemoved, onError}) => {
    return (
        <fieldset className="block">
            <table className="block text-center" border="1">
                <tbody>
                    <tr className="flex flex-row justify-center items-center">
                        <td rowSpan={5}>
                            <Preview src={image} />
                        </td>
                        <td>
                            Name
                        </td>
                        <td>
                            <input type="text" />
                        </td>
                    </tr>
                    <tr className="flex flex-row justify-center items-center">
                        <td>
                            Description
                        </td>
                        <td>
                            <input type="text" />
                        </td>
                    </tr>
                    <tr className="flex flex-row justify-center items-center">
                        <td colSpan={3}>
                            <input type="file" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <br/>
        </fieldset>
    )
}
const Uploader = ({}) => {
    const [images, setImages] = useState([]);
    return (
        <fieldset className="flex flex-col justify-center items-center">
            <UploadUnit image="https://via.placeholder.com/150x50" />
                <UploadUnit />
                <UploadUnit />
                <UploadUnit />
        </fieldset>
    )

}
export const WizardHeader = ({}) => {
    const [campaignName, setCampaignName] = useState("Campaign Name");
    const [campaignDescription, setCampaignDescription] = useState("Campaign Description");
    const [campaignEndDate, setCampaignEndDate] = useState("2020-10-20");
    const [campainImage, setCampaignImage] = useState("https://via.placeholder.com/50x50");
    const [campaignWebsite, setCampaignWebsite] = useState("https://www.google.com");
    const endDateString = new Date(campaignEndDate).toLocaleDateString("en-US", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: "numeric",
        minute: "numeric"
    })
    return (
        <div className="p-5 bg-slate-300 flex flex-col justify-center items-center">
            <img src={campainImage} alt="Campaign Image" className="w-1/6" />
            <h1 className="text-2xl font-extrabold m-2">{campaignName}</h1>
            <p className="text-xl font-bold m-1">Ends on {endDateString}</p>
            <p className=" m-1">{campaignDescription}</p>
            <p className=" m-1">To learn More, visit <a href={campaignWebsite}>{campaignWebsite}</a></p>
        </div>
    )
}
export const WizardForm = ({}) => {
    return (
        <div>
<WizardHeader />
<Uploader />
        </div>
    )

}
export default WizardForm