import React from "react";
import { SocialIcon } from "react-social-icons";

const AboutMe = () => {
    return (
        <>
            <h1
                className="text-4xl font-semibold text-center mb-2"
            >
                Social Media
            </h1>
            <div
                className="flex items-center justify-center gap-2"
            >
                <SocialIcon
                    url="https://www.linkedin.com/in/krittapop-manupornprapa/"
                    target="_blank"
                    rel="noopenner noreferrer"
                />
                <SocialIcon
                    url="https://github.com/TungDude"
                    target="_blank"
                    rel="noopenner noreferrer"
                />
                <SocialIcon
                    url="https://discordapp.com/users/339702645172207617"
                    network="discord"
                    target="_blank"
                    rel="noopenner noreferrer"
                />
            </div>
        </>
    );
}

export default AboutMe;