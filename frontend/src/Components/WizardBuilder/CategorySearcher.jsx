import { useState } from "react";

const AddCategory = ({onAdd}) => {
    const [newCategoryName, setNewCategoryName] = useState("")
    return (
        <fieldset className="flex flex-row border p-2">
            {/* <legend className="text-sm">Add Category</legend> */}
            <input
                    className="border border-gray-400 rounded-lg px-4 py-2 m-0 w-10/12"
                    type="text"
                    placeholder="Category Name"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                />
                <button type="button" className="border w-2/12 border-gray-400 rounded-lg px-4 py-2 m-0 text-2xl text-white bg-green-700" onClick={() => newCategoryName && onAdd(newCategoryName)}> + </button>
        </fieldset>
    )
}
export default AddCategory;