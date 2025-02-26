import React from "react";
import { cn } from "../../lib/utils";

const Button = ({ label, onClick, variant = "primary", className }) => {
    const baseClasses = "text-white py-1 px-4 rounded-md";
    const variantClasses = {
        primary: "bg-blue hover:bg-cyan",
        secondary: "bg-lightgray hover:bg-black",
        blackwhite: "bg-black"
    };

    return (
        <button
            onClick={onClick}
            className={cn(
                baseClasses,
                variantClasses[variant],
                className, 
            )}
            // className={`${baseClasses} ${variantClasses[variant]}`}
        >
            {label}
        </button>
    );
}

export default Button;