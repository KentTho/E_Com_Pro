"use client"

import React, {useRef} from "react"

import Image from "next/image"
import Link from "next/link"
import {ArrowRight, BarChart, Printer, ShoppingCart, TrendingUp} from "lucide-react"
import { cn } from "@/app/lib/utils"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent } from "@/app/components/ui/card"
import SectionHeader from "@/app/components/title_header/section-header";
import { useState, useEffect } from "react"



interface Feature {
    tab: string
    icon: React.ElementType
    title: string
    description: string
    href: string
    features: string[]
    images: string
}
const CategoryList= () => {
    const [activeTab, setActiveTab] = useState(0)

    const features: Feature[] = [
        {
            tab: "Ink Cartridges", // Mực in
            icon: Printer,
            title: "Ink Cartridge Products", // Sản phẩm mực in
            description: "Browse and purchase high-quality ink cartridges for your printers. (Duyệt và mua các loại mực in chất lượng cao cho máy in của bạn.)",
            href: "/list?cat=test",
            features: [
                "Wide range of ink cartridges for popular printer brands (Nhiều loại mực in cho các thương hiệu máy in phổ biến)",
                "Detailed product specifications and compatibility info (Thông số kỹ thuật và thông tin tương thích chi tiết)",
                "Competitive pricing and discount offers (Giá cả cạnh tranh và nhiều ưu đãi)",
                "Customer ratings and reviews for each cartridge (Đánh giá và nhận xét từ khách hàng về từng loại mực)",
            ],
            images: "/images/Category/pixels-pitiably.jpeg",
        },
        {
            tab: "Printers", // Máy in
            icon: Printer,
            title: "Printer Catalog", // Danh mục máy in
            description: "Discover printers that match your needs and pair perfectly with our ink products. (Khám phá các mẫu máy in phù hợp với nhu cầu của bạn và tương thích hoàn hảo với mực in của chúng tôi.)",
            href: "/list?cat=test",
            features: [
                "Various printer models for home and office (Nhiều mẫu máy in dành cho gia đình và văn phòng)",
                "Easy comparison between features and prices (So sánh tính năng và giá cả dễ dàng)",
                "Bundle deals with ink cartridge sets (Ưu đãi trọn bộ kèm theo mực in)",
                "Fast shipping and warranty information (Giao hàng nhanh và thông tin bảo hành rõ ràng)",
            ],
            images: "/images/Category/pixels-mikhail-file.jpeg",
        },
        {
            tab: "Color Ink", // Mực in màu
            icon: Printer,
            title: "Color Ink Cartridges", // Mực in màu
            description: "Shop color ink cartridges suitable for photo printing and professional use. (Mua mực in màu phù hợp cho in ảnh và nhu cầu chuyên nghiệp.)",
            href: "/list?cat=test",
            features: [
                "Cyan, Magenta, Yellow, and Black color options (Tùy chọn mực màu xanh, đỏ, vàng, đen)",
                "Compatible with top color printer models (Tương thích với các dòng máy in màu hàng đầu)",
                "High-quality prints with vivid colors (In chất lượng cao với màu sắc sống động)",
                "Multi-pack and XL cartridge availability (Có sẵn gói nhiều màu và mực dung lượng lớn)",
            ],
            images: "/images/Category/pixels-pok-rie.jpeg",
        },
        {
            tab: "Photocopy Ink", // Mực photocopy
            icon: Printer,
            title: "Toner for Photocopiers", // Mực cho máy photocopy
            description: "Buy reliable and cost-effective toner cartridges for your photocopiers. (Mua mực toner đáng tin cậy và tiết kiệm chi phí cho máy photocopy của bạn.)",
            href: "/list?cat=test",
            features: [
                "Compatible with popular photocopy machine brands (Tương thích với các thương hiệu máy photocopy phổ biến)",
                "High yield toner for bulk printing (Toner dung lượng lớn cho in số lượng nhiều)",
                "Competitive prices and fast delivery (Giá tốt và giao hàng nhanh)",
                "Easy installation and replacement instructions (Hướng dẫn lắp đặt và thay thế dễ dàng)",
            ],
            images: "/images/Category/pixels-mikhail-file-2.jpeg",
        },
    ]

    const scrollRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const interval = setInterval(() => {
            const el = scrollRef.current
            if (el) {
                // Scroll logic
                if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
                    el.scrollTo({ left: 0, behavior: "smooth" })
                } else {
                    el.scrollBy({ left: 200, behavior: "smooth" })
                }
            }

            // Tự động đổi tab
            setActiveTab(prev => (prev + 1) % features.length)

        }, 3000) // 3 giây

        return () => clearInterval(interval)
    }, [features.length])


    return (
        <section className="py-20 bg-white px-6 lg:px-16">
            <div className="container max-w-6xl mx-auto">
                <div className="py-6">
                    <SectionHeader
                        title="Features"
                        heading="Category"
                        desciption=""
                    />
                </div>
                <div className="w-full max-w-6xl mx-auto px-4 py-0">
                    {/* Tab Navigation */}
                    <div ref={scrollRef} className="slide-scroll scrollbar-hide mb-8 justify-center">
                        {features.map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <Button
                                    key={index}
                                    variant={activeTab === index ? "default" : "outline"}
                                    className={cn(
                                        "flex items-center gap-2 px-4 py-2 rounded-full transition-all",
                                        activeTab === index ? "bg-primary text-primary-foreground shadow-md" : "hover:bg-muted",
                                    )}
                                    onClick={() => setActiveTab(index)}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span>{feature.tab}</span>
                                </Button>
                            )
                        })}
                    </div>

                    {/* Content Area */}
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Left Side: Feature Details */}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tight">{features[activeTab].title}</h2>
                                <p className="text-muted-foreground text-lg">{features[activeTab].description}</p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">Key Features</h3>
                                <ul className="space-y-3">
                                    {features[activeTab].features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="text-primary"
                                                >
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href={features[activeTab].href}>
                                <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[4px] rounded-2xl w-fit">
                                    <Button className="bg-white text-center w-48 h-14 relative text-black text-xl font-semibold rounded-2xl overflow-hidden group">
                                        <div
                                            className="bg-[#22d3ee] rounded-xl h-12 w-1/4 grid place-items-center absolute left-0 top-1/2 -translate-y-1/2 group-hover:w-full z-20 duration-500"
                                        >
                                            <ArrowRight />
                                        </div>
                                        <p className="translate-x-4 relative z-10 group-hover:text-transparent duration-500">
                                            Learn More
                                        </p>
                                    </Button>
                                </div>
                            </Link>
                        </div>

                        {/* Right Side: Image */}
                        <Card className="overflow-hidden border shadow-lg">
                            <CardContent className="p-0">
                                <div className="relative aspect-video w-full overflow-hidden">
                                    <Image
                                        src={features[activeTab].images || "/placeholder.svg"}
                                        alt={features[activeTab].title}
                                        fill
                                        className="object-cover transition-all duration-300 hover:scale-105"
                                        priority
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategoryList