let initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case "PLACE_ORDER":
            return [...state, action.payload];
        default:
            return state;
    }
}