let initialState = null;

export default function (state = initialState, action) {
    switch (action.type) {
        case "LOG_IN":
            return action.payload;
        case "LOG_OUT":
            return null;
        default:
            return state;
    }
}