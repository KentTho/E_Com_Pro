// components/CartDropdown.tsx
"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/app/components/ui/button";

const CartDropdown = () => {
    const [open, setOpen] = useState(false);



    return (
        <div className="relative">
            {/* Nút giỏ hàng */}
            <Button
                variant="outline"
                className="rounded-full p-2 h-auto text-sm transition duration-300 ease-in-out transform hover:scale-105 hover:border-blue-500 hover:text-blue-600 hover:shadow-md"
                onClick={() => setOpen(!open)}
            >
                <ShoppingCart className="w-5 h-5" />
                <span>{"Cart"}</span>
            </Button>
            {/* Panel xổ xuống */}
            {open && (
                <div className="absolute top-1 right-[90px] mt-2 w-56 bg-white shadow-lg rounded-lg border p-4 z-50">
                    <p className="text-sm mb-2">Bạn có sản phẩm trong giỏ hàng.</p>
                    <Link href="/cart">
                        <Button variant="default" className="w-full">
                            Đi đến Giỏ hàng
                        </Button>
                    </Link>
                </div>
            )}
            {/*{open && (*/}
            {/*    <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg border p-4 z-50">*/}
            {/*        <p className="text-sm mb-3 font-semibold">Sản phẩm trong giỏ hàng:</p>*/}

            {/*        <div className="space-y-2 max-h-60 overflow-y-auto">*/}
            {/*            {cartItems.length > 0 ? (*/}
            {/*                cartItems.map((item) => (*/}
            {/*                    <div*/}
            {/*                        key={item.id}*/}
            {/*                        className="flex justify-between items-start border-b pb-2"*/}
            {/*                    >*/}
            {/*                        <div>*/}
            {/*                            <p className="font-medium">{item.name}</p>*/}
            {/*                            <p className="text-sm text-gray-500">*/}
            {/*                                SL: {item.quantity}*/}
            {/*                            </p>*/}
            {/*                        </div>*/}
            {/*                        <p className="text-sm font-semibold text-right text-blue-600">*/}
            {/*                            {item.price.toLocaleString()}đ*/}
            {/*                        </p>*/}
            {/*                    </div>*/}
            {/*                ))*/}
            {/*            ) : (*/}
            {/*                <p className="text-sm text-gray-400">Giỏ hàng đang trống.</p>*/}
            {/*            )}*/}
            {/*        </div>*/}

            {/*        <Link href="/cart">*/}
            {/*            <Button variant="default" className="w-full mt-4">*/}
            {/*                Đi đến Giỏ hàng*/}
            {/*            </Button>*/}
            {/*        </Link>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
};

export default CartDropdown;
