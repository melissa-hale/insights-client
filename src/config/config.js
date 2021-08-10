// setting this up so that if you have env vars set locally
// you can develop against your own instance if you want
const config = {
    apiUrl: process.env.API_URL || 'https://insights-project-api.herokuapp.com/api'
};

export default config;