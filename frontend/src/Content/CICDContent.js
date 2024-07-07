import React from 'react'
import Article from '../pages/Article';
import Image5 from '../assets/CICD.png';


const CICDContent = () => {
  return (
    <Article
            title="CI/CD "
            breadcrumbLinks={[
              { name: "Home", href: "/" },
              { name: "Job Support", href: "/" },
              { name: "CI/CD", href: "/cicd" },
            ]}
            overviewTitle="What is CI/CD?"
            overviewContent="Continuous integration (CI) refers to the practice of automatically and frequently integrating code changes into a shared source code repository. Continuous delivery and/or deployment (CD) is a 2 part process that refers to the integration, testing, and delivery of code changes.Continuous delivery stops short of automatic production deployment, while continuous deployment automatically releases the updates into the production environment."
            typesTitle="CI/CD Architecture"
            types={[
              "Source Control: Developers commit code changes to a version control system (e.g., Git, or SVN). This step provides a centralized location for code and facilitates collaboration among team members.",
              "Build: Upon each code commit, the CI system automatically compiles the source code and generates executable files, libraries, and other build artifacts.",
              "Testing: Automated tests are run to ensure that the changes do not introduce new issues or regressions.",
              "Deployment: Once the tests pass, the CD system deploys the software to the appropriate environment.",
              "Monitoring & Feedback: Post-deployment, continuous monitoring tools are employed to track the application's performance and detect potential issues.",
            ]}
            toolsTitle="Tools & Technologies"
            tools={["Tools for Source Control: Git, SVN and Azure DevOps.", "Tools for Build: Jenkins & TeamCity.", "Testing Tools: Katalon, Cucumber & TestSigma.", "Deployment Tools: Buildbot & BitBucket.", "Monitoring & Feedback Tools: Prometheus, Grafana & Zabbix. "]}
            imageSrc={Image5}
            requestForServiceContent={null}
          />
  )
}

export default CICDContent