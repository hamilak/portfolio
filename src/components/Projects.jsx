import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IoChevronBack, IoChevronForward, IoClose } from 'react-icons/io5';

const truncateDescription = (description, wordLimit) => {
  const words = description?.split(' ');
  if (words?.length <= wordLimit) {
    return description;
  }
  return words?.slice(0, wordLimit).join(' ') + '...';
};

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState({});
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      title: 'XpressScribe',
      description:
        'A web app where users can generate statement of purpose, letter of intent after filling a form. This tool allows users to create customized documents tailored to their needs.A web app where users can generate statement of purpose, letter of intent after filling a form. This tool allows users to create customized documents tailored to their needs.A web app where users can generate statement of purpose, letter of intent after filling a form. This tool allows users to create customized documents tailored to their needs.A web app where users can generate statement of purpose, letter of intent after filling a form. This tool allows users to create customized documents tailored to their needs.A web app where users can generate statement of purpose, letter of intent after filling a form. This tool allows users to create customized documents tailored to their needs.A web app where users can generate statement of purpose, letter of intent after filling a form. This tool allows users to create customized documents tailored to their needs.A web app where users can generate statement of purpose, letter of intent after filling a form. This tool allows users to create customized documents tailored to their needs.',
      slides: [
        "/Xpressscribe/login.png",
        "/Xpressscribe/dashboard.png",
        "/Xpressscribe/soplist.png",
        "/Xpressscribe/demoinfo.png",
        "/Xpressscribe/intro.png",
        "/Xpressscribe/acadfunding.png",
        "/Xpressscribe/hometies.png",
        "/Xpressscribe/travelexperience.png",
        "/Xpressscribe/review.png",
        "/Xpressscribe/subscribe.png",
        "/Xpressscribe/history.png",
      ],
    },
    {
      title: 'Web portal',
      description: 'Description for Project Two.',
      slides: [
        '/GAMS/dashboard.png',
        '/GAMS/questions.png',
        // '/GAMS/application.png',
        '/GAMS/profile.png',
      ],
    },
    {
      title: 'Chat bot',
      description: 'Description for Project Three.',
      slides: ['/bouncy-project-management-workflow.png'],
    },
  ];

  useEffect(() => {
    const initialSlides = {};
    projects.forEach((_, index) => {
      initialSlides[index] = 0;
    });
    setCurrentSlide(initialSlides);
  }, []);

  const handleNextSlide = (projectIndex) => {
    if (projects[projectIndex]) {
      setCurrentSlide((prevState) => ({
        ...prevState,
        [projectIndex]:
          (prevState[projectIndex] + 1) % projects[projectIndex].slides.length,
      }));
    }
  };

  const handlePrevSlide = (projectIndex) => {
    if (projects[projectIndex]) {
      setCurrentSlide((prevState) => ({
        ...prevState,
        [projectIndex]:
          (prevState[projectIndex] - 1 + projects[projectIndex].slides.length) %
          projects[projectIndex].slides.length,
      }));
    }
  };

  const openModal = (projectIndex) => {
    setSelectedProjectIndex(projectIndex);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProjectIndex(null);
  };

  return (
    <div>
      <div className='min-h-screen text-white leading-7 pt-10'>
        <div className='text-center'>
          <h6 className='md:text-5xl text-3xl font-bold'>PROJECTS</h6>
        </div>
        <div className='font-head-font grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-h-screen overflow-auto p-10 text-black'>
          {projects.map((project, projectIndex) => (
            <div
              key={projectIndex}
              className='p-2 border rounded-md shadow-lg object-contain bg-white cursor-pointer'
              onClick={() => openModal(projectIndex)}
            >
              <div className='flex justify-center mb-1'>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevSlide(projectIndex);
                  }}
                >
                  <IoChevronBack />
                </button>
                <div className='flex overflow-hidden'>
                  {currentSlide[projectIndex] !== undefined && (
                    <Image
                      src={projects[projectIndex].slides[currentSlide[projectIndex]]}
                      alt={`Slide ${currentSlide[projectIndex] + 1}`}
                      width={200}
                      height={200}
                    />
                  )}
                </div>
                <Image src="/icons8-click.gif" alt="Click" width={40} height={40} className='w-10 h-10' />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextSlide(projectIndex);
                  }}
                >
                  <IoChevronForward />
                </button>
              </div>
              <h6 className='text-2xl text-center uppercase tracking-widest mb-1'>
                {project.title}
              </h6>
              <p className='mb-1'>{truncateDescription(project.description, 16)}</p>
            </div>
          ))}
        </div>
      </div>

      {showModal && selectedProjectIndex !== null && (
        <div className='font-head-font fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center overflow-auto p-6'>
          <div className='bg-white max-w-5xl w-full rounded-md relative overflow-auto'>
            <button
              className='absolute top-4 right-4 text-3xl text-red-600'
              onClick={closeModal}
            >
              <IoClose />
            </button>
            <h2 className='text-4xl text-center mb-3'>
              {projects[selectedProjectIndex].title}
            </h2>
            <div className='flex justify-between items-center mb-3'>
              <button onClick={() => handlePrevSlide(selectedProjectIndex)}>
                <IoChevronBack size={24} />
              </button>
              <Image
                width={600}
                height={600}
                src={projects[selectedProjectIndex].slides[currentSlide[selectedProjectIndex]]}
                alt='Project Slide'
                className='object-contain'
              />
              <button onClick={() => handleNextSlide(selectedProjectIndex)}>
                <IoChevronForward size={24} />
              </button>
            </div>
            <div className='overflow-auto max-h-60 p-6'>
              <p className='text-lg'>{projects[selectedProjectIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
