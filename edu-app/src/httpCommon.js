import axios from "axios";

export default axios.create({
    baseURL:"http://localhost/PHP/backend/",
    headers:{
        // "Content-type":"application/json"
    }
})