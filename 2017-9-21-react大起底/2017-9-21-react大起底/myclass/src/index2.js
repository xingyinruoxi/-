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

    在表单元素中，只要是需要让内容发生变化的情况，都可以通过onChange来进行触发，监听

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

  //ev.target同样能捕捉到元素
  addNum = (ev) =>{
    //ev.target.innerHTML = '123214343';
    console.log(ev.target);
  }

  change = (ev) =>{
    console.log(ev.keyCode)
  }

  keyup = (ev) =>{
    //同样可以通过ev.keyCode去监听键值。
    //console.log(ev.keyCode);
  }

  render(){
    return (
      <div>
        <button
        onClick={this.addNum}
        >
          点击增加
        </button>
        <input 
         
          onKeyUp = {this.keyup}
        />
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




