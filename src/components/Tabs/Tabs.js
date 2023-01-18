import React, { useState, useEffect } from 'react';
import { FaSquareFull } from 'react-icons/fa';
import Title from '../Title';

const url = 'https://course-api.com/react-tabs-project';

const Tabs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (isLoading)
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <Title>Experience</Title>
        <div className="jobs-center">
          <div className="flex place-content-center gap-x-2 mb-5 border-b border-gray-200 w-3/4 mx-auto">
            {jobs.map((item, index) => {
              return (
                <button
                  key={item}
                  onClick={() => setValue(index)}
                  className={`mb-1  ${index === value && 'active-btn'}`}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div
                  key={index}
                  className=" job-desc flex gap-5 mb-3 w-4/5 lg:w-3/5 mx-auto"
                >
                  <FaSquareFull
                    className="text-xs flex-initial self-center
                  "
                  />
                  <p className="text-left flex-1 mb-0">{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
      </div>
      {/* <button
        type="button"
        className="border border-black block mx-auto my-0 py-1.5 px-2 font-medium"
      >
        More Info
      </button> */}
    </section>
  );
};
export default Tabs;
