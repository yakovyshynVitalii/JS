import React from 'react';
import Title from '../title/title';

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({name: e.target.value})
    }

    render(){
        return(
            <div>
                <input
                    type='text'
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <Title name={this.state.name}/>
            </div>
        )
    }
}

export default Input 