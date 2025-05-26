"use client"; // Chỉ định đây là một component phía client (Next.js 13+)

import Image from "next/image"; // Dùng Image của Next.js để tối ưu hình ảnh

const CartModel = () => {

    // Tạm thời gán cartItems là true (giỏ hàng có sản phẩm)
    const cartItems = true

    return (
        // Container của cart, hiển thị ở bên phải của phần tử cha
        <div className="absolute right-full top-0 mr-4 w-80 p-4 rounded-xl shadow-lg bg-white space-y-4 z-50">
            {/* Tiêu đề của hộp giỏ hàng */}
            <h2 className="text-lg font-semibold">Cart</h2>

            {/* Nếu giỏ hàng trống */}
            {!cartItems ? (
                // Thông báo khi không có sản phẩm
                <div className="">Cart is Empty</div>

            ) : (
                <>
                    {/*Nếu có sản phẩm trong giỏ hàng, bọc bằng Fragment (<> </>) do có nhiều phần tử sibling*/}
                    <div className="flex flex-col gap-8">
                        {/* Thông tin sản phẩm */}
                        <div className="flex items-start gap-4">
                            {/* Hộp chứa hình ảnh sản phẩm */}
                            <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                                <Image
                                    // Ảnh minh họa cho sản phẩm
                                    src='https://images.pexels.com/photos/12935090/pexels-photo-12935090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                    alt="Digital Incense"
                                    width={72}
                                    height={96}
                                    className="object-cover rounded-md"
                                />
                            </div>

                            {/* Thông tin chi tiết về sản phẩm */}
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        {/* Tên sản phẩm */}
                                        <h3 className="font-semibold">Digital Incense</h3>
                                        {/* Trạng thái hàng */}
                                        <p className="text-sm text-gray-500">available</p>
                                        {/* Số lượng sản phẩm */}
                                        <p className="text-sm mt-1">Qty 1</p>
                                    </div>

                                    {/* Giá và nút xóa */}
                                    <div className="text-right">
                                        {/* Giá tiền */}
                                        <p className="font-medium">$40.5</p>
                                        {/* Nút xóa sản phẩm */}
                                        <button className="text-sm text-blue-600 hover:underline mt-1">Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Phần tổng kết đơn hàng */}
                        <div className="border-t pt-4">
                    {/* Tổng giá trị đơn hàng */}
                    <div className="flex justify-between text-base font-semibold">
                        <span>Subtotal</span>
                        <span>$40.5</span>
                    </div>
                    {/* Ghi chú về thuế và phí ship */}
                    <p className="text-sm text-gray-500 mt-1">Shipping and taxes calculated at checkout.</p>
                    </div>
                    {/* Nút điều hướng: Xem giỏ hàng và Thanh toán */}
                    <div className="flex gap-2">
                        <button className="flex-1 py-2 px-3 rounded-md border">View cart</button>
                        <button className="flex-1 py-2 px-3 rounded-md bg-black text-white">Check out</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartModel;
