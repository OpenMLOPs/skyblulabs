import React from 'react'
import Article from '../pages/Article';
import Image4 from '../assets/MLOps.png';


const MLOpsContent = () => {
  return (
    <Article
            title="MLOPs"
            breadcrumbLinks={[
              { name: "Home", href: "/" },
              { name: "Job Support", href: "/" },
              { name: "MLOPs", href: "/mlops" },
            ]}
            overviewTitle="What is MLOPs?"
            overviewContent="Machine learning operations (MLOps) are a set of practices that automate and simplify machine learning (ML) workflows and deployments. Machine learning and artificial intelligence (AI) are core capabilities that you can implement to solve complex real-world problems and deliver value to your customers. MLOps is an ML culture and practice that unifies ML application development (Dev) with ML system deployment and operations (Ops)."
            typesTitle="MLOPs Architecture"
            types={[
              "Source Control: It is a critical component of MLOps that enables reproducibility, collaboration, and automation throughout the machine learning development lifecycle.",
              "Test & Build Services: It involves crucial components of MLOps (Machine Learning Operations) workflows, ensuring the quality, reliability, and scalability of machine learning models.",
              "Deployment Services: It facilitate the seamless deployment and serving of machine learning models into production environments. These services ensure that models are scalable, reliable, and easily accessible by end-users or downstream applications.",
              "Model Registry: A model registry is a central repository or database that stores metadata and artifacts related to machine learning models. It provides a single source of truth for managing, versioning, and tracking machine learning models throughout their lifecycle.",
              "Feature Store: A feature store is a centralized repository for storing, managing, and serving features used in machine learning (ML) and data science workflows.",
              "ML metadata store:  It captures information about data, models, experiments, pipelines, and other artifacts, providing visibility, traceability, and reproducibility across the ML workflow.",
              "ML Pipeline orchestrator: an ML pipeline orchestrator is a platform or framework that automates the end-to-end execution of machine learning pipelines. It coordinates the flow of data, models, and computations across various stages of the ML workflow, from data ingestion and preprocessing to model training, evaluation, deployment, and monitoring."
            ]}
            toolsTitle="Tools & Technologies"
            tools={["Orchestration Tools: KubeFlow and Airflow", "Testing & Development Tools: MLFlow & Amazon Sagemaker", "Deployment Tools: BentoML"]}
            imageSrc={Image4}
            requestForServiceContent={null}
          />
  )
}

export default MLOpsContent