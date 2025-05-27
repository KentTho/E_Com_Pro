"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Bell, User, AlignJustify, LogOut } from "lucide-react";
import CartDropdown from "@/app/components/cart/CartDropDown";
import { useRouter } from "next/navigation";

const NavbarIcon = () => {
    const [mounted, setMounted] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);

    const buttonRef = useRef<HTMLButtonElement>(null);         // 🔹 Ref cho nút chính
    const menuRef = useRef<HTMLDivElement>(null);              // 🔹 Ref cho menu xổ

    const router = useRouter();
    const isLoggedIn = true;

    const handleProfileClick = () => {
        if (!isLoggedIn) {
            router.push("/login");
        } else {
            setIsProfileOpen((prev) => !prev);
        }
    };

    const handleMainMenuClick = () => {
        setIsMainMenuOpen((prev) => !prev);
        setIsProfileOpen(false);
    };

    const handleLogout = () => {
        console.log("Log out");
        router.push("/login");
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    // 🔻 Xử lý khi click ra ngoài
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            if (
                isMainMenuOpen &&
                !buttonRef.current?.contains(target) &&
                !menuRef.current?.contains(target)
            ) {
                setIsMainMenuOpen(false);
                setIsProfileOpen(false); // Tắt luôn profile nếu đang mở
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMainMenuOpen]);

    if (!mounted) return null;

    const baseClass =
        "rounded-full p-2 h-auto text-sm transition duration-300 ease-in-out transform hover:scale-105 hover:border-blue-500 hover:text-blue-600 hover:shadow-md";

    return (
        <div className="relative w-fit">
            {/* Nút chính */}
            <Button
                ref={buttonRef}
                variant="outline"
                className={baseClass}
                onClick={handleMainMenuClick}
            >
                <AlignJustify className="w-5 h-5" />
            </Button>

            {/* Menu xổ ra */}
            {isMainMenuOpen && (
                <div
                    ref={menuRef}
                    className="absolute left-full top-[60px] -translate-y-1/2 ml-8 flex flex-col gap-2 transition-all duration-300 ease-in-out z-50 p-2 rounded-xl min-w-44 items-center bg-white/60 backdrop-blur-sm text-gray-800"
                >
                    {/* Notifications */}
                    <Link href="/notifications">
                        <Button variant="outline" className={baseClass}>
                            <Bell className="w-150 h-150" />
                            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Notifications
        </span>
                        </Button>
                    </Link>

                    {/* Account / Log In — đặt ở giữa */}
                    <div className="relative">
                        <Button
                            variant="outline"
                            className={baseClass}
                            onClick={handleProfileClick}
                        >
                            <User className="w-150 h-150 mr-2" />
                            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {isLoggedIn ? "Account" : "Log In"}
        </span>
                        </Button>

                        {isLoggedIn && isProfileOpen && (
                            <div className="absolute left-full top-0 ml-3 flex flex-col gap-2 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white border rounded-xl shadow-2xl z-50 min-w-[130px] p-2">
                                <Link href="/profile" className="w-full">
                                    <Button
                                        variant="ghost"
                                        className="flex w-full items-center justify-start gap-2 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-200"
                                    >
                                        <User className="w-4 h-4" />
                                        <span className="text-sm font-medium">Profile</span>
                                    </Button>
                                </Link>

                                <Button
                                    onClick={handleLogout}
                                    variant="ghost"
                                    className="flex w-full items-center justify-start gap-2 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-200"
                                >
                                    <LogOut className="w-4 h-4" />
                                    <span className="text-sm font-medium">Log Out</span>
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Cart — dời xuống cuối */}
                    <CartDropdown />
                </div>
            )}
        </div>
    );
};

export default NavbarIcon;
