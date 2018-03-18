export const AddTodo = (list) => {
    return({
        type: "Add Todo",
        list: list
    })
}

export const DeleteTodo = (item) => {
    return({
        type: "Delete Todo",
        item: item
    })
}