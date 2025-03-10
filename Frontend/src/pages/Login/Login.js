import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import TextInput from "../../components/Input/TextInput/TextInput";
import { useAuthContext } from "../../contexts/AuthContext";
// import RequestController from "../../controller/RequestController";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuthContext();
    const username = useRef(null);
    const password = useRef(null);

    const validateInput = () => {
        const errors = {
            username: !username.current.value,
            password: !password.current.value,
        };

        return errors.username || errors.password;
    };

    const handleClickLogin = async () => {
        const error = validateInput();

        if (error) {
            return;
        }

        try {
            await login({
                username: username.current.value,
                password: password.current.value,
            });
    
            // Navigate only if login was successful
            navigate("/");
        } catch (err) {
            username.current.value = "";
            password.current.value = "";
            console.error(err);  // Handle login failure
        }
    }

    return (
        <>
            <h1
                className="text-4xl text-blue font-bold"
            >
                Welcome back
            </h1>
            <div
                className="flex flex-col"
            >
                <TextInput
                    label={"Username"}
                    ref={username}
                />
                {/* {isUsernameError && (
                    <>
                        <span
                            className="text-xs text-red"
                        >
                            Please enter a username
                        </span>
                    </>
                )} */}
            </div>
            <div
                className="flex flex-col"
            >
                <TextInput
                    label={"Password"}
                    type={"password"}
                    ref={password}
                />
                {/* {isPasswordError && (
                    <>
                        <span
                            className="text-xs text-red"
                        >
                            Please enter a password
                        </span>
                    </>
                )} */}
            </div>

            <Button
                onClick={handleClickLogin}
                label={"Login"}
                className={"my-2 w-[171px]"}
            />
            <Link to="/register" className="text-black underline hover:text-gray-400">
                No account? Register
            </Link>
        </>
    )
}

export default Login;