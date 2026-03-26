import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <p>
          Hello! I am <span className="purple">Mingyeong Kim</span>.
        </p>
        <p>
          I am a backend-focused developer with a background in{" "}
          <span className="purple">Computer Science</span>, with particular
          interest in <span className="purple">Software Engineering</span> and{" "}
          <span className="purple">Information Security</span>.
        </p>

        <p>Representative Projects:</p>
        <ul>
          <li className="about-activity">
            Web service development based on Spring Boot, Django, and Node.js
          </li>
          <li className="about-activity">
            Research on web security vulnerabilities and LLM supply chain attacks
          </li>
          <li className="about-activity">
            V2X-based emergency vehicle preemption system simulation (SUMO/Veins)
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
