import organizations from './orgs.json';

const initialState = organizations;

const organizationsReducer = (state = initialState, action) => {
    const {type=''} = action;
    switch (type) {
        default:
            return state
    }
}
export default organizationsReducer;