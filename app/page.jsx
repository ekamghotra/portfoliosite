import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi'

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo"
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-6">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            
            <h1 className="h1 mb-6">
              Hey there, <br /> I'm <span className="text-accent">Ekam</span>!
            </h1>
            <span className="text-xl mb-3">Computer Science + Data Science @ UW-Madison</span>
            <p></p>
            <p className="max-w-[500px] mb-9 text-white/80 gap-8">
              I possess a deep expertise in Python, C++/C, Java, and SQL, exceling at algorithmic 
              development using these languages and related frameworks. Learn a little more about me 
              and what I've been doing recently using the tabs above!
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/resume.pdf" download="ekam_ghotra_resume.pdf">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download Resume</span>
                  <FiDownload className="text-xl"/>
                </Button>
                </a>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center 
                items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
