import React, {JSX} from 'react'
import Link from "next/link";
import {Warehouse} from "lucide-react";
import {cn} from "@/app/lib/utils";

type LogoProps = {
    variant?: "light" | "dark";
    size?: "sm" | "md" |
"lg"};

export default function Logo({
                                 variant = "light",
                                    size ="md"
}:
                             LogoProps):
    JSX.Element {

    const isDark = variant === "dark";9
    if (variant === "light") {
        return (
            <Link href={"/"} className="flex items-center space-x-2 group">
                <div className="bg-blue-500 rounded-full p-2 shadow-lg group-hover:shadow-xl transition duration-300">
                <span className="text-white font-bold text-xl">
                    <Warehouse className={cn("w-6 h-6 transition duration-300 transform group-hover:scale-110 group-hover:brightness-125 group-hover:drop-shadow-lg", size === "lg" && "w-8 h-8")} />
                </span>
                </div>
                <span
                  className={cn("font-bold text-xl transition duration-300 transform group-hover:scale-105 group-hover:brightness-110 group-hover:drop-shadow-lg", size === "lg" && "text-3xl")}
                >
                Printer{" "}
                    <span
                        className="
                        bg-gradient-to-r
                        from-blue-400 via-sky-300 to-cyan-400
                        bg-clip-text text-transparent
                        animate-pulse font-extrabold
                    "
                    >
                    Pro
                </span>
            </span>
            </Link>
        );
    }
    else {
        return (
            <Link href={"/"} className="flex items-center space-x-2 group">
                <div
                    className={`
                    ${isDark ? "bg-[#6366F1]" : "bg-blue-500"}
                    rounded-full p-2 shadow-lg transition duration-300
                    group-hover:shadow-xl
                `}
                >
                <span className="text-white font-bold text-xl">
                    <Warehouse className="transition duration-300 transform group-hover:scale-110 group-hover:brightness-125 group-hover:drop-shadow-lg" />
                </span>
                </div>
                <span
                    className="
                    font-bold text-xl transition duration-300 transform
                    group-hover:scale-105 group-hover:brightness-110 group-hover:drop-shadow-lg
                "
                >
                Product{" "}
                    <span
                        className={`
                            bg-gradient-to-r
                            from-[#6366F1] via-blue-600 to-[#6366F1]
                            bg-clip-text text-transparent
                            animate-pulse font-extrabold
                            transition duration-300
                            group-hover:brightness-110 group-hover:drop-shadow-lg
                        `}
                                        >
                        Pro
                    </span>

            </span>
            </Link>
        );
    }
}








