function Projects() {
  return (
    <div>
      <h2>Projects</h2>

      <div>
        <h3>CI/CD Pipeline for Web App</h3>
        <p><strong>Description:</strong> Built a CI/CD pipeline to automatically test and deploy a Node.js application using GitHub Actions.</p>

        <p><strong>Tech Stack:</strong></p>
        <ul>
          <li>Git</li>
          <li>GitHub</li>
          <li>GitHub Actions</li>
          <li>Node.js</li>
        </ul>

        <p><strong>Key Features:</strong></p>
        <ul>
          <li>Automated testing on every push</li>
          <li>Continuous deployment to staging</li>
          <li>Branch-based workflows</li>
        </ul>
      </div>

      <hr />

      <div>
        <h3>Containerized Application</h3>
        <p><strong>Description:</strong> Containerized a web application using Docker and managed a multi-container setup.</p>

        <p><strong>Tech Stack:</strong></p>
        <ul>
          <li>Docker</li>
          <li>Docker Compose</li>
          <li>Node.js</li>
          <li>Redis</li>
        </ul>

        <p><strong>Key Features:</strong></p>
        <ul>
          <li>Custom Dockerfile</li>
          <li>Multi-container orchestration</li>
          <li>Environment isolation</li>
        </ul>
      </div>

      <hr />

      <div>
        <h3>Cloud Deployment with Terraform</h3>
        <p><strong>Description:</strong> Provisioned cloud infrastructure using Terraform on AWS.</p>

        <p><strong>Tech Stack:</strong></p>
        <ul>
          <li>Terraform</li>
          <li>AWS</li>
        </ul>

        <p><strong>Key Features:</strong></p>
        <ul>
          <li>Automated VM provisioning</li>
          <li>Reusable infrastructure modules</li>
          <li>Version-controlled configs</li>
        </ul>
      </div>

      <hr />

      <div>
        <h3>Kubernetes Deployment</h3>
        <p><strong>Description:</strong> Deployed a containerized application to a Kubernetes cluster.</p>

        <p><strong>Tech Stack:</strong></p>
        <ul>
          <li>Docker</li>
          <li>Kubernetes</li>
        </ul>

        <p><strong>Key Features:</strong></p>
        <ul>
          <li>Deployment & Service configs</li>
          <li>Pod scaling</li>
          <li>Rolling updates</li>
        </ul>
      </div>

      <hr />

      <div>
        <h3>Monitoring Stack</h3>
        <p><strong>Description:</strong> Implemented monitoring and dashboards using Prometheus and Grafana.</p>

        <p><strong>Tech Stack:</strong></p>
        <ul>
          <li>Prometheus</li>
          <li>Grafana</li>
        </ul>

        <p><strong>Key Features:</strong></p>
        <ul>
          <li>Real-time metrics collection</li>
          <li>Custom dashboards</li>
          <li>Alert setup</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
