import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { updateCurrentOrganizations } from "../../store/action/currentOrganizations";

import "./OrgnizationSettings.css";

const OrganizationSettings = () => {
  const dispatch = useDispatch();
  const { organizations = [], currentOrganization } = useSelector(
    (state) => state
  );
  const org =
    currentOrganization.org_name !== "Qatalog"
      ? currentOrganization.org_name
      : "";
  const [selectedOrg, setSelectOrg] = useState(org);
  const selectHandler = (event) => {
    const value = event.target.value;
    setSelectOrg(value);
  };
  const resetHandler = () => {
    setSelectOrg("");
    applyThemeHandler("");
  };
  const applyThemeHandler = (selectedOrg) => {
    const selectedTheme = organizations.find(
      ({ org_name }) => org_name === selectedOrg
    );
    dispatch(updateCurrentOrganizations(selectedTheme));
  };
  return (
    <div className="relativePosition">
      <div className="settingsWrapper">
        <div className="organizationWrapper">
          <select
            className="organizationSelect"
            value={selectedOrg}
            onChange={selectHandler}
          >
            {!selectedOrg && <option>Choose an Organization</option>}
            {organizations.map(({ org_name }, index) => (
              <option value={org_name} key={`${org_name}_${index}`}>{org_name}</option>
            ))}
          </select>
        </div>
        <div className="settingsButtons">
          <button className="button white" onClick={resetHandler}>
            Reset
          </button>
          <button
            className="button blue"
            onClick={() => applyThemeHandler(selectedOrg)}
          >
            Apply Theme
          </button>
        </div>
      </div>
      <div className="bottomWrapper">
        <Link to="/home">Your Homepage</Link>
      </div>
    </div>
  );
};

export default OrganizationSettings;
