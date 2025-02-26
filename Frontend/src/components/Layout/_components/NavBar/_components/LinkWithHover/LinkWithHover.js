import React from "react";
import { Link } from "react-router-dom";

const LinkWithHover = ({ path, label }) => {
    return (
        <>
            <Link
                to={path}
                className="text-gray-600 block w-full hover:text-black hover:font-bold hover:tracking-wide hover:border-b-2 hover:border-blue"
            >
                {label}
            </Link>
        </>
    )
}

export default LinkWithHover;