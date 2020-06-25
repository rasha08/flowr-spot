type Env = {
  apiUrl: string;
};

export const environment: Env = {
  apiUrl: process.env.REACT_APP_API_URL || '',
};
