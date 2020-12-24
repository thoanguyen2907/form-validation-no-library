import React, { Component } from 'react';
import Swal from 'sweetalert2'

import './UserProfile.css';


export default class UserProfile extends Component {
    state = {
        values: {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            passWord: '',
            passWordConfirm: ''
        },
        errors: {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            passWord: '',
            passWordConfirm: ''
        }    
    }
    handleChangeValue = (event) => {
        let { name, value, type } = event.target;
        let newValues = {...this.state.values, [name]: value}; 
        let newErrors = {...this.state.errors};
        //kiểm tra validate form 
        if(value.trim() === ""){
            newErrors[name] = name + " is required !"
        }
        if(type === "email"){
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
           if(!re.test(String(value).toLowerCase())){
            newErrors[name] = name + " is invalid !"
           } else {
            newErrors[name] = ''
           }
        }
        if(name === "passWordConfirm"){
            if(value === newValues["passWord"]){
                newErrors[name] = ''
            } else {
                newErrors[name] = name + "  is invalid !"
            }
        } 
        this.setState({
            values : newValues,
            errors: newErrors

        });

    }

    handleSubmit = (e) => {
        e.preventDefault(); 
        //xét điều kiện khi submit
        let {values, errors} = this.state; 
        let valid = true; 

        for (let key in values) {
            if(values[key] === ""){
                valid = false; 
            }
        }
        for (let key in errors){
            if(errors[key] !== "") {
                valid = false; 
            }
        }
        if (!valid) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Dữ liệu chưa hợp lệ !!",        
              })
            return; 
        } 
        Swal.fire(
            'Your Profile',
            'Submitted Successfully!',
            'success'
          ) 
    }
    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: '#EEEEEE', display: 'flex', justifyContent: 'center' }}>
                <form style={{ fontSize: 'font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif', width: 600 }} className=" bg-white p-5 m-5" onSubmit = {this.handleSubmit}>
                    <h1 className="text-center mt-0 mb-5">User Profile</h1>
                    <div className="row">
                        <div className="col-6">
                            <div className="group">
                                <input value={this.state.values.firstName}
                                type="text" name="firstName" onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>firstName</label>
                                <span className = "text text-danger">{this.state.errors.firstName}</span>
                            </div>

                        </div>
                        <div className="col-6">
                            <div className="group">
                                <input value={this.state.values.lastName}
                                type="text" name="lastName" onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>lastName</label>
                                <span className = "text text-danger">{this.state.errors.lastName}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="group">
                                <input value={this.state.values.userName}
                                type="text" name="userName" onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>userName</label>
                                <span className = "text text-danger">{this.state.errors.userName}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="group">
                                <input value={this.state.values.email}
                                type="email" name="email" onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>email</label>
                                <span className = "text text-danger">{this.state.errors.email}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="group">
                                <input 
                                type="number" name="phone" onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Phone</label>
                               
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <div className="group">
                                <input value={this.state.values.passWord}
                                name="passWord" type="password" onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>password</label>
                                <span className = "text text-danger">{this.state.errors.passWord}</span>
                            </div>

                        </div>
                        <div className="col-6">
                            <div className="group">
                                <input value={this.state.values.passWordConfirm}
                                name="passWordConfirm" type="password" onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>passwordConfirm</label>
                                <span className = "text text-danger">{this.state.errors.passWordConfirm}</span>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <button className="btn text-white bg-dark w-100 col-12" style={{ fontSize: 25 }}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
