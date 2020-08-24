import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.REACT_APP_API_URL + '/users/';

export const getUsers = async () => {
  try {
    const users = await fetch(baseUrl);
    return handleResponse(users);
  } catch (error) {
    handleError(error);
  }
};
