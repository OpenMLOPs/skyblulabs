import React from 'react'
import Article from '../pages/Article';
import Image7 from '../assets/Machine Learning.png';

const MachineLearningContent = () => {
  return (
    <Article
            title="Machine Learning & Model Development"
            breadcrumbLinks={[
              { name: "Home", href: "/" },
              { name: "Job Support", href: "/" },
              { name: "Machine Learning & Model Development", href: "/machinelearning" },
            ]}
            overviewTitle="What is Machine Learning & Model Development?"
            overviewContent="Machine learning is a subset of AI, which uses algorithms that learn from data to make predictions. These predictions can be generated through supervised learning, where algorithms learn patterns from existing data, or unsupervised learning, where they discover general patterns in data.
            Machine learning (ML) model development is the process of building a model that can recognize patterns or make predictions from data. The ML model development involves data acquisition from multiple trusted sources, data processing to make suitable for building the model, choose algorithm to build the model, build model, compute performance metrics and choose best performing model."
            typesTitle="Model Development Process"
            types={[
              "Exploratory data analysis involves data attributes identification, data preprocessing and feature engineering. Attributes’ identification involves identification of predictor/features variables (inputs) and target/class variable (output), along its data types (string or numeric or datetime) and classification of features into categorical and continuous variables that helps in applying appropriate treatment to be given to the variable by the algorithm while building the model.",
              "Building an ML Model requires splitting of data into two sets, such as training set and testing set in the ratio of 80:20 or 70:30. A set of supervised (for labelled data) and unsupervised (for unlabeled data) algorithms are available to choose from depending on the nature of input data and business outcome to predict.",
              "Model Hyperparameters Tuning is highly recommended step in the process, continue till the model performance reach around 80%-85%. For example, the Random Forest algorithm takes maximum depth, maximum number of features, number of trees etc., as hyperparameters which can be intuitively tuned for improving model accuracy.",
              "Finally. choose the model with optimum performance."
            ]}
            toolsTitle="Tools & Technologies"
            tools={["For EDA, python libraries such as Pandas, NumPy, Matplotlib, Seaborn, etc are used.", "To build a model, scikit-learn, TensorFlow are widely used libraries of python.", "MLFlow and optimisation functions like GridSearch, RandomizedSearch are used for hyperparameter tuning."]}
            imageSrc={Image7}
            requestForServiceContent={null}
          />
  )
}

export default MachineLearningContent