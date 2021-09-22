const axios =  require('axios');

/*
// Authorization utils for api calls
*/

export const AuthPost = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.post(url, {
            headers: {
                "content-type": "application/json",
            },
            withCredentials: true,
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

export const AuthGet = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            headers: {
                "content-type": "application/json",
            },
            withCredentials: true,
        })
        .then(response => {
            resolve(response);
        })
        .catch(err => {
            reject(err);
        });
    });
};

export const AuthPatch = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.patch(url, {
            headers: {
                "content-type": "application/json",
            },
            withCredentials: true,
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

export const AuthDelete = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.post(url, {
            headers: {
                "content-type": "application/json",
            },
            withCredentials: true,
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