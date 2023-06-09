import  { useState,useEffect } from "react";
import {signup,isAuth} from '../../actions/auth';
import Router from 'next/router';
const SignupComponent = ()=>{
    useEffect(()=>{
        isAuth() && Router.push('/')
    },[])

    const [values,setValues]=useState({
        name:'',
        email:'',
        password:'',
        error:'',
        loading: false,
        message:'',
        showForm: true
    });

    const {name,email,password,error,loading,message,showForm} = values

    


    
    const handleSubmit =(e)=>{
        e.preventDefault()
        setValues({...values,loading:true,error:false})
        const user = {name,email,password}

        signup(user)
        .then(data => {
            console.log(data)
            if(data.error){
                setValues({...values,error: data.error,loading:false})
            }else{
                setValues({
                    ...values,
                    name:'',
                    email:'',
                    password:'',
                    error:'',
                    loading: false,
                    message: data.message,
                    showForm: false
                })
            }
        })
        console.table({name,email,password,error,loading,message,showForm});
    }

    const handleChange = name => (e)=>{
        setValues({...values,error:false,[name]:e.target.value})
        console.log(e.target.value)
    };

    const showLoading  = ()=>(loading? <div className="alert alert-info">Loading...</div>:'');
    
    const showError  = ()=>(error? <div className="alert alert-danger">{error}</div>:'');
    
    const showMessage  = ()=>(message? <div className="alert alert-info">{message}</div>:'');
    
    const signupForm =()=>{
        
            return(
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input value={name} onChange={handleChange('name')}type="text" className="form-control" placeholder="name" />
                </div>
                <div className="form-group">
                    <input value={email} onChange={handleChange('email')}type="email" className="form-control" placeholder="email@info.com" />
                </div>
                <div className="form-group">
                    <input value={password} onChange={handleChange('password')}type="password" className="form-control" placeholder="Password" />
                </div>
                <div>
                    <button className="btn btn-primary"> Signup</button>
                </div>
            </form>
        )
        
    }
    return (
        <React.Fragment>
            {showError()}
            {showLoading()}
            {showMessage()}
            {showForm && signupForm()}
        </React.Fragment>
    )
};

export default SignupComponent;