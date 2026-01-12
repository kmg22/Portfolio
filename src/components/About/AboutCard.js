import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <p>Hello! I am <span className="purple">Mingyeong Kim(김민경)</span>.</p>
        <p>I am a student at the <span className="purple">School of Computer Science</span> at Soongsil University in Korea, specializing in <span className="purple">Software/Information Security Convergence</span>.</p>
        
        <p>Representative Projects:</p>
        <ul>
          <li className="about-activity">
            🌐 Web Service Development based on Spring Boot, Django and Node.js
          </li>
          <li className="about-activity">
            🔒 Research on Web Security Vulnerabilities and LLM Supply Chain Attacks
          </li>
          <li className="about-activity">
            🚗 V2X-based Emergency Vehicle Preemption System Simulation (SUMO/Veins)
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
