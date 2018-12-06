import React, { Component } from 'react';
import { createUser } from '../actions/auth';
import { connect } from 'react-redux';
import { Col, Button, Form, FormGroup, Input } from 'reactstrap';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: '',
            Password1: '',
            Password2: ''
        }
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.createUser(this.state);
        this.setState({
            Username: '',
            Password1: '',
            Password2: ''
        });
        this.props.history.push(`/adv/adventure`)
    }

    render() {
        return (
            <div>
                <h5>Join our adventure community:</h5>
                <Form>
                    <FormGroup>
                        <div>
                            <Input
                                type="text"
                                name="username"
                                placeholder="Username"
                                onChange={this.handleChange}
                                value={this.state.username}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div>
                            <Input
                                type="text"
                                placeholder="Password"
                                onChange={this.handleChange}
                                value={this.state.password}
                                name="password1"
                            />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div>
                            <Input
                                type="text"
                                placeholder="Re-Enter Your Password"
                                onChange={this.handleChange}
                                value={this.state.password}
                                name="password2"
                            />
                        </div>
                    </FormGroup>
                    <FormGroup >
                        <div>
                            <Button color="info" onClick={this.handleSubmit}>Register</Button>
                        </div>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}



export default connect(null, { createUser })(Register);