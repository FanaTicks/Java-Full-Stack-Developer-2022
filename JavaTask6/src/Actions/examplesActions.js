const setExample = exampleObj => {
    return {
        type: "SET_TEXT",
        payload: exampleObj
    };
};

const clearExample = () => {
    return {
        type: "CLEAR_TEXT"
    };
};

export default {
    setExample,
    clearExample
};