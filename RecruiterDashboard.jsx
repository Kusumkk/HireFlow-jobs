import { useEffect, useState } from "react";
import axios from "axios";

function RecruiterDashboard() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/applications"
    );

    setApplications(response.data);
  };

  const updateStatus = async (
    applicationId,
    status
  ) => {
    try {
      await axios.put(
        `http://localhost:5000/api/applications/${applicationId}`,
        {
          status,
        }
      );

      fetchApplications();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Recruiter Dashboard</h1>

      {applications.map((app) => (
        <div
          key={app._id}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
          }}
        >
          <h3>{app.candidateName}</h3>

          <p>{app.candidateEmail}</p>

          <p>
            Job: {app.jobId?.title}
          </p>

          <p>
            Current Status:
            {" "}
            {app.status}
          </p>

          <select
            value={app.status}
            onChange={(e) =>
              updateStatus(
                app._id,
                e.target.value
              )
            }
          >
            <option value="Applied">
              Applied
            </option>

            <option value="Screening">
              Screening
            </option>

            <option value="Interview">
              Interview
            </option>

            <option value="Selected">
              Selected
            </option>

            <option value="Rejected">
              Rejected
            </option>
          </select>
        </div>
      ))}
    </div>
  );
}

export default RecruiterDashboard;