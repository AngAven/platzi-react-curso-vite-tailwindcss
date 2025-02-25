import {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {ShoppingCartContext} from "../Context/index.jsx";
import {ShoppingBagIcon} from "@heroicons/react/24/outline/index.js";


const NavBar = () => {
    const activeStyle = 'underline underline-offset'
    const {
        openCheckoutSideMenu,
        cartProducts,
        setSearchByCategory,
    } = useContext(ShoppingCartContext)

    const handleClick = (e) => {
        const category = e.target.href.split('/').slice(-1).toString() ?? ''

        if (category === 'all') {
            setSearchByCategory('')
        } else {
            setSearchByCategory(category)
        }
    }

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
                        onClick={(e) => handleClick(e)}
                        to="/all"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                    >all</NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={(e) => handleClick(e)}
                        to="/electronics"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                    >electronics</NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={(e) => handleClick(e)}
                        to="/shoes"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                    >shoes</NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={(e) => handleClick(e)}
                        to="/clothes"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                    >clothes</NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={(e) => handleClick(e)}
                        to="/miscellaneous"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                    >miscellaneous</NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={(e) => handleClick(e)}
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
                <li
                    onClick={() => openCheckoutSideMenu()}
                    className={'flex items-center gap-3 cursor-pointer'}
                >
                    <ShoppingBagIcon className="size-6"/>
                    <div className={`${
                        cartProducts.length > 0
                            ? 'w-5 h-5 rounded-full bg-indigo-400 flex justify-center items-center text-white'
                            : 'text-black/60'}`
                    }>
                        <p>{cartProducts.length}</p>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export {NavBar};