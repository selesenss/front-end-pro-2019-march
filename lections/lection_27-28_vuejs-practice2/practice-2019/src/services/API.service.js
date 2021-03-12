import {APP_DATA, USER_DATA, ACTION} from '../constants/API.constants.js';

const fetch = (url, options) => {
    if (!url) return;

    return window.fetch(`/${url}`, options).then(resp => resp.json());
}

const switcherForActions = (action) => {
    switch (action) {
        case ACTION.DATA: 
            return fetch(APP_DATA);
        case ACTION.USERS:
            return fetch(USER_DATA);
    }
}

const combineActions = actions => {
    if (Array.isArray(actions)) {
        return Promise
            .all(actions.map(action => switcherForActions(action)))
            .then((resp) => {
                let result = {};

                actions.forEach((action, index) => {
                    result[action] = resp[index];
                })

                return result;
            })
    }
    
    if (typeof actions === 'string') {
        return switcherForActions(actions);
    }
 
    return null;
}



export default {
    getData: combineActions
};