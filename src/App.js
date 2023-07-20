import { useReducer } from 'react'
import './App.css';
import DigitButton from './components/DigitButton.js';
import OperatorButton from './components/operatorButton';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE: 'delete-digit',
  EVALUATE: 'evaluate',
  RESULT: 'result'
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === '0' && state.currentOperand === '0') return state
      if (payload.digit === '.' && state.currentOperand.includes(".")) return state
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`
      }

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operator: payload.operator,
          previousOperand: `${state.currentOperand}`,
          currentOperand: null
        }
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operator: payload.operator,
        currentOperand: null
      }

    case ACTIONS.DELETE:

      if (state.currentOperand == null || state.operator.includes("=")) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand.slice(0, -1)}`
      }


    case ACTIONS.CLEAR:
      return {
        currentOperand: null,
        operator: null,
        previousOperand: null

      }
    default:
      return {
        state
      }
  }
}

const evaluate = ({ currentOperand, previousOperand, operator }) => {
  const previous = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  if (isNaN(previous) || isNaN(current)) {
    return ""
  }
  let computation = ""
  switch (operator) {
    case "+":
      computation = previous + current
      break
    case "-":
      computation = previous - current
      break
    case "/":
      computation = previous / current
      break
    case "x":
      computation = previous * current
      break

  }

  return computation.toString()
}

function App() {

  const [{ currentOperand, previousOperand, operator }, dispatch] = useReducer(reducer, {})

  return (
    <div className="App">
      <h1>Calculator</h1>
      <h2>{previousOperand} {operator}{currentOperand}</h2>
      <table>

        <tr>
          <td><DigitButton digit='7' dispatch={dispatch} /></td>
          <td><DigitButton digit='8' dispatch={dispatch} /></td>
          <td><DigitButton digit='9' dispatch={dispatch} /></td>
          <td><OperatorButton operator='/' dispatch={dispatch} /></td>
        </tr>
        <tr>
          <td><DigitButton digit='4' dispatch={dispatch} /></td>
          <td><DigitButton digit='5' dispatch={dispatch} /></td>
          <td><DigitButton digit='6' dispatch={dispatch} /></td>
          <td><OperatorButton operator='x' dispatch={dispatch} /></td>
        </tr>
        <tr>
          <td><DigitButton digit='1' dispatch={dispatch} /></td>
          <td><DigitButton digit='2' dispatch={dispatch} /></td>
          <td><DigitButton digit='3' dispatch={dispatch} /></td>
          <td><OperatorButton operator='-' dispatch={dispatch} /></td>
        </tr>
        <tr>
          <td><OperatorButton operator='+' dispatch={dispatch} /></td>
          <td><DigitButton digit='0' dispatch={dispatch} /></td>
          <td><DigitButton digit='.' dispatch={dispatch} /></td>
          <td><OperatorButton operator='=' dispatch={dispatch} /></td>

        </tr>

      </table>
      <table className='t-2'>
        <tr>
          <td className='clear'><button onClick={() => dispatch({ type: ACTIONS.CLEAR })}>C</button></td>
          <td className='del'><button onClick={() => dispatch({ type: ACTIONS.DELETE })}>DEL</button></td>
        </tr>
      </table>
    </div>
  );
}

export default App;

