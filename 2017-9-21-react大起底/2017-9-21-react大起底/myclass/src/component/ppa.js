import React from 'react';

class PPA extends React.Component {
    click = () => {
        //不能直接把父组件传递的数据在子组件中修改。
        // this.props.data = '呵呵,我把你给改了';

        //console.log(this.props.changeVal);

        this.props.changeVal('呵呵,我真的把你给改了');
    }
    render(){
        return (
            <p onClick={this.click}>
                {this.props.data}
            </p>
        )
    }
}

export default PPA;

