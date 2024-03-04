// components/Footer.js

import Link from "next/link";

function Footer() {
    return (
        <footer className="bg-grey text-white py-8 w-full relative">
            <div className="container mx-auto bg-grey py-8">
                <div className="grid">
                    <div>
                        <ul className="mt-2 px-10 font-zen-dots"> 
                            <li className="mb-2">
                                <Link href="/">
                                    <span className="hover:text-gray-300 cursor-pointer text-4xl uppercase">Home</span>
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/">
                                    <span className="hover:text-gray-300 cursor-pointer text-4xl uppercase">About</span>
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/">
                                    <span className="hover:text-gray-300 cursor-pointer text-4xl uppercase">Resources</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <span className="hover:text-gray-300 cursor-pointer text-4xl uppercase">Contact Us</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="text-center text-xl font-bebas uppercase">&copy; 2024 BYTEM3! ALL RIGHTS RESERVED</p>
        </footer>
    );
};

export default Footer;
