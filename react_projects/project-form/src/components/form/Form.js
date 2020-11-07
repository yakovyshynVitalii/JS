import React, { createElement } from 'react';
import "./Form.css"


class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password : "",
            not_robot : false
        };

        this.handelInputChange = this.handelInputChange.bind(this);
        this.handelSignIn = this.handelSignIn.bind(this);
    }

    handelInputChange (event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState(
            {   
                [name]: value
            }
        )
    }
    
    handelSignIn (event){
        if (this.state.email == '' ||  this.state.password == '' || this.state.not_robot == false) {
            alert (" Не коректно введенні дані!")
        }else{
            event.preventDefault();
            alert("Ви успішно зайшли!")
            console.log(this.state)
        }       
    }

    render(){
     
        return(
            <div className = "form-container">
                <form className = "form" >
                    <h2 className = "form_title">SIGN IN TO YOUR ACCOUNT</h2>
                    <input
                        className = "form_input"
                        type="email"
                        name = "email"
                        value= {this.state.email}
                        onChange={this.handelInputChange}
                        placeholder= "email"
                    />
                    <input
                        className = "form_input"
                        type ="text"
                        name = "password"
                        value= {this.state.password}
                        onChange={this.handelInputChange}
                        placeholder= "password"
                    />
                    <label className = "form_checkbox">
                        <input
                            type = "checkbox"
                            name = "not_robot"
                            value= {this.state.not_robot}
                            onChange={this.handelInputChange}
                        />
                        Keep me signed in
                    </label>
                   
                    <button className = "form_button"  onClick = {this.handelSignIn}>SIGN IN</button>
                    <a className = "form_link"  href="#" >Forgot your password?</a>
                </form>
            </div>

        )
    }
}





export default Form;