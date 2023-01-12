import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './pages/Layout';
import Nopage from './pages/Nopage';
import RegCompo from './pages/RegCompo';
import { useState } from 'react';

function Main(){
    const [msg,setMsg] = useState("");
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home setMsg={setMsg} msg={msg}/>}/>
                    <Route path='about' element={<About msg={msg}/>}/> {/* if path == /about then displaying componenet should be <About/> */}
                    <Route path='register' element={<RegCompo/>}/>
                    <Route path='*' element={<Nopage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};
export default Main;