import {UPDATE_CURRENT_ORGANIZATION} from '../action/currentOrganizations';
const initialState = {
    org_name: 'Qatalog',
    background_image: ''
};

const currentOrganization = (state = initialState, action) => {
    const {type, payload = initialState} = action;
    switch (type) {
        case UPDATE_CURRENT_ORGANIZATION:
            return {...payload} 
        default:
            return state
    }
}
export default currentOrganization;