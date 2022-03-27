let initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case "ARTICLE_ADDED":
            return [...state, action.payload];
        default:
            return initialState;
    }
}