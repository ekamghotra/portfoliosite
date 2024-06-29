"use client";

import {
    FaHtml5, 
    FaCss3, 
    FaJs, 
    FaReact, 
    FaFigma, 
    FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import Link from "next/link";

// experience1 data
const experience1 = {
    title: "Data Analysis Intern @ Comcast",
    details: "San Francisco Bay Area ~ Summer 2024 ~ 10 Weeks",
    description: `Supporting Comcast Cable West Division Engineering Operations, specializing in data analysis & engineering to extract actionable insights and patterns, ultimately presenting my findings to D- and V-Suite leadership. Specifically, I: 
    - Work with Microsoft and Oracle SQL servers, using DBeaver for database connection needs
    - Streamlining certain data pulling, cleaning, and transformation tasks with Python, using libraries such as ‘pyodbc’ and ‘pandas’
    - Using advanced SQL querying techniques for data architecture needs before presenting insights`,
    info: [
        {
            fieldName: "",
            fieldValue: "Python",
        },
        {
            fieldName: "",
            fieldValue: "SQL",
        },
        {
            fieldName: "",
            fieldValue: "Tableau",
        },
        {
            fieldName: "",
            fieldValue: "DBeaver",
        },
    ]
};

// experience2 data
const experience2 = {
    title: "Bio-Data Analysis Intern @ Manus Bio",
    description: "Worked alongside the computational research team, aiding in developing data pipelines with Python for novel enzyme detection, as well as data modeling in R to visualize metabolic pathways and networks.",
    details: "Augusta, GA ~ 6 Weeks ~ Summer 2022",
    info: [
        {
            fieldName: "",
            fieldValue: "Python",
        },
        {
            fieldName: "",
            fieldValue: "R",
        },
    ]
};

// experience3 data
const experience3 = {
    title: "Project Manager @ CodeForGood Student Organization",
    description: "CodeForGood is a UW-Madison Student Organization that aims to provide software and data services to local businesses. As a Project Manager, I help lead a team of 5 in development for the projects at hand. Thus far, this includes developing data management systems and e-commerce software, largely using Python, C++, SQL, Javascript and several related libraries and frameworks.",
    details: "Madison, WI ~ Since January 2024",
    info: [
        {
            fieldName: "",
            fieldValue: "Python",
        },
        {
            fieldName: "",
            fieldValue: "C++",
        },
        {
            fieldName: "",
            fieldValue: "SQL",
        },
        {
            fieldName: "",
            fieldValue: "Javascript",
        },
    ]
};

// experience4 data
const experience4 = {
    title: "Coming Soon...",
    description: "Information coming soon...",
    details: "...",
    info: [
        {
            fieldName: "",
            fieldValue: "...",
        },
        {
            fieldName: "",
            fieldValue: "...",
        },
        {
            fieldName: "",
            fieldValue: "...",
        },
        {
            fieldName: "",
            fieldValue: "...",
        },
    ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Portfolio = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{
                opacity: 1, 
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}

            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs 
                    defaultValue="experience1" 
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <div className="flex flex-col justify-center items-center w-full max-w-[380px] mx-auto xl:mx-0 gap-6 h-[500px]">
                    <TabsList className="flex flex-col w-full space-y-10">
                        <TabsTrigger value="experience1">Data Analysis & Modeling @ Comcast</TabsTrigger>
                        <TabsTrigger value="experience2">Bio-Data Analysis @ Manus Bio</TabsTrigger>
                        <TabsTrigger value="experience3">Project Manager @ CodeForGood</TabsTrigger>
                        <TabsTrigger value="experience4">Coming Soon...</TabsTrigger>
                    </TabsList>
                    </div>

                    {/* content */}
                    <div className="min-h-[70] w-full">
                        {/* experience1 */}
                        <TabsContent value="experience1" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h2 className="text-4xl font-bold">{experience1.title}</h2>
                                <h3 className="text-3l font-bold underline"><i>{experience1.details}</i></h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience1.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">{experience1.info.map((info, index)=> {
                                            return <li key={index} className="bg-[#232329] h-[80px] py-6 px-10 rounded-xl flex flex-col justify-center items-center sm:items-start gap-1">
                                                <span className="text-accent">{info.fieldName}</span>
                                                <h3 className="textxl max-w-[260px] min-h-[30px] text-center lg:text-left"><span className="text-accent">• </span>{info.fieldValue}</h3>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>


                        {/* experience2 */}
                        <TabsContent value="experience2" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h2 className="text-4xl font-bold">{experience2.title}</h2>
                                <h3 className="text-3l font-bold underline"><i>{experience2.details}</i></h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience2.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">{experience2.info.map((info, index)=> {
                                            return <li key={index} className="bg-[#232329] h-[80px] py-6 px-10 rounded-xl flex flex-col justify-center items-center sm:items-start gap-1">
                                                <span className="text-accent">{info.fieldName}</span>
                                                <h3 className="textxl max-w-[260px] min-h-[30px] text-center lg:text-left"><span className="text-accent">• </span>{info.fieldValue}</h3>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>



                        {/* experience3 */}
                        <TabsContent value="experience3" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h2 className="text-4xl font-bold">{experience3.title}</h2>
                                <h3 className="text-3l font-bold underline"><i>{experience3.details}</i></h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience3.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">{experience3.info.map((info, index)=> {
                                            return <li key={index} className="bg-[#232329] h-[80px] py-6 px-10 rounded-xl flex flex-col justify-center items-center sm:items-start gap-1">
                                                <span className="text-accent">{info.fieldName}</span>
                                                <h3 className="textxl max-w-[260px] min-h-[30px] text-center lg:text-left"><span className="text-accent">• </span>{info.fieldValue}</h3>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>


                        {/* experience4 */}
                        <TabsContent value="experience4" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h2 className="text-4xl font-bold">{experience4.title}</h2>
                                <h3 className="text-3l font-bold underline"><i>{experience4.details}</i></h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience4.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">{experience4.info.map((info, index)=> {
                                            return <li key={index} className="bg-[#232329] h-[80px] py-6 px-10 rounded-xl flex flex-col justify-center items-center sm:items-start gap-1">
                                                <span className="text-accent">{info.fieldName}</span>
                                                <h3 className="textxl max-w-[260px] min-h-[30px] text-center lg:text-left"><span className="text-accent">• </span>{info.fieldValue}</h3>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Portfolio;
