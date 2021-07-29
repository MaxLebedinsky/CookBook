window._ = require('lodash');
window.axios = require('axios');
window.axios.defaults.baseURL = window.location.href + "api/v1";
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.withCredentials = true;

