import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import List from './component/List';
import Headers from './component/headers';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      val:'有内容',
      list:[
        {id:0,txt:'第一条数据',checked:false},
        {id:1,txt:'第二条数据',checked:false}
      ]
    }
  }
 
  changeVal = (newVal) => {
    this.setState({
      val:newVal
     
    });
  }

  changData = () => {

    let {val,list} = this.state;

    let data = {
      id: +new Date,
      checked:false,
      txt:val
    }
    let arr = list.concat();
    arr.unshift(data);
    this.setState({
      list:arr,
      val:''
    })
  }
  render(){

    let lis = [];

    //console.log( this.state.list )

    lis = this.state.list.map((e,i)=>{
      let data = {
        key:i,
        txt:e.txt,
        checked:e.checked
      }
      return <List {...data} />
    });


    return (
      <div>
        <section className="todoapp" id="app">
        <div>
          <Headers 
            val={this.state.val}
            changeVal = {this.changeVal}
            changData = {this.changData}
          /> 
          <section className="main">
                  <input 
                    className="toggle-all" 
                    type="checkbox" checked="" />
                  <ul className="todo-list">
                     {lis}
                  </ul>
              </section>
          </div>
        </section>
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root'))


if(module.hot){
  module.hot.accept();
}




