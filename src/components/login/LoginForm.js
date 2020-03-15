import React from "react";
import { useForm } from "react-hook-form"
import * as yup from "yup";



const schema = yup.object().shape({
    userName: yup
        .string()
        .required("First name is required"),
    passWord: yup
        .string()
        .length(4, "Password must be minimum 4 characters")
        .required("Password is required")
})


export function Login(){
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log("data", data);
    }
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Username</label>
            <input name="userName" placeholder="Username" ref={register({ required: true })} />
            {errors.userName && <p>{errors.userName.message}</p>}

            <label>Password</label>
            <input name="passWord" placeholder="Password" ref={register({ required: true })} />
            {errors.passWord && <p>{errors.passWord.message}</p>}
            <button>submit</button>
        </form>
        
    );
}

export default Login;