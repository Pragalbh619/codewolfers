import React from "react";

const MissionVision = () => {
  return (
    <>
      <div>
        <div className="w-[90%] mx-auto my-[5%]">
          <h1 className="font-bold text-[60px] text-center mb-8 gradient-text
  xl:text-[50px] lg:text-[45px] md:text-[40px] sm:text-[35px] xs:text-[30px] oswald">
            Our Mission & Vision
          </h1>

          <div className="grid grid-cols-2 lmd:grid lmd:grid-cols-1 mt-5">
            <div>
              <h1 className="font-bold text-3xl text-center mb-5 oswald">
                Mission
              </h1>
              <ul className="mission-list text-justify px-[10%]">
                <li className="pt-4">
                  <strong>Empower Transformation:</strong> Harness the power of
                  cutting-edge technology and innovative solutions to drive
                  business transformation.
                </li>
                <li className="pt-4">
                  <strong>Deliver Excellence:</strong> Provide high-quality,
                  tailored software development services to help clients achieve
                  their goals.
                </li>
                <li className="pt-4">
                  <strong>Commit to Continuous Learning:</strong> Foster a
                  culture of excellence, collaboration, and continuous learning.
                </li>
                <li className="pt-4">
                  <strong>Create Positive Impact:</strong> Strive to make a
                  meaningful impact in the tech industry and beyond.
                </li>
              </ul>
            </div>

            <div>
              <h1 className="font-bold text-3xl text-center mb-5 oswald">
                Vision
              </h1>
              <ul className="vision-list text-justify px-[10%]">
                <li className="pt-4">
                  <strong>Global Leadership:</strong> Become a global leader in
                  software development, known for passion and dedication.
                </li>
                <li className="pt-4">
                  <strong>Leverage Advanced Solutions:</strong> Enable
                  businesses of all sizes to thrive with advanced digital
                  solutions.
                </li>
                <li className="pt-4">
                  <strong>Foster Creativity and Integrity:</strong> Build a
                  culture of creativity, integrity, and excellence.
                </li>
                <li className="pt-4">
                  <strong>Build Lasting Relationships:</strong> Establish
                  long-term partnerships with clients and contribute to the tech
                  community's advancement.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionVision;
