import React, { useState } from "react";

function SkillList() {
  const [awsOpen, setAwsOpen] = useState(false);
  const [azOpen, setAzOpen] = useState(false);

  const toggleAws = () => {
    setAwsOpen((prevIsOpen) => !prevIsOpen);
  };

  const toggleAz = () => {
    setAzOpen((prevIsOpen) => !prevIsOpen);
  };

  const SkillItem = ({ skill, filledCircles, emptyCircles, collap }) => (
    <li className="mb-2.5">
      <div className="flex items-center">
        <span className="w-64 text-md">
          {skill}
          {collap === "aws" && (
            <div className="relative inline-block ml-2">
              <div
                className={`${awsOpen ? "arrow-up" : "arrow-down"}`}
                onClick={toggleAws}
              />
            </div>
          )}
          {collap === "az" && (
            <div className="relative inline-block ml-2">
              <div
                className={`${azOpen ? "arrow-up" : "arrow-down"}`}
                onClick={toggleAz}
              />
            </div>
          )}
        </span>
        {Array(filledCircles)
          .fill(null)
          .map((_, index) => (
            <span
              key={`filled-${index}`}
              className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-4"
            />
          ))}
        {Array(emptyCircles)
          .fill(null)
          .map((_, index) => (
            <span
              key={`empty-${index}`}
              className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center mr-4"
            />
          ))}
      </div>
      {awsOpen && collap === "aws" && (
        <div className="bg-gray-100 border border-gray-300 rounded ml-3 w-3/4">
          <ul>
            <li>API Gateway</li>
            <li>Lambda</li>
            <li>S3</li>
            <li>Secrets Manager</li>
            <li>Cloudwatch</li>
            <li>DynamoDB</li>
            <li>Athena</li>
            <li>Aurora</li>
          </ul>
        </div>
      )}
      {azOpen && collap === "az" && (
        <div className="bg-gray-100 border border-gray-300 rounded ml-3 w-3/4">
          <ul>
            <li>Functions</li>
            <li>Logic Apps</li>
            <li>Storage</li>
            <li>Cosmos DB</li>
            <li>Application Insights</li>
          </ul>
        </div>
      )}
    </li>
  );
  return (
    <ul>
      <SkillItem
        skill="Javascript / NodeJS"
        filledCircles={4}
        emptyCircles={1}
      />
      <SkillItem skill="Python" filledCircles={4} emptyCircles={1} />
      <SkillItem skill="React" filledCircles={3} emptyCircles={2} />
      <SkillItem skill="Azure Cloud" filledCircles={4} emptyCircles={1} collap={"az"} />
      <SkillItem
        skill="Amazon Web Services "
        filledCircles={3}
        emptyCircles={2}
        collap={"aws"}
      />
      <SkillItem skill="MySQL" filledCircles={4} emptyCircles={1} />
      <SkillItem skill="MongoDB" filledCircles={4} emptyCircles={1} />
      <SkillItem skill="PostgreSQL" filledCircles={4} emptyCircles={1} />
      <SkillItem skill="Tailwind CSS" filledCircles={3} emptyCircles={2} />
      <SkillItem skill="Git" filledCircles={3} emptyCircles={2} />
      <SkillItem skill="Jest / ESlint" filledCircles={4} emptyCircles={1} />
      <SkillItem skill="Agile / Scrum" filledCircles={4} emptyCircles={1} />
      <SkillItem skill="API development" filledCircles={4} emptyCircles={1} />
      <SkillItem
        skill="Backend Development"
        filledCircles={4}
        emptyCircles={1}
      />
      <SkillItem
        skill="Frontend Development"
        filledCircles={3}
        emptyCircles={2}
      />
    </ul>
  );
}

export default SkillList;
