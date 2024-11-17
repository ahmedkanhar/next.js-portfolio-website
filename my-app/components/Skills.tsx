const Skills = () => {
  return (
    <section id="SkillsSection" className="skills bg-[#112e42] py-[10rem] px-[9%] min-h-screen flex flex-col items-center">
      <h2 className="heading text-white text-3xl mb-12">
        My <span className="text-[#00abf0]">Skills</span>
      </h2>
      <div className="skills-list flex justify-between w-full">
        {/* Skill Box 1 */}
        <div className="skill-box w-1/3 bg-[#112e42] p-8 rounded-lg shadow-lg transition-transform transform hover:translate-y-[-5px]">
          <h3 className="text-white text-2xl mb-6">Programming Languages</h3>
          <ul className="list-none pl-0">
            <li className="text-white text-xl mb-4"><span className="text-[#00abf0] mr-2">•</span>Python</li>
            <li className="text-white text-xl mb-4"><span className="text-[#00abf0] mr-2">•</span>JavaScript</li>
            <li className="text-white text-xl mb-4"><span className="text-[#00abf0] mr-2">•</span>TypeScript</li>
            <li className="text-white text-xl mb-4"><span className="text-[#00abf0] mr-2">•</span>Java</li>
            <li className="text-white text-xl mb-4"><span className="text-[#00abf0] mr-2">•</span>C++</li>
            <li className="text-white text-xl mb-4"><span className="text-[#00abf0] mr-2">•</span>SQL</li>
          </ul>
        </div>

        {/* Skill Box 2 */}
        <div className="skill-box w-1/3 bg-[#112e42] p-8 rounded-lg shadow-lg transition-transform transform hover:translate-y-[-5px]">
          <h3 className="text-white text-2xl mb-6">Web Development</h3>
          <ul className="list-none pl-0">
            <li className="text-white text-xl mb-4"><span className="text-[#00abf0] mr-2">•</span>HTML/CSS</li>
            <li className="text-white text-xl mb-4"><span className="text-[#00abf0] mr-2">•</span>JavaScript</li>
            <li className="text-white text-xl mb-4"><span className="text-[#00abf0] mr-2">•</span>TypeScript</li>
            <li className="text-white text-xl mb-4"><span className="text-[#00abf0] mr-2">•</span>React</li>
            <li className="text-white text-xl mb-4"><span className="text-[#00abf0] mr-2">•</span>Next.js</li>
            <li className="text-white text-xl mb-4"><span className="text-[#00abf0] mr-2">•</span>Node.js</li>
          </ul>
        </div>

        {/* Skill Box 3 */}
        <div className="skill-box w-1/3 bg-[#112e42] p-8 rounded-lg shadow-lg transition-transform transform hover:translate-y-[-5px]">
          <h3 className="text-white text-2xl mb-6">Soft Skills</h3>
          <ul className="list-none pl-0">
            <li className="text-white text-xl mb-4"><span className="text-[#00abf0] mr-2">•</span>Leadership</li>
            <li className="text-white text-xl mb-4"><span className="text-[#00abf0] mr-2">•</span>Communication</li>
            <li className="text-white text-xl mb-4"><span className="text-[#00abf0] mr-2">•</span>Problem-Solving</li>
            <li className="text-white text-xl mb-4"><span className="text-[#00abf0] mr-2">•</span>Team Work</li>
            <li className="text-white text-xl mb-4"><span className="text-[#00abf0] mr-2">•</span>quick Learner</li>
            <li className="text-white text-xl mb-4"><span className="text-[#00abf0] mr-2">•</span>Punctual</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
