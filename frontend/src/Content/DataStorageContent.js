import React from 'react'
import Article from '../pages/Article';
import Image1 from '../assets/Data Storage.png';

const DataStorageContent = () => {
  return (
    <Article
      title="Data Storage"
      breadcrumbLinks={[
        { name: "Home", href: "/" },
        { name: "Job Support", href: "/" },
        { name: "Data Storage", href: "/datastorage" },
      ]}
      overviewTitle="What is Data Storage?"
      overviewContent="Data storage essentially means that files and documents are recorded digitally and saved in a storage system for future use. Storage systems may rely on electromagnetic, optical or other media to preserve and restore the data if needed. Data storage makes it easy to back up files for safekeeping and quick recovery in the event of an unexpected computing crash or Cyber Attack."
      typesTitle="Types of Data Storage"
      types={[
        "Direct Attached Storage (DAS): It includes types of data storage that are physically connected to your computer. This storage is generally accessible to only a single machine. Eg, Hard Drives, Solid State Drives, etc.",
        "Network Attached Storage (NAS): It allows for multiple machines to share storage over a network. This is accomplished with multiple hard drives or other storage devices in a RAID configuration. One of the key benefits of NAS is the ability to centralize data and improve collaboration.",
      ]}
      toolsTitle="Tools & Technologies"
      tools={["Apache Hadoop", "Microsoft Azure", "Apache HBase"]}
      imageSrc={Image1}
      requestForServiceContent={null}
    />
  )
}

export default DataStorageContent