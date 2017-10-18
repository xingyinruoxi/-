import React from 'react';

class List extends React.Component {
    render(){
        return (
            <li className="completed">
                <div className="view">
                    <input 
                        className="toggle"
                        type="checkbox" 
                        checked=""
                    />
                    <label>
                        {this.props.txt}
                    </label>
                    <button className="destroy"></button>
                </div>
            </li>
        )
    }
}

export default List;
