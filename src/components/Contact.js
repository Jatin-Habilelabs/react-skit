import { Link } from "react-router-dom";

function Contact() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Contact Us</h1>
      <p>Get in touch with us! We'd love to hear from you.</p>
      
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

export default Contact;
