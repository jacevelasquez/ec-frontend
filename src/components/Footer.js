import React from "react";

function Footer() {
  return (
    <footer className="footer">
        <div className="contact-info">
            <p>📧 <a href="mailto:yourname@example.com">yourname@example.com</a></p>
            <p>📍 Your City, Your Country</p>
        </div>
        
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank">
                <img src="https://img.shields.io/badge/LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/yourusername" target="_blank">
                <img src="https://img.shields.io/badge/Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" />
            </a>
            <a href="https://github.com/yourusername" target="_blank">
                <img src="https://img.shields.io/badge/GitHub-%23121011?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
            </a>
        </div>
        
        <p>© 2024 John Carlo Velasquez</p>
    </footer>
  );
}

export default Footer;
