

import React from "react";

import Layout from "./Layout";
import EVTable from "../components/EVTable";


const Dashboard: React.FC = () => {
  return (
    <Layout title="Dashboard">
      <EVTable />
    </Layout>
  );
};

export default Dashboard;
