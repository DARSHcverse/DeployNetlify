import React,{useState} from 'react'
import INPUT from './input'
import { Link } from 'react-router-dom'
import { createUserDocFromAuth, signinAuthUserWithEmailAndPassword } from './utils/firebase'


const Login = (props)=>{
     
        const [contact, setContact] = useState({
            email: '',
            password: ''
        })
       
        const {email, password} = contact
    

    
    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{  
        return {
        ...preValue,
        [name]: value
        }
        })
    }
    const handleSubmit = async(event) =>
    {
        event.preventDefault();

       

        try{
            const response = await signinAuthUserWithEmailAndPassword(email,password);
            console.log(response)
        }
        catch(error){
            console.log('error in login', error.message)

        }
    }
 
    return <div className= 'header-div2'>

        <h3>Log In To DevLink</h3>
        <h4>Email</h4>
       <INPUT 
       className= 'log'
       name= 'email'
       type= 'text'
       placeholder ='email'
       onChange = {handleChange}
       value = {contact.email}
       />

       <br></br>
       <h4>Password</h4>
       <INPUT 
       className= 'log'
       name='password'
       type= 'password'
       placeholder ='password'
       onChange = {handleChange}
       value = {contact.password}
       />

       <br></br>
       
       <button onClick={handleSubmit} className= 'logBtn'>
        <Link to='home' style={{ textDecoration: 'none'}} id='SIGNIN'>Sign in</Link>
       </button>

       
       <div className='SNUPinstead'>
        <button className='SNbtn'><Link to="/signup" style={{ textDecoration: 'none'}}> Sign Up </Link></button>
       </div>

       <br></br>

    </div>

}
export default Login