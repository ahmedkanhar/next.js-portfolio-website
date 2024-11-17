import React from 'react';

export default function Education() {
  return (
    <section className="education min-h-screen bg-[#081b29] py-12" id="EducationSection">
      <h2 className="heading text-center text-3xl font-semibold mb-8">
        My <span className="text-[#00abf0]">Journey</span>
      </h2>
      <div className="education-row flex justify-center">
        <div className="education-column mx-10 px-8 py-10 bg-[#112e42] rounded-lg shadow-lg text-white">
          <h3 className="title text-xl font-semibold mb-6">Education</h3>
          <div className="education-box">
            <div className="education-content mb-6">
              <div className="year flex items-center mb-3">
                <i className="bx bxs-calendar text-[#00abf0] mr-2"></i>
                <span>2019-2023</span>
              </div>
              <h3 className="text-lg font-bold">Bachelor&aposs Degree - Shah Abdul Latif University</h3>
              <p>Completed Bachelors degree in Physics.</p>
            </div>
            <div className="education-content mb-6">
              <div className="year flex items-center mb-3">
                <i className="bx bxs-calendar text-[#00abf0] mr-2"></i>
                <span>2016-2018</span>
              </div>
              <h3 className="text-lg font-bold">Intermediate - Superior Science College</h3>
              <p>Completed Intermediate in Engineering Category.</p>
            </div>
            <div className="education-content mb-6">
              <div className="year flex items-center mb-3">
                <i className="bx bxs-calendar text-[#00abf0] mr-2"></i>
                <span>2014-2016</span>
              </div>
              <h3 className="text-lg font-bold">Matriculation - Shah Mardan Shah High School</h3>
              <p>Completed Matriculation in Science Category.</p>
            </div>
          </div>
        </div>
        <div className="education-column mx-10 px-8 py-10 bg-[#112e42] rounded-lg shadow-lg text-white">
          <h3 className="title text-xl font-semibold mb-6">Courses</h3>
          <div className="education-box">
            <div className="education-content mb-6">
              <div className="year flex items-center mb-3">
                <i className="bx bxs-calendar text-[#00abf0] mr-2"></i>
                <span>2023 - Present</span>
              </div>
              <h3 className="text-lg font-bold">Generative AI - Governor Sindh Initiative</h3>
              <p>Mastered Generative AI techniques.</p>
            </div>
            <div className="education-content mb-6">
              <div className="year flex items-center mb-3">
                <i className="bx bxs-calendar text-[#00abf0] mr-2"></i>
                <span>2021-2022</span>
              </div>
              <h3 className="text-lg font-bold">English Language - Virtual Academy</h3>
              <p>Gained fluency in English language.</p>
            </div>
            <div className="education-content mb-6">
              <div className="year flex items-center mb-3">
                <i className="bx bxs-calendar text-[#00abf0] mr-2"></i>
                <span>2023 - Present</span>
              </div>
              <h3 className="text-lg font-bold">Applied Cloud Engineering - Governor Sindh Initiative</h3>
              <p>Specializing in application deployment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
