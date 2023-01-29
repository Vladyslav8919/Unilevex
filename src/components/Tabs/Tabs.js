import React, { useState, useEffect } from 'react';
import { FaSquareFull } from 'react-icons/fa';
import Title from '../Title';
import { jobs } from '../../data';

const Tabs = () => {
  const [value, setValue] = useState(0);

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section section-center">
      <div className="title">
        <Title>Our Vision</Title>
        <div className="jobs-center">
          <div className="flex place-content-center gap-x-2 mb-5 w-3/4 mx-auto">
            {jobs.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setValue(index)}
                  className={`m-2 mb-1 p-1  ${
                    index === value && 'font-bold border-b-2 border-gray-800'
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
          <article className="job-info">
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
    </section>
  );
};
export default Tabs;
