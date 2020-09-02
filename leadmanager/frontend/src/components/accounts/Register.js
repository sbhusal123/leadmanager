import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Register extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    }

    onSubmit = e => {
        e.preventDefault();
        console.log("submit");
    }

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    })

    render() {
        const {username, email, password, password2} = this.state;
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <h2>Register</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                onChange={this.onChange}
                                value={username}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                onChange={this.onChange}
                                value={email}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <textarea
                                className="form-control"
                                type="text"
                                name="password"
                                onChange={this.onChange}
                                value={password}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password2</label>
                            <textarea
                                className="form-control"
                                type="text"
                                name="password2"
                                onChange={this.onChange}
                                value={password2}
                            />
                        </div>                        
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                        </div>
                        <p>
                            Already have an account? 
                            <Link to="/login"></Link>
                        </p>
                    </form>                    
                </div>
            </div>
        )
    }
}