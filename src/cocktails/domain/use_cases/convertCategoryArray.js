//item => {strCategory: " Category "}
import * as categoryStrArray from "react-bootstrap/ElementChildren";

export default function convertCategoryArray(categoryStrArray){
    if (!categoryStrArray) return [];
    const categoriesArr = categoryStrArray.map(
        (item)=> {
            const withoutSlash = item.strCategory.replace(" / ","_");
            const withoutSpace = withoutSlash.replace(" ", "");
            return {
                name: item.strCategory,
                slug: withoutSpace.toLowerCase()
            }}
    )
    return categoriesArr;
}