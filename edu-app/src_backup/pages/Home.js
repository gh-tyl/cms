import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jsonSrv from "../Services/jsonSrv";
function Home({ setMsg, msg }) {
    const navigate = useNavigate();
    const [sid, setSid] = useState('');
    // sessionStorage.setItem("sid", "test session key");
    // localStorage.setItem("sid","a key");
    // document.cookie = "sid=a key; expires=Thu, 12 Jan 2023 23:59:00 PST; path=/";
    // console.log(document.cookie);
    console.log(sessionStorage.getItem("sid"));
    const getSid = () => {
        jsonSrv.get("test2.php")
            .then(res => {
                console.log(res);
                setSid(res.data);
                sessionStorage.setItem("sid", res.data.sid);
            })
    };
    const sendSid = () => {
        const formData = new FormData();
        formData.append("sid", sid.sid);
        if (sessionStorage.getItem("sid") !== null) {
            formData.append("sid", sessionStorage.getItem("sid"));
            jsonSrv.send("getSid.php", formData)
                .then(res => {
                    console.log(res);
                }
                )
        }
    };
    return (
        <>

            <h1>Session ID: {sid.sid}</h1>
            <input value={msg} onChange={(e) => setMsg(e.target.value)} />
            <button onClick={() => navigate("/about")}>Click</button>
            <button onClick={getSid}>Get Session</button>
            <button onClick={sendSid}>Send Session</button>
        </>
    )
};
export default Home;