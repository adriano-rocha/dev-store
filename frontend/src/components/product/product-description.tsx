"use client"

import { ProductComplete } from "@/types/product";
import Image from "next/image";
import { useState } from "react";

type Props = {
    text: string;
}

export const ProductDescription = ({ text }: Props) => {
    const [opened, setOpened] = useState(true);

    return (
        <div className="bg-white border border-gray-200 px-7 mt-20">
            <div className={`flex items-center justify-between py-7 ${opened ? 'border-b' : 'border-0'} border-b border-gray-200`}>
                <div className="text-2xl">Info Product</div>
                <div 
                    onClick={() => setOpened(!opened)}
                    className="cursor-pointer size-14 border-gray-200 flex justify-center items-center rounded-sm"
                >

                    <Image 
                        src={'/assets/ui/arrow-left-s-line.png'}
                        alt=""
                        width={24}
                        height={24}     
                        className={` transition-all ${opened ? 'rotate-0' : 'rotate-180'}`}              
                    />
                </div>
            </div>
            {opened &&
                <div className="text-gray-500 my-12">
                    {text}
                </div>
            }
        </div>
    )
}


