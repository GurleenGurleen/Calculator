import { ACTIONS } from "../App";

const OperatorButton = (props) => {
    return (
        <button onClick={() => props.dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operator: props.operator } })}>{props.operator}</button>
    )
}

export default OperatorButton;