export default (state = [], action) => {
    switch (action.type) {
        case "Add":
            return [...state, {
                "id": action.id,
                "title": action.title,
                "detail": action.detail
            }]
        case "Delete":
            return state.filter((note) => {
                return note.id !== action.id
            })
        case "Refresh":
            return action.notes
        default:
            return state
    }
}