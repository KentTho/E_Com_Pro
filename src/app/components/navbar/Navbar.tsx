import Logo from "@/app/components/logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Link from "next/link";
import {Button} from "@/app/components/ui/button";
import SearchBar from "@/app/components/navbar/SearchBar";
import {CircleUserRound} from "lucide-react";

const Navbar = () => {
    return (
        <header className="h-20 sticky top-4 z-50 w-full flex justify-center">
                <div className="flex h-12 items-center justify-between border rounded-full px-6 shadow-lg bg-white/60 backdrop-blur-sm w-full max-w-6xl text-gray-800">
                    {/* Logo */}
                    <div className="flex items-center font-semibold text-lg tracking-tight">
                        <Logo variant="light" size="md" />
                    </div>

                    {/* Desktop Navigation */}
                    <DesktopNav />

                    {/* Right Side: Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-2">

                        <SearchBar />

                        <Link href="/login">
                            <Button
                                variant="outline"
                                className="rounded-full p-2 h-auto text-sm transition duration-300 ease-in-out transform hover:scale-105 hover:border-blue-500 hover:text-blue-600 hover:shadow-md"
                            >
                                <CircleUserRound className="w-5 h-5" />
                            </Button>
                        </Link>
                        {/*<Link href="/contact-us">*/}
                        {/*    <Button*/}
                        {/*        className="rounded-full px-4 py-1 h-auto text-sm bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"*/}
                        {/*    >*/}
                        {/*        Contact*/}
                        {/*    </Button>*/}
                        {/*</Link>*/}
                    </div>

                    {/* Mobile Menu */}
                    <MobileNav />
                </div>
        </header>
    );
};

export default Navbar;
