const axios =  require('axios');

// Authorization utils for api calls

export default AuthPost = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.post(url, {
            headers: {
                'x-access-token': '' // where token is saved
            },
            data: data
        })
        .then(response => {
            resolve(response);
        })
        .catch(err => {
            reject(err);
        });
    });
};

export default AuthGet = (url) => {
    return new Promise((resolve, reject) => {
        axios.post(url, {
            headers: {
                'x-access-token': '' // where token is saved
            },
        })
        .then(response => {
            resolve(response);
        })
        .catch(err => {
            reject(err);
        });
    });
};

export default AuthPatch = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.post(url, {
            headers: {
                'x-access-token': '' // where token is saved
            },
            data: data
        })
        .then(response => {
            resolve(response);
        })
        .catch(err => {
            reject(err);
        });
    });
};

export default AuthDelete = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.post(url, {
            headers: {
                'x-access-token': '' // where token is saved
            },
            data: data
        })
        .then(response => {
            resolve(response);
        })
        .catch(err => {
            reject(err);
        });
    });
};