import { useEffect, useState } from "react";
import axios from "axios";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/jobs"
      );

      setJobs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const applyJob = async (jobId) => {
    try {
      const user = JSON.parse(
        localStorage.getItem("user")
      );

      await axios.post(
        "http://localhost:5000/api/applications",
        {
          candidateName: user.name,
          candidateEmail: user.email,
          jobId,
        }
      );

      alert("Applied Successfully");
    } catch (error) {
      console.log(error);
      alert("Application Failed");
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase());

    const matchesLocation =
      locationFilter === "" ||
      job.location === locationFilter;

    return matchesSearch && matchesLocation;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Available Jobs</h1>

      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginRight: "10px",
        }}
      />

      <select
        value={locationFilter}
        onChange={(e) =>
          setLocationFilter(e.target.value)
        }
        style={{
          padding: "10px",
        }}
      >
        <option value="">All Locations</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Chennai">Chennai</option>
      </select>

      <br />
      <br />

      {filteredJobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        filteredJobs.map((job) => (
          <div
            key={job._id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <h3>{job.title}</h3>

            <p>
              <strong>Company:</strong>{" "}
              {job.company}
            </p>

            <p>
              <strong>Location:</strong>{" "}
              {job.location}
            </p>

            <p>
              <strong>Salary:</strong> ₹
              {job.salary}
            </p>

            <p>
              <strong>Description:</strong>{" "}
              {job.description}
            </p>

            <p>
              <strong>Skills:</strong>{" "}
              {job.skills.join(", ")}
            </p>

            <button
              onClick={() => applyJob(job._id)}
            >
              Apply Now
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Jobs;