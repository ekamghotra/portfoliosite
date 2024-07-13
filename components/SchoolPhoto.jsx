"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SchoolPhoto = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{
                    opacity: 1, 
                    transition: {delay: 2, duration: 0.4, ease: "easeIn" },
                }}
            >
                {/* image */}
                <motion.div 
                initial={{ opacity: 0 }} 
                animate={{
                    opacity: 1, 
                    transition: {delay: 2.4, duration: 0.4, ease: "easeInOut" },
                }}
                className="w-full h-auto">
                    <Image 
                        src="/assets/wisconsin.jpeg" 
                        priority 
                        quality={100} 
                        width={1000} // specify width and height
                        height={600} // specify width and height
                        alt="School Campus" 
                        className="object-cover" 
                    />
                </motion.div>

                {/* circle */}

            </motion.div>
        </div>
    );
};

export default SchoolPhoto;
