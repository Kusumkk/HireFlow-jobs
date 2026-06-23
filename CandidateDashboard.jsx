function CandidateDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h1>Candidate Dashboard</h1>

      <h3>Welcome {user?.name}</h3>

      <p>Email: {user?.email}</p>

      <p>Role: {user?.role}</p>
    </div>
  );
}

export default CandidateDashboard;