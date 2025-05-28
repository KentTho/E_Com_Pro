import React from "react";
import {Sparkles} from "lucide-react";


interface SmallTitleProps {
    title: string;
}

const SmallTitle2: React.FC<SmallTitleProps> = ({ title }) => {
    return (
        <button className="flex items-center gap-2 px-4 py-1 rounded-full border border-[#f4dcdc] bg-white text-gray-700 text-sm font-medium shadow-inner">
            <Sparkles className="w-4 h-4 text-[#f26464]" />
            <span className="text-sm font-medium">{title} {/* Hiển thị title đúng cách */}</span>
        </button>
    );
}
export default SmallTitle2;
