import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { cn } from '../../../../lib/utils';

const Header = () => {
    const navigate = useNavigate();
    const [key, setKey] = useState(0);

    const handleClickLogo = () => {
        setKey((prev) => prev + 1);
        navigate("/");
    }

    return (
        <>
            <div className="flex w-full items-center justify-between">
                {/* Image and Text aligned to the left */}
                <div
                    className="flex space-x-4 items-center cursor-pointer"
                    onClick={handleClickLogo}
                >
                    <img
                        className="h-16 w-auto" // Keep ratio
                        src="/images/main_logo.png"
                        alt="Logo"
                    />
                    <span
                        key={key}
                        className={cn(
                            "font-semibold tracking-[2px] border-r-2 overflow-hidden whitespace-nowrap hover:text-gray-400",
                            "animate-typing",
                            "text-lg", 
                        )}
                        // className="font-semibold text-xl tracking-[2px] hover:text-gray-400"
                    >
                        Anything Project
                    </span>
                    <img
                        className="h-16 w-auto hidden md:block" // Keep ratio
                        src="/images/main_logo.png"
                        alt="Logo"
                    />
                </div>

                {/* Navigation aligned to the right */}
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/login" className="text-white hover:text-gray-400 hover:underline">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/register" className="text-white hover:text-gray-400 hover:underline">
                                Register
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Header;