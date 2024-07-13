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

// main mainpage
const mainpage = {
    title: "UW-Madison Courses Completed/In-Progress",
    details: "Scroll and click through the courses I've been taking at school!",
    info: "Note: courses sorted by relevancy to intended career path"
    
};

// course1 data
const course1 = {
    title: "MATH 221 - Calculus & Analytical Geometry I",
    details: "Introduction to differential and integral calculus and plane analytic geometry; applications; transcendental functions",
    outcome1: "• Apply differential calculus to analyze rates of change, and in particular to model real world phenomena (derivatives of exponential/logarithmic/trigonometric functions, 1st and 2nd derivative tests for extrema, applied optimization, etc.)",
    outcome2: "• Analyze the behavior of functions of one variable, including asymptotic behavior, local behavior, and existence of extrema (limits, continuity, tangent lines, finding extrema, etc.)",
    outcome3: "• Apply integral calculus to model the cumulative effects of continuous processes (indefinite vs. definite integral, Fundamental Theorem of Calculus, computing areas, volumes, and surface areas, etc.)",
    outcome4: "• Successfully perform computations related to limits, differentiation, and integration",
    
};

// course2 data
const course2 = {
    title: "MATH 222 - Calculus & Analytical Geometry II",
    details: "Techniques of integration, improper integrals, first order ordinary differential equations, sequences and series, Taylor series, vector geometry in two and three dimensions",
    outcome1: "• Apply a variety of integration techniques to compute proper and improper integrals (integration by parts, (trig) substitution, partial fractions, etc.)",
    outcome2: "• Find and analyze the solutions to first order differential equations and initial value problems (separable equations, equilibrium solutions, linear equations and integrating factors, etc.)",
    outcome3: "• Recall the main definitions and results related to limits, continuity, sequences, and series (convergence, divergence, convergence of geometric sequences and series, tests for convergence and divergence, Integral test, etc.)",
    outcome4: "• Derive and manipulate asymptotic expansions of functions, and use these expansions to understand the properties of the functions they approximate (e.g. Taylor series)",
    outcome5: "• Describe objects in 3D space and how they interact with each other (coordinate system, vector addition & scalar multiplication, dot product, cross product, etc.)",
    outcome6: "• Describe physical and biological phenomena using mathematical models (e.g. linear growth models, logistic growth models, pressure and force, moments and center of mass, etc.)",
    
};

// course3 data
const course3 = {
    title: "STAT 240 - Data Science Modeling I",
    details: "Introduces reproducible data management, modeling, analysis, and statistical inference through a practical, hands-on case studies approach. Topics include the use of an integrated statistical computing environment, data wrangling, the R programming language, data graphics and visualization, random variables and concepts of probability including the binomial and normal distributions, data modeling, statistical inference in one- and two- sample settings for proportions and means, simple linear regression, and more",
    outcome1: "• Transform data, possibly from multiple sources, into a form convenient for analysis. Comprehensively visualize and summarize data, generate questions/hypotheses, and address them.",
    outcome2: "• Write R code using the R Studio integrated statistical computing environment to carry out data wrangling, graphical data exploration, and analysis that is reproducible, as well as using R Markdown to integrate prose, visualizations, code, interpretation, and results",
    outcome3: "• Provide low-dimensional summaries of data that captures signal and quantify the noise; assess the adequacy of the model; andunderstand random variables and probability concepts associated with the models",
    
};

// course4 data
const course4 = {
    title: "STAT 340 - Data Science Modeling II",
    details: "Teaches how to explore, model, and analyze data using R. Topics include basic probability models; the central limit theorem; Monte Carlo simulation; one- and two-sample hypothesis testing; Bayesian inference; linear and logistic regression; ANOVA; the bootstrap; random forests and cross-validation. Features the analysis of real-world data sets and the communication of findings in a clear and reproducible manner within a project setting.",
    outcome1: "• Understand and apply concepts in probability; combine basic probability models to build more complicated ones; and critique models and their assumptions",
    outcome2: "• Formulate statistical hypotheses for different kinds of research questions and test those hypotheses using both classical and Monte Carlo methods",
    outcome3: "• Understand and apply principles of statistical estimation and prediction, including fitting models and assessing model quality, in the context of both linear and logistic regression",
    
};

