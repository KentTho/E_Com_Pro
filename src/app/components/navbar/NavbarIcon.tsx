"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import {Bell, User, AlignJustify, LogOut} from "lucide-react";
import CartDropdown from "@/app/components/cart/CartDropDown";
import { useRouter } from "next/navigation";

const NavbarIcon = () => {
    const [mounted, setMounted] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMainMenuOpen, setIsMainMenuOpen] = useState(false); // 👈 Thêm state mới

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
        setIsProfileOpen(false); // Tắt menu phụ khi bật/tắt menu chính
    };

    const handleLogout = () => {
        console.log("Log out");
        router.push("/login");
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const baseClass =
        "rounded-full p-2 h-auto text-sm transition duration-300 ease-in-out transform hover:scale-105 hover:border-blue-500 hover:text-blue-600 hover:shadow-md";

    return (
        <div className="relative w-fit">
            {/* Nút chính */}
            <Button variant="outline" className={baseClass} onClick={handleMainMenuClick}>
                <AlignJustify className="w-5 h-5" />
            </Button>

            {/* Menu xổ ra khi click */}
            {isMainMenuOpen && (
                <div className="absolute left-full top-[60px] -translate-y-1/2 ml-8 flex flex-col items-start gap-2 transition-all duration-300 ease-in-out z-50 bg-white p-2 rounded-xl min-w-44">

                    {/* Thông báo */}
                    <Link href="/notifications">
                        <Button variant="outline" className={baseClass}>
                            <Bell className="w-5 h-5" />
                            <span>{"Notifications"}</span>
                        </Button>
                    </Link>

                    {/* User / Profile */}
                    <div className="relative w-full">
                        <Button
                            variant="outline"
                            className={baseClass + " w-3/4 justify-start"}
                            onClick={handleProfileClick}
                        >
                            <User className="w-5 h-5 mr-2" />
                            <span>{isLoggedIn ? "Account" : "Log In"}</span>
                        </Button>

                        {/* Menu phụ nếu đã đăng nhập */}
                        {isLoggedIn && isProfileOpen && (
                            <div className="absolute left-full top-0 ml-2 flex flex-col gap-2 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white border rounded-xl shadow-2xl z-50 min-w-[160px] p-2">

                                {/* Profile */}
                                <Link href="/profile" className="w-full">
                                    <Button
                                        variant="ghost"
                                        className="flex w-full items-center justify-start gap-2 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-200"
                                    >
                                        <User className="w-4 h-4" />
                                        <span className="text-sm font-medium">Profile</span>
                                    </Button>
                                </Link>

                                {/* Logout */}
                                <Button
                                    onClick={handleLogout}
                                    variant="ghost"
                                    className="flex w-full items-center justify-start gap-2 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-200"
                                >
                                    <LogOut className="w-4 h-4"></LogOut>
                                    <span className="text-sm font-medium">Log Out</span>
                                </Button>

                            </div>

                        )}
                    </div>

                    {/* Giỏ hàng */}
                    <CartDropdown />
                </div>
            )}
        </div>
    );
};

export default NavbarIcon;
