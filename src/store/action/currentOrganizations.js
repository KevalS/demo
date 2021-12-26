// Action Types
export const UPDATE_CURRENT_ORGANIZATION = 'UPDATE_CURRENT_ORGANIZATION';

// Action Methods
export const updateCurrentOrganizations = (payload) => {
    return {
        type: UPDATE_CURRENT_ORGANIZATION,
        payload
    }
}