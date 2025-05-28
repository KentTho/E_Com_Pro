"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import Image from "next/image"

// Mảng slider chứa thông tin các slide về sản phẩm mực máy in
const slides = [
    {
        id: 1,
        title: "High-Yield Toner",
        description: "Experience longer-lasting prints with our high-yield black toner cartridges.",
        img: "https://images.pexels.com/photos/7652303/pexels-photo-7652303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        url: "/products/toner-black-high-yield",
        bg: "#f5fafd",
    },
    {
        id: 2,
        title: "Color Ink Cartridges",
        description: "Print vivid images and crisp text with our premium color ink cartridges.",
        img: "https://images.pexels.com/photos/3831210/pexels-photo-3831210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        url: "/products/color-ink",
        bg: "#fcf1ed",
    },
    {
        id: 3,
        title: "Eco-Friendly Toner",
        description: "Go green with our eco-friendly toner made from recycled materials.",
        img: "https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        url: "/products/eco-toner",
        bg: "#fdf6f0",
    },
    {
        id: 4,
        title: "Compact Ink Sets",
        description: "Perfect for home and small office use. Reliable, compact ink packs.",
        img: "https://images.pexels.com/photos/4792282/pexels-photo-4792282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        url: "/products/compact-ink",
        bg: "#e8f8f5",
    },
]

const Slider = () => {
    const [current, setCurrent] = useState(0)

    // Auto slide (optional)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="h-[calc(100vh-80px)] w-full overflow-hidden relative">
            <div
                className="flex h-full transition-transform duration-1000 ease-in-out"
                style={{ width: `${slides.length * 100}vw`, transform: `translateX(-${current * 100}vw)` }}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="w-screen h-full flex flex-col xl:flex-row"
                        style={{ backgroundColor: slide.bg }}
                    >
                        {/* Text content */}
                        <div className="flex flex-col justify-center items-start xl:w-1/2 p-10 xl:p-20 gap-6 text-left">
                            <h2 className="text-xl lg:text-2xl xl:text-3xl">{slide.description}</h2>
                            <h1 className="text-3xl lg:text-3xl xl:text-4xl font-semibold">{slide.title}</h1>
                            <Link href={slide.url}>
                                <Button className="bg-black text-white px-6 py-3 rounded-md hover:opacity-90">Shop Now</Button>
                            </Link>
                        </div>

                        {/* Image */}
                        <div className="relative xl:w-1/2 w-full h-1/2 xl:h-full">
                            <Image
                                src={slide.img}
                                alt={slide.title}
                                fill
                                className="object-cover"
                                sizes="100%"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-4">
                {
                    slides.map((slide, index) => (
                        <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ring-1 from-blue-500 via-purple-500 to-pink-500 cursor-pointer flex items-center justify-center ${
                            current === index ? "scale-150" : ""
                        }`}
                             key={slide.id}
                             onClick={() => setCurrent(index)}
                        >
                            {current === index && (<div className="w-[4px] h-[4px] md:w-[6px] md:h-[6px] bg-gray-600 rounded-full"></div>)}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Slider
