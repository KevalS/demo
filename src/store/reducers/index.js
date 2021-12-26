import { combineReducers } from "redux";

import currentOrganization from './currentOrganization';
import organizations from './organizations';

const reducer = combineReducers({
  currentOrganization,
  organizations
})

export default reducer