// course5 data
const course5 = {
    title: "MATH 340 - Matrix and Linear Algebra",
    details: "An introduction to linear algebra. Topics include matrix algebra, linear systems of equations, vector spaces, sub-spaces, linear dependence, span, basis, rank of matrices, determinants, linear transformations, coordinate representations, kernel, range, eigenvalues and eigenvectors, diagonalization, inner products and orthogonal vectors, symmetric matrices.",
    outcome1: "• Recall and state the formal definitions, properties, and theorems associated to linear algebra topics (matrices, eigenvectors, rank, linear independence, vector spaces, etc.)",
    outcome2: "• Verify if a mathematical object has a given property used in linear algebra (if a matrix is invertible, if a set is a vector subspace, if a vector is an eigenvector, etc.)",
    outcome3: "• Check the premises of theorems used in elementary linear algebra in order to apply their conclusions (e.g., that a given matrix has zero determinant and therefore cannot be inverted)",
};

// course6 data
const course6 = {
    title: "COMP SCI 570 - Intro to Human-Computer Interaction",
    details: "User-centered software design; (1) principles of and methods for understanding user needs, designing and prototyping interface solutions, and evaluating their usability, (2) their applications in designing web-based, mobile,and embodied interfaces through month long group projects.",
    outcome1: "• Apply user-centered design principles and methods to create effective and usable interfaces",
    outcome2: "• Develop a toolbox of user-centered design techniques that can be applied to new design problems",
};

// course7 data
const course7 = {
    title: "ECON 301 - Intermediate Microeconomic Theory",
    details: "Contemporary theory of consumption, production, pricing and resource allocation",
    outcome1: "• Apply economic models to understand household and firm behavior and market outcomes",
    outcome2: "• Specify and adapt microeconomic models to analyze economic environments",
    outcome3: "• Solve economic decision problems using tools of mathematical optimization",
    outcome4: "• Understand the role of these models as the foundation for more advanced analysis",
};

// course8 data
const course8 = {
    title: "COMP SCI 540 - Intro to Artificial Intelligence",
    details: "Principles of knowledge-based search techniques, automatic deduction, knowledge representation using predicate logic, machine learning, probabilistic reasoning. Applications in tasks such as problem solving, data mining, game playing, natural language understanding, computer vision, speech recognition, and robotics.",
    outcome1: "• (Uninformed Search Methods) Identify the formulation of search for problem solving tasks. Understand important concepts in uninformed search. Apply the search methods on the formulated search problem",
    outcome2: "• (Informed Search Methods) Understand important concepts in informed search. Differentiate from uninformed search",
    outcome3: "• (Local Search Methods) Identify the formulation of search for problem solving tasks. Apply the hill climbing method for local search problems. Identify and summarize the important features of the simulated annealing and genetic algorithms",
    outcome4: "• (Game Playing) Recall the concept of games. Perform the minimax game playing method on formulated game tasks. Apply alpha-beta pruning to speed up the minimax method",
    outcome5: "• (Unsupervised and Supervised Learning) Identify and summarize important features about supervised learning and unsupervised learning. Differentiate between the two types of tasks",
    outcome6: "• (Classic Learning Methods) Apply linear regression, hierarchical agglomerative clustering algorithm, k-means clustering, or K nearest neighbor algorithm on given problem instances. Judge if the method is appropriate for a given task",
    outcome7: "• (Neural Networks and Deep Learning) Apply Perceptron learning rule on given problem instances. Implement neural networks using given software packages",
    outcome7: "• (Reinforcement Learning) Understand the concepts of reinforcement learning. Identify and summarize its important features. Compute value function and Q function. Apply value iteration and Q learning on given problems",
};

// course9 data
const course9 = {
    title: "COMP SCI/ECE 252 - Intro to Computer Engineering",
    details: "Logic components built with transistors, rudimentary Boolean algebra, basic combinational logic design, basic synchronous sequential logic design, basic computer organization and design, introductory machine- and assembly-language programming.",
    outcome1: "• Perform operations on binary representations for data",
    outcome2: "• Analyze combinational and sequential digital logic and memory systems",
    outcome3: "• Identify the components and operation of an instruction set processor and write programs using assembly language",
    outcome4: "• Recognize and analyze ethical and professional responsibilities in engineering contexts",
};

