
function Dashboard({ jobs }) {

  // Total Jobs
  const totalJobs = jobs.length;

  // Total Interviews
  const totalInterviews = jobs.filter(function(job) {
    return job.status === "Interview";
  }).length;

  // Total Rejected
  const totalRejected = jobs.filter(function(job) {
    return job.status === "Rejected";
  }).length;

  return (
    <section className="dashboard">

      <h2>Job Application Tracker</h2>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <p>Total</p>
          <h3>{totalJobs}</h3>
        </div>

        <div className="dashboard-card">
          <p>Interview</p>
          <h3 className="interview-count">
            {totalInterviews}
          </h3>
        </div>

        <div className="dashboard-card">
          <p>Rejected</p>
          <h3 className="rejected-count">
            {totalRejected}
          </h3>
        </div>

      </div>

    </section>
  );
}

export default Dashboard;
