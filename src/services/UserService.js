import axios from 'axios';

const USER_API_BASE_URL = "http://sagarvora1-001-site2.itempurl.com/api/Users";

class UserService {

    getUsers(){
        return axios.get(USER_API_BASE_URL + '/getalluser');
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL + '/createupdateuser');
    }

    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    updateUser(user, userId){
        return axios.put(USER_API_BASE_URL + '/createupdateuser');
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }
}

export default new UserService()
