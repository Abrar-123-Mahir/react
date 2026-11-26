
function JobCard({ job, changeStatus, deleteJob }) {

  return (
    <div className="job-card">

      <div className="job-header">

        <div>

          <h3 className="company-name">
            {job.companyName}
          </h3>

          <p className="position">
            {job.position}
          </p>

        </div>

        <button
          className="delete-button"
          onClick={() => deleteJob(job.id)}
          title="Delete job"
        >
          🗑
        </button>

      </div>

      <div className="job-info">

        <span>{job.location}</span>
        <span>•</span>
        <span>{job.type}</span>
        <span>•</span>
        <span>{job.salary}</span>

      </div>

      <div>

        <span className="job-status">
          {job.status.toUpperCase()}
        </span>

      </div>

      <p className="job-description">
        {job.description}
      </p>

      <div className="job-actions">

        <button
          className={`action-button interview-button ${
            job.status === "Interview" ? "selected" : ""
          }`}
          onClick={() => changeStatus(job.id, "Interview")}
        >
          INTERVIEW
        </button>

        <button
          className={`action-button rejected-button ${
            job.status === "Rejected" ? "selected" : ""
          }`}
          onClick={() => changeStatus(job.id, "Rejected")}
        >
          REJECTED
        </button>

      </div>

    </div>
  );
}

export default JobCard;
