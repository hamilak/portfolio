import React, { useEffect, useState } from 'react'
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiNestjs } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandTailwind } from "react-icons/tb";
import { TbBrandPython } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Tooltip, Whisper } from 'rsuite';

const items = [
    {
        id: 1,
        content: "BACKEND DEVELOPER"
    },
    {
        id: 2,
        content: "FRONTEND DEVELOPER"
    },
    {
        id: 3,
        content: "UI DESIGNER"
    },
    {
        id: 4,
        content: "DATA SCIENCE ENTHUSIAST"
    }
];

const Home = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((state) => {
                if (state >= items.length - 1) return 0;
                return state + 1;
            });
        }, 1500);
        return () => clearInterval(id);
    }, []);
    return (
        <div>
            <div className='min-h-screen text-white'>
                <div className='flex flex-col md:flex-row justify-center items-center min-h-screen relative p-8 gap-8'>
                    <div className='w-52 h-52 border border-pink-300 flex justify-center items-center rounded-full'>
                        <div className='w-44 h-44 rounded-full border border-blue-900 absolute bg-transparent'></div>
                        <div className='w-48 h-48 rounded-full overflow-hidden'>
                            <img
                                src="/mypicture.png"
                                alt="My Picture"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <div className='font-head-font'>
                        <div className='text-white leading-10'>
                            <p>
                                Hello, my name is
                            </p>
                            <div>
                                <h1 className='font-head-font font-normal'>KALIMAH ARIGBABU</h1>
                            </div>
                            <p>I am a <span className='text-decorate'>fullstack developer</span> currently based in Nigeria.</p>
                        </div>
                        <div>
                            <ul className='flex gap-8 '>
                                <Whisper followCursor speaker={<Tooltip>Javascript</Tooltip>}>
                                    <li className="cursor-pointer">
                                    <img width="32" height="32" src="https://img.icons8.com/fluency/32/javascript.png" alt="javascript"/>
                                        </li>
                                </Whisper>
                                <Whisper followCursor speaker={<Tooltip>Nestjs</Tooltip>}>
                                    <li className="cursor-pointer">
                                    <img width="32" height="32" src="https://img.icons8.com/color/32/nestjs.png" alt="nestjs"/>
                                        </li>
                                </Whisper>
                                <Whisper followCursor speaker={<Tooltip>Nodejs</Tooltip>}>
                                    <li className="cursor-pointer">
                                    <img width="32" height="32" src="https://img.icons8.com/color/32/nodejs.png" alt="nodejs"/>
                                        </li>
                                </Whisper>
                                <Whisper followCursor speaker={<Tooltip>Reactjs</Tooltip>}>
                                    <li className="cursor-pointer">
                                    <img width="32" height="32" src="https://img.icons8.com/officel/32/react.png" alt="react"/>
                                        </li>
                                </Whisper>
                                <Whisper followCursor speaker={<Tooltip>Tailwindcss</Tooltip>}>
                                    <li className="cursor-pointer"><img width="32" height="32" src="https://img.icons8.com/color/32/tailwindcss.png" alt="tailwindcss"/></li>
                                </Whisper>
                                <Whisper followCursor speaker={<Tooltip>PostgreSQL</Tooltip>}>
                                    <li className="cursor-pointer">
                                    <img width="32" height="32" src="https://img.icons8.com/color/32/postgreesql.png" alt="postgreesql"/>
                                        </li>
                                </Whisper>
                                <Whisper followCursor speaker={<Tooltip>Next.js</Tooltip>}>
                                    <li className="cursor-pointer"><img width="32" height="32" src="https://img.icons8.com/fluency-systems-filled/32/FFFFFF/nextjs.png" alt="nextjs"/></li>
                                </Whisper>
                                <Whisper followCursor speaker={<Tooltip>Python</Tooltip>}>
                                    <li className="cursor-pointer">
                                    <img width="32" height="32" src="https://img.icons8.com/fluency/32/python.png" alt="python"/>
                                        </li>
                                </Whisper>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home