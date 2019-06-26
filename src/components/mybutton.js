import React from 'react';

class MyButton extends React.Component{
    render() {
        return(
            <button name="button" style={{height:53}} >{this.props.value}</button>
        )
        
    }
}

export default MyButton