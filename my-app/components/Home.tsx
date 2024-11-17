// Home.tsx
const Home = () => {
  return (
    <section className="home min-h-screen flex items-center bg-[#081b29] px-[10%]" id="HomeSection">
      <div className="home-content max-w-[60rem] text-white">
        <h1 className="relative text-5xl font-bold leading-tight">
          Hi, I am <span className="text-[#00abf0]">Ahmed Ali</span>
          <span className="absolute inset-0 bg-transparent animate-showRight"></span>
        </h1>
        <div className="text-animate relative my-4">
          <h3 className="text-3xl font-bold text-transparent stroke-text">Frontend Developer</h3>
        </div>
        <p className="relative text-lg mt-4 mb-8">
          Passionate student exploring web development  currently focusing on coursework and engaging in personal projects to build practical skills. Proactively seeking opportunities to apply theoretical knowledge and contribute to the field. Eager to learn and grow as a frontend developer.
        </p>
        <div className="btn-box flex space-x-6">
          <a href="#" className="relative inline-flex items-center justify-center w-[150px] h-[40px] bg-[#00abf0] text-[#081b29] font-semibold rounded-md transition-colors duration-300 hover:bg-transparent hover:text-[#00abf0]">
            Hire me
          </a>
          <a href="#" className="relative inline-flex items-center justify-center w-[150px] h-[40px] bg-transparent border-2 border-[#00abf0] text-[#00abf0] font-semibold rounded-md transition-colors duration-300 hover:bg-[#081b29] hover:text-white">
            Lets talk
          </a>
        </div>
      </div>

      <div className="home-sci absolute bottom-16 left-[10%] flex space-x-6">
        <a href="https://www.facebook.com/masroofhunn" className="relative flex items-center justify-center w-10 h-10 bg-transparent border-2 border-[var(--main-color)] rounded-full text-[var(--main-color)] transition-colors duration-300 hover:bg-main-color hover:text-[#081b29]">
          <i className='bx bxl-facebook'></i>
        </a>
        <a href="https://x.com/ahmedkanhar777?s=09" className="relative flex items-center justify-center w-10 h-10 bg-transparent border-2 border-[var(--main-color)] rounded-full text-[var(--main-color)] transition-colors duration-300 hover:bg-main-color hover:text-[#081b29]">
          <i className='bx bxl-twitter'></i>
        </a>
        <a href="https://www.linkedin.com/in/ahmedkanhar777?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="relative flex items-center justify-center w-10 h-10 bg-transparent border-2 border-[var(--main-color)] rounded-full text-[var(--main-color)] transition-colors duration-300 hover:bg-main-color hover:text-[#081b29]">
          <i className='bx bxl-linkedin'></i>
        </a>
      </div>
    </section>
  );
}

export default Home;
