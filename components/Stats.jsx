"use client";

import CountUp from "react-countup";

const stats= [
    {
        num: 20,
        text: "Years Old"
    },
    {
        num: 2,
        text: "Years until Degree Completion"
    },
    {
        num: 3,
        text: "Years of Relevant Experience"
    },
];

const Stats = () => {
    return <section className="pt-2 pb-8 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 justify-center max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index)=> {
                    return (
                        <div 
                            className="flex-grow flex gap-4 items-center justify-center xl:justify-start" 
                            key={index}
                        >
                            <CountUp 
                                end={item.num} 
                                duration={5} 
                                delay={2} 
                                className="text-3xl xl:text-5xl font-extrabold"
                            />
                            <p 
                                className={`${
                                    item.text.length < 15 ? "max-w-[80px]" : "max-w-[120px]"
                                } leading-snug text-white/80`}
                            >
                                {item.text}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>;
};

export default Stats;
