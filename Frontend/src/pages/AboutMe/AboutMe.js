import React from "react";
import { Link } from "react-router-dom";
// import LinkedInBadge from "./_components/LinkedInBadge/LinkedInBadge";

const AboutMe = () => {
    return (
        <>
            {/* <LinkedInBadge /> */}
            <Link
                to="https://www.linkedin.com/in/krittapop-manupornprapa/"
                target="_blank"
                rel="noopenner noreferrer"
            >
                My LinkedIn
            </Link>
        </>
    );
}

export default AboutMe;