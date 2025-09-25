import { Link } from "react-router-dom";

function Home() {
  // List of 2 users
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome to My App</h1>
      <p>This is the home page of our application.</p>
      
      {/* Navigation to About and Contact */}
      <div style={{ marginTop: "30px" }}>
        <h2>Navigation</h2>
        <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
          <Link 
            to="/about" 
            style={{ 
              padding: "12px 24px", 
              backgroundColor: "#2196F3", 
              color: "white", 
              textDecoration: "none", 
              borderRadius: "5px",
              fontSize: "16px"
            }}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            style={{ 
              padding: "12px 24px", 
              backgroundColor: "#FF9800", 
              color: "white", 
              textDecoration: "none", 
              borderRadius: "5px",
              fontSize: "16px"
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* User List */}
      <div style={{ marginTop: "40px" }}>
        <h2>User List</h2>
        <p>Click on a user to view their profile:</p>
        
        <div style={{ marginTop: "20px" }}>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {users.map(user => (
              <li 
                key={user.id}
              >
                  <Link 
                    to={`/user/${user.id}`}
                  >
                    View Profile {user.id}
                  </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
