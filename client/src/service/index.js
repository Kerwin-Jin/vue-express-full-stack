import axios from "axios"
import qs from "qs"

export const getStudents = (type, score)=>{
    return axios.post('/api/getStudents', qs.stringify({type, score}));
}