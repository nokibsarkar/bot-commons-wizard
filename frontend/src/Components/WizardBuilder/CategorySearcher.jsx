import { useState } from "react";
import PageSearcher from "./PageSearcher";

const AddCategory = ({onAdd}) => (
    <PageSearcher onAdd={onAdd} namespace="14" placeholder="Category:Something" />
)
export default AddCategory;