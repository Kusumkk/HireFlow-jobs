import { useEffect, useState } from "react";
import axios from "axios";

function MyApplications() {
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

  return (
    <div>
      <h1>My Applications</h1>

      {applications.map((app) => (
        <div key={app._id}>
          <h3>{app.jobId?.title}</h3>

          <p>{app.jobId?.company}</p>

          <p>Status: {app.status}</p>
        </div>
      ))}
    </div>
  );
}

export default MyApplications;