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
    title: "Data Analysis & Engineering Intern @ Comcast Corp.",
    details: "San Francisco Bay Area ~ Summer 2024 ~ 10 Weeks",
    description: "• Working in Comcast's West Division - Advanced Engineering team, providing a wide variety of data science support. Specifically, I specialize in delivering actionable insights from data collected by field-deployed telecommunications tech across West Division, including 13 states and ~7 million active customers.",
    moreinfo: "• Day-to-day, I work with Microsoft and Oracle SQL servers, leveraging DBeaver for database management needs. Furthermore, I utilize Python and advanced SQL querying for data analysis and engineering needs, and subsequently create visualizations of key data with SQL & Tableau.",
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
            fieldValue: "Microsoft/Oracle Servers",
        },
        {
            fieldName: "",
            fieldValue: "Tableau",
        },
    ]
};

// experience2 data
const experience2 = {
    title: "Bio-Data Analysis Intern @ Manus Bio Inc.",
    details: "Augusta, GA ~ 6 Weeks ~ Summer 2022",
    description: "• Worked alongside the computational research team, aiding in developing data pipelines with Python and data modeling in R, all with the goal to aid novel enzyme detection via analysis and visualization of metabolic pathways and networks.",
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
    details: "Madison, WI ~ Since January 2024",
    description: "• CodeForGood is a UW-Madison Student Organization that aims to provide software and data services to local businesses at no cost. As a result, students in our organization help to grow the community surrounding our school and get to excersize our skills in development, proving we can meaningfully contribute to real world tech solutions.",
    moreinfo: "• As a Project Manager, I help lead a team of 5 in development for the projects at hand. Thus far, this includes developing data management systems and e-commerce software, which has mean extensive work with Python, C++, SQL, Javascript and several related libraries and frameworks.",
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
    title: "Incoming Fall AI Researcher @ GIES Business - University of Illinois Urbana-Champaign",
    description: "Conducting research on ML applications on business models",
    details: "Fall 2024 Semester ~ Remote",
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

const Work = () => {
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
                        <TabsTrigger value="experience1">Data Analysis & Engineering @ Comcast</TabsTrigger>
                        <TabsTrigger value="experience2">Bio-Data Analysis @ Manus Bio</TabsTrigger>
                        <TabsTrigger value="experience3">Project Manager @ CodeForGood</TabsTrigger>
                        <TabsTrigger value="experience4">Fall ML Researcher @ UIUC</TabsTrigger>
                    </TabsList>
                    </div>

                    {/* content */}
                    <div className="min-h-[70] w-full">
                        {/* experience1 */}
                        <TabsContent value="experience1" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h2 className="text-4xl font-bold">{experience1.title}</h2>
                                <h3 className="text-3l font-bold text-accent"><i>{experience1.details}</i></h3>
                                <ul>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 py-2">{experience1.description}</p>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 py-2">{experience1.moreinfo}</p>
                                </ul>
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
                                <h3 className="text-3l font-bold text-accent"><i>{experience2.details}</i></h3>
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
                                <h3 className="text-3l font-bold text-accent"><i>{experience3.details}</i></h3>
                                <ul>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 py-2">{experience3.description}</p>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 py-2">{experience3.moreinfo}</p>
                                </ul>
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
                                <h3 className="text-3l font-bold text-accent"><i>{experience4.details}</i></h3>
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

export default Work;