// course10 data
const course10 = {
    title: "COMP SCI/MATH 240 - Discrete Mathematics",
    details: "Concepts of logic, sets, partial order and other relations, and functions. Other concepts of mathematics (definitions, proofs, sets, functions, and relations) with a focus on discrete structures: integers, bits, strings, trees, and graphs. Propositional logic, Boolean algebra, and predicate logic. Mathematical induction and recursion. Invariants and algorithmic correctness. Recurrences and asymptotic growth analysis. Fundamentals of counting.",
    outcome1: "• Be able to construct proofs by induction to prove properties in a variety of domains (mathematical formulas, recursively-defined structures, loop invariants, correctness of recursive programs)",
    outcome2: "• Apply combinatorial techniques to counting problems",
    outcome3: "• Develop skills to construct mathematically rigorous arguments and proofs",
    outcome4: "• Gain exposure to the basics of program analysis (program correctness, recurrences, asymptotic analysis)",
    outcome5: "• Demonstrate a familiarity with and an ability to reason about discrete structures/data types (integers, strings, bit strings, sets, relations, functions, graphs, trees)",
};

// course11 data
const course11 = {
    title: "COMP SCI 200 - Core Java Programming I",
    details: "Learn the process of incrementally developing small (200-500 lines) programs along with the fundamental Computer Science topics. These topics include: problem abstraction and decomposition, the edit-compile-run cycle, using variables of primitive and more complex data types, conditional and loop-based flow control, basic testing and debugging techniques, how to define and call functions (methods), and IO processing techniques. Also teaches and reinforces good programming practices including the use of a consistent style, and meaningful documentation.",
    outcome1: "• Design and implement standalone programs that can interact with the user via prompts and or menus, access and edit data stored in an array or list structure, and use and further process the data found in those structures",
    outcome2: "• Implement a given program design and choose correct control structures for implementing algorithms expressed in pseudocode",
    outcome3: "• Interpret a variety of diagram types used to express programming concepts and results: truth tables, memory model diagrams, control flow charts (activity diagrams), class diagrams, object diagrams, and use-case diagrams",
    outcome4: "• Manipulate quantitative information to create models, and/or devise solutions to problems using multi-step arguments, based on and supported by quantitative information",
    outcome5: "• Express and interpret in context models, solutions and/or arguments using verbal, numerical, graphical algorithmic, computational or symbolic techniques",
};

// course12 data
const course12 = {
    title: "COMP SCI 300 - Core Java Programming II",
    details: "Introduction to Object-Oriented Programming using classes and objects to solve more complex problems. Introduces array-based and linked data structures: including lists, stacks, and queues. Programming assignments require using interfaces, generics, and exception handling. Topics reviewed include reading/writing data and objects from/to files and exception handling, and command line arguments. Topics introduced: object-oriented design; class vs. object; create and define interfaces and iterators; searching and sorting; abstract data types; generic interfaces (parametric polymorphism); test methods/classes; array based vs. linked node implementations; complexity analysis; recursion.",
    outcome1: "• List and describe common operations for List, Stack, Queue, Priority Queue, Tree",
    outcome2: "• Analyze the time-complexity and compare the Big-Oh O(n) worse case complexity of different ADT implementations, and the complexity for any data structures and algorithms used to implement those operations",
    outcome3: "• Interpret and create a variety of diagrams: Call Stack trace; Stack, Queue, and Tree Data Structures; Recursive call (list or tree), control flow charts, class diagrams, object diagrams, and use-case diagrams",
    outcome4: "• Implement Object-Oriented (multi-class) standalone programs that manage a variety of data storage and retrieval operations (Program development skills and experience)",
};

