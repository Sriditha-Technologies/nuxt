// composables/useAuth.js
export const useAuth = () => {
    const isAuthenticated = ref(false);
  
    const SignIn = (youremail, password) => {
      // For demo purposes, let's just store the username
      localStorage.setItem('user', youremail);
      isAuthenticated.value = true;
    };
  
    const SignUp = () => {
      localStorage.removeItem('user');
      isAuthenticated.value = false;
    };
  
    const register = (youremail, password) => {
      // In a real app, you would send a request to your API here
      localStorage.setItem('user', youremail); // save user in local storage for demo
    };
  
    return { isAuthenticated, SignIn, SignUp, register };
  };
 