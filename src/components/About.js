import { Link } from "react-router-dom";

function About() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>About Us</h1>
      <p>Welcome to our application! This is the About page.</p>
      
      <div style={{ marginTop: "30px" }}>
        <h2>Our Mission</h2>
        <p>We are dedicated to providing the best user experience through our simple and intuitive interface.</p>
        
        <h2>What We Do</h2>
        <ul>
          <li>Create amazing user profiles</li>
          <li>Provide dynamic routing</li>
          <li>Build responsive applications</li>
        </ul>
      </div>
      
      <div style={{ marginTop: "30px" }}>
        <Link 
          to="/" 
          style={{ 
            padding: "10px 20px", 
            backgroundColor: "#4CAF50", 
            color: "white", 
            textDecoration: "none", 
            borderRadius: "5px" 
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default About;
