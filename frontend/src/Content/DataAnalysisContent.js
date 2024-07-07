import React from 'react'
import Article from '../pages/Article';
import Image2 from '../assets/Data Analysis.png';


const DataAnalysisContent = () => {
  return (
    <Article
            title="Data Analysis & Exploration"
            breadcrumbLinks={[
              { name: "Home", href: "/" },
              { name: "Job Support", href: "/" },
              { name: "Data Analysis & Exploration", href: "/dataanalysis" },
            ]}
            overviewTitle="What is Data Analysis & Exploration?"
            overviewContent="Data analysis is collecting, cleansing, analyzing, presenting, and interpreting data to derive insights. It involves various techniques and methods to uncover patterns, trends, correlations, and insights from datasets. It helps organizations and individuals make informed decisions, identify opportunities, solve problems, and gain competitive advantages."
            typesTitle="Data Analysis Process"
            types={[
              "Problem Identification: The first step in the data analysis process is “identification.” The problem we are trying to solve. In other words, what research question do we want to address with our data analysis",
              "Data Collection: The next step is to collect data. We can do this through various internal and external sources. For example, surveys, questionnaires, focus groups, interviews, etc.",
              "Data Cleaning: Now that we have acquired the necessary data, the next step is to prepare it for analysis. This is essential since acquired data can be in different formats. Cleaning ensures we’re not dealing with bad data and our results are dependable.",
              "Data Analysis: This is the stage where we’d be ready to leverage any one or more of the data analysis and research techniques. The choice of technique depends upon the data we’re dealing with and the desired results.",
              "Data Interpretation: Data interpretation involves analyzing and making sense of data to extract meaningful insights and draw conclusions. It includes identifying patterns, trends, and relationships within the data and translating them into actionable information. Effective interpretation is essential for informing decisions and driving actions based on the analysis results."
            ]}
            toolsTitle="Tools & Technologies"
            tools={["Statistical Software: R, Python (with libraries like NumPy, Pandas, and SciPy).", "Data Visualization Tools: Tableau, Power BI, Matplotlib, and Plotly.", "Cloud-Based Services: Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure."]}
            imageSrc={Image2}
            requestForServiceContent={null}
          />
  )
}

export default DataAnalysisContent