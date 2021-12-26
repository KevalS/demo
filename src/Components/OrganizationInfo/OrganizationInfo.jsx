import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import './OrganizationInfo.css'

const OrganizationInfo = () => {
  const { currentOrganization = {} } = useSelector((state) => state);
  const { org_name } = currentOrganization || {};
  return (
    <div className="relativePosition">
      <h1 className="organization">Welcome to the {org_name} homepage</h1>
      <div className="bottomWrapper">
        <Link to="/settings">Settings</Link>
      </div>
    </div>
  );
};

export default OrganizationInfo;
