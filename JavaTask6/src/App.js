import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from 'react-redux';
import ComponentOne from "./Components/ComponentOne";



const getExamples = () => (dispatch) => {
  console.log("getExamples");

  console.log(useSelector(state => state.items));
}


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      result: "",
      history: [],
      items: []
    };
  }


  render() {
    const fetchExamples = (item) => (dispatch) => {
      console.log("fetchExamples");

      useDispatch({type:"ADD_ITEMS",payload: item});
    }

    const addItems = (item) =>{
      console.log("addItems");
      fetchExamples(item);
      getExamples();
    };

    const {
      result,
      history,
    } = this.state

    const listItems = history.map((number) =>
        <li>{number}</li>
    );

    const clear = () => {
      this.setState({result: ""});
    };

    const calc = () => {
      let res = 0;

      const pattern = /\d+/g // соответствует всем вхождениям одной или более цифр
      const pattern4 = /\D/g // соответствует всем вхождениям одного символа, который не является цифрой в базовом латинском алфавите

      const arr = result.match(pattern);
      const arr4 = result.match(pattern4);

      if (arr[1]){
        if (arr4[0] ==="+"){
          res =  parseInt(arr[0]) + parseInt(arr[1])
        }else if(arr4[0] ==="-"){
          res = parseInt(arr[0])-parseInt(arr[1]);
        }else if (arr4[0] ==="*"){
          res = parseInt(arr[0])*parseInt(arr[1]);
        }else if (arr4[0] ==="/"){
          res = parseInt(arr[0])/parseInt(arr[1]);
        }
        if(history.length>3){
          history.shift();
          this.setState({history: [...history,result + "=" + res]});
        }else { this.setState({history: [...history,result + "=" + res]});}
        this.setState({result: String(res)});
      }
    };

    return (
        <div>
          <h2>Calculator</h2>
          <div>
            <input type={"text"} value={result}/>
            <div>
              <Button variant="text" onClick={() => this.setState({result: result + "7"})}>7</Button>
              <Button variant="text" onClick={() => this.setState({result: result + "8"})}>8</Button>
              <Button variant="text" onClick={() => this.setState({result: result + "9"})}>9</Button>
              <Button variant="text" onClick={() => this.setState({result: result + "*"})}>*</Button>
            </div>
            <div>
              <Button variant="text" onClick={() => this.setState({result: result + "4"})}>4</Button>
              <Button variant="text" onClick={() => this.setState({result: result + "5"})}>5</Button>
              <Button variant="text" onClick={() => this.setState({result: result + "6"})}>6</Button>
              <Button variant="text" onClick={() => this.setState({result: result + "-"})}>-</Button>
            </div>
            <div>
              <Button variant="text" onClick={() => this.setState({result: result + "1"})}>1</Button>
              <Button variant="text" onClick={() => this.setState({result: result + "2"})}>2</Button>
              <Button variant="text" onClick={() => this.setState({result: result + "3"})}>3</Button>
              <Button variant="text" onClick={() => this.setState({result: result + "+"})}>+</Button>
            </div>
            <div>
              <Button variant="text" onClick={() => this.setState({result: result + "0"})}>0</Button>
              <Button variant="text" onClick={calc}>=</Button>
              <Button variant="text" onClick={clear}>C</Button>
              <Button variant="text" onClick={() => this.setState({result: result + "/"})}>&divide;</Button>
            </div>
            <div>
              <ComponentOne />
              <Button variant="text" onClick={()=>addItems(["dwa","fwa"])}


                  /* or
                  fetch('http://localhost:8080/math/expamples/4', {
                  method: 'GET',
                  withCredentials: true,
                  crossorigin: true,
                  mode: 'no-cors',
              })
                  .then((res) => res.json())
                  .then((data) => {
                  console.log(data);
              })
                  .catch((error) => {
                  console.log(error);
              })*/
              >Получить и решить примеры</Button>
            </div>
            <div>
              <ul>{listItems}</ul>
            </div>
          </div>
        </div>
    );
  }
}

export default App;