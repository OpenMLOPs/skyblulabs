import React from 'react'
import Article from '../pages/Article';
import Image3 from '../assets/Model Monitoring.png';


const ModelMonitoringContent = () => {
  return (
    <Article
            title="Model Monitoring & Maintenance"
            breadcrumbLinks={[
              { name: "Home", href: "/" },
              { name: "Job Support", href: "/" },
              { name: "Model Monitoring & Maintenance", href: "/modelmonitoring" },
            ]}
            overviewTitle="What is Model Monitoring?"
            overviewContent="Model monitoring refers to the process of tracking the performance of machine learning models in production. It enables AI team to identify and eliminate a variety of issues, including bad quality predictions and poor technical performance. As a result, machine learning models deliver the best performance."
            typesTitle="How to Maintain a Model?"
            types={[
              "Monitoring Data Drift: Data drift is the phenomenon where the input data to an ML model changes over time, negatively impacting the output into degradation.",
              "Model Interpretability and Explainability: Interpretability is the measure of how easily a data scientist can understand the basis of an ML model’s predictions and results. It is key to debugging, auditing, and finetuning your ML model.",
              "Establishing Monitoring Benchmarks: Every ML model is expected to deliver results as close to accurate as possible based on the data inputs. Data scientists should, therefore, establish clear monitoring benchmarks that create a range of tolerances for deviations.",
              "Continuous Validation: Continuous Validation (CV) refers to employing a set of tools and processes that monitor the performance of your ML model in real-time right from the point of deployment.",
              "Feature Importance Tracking: Feature importance is a ranking system that helps data scientists determine the significance of input features to the predictions that a model creates."
            ]}
            toolsTitle="Tools & Technologies"
            tools={["Mlflow", "TensorBoard", "Datadog", "Amazon SageMaker", "Google Cloud AI Platform Monitoring"]}
            imageSrc={Image3}
            requestForServiceContent={null}
          />
  )
}

export default ModelMonitoringContent