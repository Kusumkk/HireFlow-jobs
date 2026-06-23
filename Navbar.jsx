import { Link } from "react-router-dom";

function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  return (
    <nav style={{ padding: "10px" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/jobs">Jobs</Link> |{" "}
      <Link to="/candidate-dashboard">
        Dashboard
      </Link>{" "}
      |{" "}
      <Link to="/my-applications">
        My Applications
      </Link>{" "}
      |{" "}
      <Link to="/create-job">
        Create Job
      </Link>{" "}
      |{" "}
      <Link to="/recruiter-dashboard">
        Recruiter Dashboard
      </Link>{" "}
      |{" "}
      <Link to="/upload-resume">
        Upload Resume
      </Link>{" "}
      |{" "}
      <button onClick={logout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;