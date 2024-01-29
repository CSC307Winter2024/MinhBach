'use client';
import styles from "./page.module.css";
import { useEffect, useState } from 'react';
import SkillsComponent from './components/Skills';
import ProjectsComponent from './components/Projects.js';
import JobsComponent from './components/Jobs.js';

export default function Home() {
  const [resume, setResume] = useState({
    jobs: [],
    skills: [],
    projects: []
  });

  const [newJobTitle, setNewJobTitle] = useState('');
  const [desc1, setDesc1] = useState('');
  const [desc2, setDesc2] = useState('');

  const fetchSkills = async function () {
    const response = await fetch('/api/skills');
    const skills = await response.json();
    setResume(prevState => ({...prevState, skills: skills}));
  };

  const fetchJobs = async function () {
    const response = await fetch('/api/jobs');
    const jobs = await response.json();
    setResume(prevState => ({ ...prevState, jobs: jobs }));
  };

  const fetchProjects = async function () {
    const response = await fetch('/api/projects');
    const projects = await response.json();
    setResume(prevState => ({...prevState, projects: projects}));
  }


  useEffect(() => {
    fetchSkills();
    fetchJobs(); 
    fetchProjects();
  }, []);


  const skillList = resume.skills?.map((skill, index) => {
    return (
      <SkillsComponent skill={skill} index={skill} key={index}></SkillsComponent>
    );
  });

  const projectList = resume.projects?.map((project, index) => {
    return (
      <ProjectsComponent project={project} index={index} key={index}></ProjectsComponent>
    );});

  const jobList = resume.jobs?.map((job, index) => {
  return (
    <JobsComponent job={job} index={index} key={index}></JobsComponent>
  );
  });


 
  function jobChanged(event) {
    const { name, value } = event.target;

    switch (name) {
      case 'newJobTitle':
        setNewJobTitle(value);
        break;
      case 'desc1':
        setDesc1(value);
        break;
      case 'desc2':
        setDesc2(value);
        break;
      default:
        break;
    }
  }

  function addJob() {
  const newJobData = {
    type: newJobTitle,
    desc1: desc1,
    desc2: desc2,
  };

  const updatedJobs = [...resume.jobs, newJobData];
  setResume((prevState) => ({ ...prevState, jobs: updatedJobs }));

  setNewJobTitle('');
  setDesc1('');
  setDesc2('');
}

  


  return (
    <main>
      <h1> Minh Bach </h1>
      <section>
      <h2>Skills</h2>
      <ul>{skillList}</ul>
      </section>

      <section>
      <h2>Projects</h2>
      <ul>{projectList}</ul>
      </section>

      <section>
        <h2>Jobs</h2>
        <ul>{jobList}</ul>

          <div>
          <label>Add Job Title:</label>
          <input
            type="text"
            name="newJobTitle"
            value={newJobTitle}
            onChange={jobChanged}
            placeholder="Enter job's title..."
          ></input>
        </div>
        <div>
          <label>Job Description 1: </label>
          <input
            type="text"
            name="desc1"
            value={desc1}
            onChange={jobChanged}
            placeholder="Enter job description 1..."
          ></input>
        </div>
    <div>
      <label>Job Description 2: </label>
      <input
        type="text"
        name="desc2"
        value={desc2}
        onChange={jobChanged}
        placeholder="Enter job description 2..."
      ></input>
    </div>
    <button onClick={addJob}>Confirm</button>

      </section>


    </main>
  );
}
