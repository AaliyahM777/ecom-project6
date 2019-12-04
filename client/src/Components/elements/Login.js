import React from 'react'
import httpClient from '../../httpClient'

class LogIn extends React.Component {
    state = {
        fields: { email: '', password: '' }
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
        httpClient.logIn(this.state.fields).then(user => {
            this.setState({ fields: { email: '', password: '' } })
            if (user) {
                this.props.onLoginSuccess(user)
                this.props.history.push('/')
            }
        })
    }

    render() {
        const { email, password } = this.state.fields
        return (
            <div>
                <div className='login'>
                    <div className='login-display'>
                        <div>

                            <h1 className="login-header">Log In</h1>
                            <form className="login-form" onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                                <label className="login-label">Email
                            <br />
                                    <input className="login-email" placeholder="Email" name="email" value={email} /></label>
                                <br />
                                <label className="login-label">Password
                            <br />
                                    <input className="login-password" type="password" placeholder="Password" name="password" value={password} /></label>
                                <br />
                                <button className="login-button">Log In</button>
                            </form>
                        </div>
                    </div>

                </div>
               
            </div>
        )
    }
}
export default LogIn