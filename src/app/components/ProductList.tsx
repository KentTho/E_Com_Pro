import Link from "next/link";
import Image from "next/image";


const ProductList = () => {
    return (
        <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                    <div className="relative w-full h-80">
                        <Image src="https://images.pexels.com/photos/193057/pexels-photo-193057.jpeg?auto=compress&cs=tinysrgb&w=600"
                               alt=""
                               fill
                               sizes="25vw"
                               className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                        />
                        <Image src="https://images.pexels.com/photos/1440504/pexels-photo-1440504.jpeg?auto=compress&cs=tinysrgb&w=600"
                               alt=""
                               fill
                               sizes="25vw"
                               className="absolute object-cover rounded-md z-10"
                        />
                    </div>
                    <div className="flex justify-between">
                            <span className="font-medium">Product Name</span>
                            <span className="font-semibold">$49</span>
                    </div>
                    <div className="text-sm text-gray-500">
                        My description
                    </div>
                    <button className="rounded-2xl ring-1 ring-[#F35C7A] text-[#F35C7A] w-max py-2 px-4 text-xs hover:bg-[#F35C7A] hover:text-white">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image src="https://images.pexels.com/photos/193057/pexels-photo-193057.jpeg?auto=compress&cs=tinysrgb&w=600"
                           alt=""
                           fill
                           sizes="25vw"
                           className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image src="https://images.pexels.com/photos/1440504/pexels-photo-1440504.jpeg?auto=compress&cs=tinysrgb&w=600"
                           alt=""
                           fill
                           sizes="25vw"
                           className="absolute object-cover rounded-md z-10"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">
                    My description
                </div>
                <button className="rounded-2xl ring-1 ring-[#F35C7A] text-[#F35C7A] w-max py-2 px-4 text-xs hover:bg-[#F35C7A] hover:text-white">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image src="https://images.pexels.com/photos/193057/pexels-photo-193057.jpeg?auto=compress&cs=tinysrgb&w=600"
                           alt=""
                           fill
                           sizes="25vw"
                           className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image src="https://images.pexels.com/photos/1440504/pexels-photo-1440504.jpeg?auto=compress&cs=tinysrgb&w=600"
                           alt=""
                           fill
                           sizes="25vw"
                           className="absolute object-cover rounded-md z-10"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">
                    My description
                </div>
                <button className="rounded-2xl ring-1 ring-[#F35C7A] text-[#F35C7A] w-max py-2 px-4 text-xs hover:bg-[#F35C7A] hover:text-white">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image src="https://images.pexels.com/photos/193057/pexels-photo-193057.jpeg?auto=compress&cs=tinysrgb&w=600"
                           alt=""
                           fill
                           sizes="25vw"
                           className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image src="https://images.pexels.com/photos/1440504/pexels-photo-1440504.jpeg?auto=compress&cs=tinysrgb&w=600"
                           alt=""
                           fill
                           sizes="25vw"
                           className="absolute object-cover rounded-md z-10"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">
                    My description
                </div>
                <button className="rounded-2xl ring-1 ring-[#F35C7A] text-[#F35C7A] w-max py-2 px-4 text-xs hover:bg-[#F35C7A] hover:text-white">Add to Cart</button>
            </Link>
        </div>
    )
}

export default ProductList