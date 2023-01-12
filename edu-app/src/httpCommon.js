import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8123/edu-with-react/",
    headers: {
        // "Content-type":"application/json"
    }
})