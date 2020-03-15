import React from "react";
import Heading from "../Heading";
import LoginForm from "./LoginForm";

export function Login(){
    return(
        <>
            <Heading title="Login" />
            <LoginForm />
        </>
    );
}

export default Login;