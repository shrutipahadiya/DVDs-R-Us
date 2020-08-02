import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { login } from '../redux/users/actions';

class Login extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         username: '',
    //         password: '',
    //     }
    //     this.onSubmit = this.onSubmit.bind(this);
    // }
    state = {
        username: '',
        password: '',
    }

    onSubmit = async (e) => {
        console.log('submitting!!!!');
        e.preventDefault()
        const { username, password } = this.state;
        const {
            login,
            loggedIn,
            props: {
                history,
            }
        } = this.props;
        
        await login(username, password, history);
    }

    render() {
        const { username, password } = this.state;
        console.log(typeof this.props.props.history);
        const { onSubmit } = this;
        return (
            <div className='box'>
                <form onSubmit={ onSubmit }>
                    <label>
                        Username:
                        <input 
                        value={ username } 
                        onChange={(e) => this.setState({username: e.target.value})} 
                        type='text'
                        />
                    </label>
                    <label>
                        Password:
                        <input
                        value={ password }
                        onChange={(e) => this.setState({password: e.target.value})}
                        type='password'
                        />
                    </label>
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    login: propTypes.func.isRequired,
    loggedIn: propTypes.bool.isRequired,
    props: propTypes.shape({
        history: propTypes.object.isRequired,
    })
}

const mapStateToProps = state => {
    return {
        loggedIn: state.userReducer.loggedIn
    }
}

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);