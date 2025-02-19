import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    const activeStyle = 'underline underline-offset'

    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink
                        to="/"
                    >Shopi</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/all"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                    >all</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/electronics"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                    >electronics</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/furniture"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                    >furniture</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/toys"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                    >toys</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/others"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                    >others</NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    angel.aven.c@gmail.com
                </li>
                <li>
                    <NavLink
                        to="/my-orders"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                    >My orders</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/my-account"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                    >My account</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/sign-in"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                    >Sign in</NavLink>
                </li>
                <li>
                    🛒 0
                </li>
            </ul>
        </nav>
    );
};

export {NavBar};