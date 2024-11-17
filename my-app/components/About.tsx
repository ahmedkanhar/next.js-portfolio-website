// About.tsx
import React from 'react';

export default function About() {
  return (
    <section className="about flex flex-col items-center gap-8 bg-secondary p-6 pb-24 transition duration-300" id="AboutSection">
      <h2 className="heading text-5xl mb-12 text-center">
        About <span className="text-main">Me</span>
      </h2>

      <div className="about-img relative w-60 h-60 rounded-full flex justify-center">
        <img src="/images/image.png" alt="Ahmed Ali" className="w-11/12 rounded-full border-2 border-main" />
        <span className="circle-spin absolute top-1/2 left-1/2 w-[115%] h-[115%] rounded-full border-t-2 border-b-2 border-secondary border-l-2 border-main border-r-2 border-main transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="about-content text-center">
        <h3 className="text-2xl">Frontend Developer</h3>
        <p className="text-lg mt-8 mb-12">
          I am Ahmed Ali, a passionate student exploring web development. I am currently pursuing Generative AI Applied Cloud Engineering course and specializing in frontend development. My journey in web development started with a curiosity to understand how websites are built and evolved into a deep passion for creating intuitive and visually appealing user interfaces.
        </p>
        <div className="btn-box btns inline-block w-60">
          <a href="#" className="btn px-4 py-2 rounded-lg bg-main hover:bg-hover text-white transition-colors duration-300">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
