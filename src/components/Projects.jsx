import React, { useEffect, useState } from 'react'
import { Divider } from 'rsuite';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState({});

  const projects = [
    {
      title: "XpressScribe",
      description: "A web app where users can generate statement of purpose, letter of intent after filling a form",
      slides: [
        "./bouncy-project-management-workflow.png",
        "./mypicture.png",
        "./bouncy-project-management-workflow.png"
      ]
    },
    {
      title: "Web portal",
      description: "Description for Project Two.",
      slides: [
        "./bouncy-project-management-workflow.png",
        "./bouncy-project-management-workflow.png",
        "./bouncy-project-management-workflow.png"
      ]
    },
    {
      title: "Chat app",
      description: "Description for Project Three.",
      slides: [
        "./bouncy-project-management-workflow.png",
        "./bouncy-project-management-workflow.png",
        "./bouncy-project-management-workflow.png"
      ]
    },
    {
      title: "Project Four",
      description: "Description for Project Four.",
      slides: [
        "./bouncy-project-management-workflow.png",
        "./bouncy-project-management-workflow.png",
        "./bouncy-project-management-workflow.png"
      ]
    }
  ];

  useEffect(() => {
    const initialSlides = {};
    projects.forEach((_, index) => {
      initialSlides[index] = 0;
    });
    setCurrentSlide(initialSlides);
  }, []);

  const handleNextSlide = (projectIndex) => {
    setCurrentSlide((prevState) => ({
      ...prevState,
      [projectIndex]: (prevState[projectIndex] + 1) % projects[projectIndex].slides.length
    }));
  };

  const handlePrevSlide = (projectIndex) => {
    setCurrentSlide((prevState) => ({
      ...prevState,
      [projectIndex]: (prevState[projectIndex] - 1 + projects[projectIndex].slides.length) % projects[projectIndex].slides.length
    }));
  };

  return (
    <div>
      <div className='min-h-screen text-white leading-10'>
        <div className='lg:flex items-center justify-start min-h-screen'>
          <div className="text-center h-20 lg:h-0 lg:flex flex-col items-center justify-center w-2/5 hidden">
            <div className=''>
              <h6 className="absolute text-white text-3xl lg:text-6xl uppercase font-bold opacity-15">
                Projects
              </h6>
              <h6 className=" text-gray-100 text-4xl lg:text-6xl pb-8 uppercase font-bold">
                Projects
              </h6>
            </div>
            <img src="/projects.svg" alt="" width={400} />
          </div>
          <div className='lg:w-3/5 font-head-font max-h-screen overflow-auto'>
            {projects.map((project, projectIndex) => (
              <div key={projectIndex} className="w-full p-10">
                <div className="flex justify-center mb-1">
                  <button onClick={() => handlePrevSlide(projectIndex)}>&lt; Back</button>
                  <div className="flex overflow-hidden">
                    <img src={project.slides[currentSlide[projectIndex]]} alt={`Slide ${currentSlide[projectIndex] + 1}`} width={200} height={200} />
                  </div>
                  <button onClick={() => handleNextSlide(projectIndex)}>Forward &gt;</button>
                </div>
                <h6 className="text-4xl uppercase tracking-widest mb-1">{project.title}</h6>
                <p className="mb-1">{project.description}</p>
                <div className='border border-gray-400'></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects