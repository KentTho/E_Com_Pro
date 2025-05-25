"use client";

import Image from "next/image";

const CartModel = () => {
    return (
        <div className="absolute right-full top-0 mr-4 w-80 p-4 rounded-xl shadow-lg bg-white space-y-4 z-50">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>

            <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                        src="/digital-incense.png"
                        alt="Digital Incense"
                        width={64}
                        height={64}
                        className="object-cover"
                    />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-semibold">Digital Incense</h3>
                            <p className="text-sm text-gray-500">available</p>
                            <p className="text-sm mt-1">Qty 1</p>
                        </div>
                        <div className="text-right">
                            <p className="font-medium">$40.5</p>
                            <button className="text-sm text-blue-600 hover:underline mt-1">Remove</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t pt-4">
                <div className="flex justify-between text-base font-semibold">
                    <span>Subtotal</span>
                    <span>$40.5</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Shipping and taxes calculated at checkout.</p>
            </div>

            <div className="flex gap-2">
                <button className="flex-1 py-2 px-3 rounded-md border">View cart</button>
                <button className="flex-1 py-2 px-3 rounded-md bg-black text-white">Check out</button>
            </div>
        </div>
    );
};

export default CartModel;
