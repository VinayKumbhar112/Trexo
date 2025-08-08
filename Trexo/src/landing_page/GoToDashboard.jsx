

function GoToDashboard() {
  
   useEffect(() => {
    window.location.href = "http://localhost:3000/";
  }, []);

  return <div>Redirecting to dashboard...</div>;

}

export default GoToDashboard;