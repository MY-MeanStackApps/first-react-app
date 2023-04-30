let apiBaseUrl;

if (process.env.NODE_ENV === 'development') {
    apiBaseUrl = 'http://localhost:3000/api';
} else if (process.env.NODE_ENV === 'production') {
    apiBaseUrl = 'https://your-production-api-url.com/api';
} else {
    throw new Error('Unknown environment');
}

const environment = {
    API_BASE_URL: apiBaseUrl,
};

export default environment;
