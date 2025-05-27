// components/CartDropdown.tsx
"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import CartModel from "@/app/components/cart/CartModel";
import { useEffect, useRef, useState } from "react";

const CartDropdown = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const cartRef = useRef<HTMLDivElement>(null);

    // Đóng giỏ hàng khi click ra ngoài
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                cartRef.current &&
                !cartRef.current.contains(event.target as Node)
            ) {
                setIsCartOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const cartQuantity = 3; // hoặc lấy từ state/context bên ngoài


    return (
        <div ref={cartRef} className="relative">
            {/* Nút giỏ hàng */}
            <Button
                variant="outline"
                className="rounded-full p-2 h-auto text-sm transition duration-300 ease-in-out transform hover:scale-105 hover:border-blue-500 hover:text-blue-600 hover:shadow-md"
                onClick={() => setIsCartOpen((prev) => !prev)}
            >
                <ShoppingCart className="w-150 h-150" />
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">{"Cart"}</span>
                <span className="ml-1 bg-[#F35C7A] text-white text-xs rounded-full px-2">
                  {cartQuantity}
                </span>
            </Button>

            {/* Giỏ hàng hiển thị */}
            {isCartOpen && (
                <div className="absolute right-0 mt-2 z-50">
                    <CartModel />
                </div>
            )}
        </div>
    );
};

export default CartDropdown;
