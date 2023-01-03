import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";


const Signin = ()=>{

const {setAuthdata} = useContext(UserContext);

const navigate = useNavigate();

    const login = async (e)=>{
        e.preventDefault();
        const logdetails  = {email:username,password};
        try {
        const {data:{result}} = await axios.post("http://localhost:5000/auth/login",logdetails)
        setAuthdata(result);
        console.log(result);
            
        } catch (error) {
            
        }

        navigate("/");
        

    }
    const [username,setUsername] = useState('nuwan@gmail.com');
    const [password, setPassword] = useState("test");

    return(
        <form style={{padding:'100px 300px'}}>

            <div style={{ display: 'flex', padding: '5px' }}>
                <label style={{ flex: 1 }}>Username</label>
                <input style={{ flex: 2,lineHeight:'25px' }} type='text' id='email' value={username} onChange = {(e)=>setUsername(e.target.value)} />
            </div>

            <div style={{ display: 'flex', padding: '5px' }}>
                <label style={{ flex: 1 }}>Password</label>
                <input style={{ flex: 2,lineHeight:'25px' }} type='text' id='password' value ={password} onChange = {(e)=>setPassword(e.target.value)} />
            </div>

            <button onClick={login}>Login</button>
           
        </form>
    )
}

export default Signin;