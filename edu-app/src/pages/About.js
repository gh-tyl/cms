import userSrv from "../Services/userSrv";
import cryptoJs from "crypto-js";
import { useState } from "react";

function About() {
    const [res, setRes] = useState('No Result');

    const dec = (encData, key) => {
        const decData = cryptoJs.AES.decrypt(encData, key);
        return decData.toString(cryptoJs.enc.Utf8);
    };
    if (sessionStorage.getItem("user") != null) {
        const formData = new FormData();
        formData.append("email", dec(sessionStorage.getItem("user"), "Matheus"));
        userSrv.register("checkSession.php", formData)
            .then(response => {
                setRes(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <>
            <h1>ABOUT</h1>
            <h2>{res}</h2>
        </>
    );
}
export default About;