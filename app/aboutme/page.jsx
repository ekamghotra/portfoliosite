"use client";

import { BsArrowDownRight } from 'react-icons/bs'
import Link from "next/link";

const aboutme = [
    {
        num: '01',
        title: 'Student',
        description: 'I\'m currently pursuing a dual-degree program at the University of Wisconsin - Madison in Computer Science and Data Science, with a minor in Economic Analytics. Studying the intersection of these disciplines through my coursework has yielded me a deep understanding of Algorithmic Development, especially for use in Economic/Financial spheres.',
        href: ""
    },
    {
        num: '02',
        title: 'Work Experience',
        description: 'I have worked in several data science focussed roles, heavy in Data Engineering, Data Analysis, Statistics, and ML. Through coursework and school organizations, I have also explored applying my expertise in Data Science and Statistics to Software Development.',
        href: ""
    },
    {
        num: '03',
        title: 'Project Work',
        description: 'On several occasions, I\'ve leveraged my ability to develop predictive algorithms to forecast game & draft results in the NBA and NFL. Currently, I\'m also in the development cycle to create an intelligent NBA sports betting bot, with the goal of correctly predicting the over/under on the upcoming NBA season.',
        href: ""
    },
    {
        num: '04',
        title: 'Exercising Curiosity',
        description: 'Inspired by the history\'s autodidacts and having a natural curiosity, I constantly supplement coursework with extracurricular learning. Currently, I\'m taking IBM\'s Professional Certificate in AI Engineering. As I\'m currently fascinated by the Quantative Finance world, I\'m also reading \'Machine Learning for Algorithmic Trading\' by Stefan Jansen.',
        href: ""
    },
];

import { motion } from 'framer-motion';

const Aboutme = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{
                        opacity: 1, 
                        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
                    }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-[40px]"
                >
                    {aboutme.map((aboutme, index)=> {
                        return (
                            <div key={index} className="flex-1 flex flex-col gap-4 group">
                                {/* top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                        {aboutme.num}
                                    </div>
                                    <Link href={aboutme.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl" />
                                    </Link>
                                </div>
                                {/* heading */}
                                <h2 className="text-[35px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                    {aboutme.title}
                                </h2>
                                {/* description */}
                                <p className="text-white/60 text-center">{aboutme.description}</p>
                                {/* border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Aboutme;
