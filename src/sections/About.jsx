import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
import { technologies } from '../constants/index.js';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('marwanbit12@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Marwan Bit</p>
              <p className="grid-subtext">
                I&apos;m a recent Computer Science and Mathematics Graduate from Harvey Mudd College (3.81 GPA)
                with a passion for building full-stack applications enhanced with AI/ML powered features. Throughout 
                my time as a student I have worked on many ML based projects through the Claremont College&apos;s Project-AI
                (P-AI) club.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">

          <div className="flex flex-wrap gap-3 w-full justify-center">
              {technologies.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.icon} alt={tag.name} />
                </div>
              ))}
          </div>

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust applications,
                with NextJS, React, and Typescript for frontend development, Python for scripting and Data Science Applications,
                and Java and C++ for writing performant backend code.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 35.2216, lng: -80.8401, text: 'Charlotte, NC', color: 'white', size: 50 }]}
                pointsData={[{ lat: 35.2216, lng: -80.8401 }]}
                labelSize={2}
                pointResolution={10}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Charlotte, NC and  am open to remote work and/or relocation worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I&apos;m driven to solving problems using a wide variety of tools. My technical background in Mathematics
                has driven my interest in Machine Learning and utilizing AI/ML powered features in applications. I&apos;m interested
                in developing highly performant and robust applications, and I&apos;m particularly excited to learn and work with 
                cutting-edge technologies like TensorFlow, RAG (Retrieval-Augmented Generation), vector databases, SpringBoot, system design, 
                concurrency, and other modern frameworks.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">marwanbit12@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
