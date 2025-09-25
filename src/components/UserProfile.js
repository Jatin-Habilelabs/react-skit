import { useParams, Link } from "react-router-dom";

function UserProfile() {
  // Get the dynamic parameters from the URL
  const { userId } = useParams();

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ marginBottom: "20px" }}>
        <Link 
          to="/" 
          style={{ 
            padding: "10px 20px", 
            backgroundColor: "#666", 
            color: "white", 
            textDecoration: "none", 
            borderRadius: "5px" 
          }}
        >
          Home
        </Link>
      </div>

      <h1>User Profile</h1>
      
      <div style={{ 
        backgroundColor: "#f5f5f5", 
        padding: "20px", 
        borderRadius: "8px", 
        marginBottom: "20px" 
      }}>
        <h2>User ID: {userId}</h2>
      </div>

    </div>
  );
}

export default UserProfile;
