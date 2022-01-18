import axios from "axios"
import qs from "qs"

export const getStudents = (type, score)=>{
    return axios.post('/api/getStudents1', qs.stringify({type, score}));
}