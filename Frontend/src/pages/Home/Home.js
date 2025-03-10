import React from "react";
import AuthProtected from "../../components/AuthProtected/AuthProtected";
import Button from "../../components/Button/Button";
import RequestController from "../../controller/RequestController";

const Home = () => {
    const handleTestLoggedIn = () => {
        RequestController.TestProtected({})
            .then(response => {
                console.log(response);
            })
    }

    return (
        <>
            <h1 className="text-3xl text-green">Welcome to the Anything Website</h1>
            <img
                className="h-64 w-auto"
                src="/images/cat_logo.gif"
                alt="Logo"
            />
            <AuthProtected>
                <Button
                    onClick={handleTestLoggedIn}
                    label={'Test Logged in'}
                />
            </AuthProtected>
        </>
    );
}

export default Home;