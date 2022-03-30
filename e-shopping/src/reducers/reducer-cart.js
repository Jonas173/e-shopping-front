let initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case "ARTICLE_ADDED":
            return [...state, action.payload];
        case "ARTICLE_REMOVED":
            let breakLoop = false;

            while (!breakLoop) {
                let index = -1;
                const mapped = state.map(function (e) { return e.id; });
                for (let i = 0; i < mapped.length; ++i) {
                    if (mapped[i] === action.payload.id) {
                        index = i;
                        i = mapped.length;
                    }
                }
                if (index > -1) {
                    state.splice(index, 1); // 2nd parameter means remove one item only
                } else {
                    breakLoop = true;
                }
            }

            return [...state];
        default:
            return initialState;
    }
}