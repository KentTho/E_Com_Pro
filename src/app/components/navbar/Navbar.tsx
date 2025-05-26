import Logo from "@/app/components/logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import SearchBar from "@/app/components/navbar/SearchBar";
import NavbarIcon from "@/app/components/navbar/NavbarIcon";

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

                        <NavbarIcon />

                    </div>

                    {/* Mobile Menu */}
                    <MobileNav />
                </div>
        </header>
    );
};

export default Navbar;
