import React, { useEffect, useState } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const LoginForm = ({ errors, touched, values, handleSubmit, status, props}) => {


    // hook keeps track of login information 
    const [login, setLogin] = useState({});

    // update login if change has occured 
    useEffect(() => {
        if (status) {
            setLogin(user => ({...login, user}))
        }
    }, [status]); 

    return(
        <div className="login-container">
            <h1>Sign In</h1>

            <Form>
                {/* name */}
                <Field 
                    type="text" 
                    name="username" 
                    placeholder="Userame"
                    className="text-field"
                />
                {touched.name && errors.name && ( <p className="error">{errors.name}</p> )}


                {/* password */}
                <Field 
                    type="text" 
                    name="password" 
                    placeholder="Password" 
                    className="text-field"
                />
                {touched.name && errors.name && <p className="error">{errors.name}</p>}

                <button type="submit" className="button">Submit</button>
            </Form>
        </div>
    );
};

// using formik 
const Login = withFormik({
    
    // making sure each prop has a default value if given value is undefined 
    mapPropsToValues({ username, password }) {
      return {
        username: username || "",
        password: password || ""
      };
    },
    
    // use yup to enforce input requirements 
    validationSchema: Yup.object().shape({
        username: Yup
        .string()
        .required("Please Enter Your Name"),
        password: Yup
        .string()
        .required("Please Enter Your Password"),
    }),
    
    // update values and set status 
    handleSubmit(values, { resetForm, props, setStatus }) {
        // console.log("values, props", values, props)
        
        axios
            .post('https://artmuseumdraft.herokuapp.com/auth/login', values)
            .then(response => {
                // successful 
                console.log("post login api response object", response.data);
                
                localStorage.setItem('token', response.data.token);

                props.history.push('/Admin')
            }) 
    
            .catch(error => {
                // unsuccessful 
                console.log("The api is currently down.", error.response);
            });
        
        resetForm();
    }

})(LoginForm); // currying functions

export default Login;  