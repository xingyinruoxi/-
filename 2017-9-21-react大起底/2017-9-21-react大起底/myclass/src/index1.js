import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

/*
  更改状态：
    this.setState({
      list:[1,2,3,4,5,6,7]
    })

  事件：
    已有的事件on后面首字母大写即可。

*/
class App extends React.Component {
  constructor(){
    super();
    //状态
    this.state = {
      list:[1,2,3,4,5,6],
      num:6
    }
  }

  addNum = () =>{

    let {list,num} = this.state;

    num ++;
    let arr = list.concat();

    arr.push(num);

    //console.log(arr);

    this.setState({
      num,
      list:arr
    })
  }

  render(){
    return (
      <div>
        <button
        onClick={this.addNum}
        >
          点击增加
        </button>
        <ul>
          {
            this.state.list.map((e,i)=><li key={i}>{e}</li>)
          }
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root'))


if(module.hot){
  module.hot.accept();
}




