import React from "react";

function JobList() {
  const JobItem = ({ title, company, period, tasks }) => (
    <div className="mb-4 text-sm">
      <h3 className="font-semibold">{title}</h3>
      <p className="">
        {company} | {period}
      </p>
      <ul className="list-disc ml-6 mt-1">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="lg:w-4/5">
      <JobItem
        title="Software Engineering Specialist"
        company="Accenture Inc."
        period="Dec 2022 - Present"
        tasks={[
          "Heavily involved in Python and NodeJS development",
          "Capable on architecting new workstreams for end-to-end build",
          "Leading a team with 10 resources on end-to-end web development",
          "Scrum master of the team",
          "Subject Matter expert of the project on API development and integration",
          "Capable to communicate with the Client on the team’s progress and concerns",
        ]}
      />
      <JobItem
        title="Software Engineering Senior Analyst"
        company="Accenture Inc."
        period="Jun 2021 - Nov 2022"
        tasks={[
          "Heavily involved in Python and NodeJS development",
          "Sub lead of an end-to-end web development",
          "Development of a system that automatically generates an Excel and PowerPoint file from web data using python",
          "Development of a system that helps new pipelines and developers to apply the proper coding standards and behavior",
        ]}
      />
      <JobItem
        title="Software Engineering Analyst"
        company="Accenture Inc."
        period="2022-2024"
        tasks={[
          "Heavily involved in Python and NodeJS development",
          "Passed AWS Certification",
          "API dev lead of the team",
        ]}
      />
      <JobItem
        title="Science Research Specialist"
        company="Department of Science and Technology"
        period="Aug 2017 - Dec 2019"
        tasks={[
          "Full-stack developer (MySQL/SQLITE database, Node JS – API, AngularJS - UI)",
        ]}
      />
      <JobItem
        title="Production Engineer"
        company="ROHM Electronics Philippines Inc."
        period="Feb 2015 - Nov 2016"
        tasks={[
          "Setting–up of Existing and New Machines (Hardware and Software related)",
          "Development of Machine Programs that will improve productivity and cost reduction using C",
        ]}
      />
    </div>
  );
}

export default JobList;
