import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Login extends Component {

    state = {
        username: '',
        password: '',
    }

    onSubmit = e => {
        e.preventDefault();
        console.log("submit");
    }

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    })

    render() {
        const {username, password} = this.state;
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <h2>Login</h2>
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
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                        <p>
                            Don't have an account? 
                            <Link to="/register"></Link>
                        </p>
                    </form>                    
                </div>
            </div>
        )
    }
}