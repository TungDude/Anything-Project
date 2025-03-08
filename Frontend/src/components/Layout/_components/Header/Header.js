import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Menu, User } from 'lucide-react';
import { useAuthContext } from '../../../../contexts/AuthContext';
import { cn } from '../../../../lib/utils';

const Header = ({ toggleNavbar }) => {
    const { isAuthenticated } = useAuthContext();
    const navigate = useNavigate();
    const [key, setKey] = useState(0);

    const handleClickLogo = () => {
        setKey((prev) => prev + 1);
        navigate("/");
    }

    return (
        <>
            <div className="flex w-full items-center justify-between">
                {/* Menu aligned to the left */}
                <div
                    className="flex justify-center w-[36px] h-auto rounded-sm hover:bg-gray-600"
                >
                    <Menu 
                        color="white" 
                        onClick={toggleNavbar}
                        className="cursor-pointer"
                    />
                </div>

                {/* Logo on the center */}
                <div
                    className="flex space-x-2 items-center cursor-pointer"
                    onClick={handleClickLogo}
                >
                    <img
                        className="h-16 w-auto sm:block" // Keep ratio
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
                    >
                        Anything Project
                    </span>
                    <img
                        className="h-16 w-auto sm:block" // Keep ratio
                        src="/images/main_logo.png"
                        alt="Logo"
                    />
                </div>

                {/* Navigation aligned to the right */}
                <div
                    className="flex justify-center w-[36px] h-auto"
                >
                    <Link to="/login" className="text-white hover:text-gray-400 hover:underline">
                        {isAuthenticated ? <User color="white" /> : "Login"}
                    </Link>
                </div>

                {/* <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/login" className="text-white hover:text-gray-400 hover:underline">
                                Login
                            </Link>
                        </li>
                    </ul>
                </nav> */}
            </div>
        </>
    );
};

export default Header;