import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { IoCloseOutline } from "react-icons/io5";
import { navLinks } from "../constants";
import { useState } from "react";
import Button from "./Button";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="padding-x py-8 w-full fixed z-100 bg-white">
            <nav className="flex items-center justify-between max-container">
                <a href="/">
                    <img src={headerLogo} alt="logo" width={130} height={29} />
                </a>
                <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
                    {navLinks.map(({ href, label }) => (
                        <li key={label} className="group">
                            <a
                                href={href}
                                className="font-montserrat text-lg text-slate-gray leading-normal hover:text-coral-red duration-150"
                            >
                                {label}
                            </a>
                            <div className="mx-auto bg-coral-red w-0 h-[1px] transition-all duration-350 group-hover:w-full"></div>
                        </li>
                    ))}
                </ul>
                <div className="max-lg:hidden">
                    <Button label="Sign up" />
                </div>

                {/* mobile view */}
                <div className="lg:hidden block">
                    <img
                        src={hamburger}
                        alt="menu"
                        height={25}
                        width={25}
                        onClick={() => setMenuOpen(true)}
                    />
                </div>
                <div
                    className={`z-10 fixed top-0 right-0 h-full w-[60%] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
                        menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <div className="flex justify-end p-6">
                        <IoCloseOutline
                            size={40}
                            onClick={() => setMenuOpen(false)}
                            className="mt-1"
                        />
                    </div>

                    <ul className="flex flex-col items-start gap-6 p-6">
                        {navLinks.map(({ href, label }) => (
                            <li
                                key={label}
                                className="border-b w-full border-slate-200"
                            >
                                <a
                                    href={href}
                                    className="font-montserrat text-lg text-slate-gray leading-normal hover:text-coral-red duration-150"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-10 fixed right-10">
                        <Button label="Sign up" />
                    </div>
                </div>

                {/* Overlay */}
                <div
                    className={`fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden transition-opacity duration-300 
                    ${
                        menuOpen
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                    }`}
                    onClick={() => setMenuOpen(false)}
                />
            </nav>
        </header>
    );
};

export default NavBar;
