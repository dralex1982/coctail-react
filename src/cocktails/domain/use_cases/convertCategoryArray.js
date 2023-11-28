//item => {strCategory: " Category "}
export default function convertCategoryArray(){categoryStrArray
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