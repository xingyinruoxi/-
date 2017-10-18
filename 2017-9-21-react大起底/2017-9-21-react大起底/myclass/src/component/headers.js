import React from 'react';

class Headers extends React.Component {
    change = (ev) => {
        this.props.changeVal(ev.target.value);
    }
    keyup = (ev) => {
        if(ev.keyCode == 13){
            
            this.props.changData();
        }
       
    }
    render(){
        return (
            <header className="header" >
                <h1>todos</h1>
                <input 
                    className="new-todo" 
                    placeholder="请输入内容" 
                    value={this.props.val}
                    onChange = {this.change}
                    onKeyUp = {this.keyup}
                />
            </header>
        )
    }
}

export default Headers;

