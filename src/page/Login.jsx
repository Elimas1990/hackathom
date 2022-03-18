import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ( )=>{
    const navigate= useNavigate()
    const [error,setError]=useState({})
    const handleSubmit=(event) =>{
        event.preventDefault();
        
     
        const element=event.target.elements
        const obj={
            user:element.ingresarUser.value,
            password:element.ingresarPassword.value
        }
        const options={
            method:"POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }
        fetch("https://coffee-sparkly-mayflower.glitch.me/api/login",options)
            .then(item => item.json())
            .then(data => {
                localStorage.setItem("user",JSON.stringify(data)) 
                navigate('/');
            })
            .catch(err=>setError(err))
    }       
    return (
        <div className="container">
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-4 text-center">
                    <form id="ingresarForm" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="ingresarUser" placeholder="Usuario"
                            aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="ingresarPassword" placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-flow btn-block" id="btnIngresar">Ingresar</button>
                    </form>
                    {
                        console.log(error)
                    }
                </div>
            </div>
            
        </div>
        
    )
}
export default Login