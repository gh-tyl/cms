import {useState} from "react";
import userSrv from "../Services/userSrv";
import cryptoJs from "crypto-js";

function Login(){
    const [res,setRes] = useState('');
    const enc = (data,key) =>{
      const encData = cryptoJs.AES.encrypt(data,key).toString();
      return encData;
    };
    const dec = (encData,key) =>{
        const decData = cryptoJs.AES.decrypt(encData,key);
        return decData.toString(cryptoJs.enc.Utf8);
    };
    const login = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        // formData.append("fakeInput","fakevalue");
        userSrv.register("login.php",formData)
        .then(response=>{
          setRes(response.data);
          if(response.data === "Valid User"){
            sessionStorage.setItem("user", enc(formData.get("email"), "Matheus"));
            console.log(dec(sessionStorage.getItem("user"), "Matheus"));
          }
        })
        .catch(err=>{
          console.log(err);
        })
      }
    return(
        <>
            <h1>{res}</h1>
            <form onSubmit={login}>
                <input type="email" name="email" placeholder="email"/>
                <input type="password" name="pass" placeholder="pass"/>
                <button type="submit">LOGIN</button>
            </form>
        </>
    );
}
export default Login;