// course13 data
const course13 = {
    title: "COMP SCI 400 - Core Java Programming III",
    details: "This course introduces balanced search trees, graphs, graph traversal algorithms, hash tables and sets, and complexity analysis and about classes of problems that require each data type. Students design & implement high quality professional code that demonstrates knowledge and use of latest language features, tools, and conventions. Additional topics introduced will include as needed for projects: inheritance and polymorphism; anonymous inner classes, lambda functions, performance analysis to discover and optimize critical code blocks. Students will design and implement 2 major projects with advanced user-interface design, such as a web/mobile application with a GUI and event-driven implementation;",
    outcome1: "• Describe, use, and implement efficient data structures including balanced search trees, hash tables, and graphs",
    outcome2: "• Analyze the complexity and performance of different algorithm and data structure choices",
    outcome3: "• Able to define custom data structures and implement desired operations as needed",
    outcome4: "• Design and implement an effective dashboard graphic user interface",
    outcome5: "• Find, install, configure, and use language and project development tools",
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

import SchoolPhoto from "@/components/SchoolPhoto"

const Courses = () => {
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
                    defaultValue="mainpage" 
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <div className="flex flex-col justify-center items-center w-full max-w-[380px] mx-auto xl:mx-0 gap-6 h-[600px]">
                        <ScrollArea className="h-[550px] w-full">
                        
                            <TabsList className="flex flex-col w-full space-y-10">
                                <TabsTrigger value="course1">Calculus & Analytical Geometry I</TabsTrigger>
                                <TabsTrigger value="course2">Calculus & Analytical Geometry II</TabsTrigger>
                                <TabsTrigger value="course3">Data Science Modeling I</TabsTrigger>
                                <TabsTrigger value="course4">Data Science Modeling II</TabsTrigger>
                                <TabsTrigger value="course5">Matrix & Linear Algebra</TabsTrigger>
                                <TabsTrigger value="course6">Intro Human-Computer Interaction</TabsTrigger>
                                <TabsTrigger value="course7">Intermediate Microeconomic Theory</TabsTrigger>
                                <TabsTrigger value="course8">Intro to Artificial Intelligence</TabsTrigger>
                                <TabsTrigger value="course9">Intro to Computer Engineering</TabsTrigger>
                                <TabsTrigger value="course10">Intro to Computer Engineering</TabsTrigger>
                                <TabsTrigger value="course11">Core Programming I</TabsTrigger>
                                <TabsTrigger value="course12">Core Programming II</TabsTrigger>
                                <TabsTrigger value="course13">Core Programming III</TabsTrigger>
                            </TabsList>
                        
                        </ScrollArea>
                    </div>


                    {/* content */}
                    <div className="min-h-[70] w-full">
                        {/* mainpage */}
                        <TabsContent value="mainpage" className="w-full">
                            {/* photo */}
                            <div className="order-1 xl:order-none py-5 xl:mb-0">
                                <SchoolPhoto />
                            </div>
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h2 className="text-4xl font-bold">{mainpage.title}</h2>
                                <h3 className="text-3l font-bold"><i>{mainpage.details}</i></h3>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[10px]">
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{mainpage.info}</p>
                                    </ul>                                        
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        
                        {/* course1 */}
                        <TabsContent value="course1" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h2 className="text-4xl font-bold">{course1.title}</h2>
                                <h3 className="text-3l font-bold"><i>{course1.details}</i></h3>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[10px]">
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course1.outcome1}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course1.outcome2}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course1.outcome3}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course1.outcome4}</p>
                                    </ul>                                        
                                </ScrollArea>
                            </div>
                        </TabsContent>


                        {/* course2 */}
                        <TabsContent value="course2" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h2 className="text-4xl font-bold">{course2.title}</h2>
                                <h3 className="text-3l font-bold"><i>{course2.details}</i></h3>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[10px]">
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course2.outcome1}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course2.outcome2}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course2.outcome3}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course2.outcome4}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course2.outcome5}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course2.outcome6}</p>
                                    </ul>                                        
                                </ScrollArea>
                            </div>
                        </TabsContent>



                        {/* course3 */}
                        <TabsContent value="course3" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h2 className="text-4xl font-bold">{course3.title}</h2>
                                <h3 className="text-3l font-bold"><i>{course3.details}</i></h3>
                                <ScrollArea className="h-[200px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[10px]">
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course3.outcome1}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course3.outcome2}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course3.outcome3}</p>
                                    </ul>                                        
                                </ScrollArea>
                            </div>
                        </TabsContent>


                        {/* course4 */}
                        <TabsContent value="course4" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h2 className="text-4xl font-bold">{course4.title}</h2>
                                <h3 className="text-3l font-bold"><i>{course4.details}</i></h3>
                                <ScrollArea className="h-[250px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[10px]">
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course4.outcome1}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course4.outcome2}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course4.outcome3}</p>
                                    </ul>                                        
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* course5 */}
                        <TabsContent value="course5" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h2 className="text-4xl font-bold">{course5.title}</h2>
                                <h3 className="text-3l font-bold"><i>{course5.details}</i></h3>
                                <ScrollArea className="h-[300px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[10px]">
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course5.outcome1}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course5.outcome2}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course5.outcome3}</p>
                                    </ul>                                        
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* course6 */}
                        <TabsContent value="course6" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h2 className="text-4xl font-bold">{course6.title}</h2>
                                <h3 className="text-3l font-bold"><i>{course6.details}</i></h3>
                                <ScrollArea className="h-[200px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[10px]">
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course6.outcome1}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course6.outcome2}</p>
                                    </ul>                                        
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* course7 */}
                        <TabsContent value="course7" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h2 className="text-4xl font-bold">{course7.title}</h2>
                                <h3 className="text-3l font-bold"><i>{course7.details}</i></h3>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[10px]">
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course7.outcome1}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course7.outcome2}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course7.outcome3}</p>
                                    </ul>                                        
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* course8 */}
                        <TabsContent value="course8" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h2 className="text-4xl font-bold">{course8.title}</h2>
                                <h3 className="text-3l font-bold"><i>{course8.details}</i></h3>
                                <ScrollArea className="h-[300px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[10px]">
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course8.outcome1}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course8.outcome2}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course8.outcome3}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course8.outcome4}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course8.outcome5}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course8.outcome6}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course8.outcome7}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course8.outcome8}</p>
                                    </ul>                                        
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* course9 */}
                        <TabsContent value="course9" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h2 className="text-4xl font-bold">{course9.title}</h2>
                                <h3 className="text-3l font-bold"><i>{course9.details}</i></h3>
                                <ScrollArea className="h-[230px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[10px]">
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course9.outcome1}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course9.outcome2}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course9.outcome3}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course9.outcome4}</p>
                                    </ul>                                        
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* course10 */}
                        <TabsContent value="course10" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h2 className="text-4xl font-bold">{course10.title}</h2>
                                <h3 className="text-3l font-bold"><i>{course10.details}</i></h3>
                                <ScrollArea className="h-[220px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[10px]">
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course10.outcome1}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course10.outcome2}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course10.outcome3}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course10.outcome4}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course10.outcome5}</p>
                                    </ul>                                        
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* course11 */}
                        <TabsContent value="course11" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h2 className="text-4xl font-bold">{course11.title}</h2>
                                <h3 className="text-3l font-bold"><i>{course11.details}</i></h3>
                                <ScrollArea className="h-[220px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[10px]">
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course11.outcome1}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course11.outcome2}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course11.outcome3}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course11.outcome4}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course11.outcome5}</p>
                                    </ul>                                        
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* course12 */}
                        <TabsContent value="course12" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h2 className="text-4xl font-bold">{course12.title}</h2>
                                <h3 className="text-3l font-bold"><i>{course12.details}</i></h3>
                                <ScrollArea className="h-[180px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[10px]">
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course12.outcome1}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course12.outcome2}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course12.outcome3}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course12.outcome4}</p>
                                    </ul>                                        
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* course13 */}
                        <TabsContent value="course13" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h2 className="text-4xl font-bold">{course13.title}</h2>
                                <h3 className="text-3l font-bold"><i>{course13.details}</i></h3>
                                <ScrollArea className="h-[180px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[10px]">
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course13.outcome1}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course13.outcome2}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course13.outcome3}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course13.outcome4}</p>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{course13.outcome5}</p>
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

export default Courses;
