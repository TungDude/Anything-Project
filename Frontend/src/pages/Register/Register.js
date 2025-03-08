import React from "react";
import RequestController from "../../controller/RequestController";
import { useRef, useState } from "react";
import Button from "../../components/Button/Button";
import TextInput from "../../components/Input/TextInput/TextInput";

const Register = () => {
    const username = useRef(null);
    const password = useRef(null);
    const [isUsernameError, setIsUsernameError] = useState(false);
    const [isPasswordError, setIsPasswordError] = useState(false);

    const validateInput = () => {
        const errors = {
            username: !username.current.value,
            password: !password.current.value,
        };

        setIsUsernameError(errors.username);
        setIsPasswordError(errors.password);

        return errors.username || errors.password;
    };

    const handleClickCreateUser = () => {
        const error = validateInput();

        if (error) {
            return;
        }

        RequestController.CreateUser({
            username: username.current.value,
            password: password.current.value,
        })
            .then(response => {
                console.log(response);
            })
    };

    return (
        <>
            <h1
                className="text-4xl text-blue font-bold"
            >
                Create User
            </h1>
            <div
                className="flex flex-col"
            >
                <TextInput
                    label={"Username"}
                    ref={username}
                />
                {isUsernameError && (
                    <>
                        <span
                            className="text-xs text-red"
                        >
                            Please enter a username
                        </span>
                    </>
                )}
            </div>
            <div
                className="flex flex-col"
            >
                <TextInput
                    label={"Password"}
                    type={"password"}
                    ref={password}
                />
                {isPasswordError && (
                    <>
                        <span
                            className="text-xs text-red"
                        >
                            Please enter a password
                        </span>
                    </>
                )}
            </div>

            <Button
                label={"Register"}
                onClick={handleClickCreateUser}
                className={"my-2 w-[171px]"}
            />
        </>
    );
}

export default Register;