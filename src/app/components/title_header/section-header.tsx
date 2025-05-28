import React from "react"
import SmallTitle2 from "./small-title-2"


export default function SectionHeader({title, heading, desciption}:{title: string, heading: string, desciption: string}){
    return (
        /* Section Header */
        <div className="flex flex-col items-center justify-center space-y-4 max-w-3xl mx-auto text-center mb-14">
            {title && <SmallTitle2 title={title}></SmallTitle2>}
            <h2 className="text-4xl font-bold text-gray-900">
                {heading}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
                {desciption}
            </p>

        </div>
    )
}