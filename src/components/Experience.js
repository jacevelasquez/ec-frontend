import React, {useState} from "react";

function Experience() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
      };

    const SkillItem = ({ skill, filledCircles, emptyCircles, collap }) => (
        <li className="mb-2.5">
          <div className="flex items-center">
          <span className="w-64 text-md font-bold">{skill} 
          {collap === 'aws' && (
            <div className="relative inline-block ml-2"><div className={`${isOpen ? 'arrow-up':'arrow-down'}`} onClick={toggleCollapse} /></div>
            ) }
            {isOpen && collap === 'aws' && (
            <div className="bg-gray-100 border border-gray-300 rounded">
                api gateway
            </div>
            )}
          </span>
            {Array(filledCircles).fill(null).map((_, index) => (
              <span key={`filled-${index}`} className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-4" />
            ))}
            {Array(emptyCircles).fill(null).map((_, index) => (
              <span key={`empty-${index}`} className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center mr-4" />
            ))}
          </div>
        </li>
      );
      
      const SkillsList = () => (
        <ul>
          <SkillItem skill="Javascript / NodeJS" filledCircles={4} emptyCircles={1} />
          <SkillItem skill="Python" filledCircles={4} emptyCircles={1} />
          <SkillItem skill="React" filledCircles={3} emptyCircles={2} />
          <SkillItem skill="Azure Cloud" filledCircles={4} emptyCircles={1} />
          <SkillItem skill="Amazon Web Services " filledCircles={3} emptyCircles={2} collap={'aws'} />
          <SkillItem skill="MySQL" filledCircles={4} emptyCircles={1} />
          <SkillItem skill="MongoDB" filledCircles={4} emptyCircles={1} />
          <SkillItem skill="PostgreSQL" filledCircles={4} emptyCircles={1} />
          <SkillItem skill="Git" filledCircles={3} emptyCircles={2} />
          <SkillItem skill="Jest / ESlint" filledCircles={4} emptyCircles={1} />
          <SkillItem skill="Agile / Scrum" filledCircles={4} emptyCircles={1} />
          <SkillItem skill="API development" filledCircles={4} emptyCircles={1} />
          <SkillItem skill="Backend Development" filledCircles={4} emptyCircles={1} />
          <SkillItem skill="Frontend Development" filledCircles={3} emptyCircles={2} />
        </ul>
      );
  return (
    <div>
      <section
        id="section2"
        className="h-screen flex p-8"
      >
        <div className="w-1/6"></div>
        <div className="w-1/3 p-8 justify-center ml-auto">
          <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
            <ul>
                <SkillsList />
            </ul>
        </div>

        <div className="w-1/3 p-4 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Job Experience</h2>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold">Software Engineer</h3>
            <p className="text-lg">Company Name | Jan 2020 - Present</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Developed web applications using modern frameworks.</li>
              <li>
                Collaborated with cross-functional teams to deliver solutions.
              </li>
              <li>Improved application performance by optimizing code.</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold">Junior Developer</h3>
            <p className="text-lg">Another Company | Jun 2018 - Dec 2019</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Assisted in building and maintaining internal tools.</li>
              <li>Participated in code reviews and development meetings.</li>
              <li>Resolved bugs and provided support for legacy systems.</li>
            </ul>
          </div>
        </div>

        <div className="w-1/6"></div>
      </section>
    </div>
  );
}

export default Experience;
