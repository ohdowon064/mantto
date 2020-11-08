export default function selectCategories (category) {
    return {
        type : "selectCategories",
        payload : { category }
    }
}