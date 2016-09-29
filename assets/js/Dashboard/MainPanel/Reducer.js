import * as types from './Constants';

const checkReducer = (state, action) => {
    switch (action.type) {
        case types.CREATE_WORKING_CHECK:
            return {
                tmpID: {
                    id: 'tmpID',
                    name: '',
                    domainNameOrIP: '',
                    port: 80,
                    history: [],
                    emailNotifications: false,
                    isEditing: true,
                },
            };

        case types.SET_WORKING_CHECK:
            return {
                [action.id]: {
                    oldState: {
                        ...state[action.id],
                    },
                    ...state[action.id],
                    isEditing: true,
                },
            };

        case types.UNSET_WORKING_CHECK:
            return {
                [action.id]: {
                    ...state[action.id].oldState,
                    isEditing: false,
                },
            };

        case types.UPDATE_WORKING_CHECK:
            return {
                [action.id]: {
                    ...state[action.id],
                    [action.attrName]: action.attrValue,
                },
            };

        case types.SAVE_WORKING_CHECK:
            return {
                [action.data.id]: {
                    ...action.data,
                    isEditing: false,
                },
            };

        default:
            return state;

    }
};

export const checksReducer = (state = {}, action) => {
    switch (action.type) {
        case types.CHECKS_POPULATE: {
            // If the state was empty (typically when the app just loaded),
            // we juste fill the state with formatted data
            if (Object.keys(state).length === 0) {
                return { ...action.checks };
            }
            // Otherwise, we only update the history values
            const newState = { ...state };
            for (const checkId in action.checks) {
                if (action.checks.hasOwnProperty(checkId)) {
                    newState[checkId] = {
                        ...action.checks[checkId],
                        name: state[checkId].name,
                        emailNotifications: state[checkId].emailNotifications,
                    };
                }
            }
            return { ...newState };
        }

        case types.CHECK_DESTROY: {
            const copy = Object.assign({}, state);
            delete copy[action.id];
            return copy;
        }

        case types.CREATE_WORKING_CHECK:
        case types.SET_WORKING_CHECK:
        case types.UNSET_WORKING_CHECK:
        case types.UPDATE_WORKING_CHECK:
        case types.SAVE_WORKING_CHECK:
            return {
                ...state,
                ...checkReducer(state, action),
            };

        default:
            return state;
    }
};

export const openCheckReducer = (state = {}, action) => {
    switch (action.type) {
        case types.OPEN_CHECK_STATS:
            return {
                ...action.data,
            };

        case types.CLOSE_CHECK_STATS:
            return {};

        default:
            return state;
    }
};
