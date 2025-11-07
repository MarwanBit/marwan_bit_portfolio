import Button from '../components/Button.jsx';

const Hero = () => {
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/assets/marwan_bit_resume.pdf'; // Update this path to your actual CV file
    link.download = 'marwan_bit_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center relative bg-[#010103]" id="home">
      <div className="c-space w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left side - Text content */}
          <div className="flex-1 flex flex-col gap-6 lg:gap-8 text-center md:text-center lg:text-left">
            <div className="flex flex-col gap-4">
              <p className="sm:text-3xl text-xl font-medium text-white font-generalsans">
                Hi, I am <span className="text-gray_gradient">Marwan Bit</span>{' '}
                <span className="waving-hand">👋</span>
              </p>
              <h1 className="hero_tag text-gray_gradient">
                Full Stack Developer | AI/ML Enthusiast
              </h1>
              <p className="text-lg sm:text-xl text-[#afb0b6] font-generalsans max-w-2xl lg:max-w-none mx-auto md:mx-auto lg:mx-0">
                Recent graduate specializing in full stack development with an emphasis on AI/ML solutions.
                Currently seeking opportunities to apply my skills and grow as a software engineer.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:justify-center lg:justify-start lg:max-w-[50%]">
              <button
                onClick={handleDownloadCV}
                className="btn w-full sm:flex-1 lg:flex-none lg:min-w-48 flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Download Resume
              </button>
              <a href="#contact" className="w-full sm:flex-1 lg:flex-none lg:min-w-48">
                <Button
                  name="Let's work together"
                  isBeam
                  containerClass="w-full"
                />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mt-4">
              <a
                href="https://github.com/MarwanBit"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon hover:bg-black-500 transition-all duration-300"
                aria-label="GitHub"
              >
                <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
              </a>
              <a
                href="https://www.linkedin.com/in/marwan-bit-4790b3179/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon hover:bg-black-500 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <img src="/assets/linkedin.png" alt="LinkedIn" className="w-1/2 h-1/2" />
              </a>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end lg:-mt-40">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#BEC1CF] to-[#D5D8EA] rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-black-300 bg-black-200">
                <img
                  src="/assets/marwan_graduation.png"
                  alt="Marwan Bit"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML =
                      '<div class="w-full h-full flex items-center justify-center text-white text-2xl">Add Your Photo</div>';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
