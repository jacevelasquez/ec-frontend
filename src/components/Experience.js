import React from "react";
import JobList from "./experience/JobList";
import SkillList from "./experience/SkillList";

function Experience() {
  return (
    <div>
      <section id="section2" className="h-screen flex p-28">
        <div className="w-1/6"></div>
        <div className="w-1/3 p-1">
          <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
          <ul>
            <SkillList />
          </ul>
        </div>

        <div className="w-1/2 p-1 flex flex-col">
          <h2 className="text-3xl font-bold mb-6">Job Experience</h2>
          <JobList />
        </div>

        {/* <div className="w-1/6"></div> */}
      </section>
    </div>
  );
}

export default Experience;
