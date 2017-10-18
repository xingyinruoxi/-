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

  表单元素如果有默认的值，那么React会认为它是一个受限组件
    1.报错
    2.修改不了值。  

*/
class App extends React.Component {
  constructor(){
    super();
    //状态
    this.state = {
      list:[1,2,3,4,5,6],
      num:678,
      val:'我是受控组件'
    }
  }

  change = (ev) => {
    // console.log(ev.target.value)
    this.setState({
      val:ev.target.value
    })
  }
  render(){
    return (
      <div>
        <input 
          value={this.state.val}
          onChange={this.change}
        />
        <p>{this.state.val}</p>
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




