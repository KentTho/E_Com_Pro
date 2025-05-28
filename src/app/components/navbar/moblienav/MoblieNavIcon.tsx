"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Bell, User, AlignJustify, LogOut, X } from "lucide-react";
import CartDropdown from "@/app/components/cart/CartDropDown";
import { useRouter } from "next/navigation";

const NavbarIconMobile = () => {
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const router = useRouter();
    const menuRef = useRef<HTMLDivElement>(null);
    const isLoggedIn = true;

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
        setIsProfileOpen(false);
    };

    const handleProfileClick = () => {
        if (!isLoggedIn) {
            router.push("/login");
        } else {
            setIsProfileOpen((prev) => !prev);
        }
    };

    const handleLogout = () => {
        console.log("Log out");
        router.push("/login");
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
                setIsProfileOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    // Tắt scroll khi menu mở
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!mounted) return null;

    return (
        <div className="relative z-50">
            <Button
                onClick={toggleMenu}
                variant="ghost"
                className="p-2 rounded-full"
            >
                {isOpen ? <X className="w-6 h-6" /> : <AlignJustify className="w-6 h-6" />}
            </Button>

            {isOpen && (
                <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-6 text-lg px-6" ref={menuRef}>
                    <Link href="/notifications" onClick={toggleMenu}>
                        <div className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                            <Bell className="w-5 h-5" />
                            <span>Notifications</span>
                        </div>
                    </Link>

                    <div className="w-full flex flex-col items-center">
                        <button
                            onClick={handleProfileClick}
                            className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
                        >
                            <User className="w-5 h-5" />
                            <span>{isLoggedIn ? "Account" : "Log In"}</span>
                        </button>

                        {isLoggedIn && isProfileOpen && (
                            <div className="mt-2 flex flex-col gap-2 text-sm text-gray-800 items-center">
                                <Link href="/profile" onClick={toggleMenu}>
                                    <span className="hover:text-blue-600">Profile</span>
                                </Link>
                                <button onClick={handleLogout} className="hover:text-red-600">
                                    Log Out
                                </button>
                            </div>
                        )}
                    </div>

                    <CartDropdown />
                </div>
            )}
        </div>
    );
};

export default NavbarIconMobile;
