import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../../../../../lib/utils";

const LinkWithHover = ({ path, label, onClick, className = "" }) => {
    return (
        <>
            <Link
                to={path}
                className={cn(
                    "flex items-center justify-start",
                    "p-2 pr-12 block w-full rounded-md",
                    "text-white text-md font-medium", 
                    "hover:bg-gray-600", 
                    className,
                )}
                onClick={onClick}
            >
                {label}
            </Link>
        </>
    )
}

export default LinkWithHover;