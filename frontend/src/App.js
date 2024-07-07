import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Contact from './pages/ContactUs';
import ScrollToTop from './components/ScrollToTop';
import ComingSoon from './components/ComingSoon';

import DataStorageContent from './Content/DataStorageContent';
import DataAnalysisContent from './Content/DataAnalysisContent';
import ModelMonitoringContent from './Content/ModelMonitoringContent';
import MLOpsContent from './Content/MLOpsContent';
import CICDContent from './Content/CICDContent';
import DataProcessingContent from './Content/DataProcessingContent';
import MachineLearningContent from './Content/MachineLearningContent';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path='/comingsoon' element={<ComingSoon/>}/>
        <Route path="/datastorage" element={<DataStorageContent/>} />
        <Route path="/dataanalysis" element={<DataAnalysisContent/>} />
        <Route path="/modelmonitoring" element={<ModelMonitoringContent/>} />
        <Route path="/mlops" element={<MLOpsContent/>} />
        <Route path="/cicd" element={<CICDContent/>} />
        <Route path="/dataprocessing" element={<DataProcessingContent/>} />
        <Route path="/machinelearning" element={<MachineLearningContent/>} />
      </Routes>
    </>
  );
}

export default App;
