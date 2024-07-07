import React from 'react'
import Article from '../pages/Article';
import Image6 from '../assets/Data Processing.png';


const DataProcessingContent = () => {
  return (
    <Article
            title="Data Processing & ETL"
            breadcrumbLinks={[
              { name: "Home", href: "/" },
              { name: "Job Support", href: "/" },
              { name: "Data Processing & ETL", href: "/dataprocessing" },
            ]}
            overviewTitle="What is Data Processing & ETL?"
            overviewContent="Data processing is the method of collecting raw data and translating it into usable information. It is usually performed in a step-by-step process by a team of data scientists and data engineers in an organization. The raw data is collected, filtered, sorted, processed, analyzed, stored, and then presented in a readable format, whereas ETL is a process in Data Warehousing and it stands for Extract, Transform and Load. It is a process in which an ETL tool extracts the data from various data source systems, transforms it in the staging area, and then finally, loads it into the Data Warehouse system."
            typesTitle="Data Processing Steps"
            types={[
              "Data Collection: The process begins with the collection of raw data from various sources. The stage establishes the foundation for subsequent processing, ensuring a comprehensive pool of data relevant to the intended analysis.",
              "Data preprocessing: It focuses on organizing, data cleaning, and formatting raw data. Irrelevant information is filtered out, errors are corrected, and the data is structured in a way that facilitates efficient analysis during subsequent stages of processing.",
              "Data Input: During the data input stage, the prepared data is entered into a computer system. This can be achieved through manual entry or automated methods, depending on the nature of the data and the systems in place.",
              "Data Analysis: The core of data processing involves manipulating and analyzing the prepared data. Operations such as sorting, summarizing, calculating, and aggregating are performed to extract meaningful insights and patterns.",
              "Reporting: The results of data processing are presented in a comprehensible format during the data output stage. This could include reports, charts, graphs, or other visual representations that facilitate understanding and decision-making based on the analyzed data.",
              "Data Storage: The final stage entails storing the processed data for future reference and analysis. This is crucial for maintaining a historical record, enabling efficient retrieval, and supporting ongoing or future data-related initiatives. Proper data storage ensures the longevity and accessibility of valuable information."
            ]}
            toolsTitle="Tools & Technologies"
            tools={["Data Preprocessing Tools : Talend, OpenRefine, and Tableau", "Reporting Tools: Power BI and Hive", "Data Analysis Tools: Knime and RapidMiner"]}
            imageSrc={Image6}
            requestForServiceContent={null}
          />
  )
}

export default DataProcessingContent