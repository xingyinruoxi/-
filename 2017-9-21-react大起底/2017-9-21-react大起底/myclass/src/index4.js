import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PPA from './component/ppa';

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

  数据的传递：
      父组件传递给子组件，在子组件上添加属性
      子组件通过this.props进行接收。

      子组件传递给父组件，通过回调函数来进行。

*/
class App extends React.Component {
  constructor(){
    super();
    //状态
    this.state = {
      val:'我是父组件的内容!!!!'
    }
  }
  //父组件更改数据的函数。
  change = (newVal) => {
    this.setState({
      val:newVal
    })
  }
  render(){
    return (
      <div>
        <PPA 
          data={this.state.val}
          changeVal = {this.change}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root'))


if(module.hot){
  module.hot.accept();
}




