const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-center items-center flex-wrap gap-5">
      <div className="flex gap-3 justify-center">
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
    </footer>
  );
};

export default Footer;
