import axios from 'axios';

const API_URL = process.env.VUE_APP_API_HOST+'auth';


class AuthService{
    login(user){
        return axios.post(API_URL+'signin',{
            username: user.username,
            password: user.password
        }).then(
            response=>{
                if(response.data.accessToken){
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            }
        )
    }

    logout(){
        localStorage.removeItem('user')
    }

    register(user){
        return axios.post(API_URL + 'signup',{
            username: user.name,
            email: user.email,
            password: user.password
        }).then(
            response=>{
                return response.data;
            }
        );
    }
}

export default new AuthService()