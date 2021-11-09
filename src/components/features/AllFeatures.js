import React from "react";
import FeatureItems from "./FeatureItems";
import apiImg from '../../images/apiManagement.PNG';
import applogs from '../../images/appLogs.PNG';
import metrics from '../../images/metrics.PNG';
import memory from '../../images/memory.PNG';
import acl from '../../images/acl.PNG';
import cluster from '../../images/cluster.PNG';
const AllFeatures = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <FeatureItems redirect="apiManagement" imgURL={apiImg} title="Api Management" buttonDesc="Click To Explore API Dashboard"/>
        <FeatureItems imgURL={applogs} title="Application Logs" buttonDesc="Check Logs Now"/>
        <FeatureItems imgURL={metrics} title="Monitor Application" buttonDesc="Click To Explore App Metrics"/>
      </div>
      <div className="row my-3">
      <FeatureItems imgURL={memory} title="App Memory" buttonDesc="Check Memory Consumption"/>
        <FeatureItems imgURL={acl} title="User Management" buttonDesc="Click to Manage User Pools"/>
        <FeatureItems imgURL={cluster} title="Cluster PODs" buttonDesc="Access App Cluster PODs"/>
      </div>
    </div>
  );
};

export default AllFeatures;
