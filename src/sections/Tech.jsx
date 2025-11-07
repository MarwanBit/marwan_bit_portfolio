import { GridBallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <section className="c-space my-20">
      <p className="head-text">My Skills</p>
      <div className="mt-12 gap-5 w-full">
        <div className="flex flex-row flex-wrap justify-center gap-10">
          <GridBallCanvas technologies={technologies} />
        </div>
      </div>
      <div className="mt-12 gap-5 w-full">
        <div className="flex flex-row flex-wrap justify-center gap-3 mt-10">
          {technologies.map((technology) => (
            <div 
              key={technology.name} 
              className="px-4 py-2 text-white text-sm font-medium rounded-full bg-black-300 border border-black-200 backdrop-filter backdrop-blur-lg bg-opacity-50 hover:bg-opacity-70 transition-all duration-300"
            >
              {technology.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper(Tech, "tech");