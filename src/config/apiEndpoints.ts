export const ENVIRONMENT = process.env.NODE_ENV;
export const prod = ENVIRONMENT === 'production'; // Anything else is treated as 'dev'
export const SERVER_URL = prod
  ? process.env.REACT_APP_SERVER_URI
  : 'http://localhost:3000';
