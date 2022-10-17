const initialState = 0;
const CounterReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "plus":
            return state + 1;
        case "minus":
            return state - 1;
        case "reset":
            return state = 0;
        default:
            return state;
    }
};

export default CounterReducer;