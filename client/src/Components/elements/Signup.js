import React from 'react';
import httpClient from '../../httpClient';
import Footer from './Footer';
import { Link } from 'react-router-dom';
// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUp extends React.Component {
    state = {
        fields: { name: '', email: '', password: '' }
    }
    onInputChange(evt) {
        this.setState({
            fields: {
                ...this.state.fields,
                [evt.target.name]: evt.target.value
            }
        })
    }
    onFormSubmit(evt) {
        evt.preventDefault()
        httpClient.signUp(this.state.fields).then(user => {
            this.setState({ fields: { name: '', email: '', password: '' } })
            if (user) {
                this.props.onSignUpSuccess(user)
                this.props.history.push('/')
            }
        })
    }
    
    
    render() {
        const { name, email, password } = this.state.fields
        return (
            <div>
            <div className='signup'>
                <h1 className="signup-header">Sign Up</h1>
                <form className="signup-form" onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                    <label className="signup-label">Name
                    <br/>
                    <input 
                     className="signup-username"
                    type="text" 
                    placeholder="Name" 
                    id="Name" 
                    name="name" 
                    value={name} 
                    required
                    />
                    </label>
                    <br/>
                    <label className="signup-label">Email
                    <br/>
                    <input
                     className="signup-email"
                     type="text" 
                     placeholder="Email" 
                     id="Email" name="email" 
                     value={email} 
                     required
                     />
                     </label>
                     <br/>
                     <label className="signup-label">Password
                     <br/>
                    <input 
                    classname="signup-password"
                    type="password" 
                    placeholder="Password" 
                    id="Password" 
                    name="password"
                    required 
                    value={password}
                     />
                     </label>
                     <br/>
                    <button className="signup-button">Sign Up</button>
                  
                </form>
               
            </div>
            <Footer/>
            </div>
        )
    }
}
export default SignUp