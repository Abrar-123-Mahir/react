
import JobCard from "./JobCard";

function JobList({
  jobs,
  currentTab,
  setCurrentTab,
  changeStatus,
  deleteJob
}) {

  // Filter Jobs
  let filteredJobs = jobs;

  if (currentTab === "interview") {

    filteredJobs = jobs.filter(function(job) {
      return job.status === "Interview";
    });

  } else if (currentTab === "rejected") {

    filteredJobs = jobs.filter(function(job) {
      return job.status === "Rejected";
    });

  }

  // Tab Names
  const tabs = ["all", "interview", "rejected"];

  return (
    <section className="jobs-section">

      <div className="section-heading">

        <h3>Available Jobs</h3>

        <p>
          {filteredJobs.length}
          {filteredJobs.length === 1 ? " job" : " jobs"}
        </p>

      </div>

      {/* Tabs */}
      <div className="tabs">

        {tabs.map(function(tab) {

          return (
            <button
              key={tab}
              className={`tab-button ${
                currentTab === tab ? "active" : ""
              }`}
              onClick={() => setCurrentTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          );

        })}

      </div>

      {/* Job Cards */}
      <div className="jobs-container">

        {filteredJobs.map(function(job) {

          return (
            <JobCard
              key={job.id}
              job={job}
              changeStatus={changeStatus}
              deleteJob={deleteJob}
            />
          );

        })}

      </div>

      {/* Empty State */}
      {filteredJobs.length === 0 && (

        <div className="empty-state">

          <div className="empty-icon">
            <span>📂</span>
          </div>

          <h3>No jobs Available</h3>

          <p>
            There are currently no jobs in this category.
            Try another tab or update your application status.
          </p>

        </div>

      )}

    </section>
  );
}

export default JobList;
