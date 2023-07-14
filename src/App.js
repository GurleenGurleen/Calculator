
import './App.css';

function App() {

  const resultHandler = () => {
    //..
  }
  return (
    <div className="App">
      <h1>Calculator</h1>
      <h2>Display</h2>
      <table>

        <tr>
          <td><button value='7' >7</button></td>
          <td><button value='8' >8</button></td>
          <td><button value='9' >9</button></td>
          <td><button value='divide'>/</button></td>
        </tr>
        <tr>
          <td><button value='4' >4</button></td>
          <td><button value='5' >5</button></td>
          <td><button value='6'>6</button></td>
          <td><button value='multiply' >x</button></td>
        </tr>
        <tr>
          <td><button value='1' >1</button></td>
          <td><button value='2' >2</button></td>
          <td><button value='3' >3</button></td>
          <td><button value='subtract'>-</button></td>
        </tr>
        <tr>
          <td><button>+</button></td>
          <td><button value='0'>0</button></td>
          <td><button>C</button></td>
          <td><button onClick={resultHandler}>=</button></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
