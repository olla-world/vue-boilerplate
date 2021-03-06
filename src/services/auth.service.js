import axios from 'axios';

const API_URL = process.env.VUE_APP_API_HOST;


class AuthService{
     //for real world project
    // login(user){
       

        // return axios.post(API_URL+'auth',{
        //     username: user.username,
        //     password: user.password
        // }).then(
        //     response=>{
        //         if(response.data.accessToken){
        //             localStorage.setItem('user', JSON.stringify(response.data));
        //         }
        //         return response.data;
        //     }
        // )

        
    // }

    //dumy data used from github
    login(){    
        return axios.get(API_URL+'auth.json').then(
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