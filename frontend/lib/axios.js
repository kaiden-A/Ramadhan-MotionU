import axios from 'axios';
import { useAuthStore } from '../stores/authStores';

const api = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    
    if (error.response?.status === 401) {
      
      const errorDetail = error.response?.data.message;

      if(errorDetail !== "Invalid Credentials"){
        
        //redirect to login
        const {openLoginModal} = useAuthStore.getState();
        openLoginModal();

      }
      


    }

    return Promise.reject(error);
  }
);

export default api;
