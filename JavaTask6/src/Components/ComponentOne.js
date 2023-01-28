import React from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../Actions";

const ComponentOne = props => {
    const text = useSelector(state => state.text.value);

    const dispatch = useDispatch();

    return (
        <div className="ComponentOne">
            <h5>1. Fuctional Component</h5>

            <p>Text: {text} </p>

            <button
                onClick={() => dispatch(allActions.examplesActions.setExample("dwa"))}
            >
                Increase Counter
            </button>

        </div>
    );
};

export default ComponentOne;