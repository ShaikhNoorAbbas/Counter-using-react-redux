const increment = () => {
    return {
        type: "plus"
    };
};

const decrement = () => {
    return {
        type: "minus"
    };
};
const reset = () => {
    return {
        type: "reset"
    }
};
export { increment, decrement, reset };
