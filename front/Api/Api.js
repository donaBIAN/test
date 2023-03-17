import axios from "axios"
export default {
    CreateUr(userInfo, config) {
        return axios.post(`http://192.168.2.24:8001/createUser`, userInfo, config)
    },
    Sign(userInfo, config) {
        return axios.post(`http://192.168.2.24:8001/signUp`, userInfo, config)
    },
    InsertMed(data, config) {
        return axios.post(`http://192.168.2.24:8001/InsertingMed`, data, config)
    },
    ShowData(config) {
        return axios.get(`http://192.168.2.24:8001/showData`, config)
    },
    DeleteData(id) {
        return axios.delete(`http://192.168.2.24:8001/Delete/${id}`)
    }



}
