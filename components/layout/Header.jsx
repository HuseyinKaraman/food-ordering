import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { GiCancel, GiHamburgerMenu } from "react-icons/gi";
import Logo from "../ui/Logo";
import SearchComponent from "../ui/SearchComponent";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = ({ isMenuModal, setIsMenuModal }) => {
    const cart = useSelector((state) => state.cart);    
    const [isSearchModal, setIsSearchModal] = useState(false);
    const router = useRouter();

    return (
        <div
            className={`h-[5.5rem] text-white relative z-20 ${
                router.asPath === "/" ? "bg-transparent" : "bg-secondray !fixed w-full top-0"
            }`}
        >
            <div className="sm:container px-2 flex items-center !justify-between mx-auto h-full">
                <div className="mr-2">
                    <Logo />
                </div>
                {/** //! Seo için nav yapıldı  */}
                <nav
                    className={`sm:static absolute top-0 left-0 z-40 sm:h-auto sm:w-auto sm:bg-transparent h-screen w-screen bg-slate-500 text-white sm:flex hidden ${
                        isMenuModal && "!grid place-content-center"
                    }`}
                >
                    <div className="flex gap-x-2 sm:flex-row flex-col items-center">
                        <Link
                            href="/"
                            className={`px-[5px] py-[14px] hover:text-primary cursor-pointer ${
                                router.asPath === "/" && "text-primary"
                            }`}
                            onClick={() => setIsMenuModal(false)}
                        >
                            HOME
                        </Link>
                        <Link
                            href="/menu"
                            className={`px-[5px] py-[14px] hover:text-primary cursor-pointer ${
                                router.asPath === "/menu" && "text-primary"
                            }`}
                            onClick={() => setIsMenuModal(false)}
                        >
                            MENU
                        </Link>
                        <Link
                            href="/about"
                            className={`px-[5px] py-[14px] hover:text-primary cursor-pointer ${
                                router.asPath === "/about" && "text-primary"
                            }`}
                            onClick={() => setIsMenuModal(false)}
                        >
                            ABOUT
                        </Link>
                        <Link
                            href="/reservation"
                            className={`px-[5px] py-[14px] hover:text-primary cursor-pointer ${
                                router.asPath === "/reservation" && "text-primary"
                            }`}
                            onClick={() => setIsMenuModal(false)}
                        >
                            BOOK TABLE
                        </Link>
                    </div>
                </nav>
                <div className="flex gap-x-3 items-center">
                    <Link
                        href="/auth/login"
                        className={`px-[5px] py-[14px] hover:text-primary cursor-pointer transition-all ${
                            (router.asPath === "/auth/login" || router.asPath.includes("/profile")) && "text-primary"
                        }`}
                    >
                        <FaUserAlt />
                    </Link>
                    <Link
                        href="/cart"
                        className={`relative px-[5px] py-[14px] hover:text-primary cursor-pointer transition-all ${
                            router.asPath === "/cart" && "text-primary"
                        }`}
                    >
                        <FaShoppingCart />
                        <span className="absolute -right-[8px] top-[3px] px-[5px] text-center text-[10px] font-semibold text-black rounded-full bg-primary">
                            {cart.quantity > 0 ? cart.quantity : null}
                        </span>
                    </Link>
                    <button
                        className="px-[5px] py-[14px] hover:text-primary cursor-pointer transition-all"
                        onClick={() => setIsSearchModal(true)}
                    >
                        <FaSearch />
                    </button>
                    <Link href="/" className="sm:inline-block hidden">
                        <button className="btn-primary">Order Online</button>
                    </Link>
                    <button className="sm:hidden text-xl inline-block" onClick={() => setIsMenuModal(!isMenuModal)}>
                        <GiHamburgerMenu />
                    </button>
                </div>
                {isMenuModal && (
                    <GiCancel
                        size={25}
                        className="sm:hidden absolute right-4 top-4  cursor-pointer hover:opacity-60 z-50"
                        onClick={() => {
                            setIsMenuModal(false);
                        }}
                    />
                )}
            </div>
            {isSearchModal && <SearchComponent setIsSearchModal={setIsSearchModal} />}
        </div>
    );
};

export default Header;
