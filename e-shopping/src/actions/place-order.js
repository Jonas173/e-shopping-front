export const placeOrder = (items) => {
    return {
        type: "PLACE_ORDER",
        payload: items
    }
};