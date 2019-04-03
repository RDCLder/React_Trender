const reducer = (state, action) => {
    if (state === undefined) {
        return {};
    }

    switch (action.type) {
        case "":
            return {};
        default:
            return state;
    }
};

export default reducer;
