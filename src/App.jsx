
import { useState } from "react";

import Dashboard from "./Dashboard";
import JobList from "./JobList";
import "./App.css";

function App() {

  // Job Data
  const [jobs, setJobs] = useState([
    {
      id: 1,
      companyName: "Mobile First Corp",
      position: "React Native Developer",
      location: "Remote",
      type: "Full-time",
      salary: "$130,000 - $175,000",
      description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
      status: "Not Applied"
    },
    {
      id: 2,
      companyName: "WebFlow Agency",
      position: "Web Designer & Developer",
      location: "Los Angeles, CA",
      type: "Part-time",
      salary: "$80,000 - $120,000",
      description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
      status: "Not Applied"
    },
    {
      id: 3,
      companyName: "DataViz Solutions",
      position: "Data Visualization Specialist",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$125,000 - $165,000",
      description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
      status: "Not Applied"
    },
    {
      id: 4,
      companyName: "CloudFirst Inc",
      position: "Backend Developer",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$140,000 - $190,000",
      description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
      status: "Not Applied"
    },
    {
      id: 5,
      companyName: "TechNova",
      position: "Frontend Developer",
      location: "New York, NY",
      type: "Full-time",
      salary: "$100,000 - $145,000",
      description: "Develop responsive user interfaces using HTML, CSS, JavaScript, and React.",
      status: "Not Applied"
    },
    {
      id: 6,
      companyName: "PixelCraft Studio",
      position: "UI/UX Designer",
      location: "Remote",
      type: "Contract",
      salary: "$70,000 - $100,000",
      description: "Create user-friendly digital experiences and design modern interfaces for web and mobile applications.",
      status: "Not Applied"
    },
    {
      id: 7,
      companyName: "Innovate Labs",
      position: "Software Engineer",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$110,000 - $160,000",
      description: "Develop software solutions, write clean code, and collaborate with a team of experienced engineers.",
      status: "Not Applied"
    },
    {
      id: 8,
      companyName: "BrightPath Technologies",
      position: "Junior JavaScript Developer",
      location: "Austin, TX",
      type: "Internship",
      salary: "$50,000 - $75,000",
      description: "Assist in developing interactive web applications and improve your JavaScript skills through real projects.",
      status: "Not Applied"
    }
  ]);

  // Current Active Tab
  const [currentTab, setCurrentTab] = useState("all");

  // Change Job Status
  function changeStatus(id, newStatus) {

    const updatedJobs = jobs.map(function(job) {

      if (job.id === id) {
        return { ...job, status: newStatus };
      }

      return job;

    });

    setJobs(updatedJobs);
  }

  // Delete Job
  function deleteJob(id) {

    const remainingJobs = jobs.filter(function(job) {
      return job.id !== id;
    });

    setJobs(remainingJobs);
  }

  return (
    <main className="container">

      <Dashboard jobs={jobs} />

      <JobList
        jobs={jobs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        changeStatus={changeStatus}
        deleteJob={deleteJob}
      />

    </main>
  );
}

export default App;
