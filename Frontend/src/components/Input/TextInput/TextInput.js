import React, { useState, useCallback } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "../../../lib/utils";

const TextInput = ({ label, ref, type = "text", className }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    
    const togglePasswordVisibility = useCallback(() => {
        setIsPasswordVisible((prev) => !prev);
    }, []);

    return (
        <div className="flex flex-col">
            {label && <span>{label}</span>}
            <div className="relative">
                <input
                    type={isPasswordVisible ? "text" : type}
                    ref={ref}
                    className={cn(
                        "border-b border-blue px-1 w-full", 
                        className
                    )}
                />
                {type === "password" && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 my-auto ml-1 text-sm text-lightgray"
                    >
                        {isPasswordVisible ? <EyeOff /> : <Eye />}
                    </button>
                )}
            </div>
        </div>
    );
};

export default TextInput;