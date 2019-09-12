import React, { Component } from 'react'
import SignInForm from './Components/SignInForm';
import AuthLayout from '../../components/AuthLayout';
import { validate } from '../../utility/validations'

class Login extends Component {
    state={
        status: {},
        message: {},
        form: {
            email:'',
            password:''
        }
    }

    handleInput = e => {
        this.setState({
            ...this.state,
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    };
    
    handleSumbit = () => {
        const onSubmit = (res) => {
            this.setState({
                status: res.status,
                message: res.messages
            });
            if( res.validForm ){
                // make a requrest
            }
        };

        validate({
            onAction: (res) => onSubmit(res),
            form: this.state.form,
            options: { withPrefix: true }
        });
    };

    render(){
        return (
            <div className='row col-12 m-0 p-0'>
                <AuthLayout
                    path={'login'}
                    handleSumbit={ this.handleSumbit }
                    message={ this.state.message }
                    form={ 
                        <SignInForm 
                            handleInput={ this.handleInput }
                            status={ this.state.status }
                        /> 
                    }
                >
                </AuthLayout>
            </div>
        )
    }
};

export default Login;