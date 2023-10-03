import React,{useState} from 'react'
import Input from './input'
import Button from './Button'
import { Link } from 'react-router-dom'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth} from './utils/firebase'


const SignUp = (props)=>{
        const [contact, setContact] = useState({
            FirstName:'',
            LastName:'',
            email:'',
            password: '',
            confirmPassword:''
        })
       
    
        const {FirstName,LastName, email, password, confirmPassword}=contact;
    
    
    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{  
        return {
        ...preValue,
        [name]: value
        }
        })
    }

    const handleSubmit=async(event)=>
    {
        event.preventDefault();

        if(password !== confirmPassword)
        {
            alert('Password do not match')
            return;
        }
        
        try {
            const {user}=await createAuthUserWithEmailAndPassword(email,password)
            await createUserDocFromAuth(user,{FirstName});

        } catch (error) {
                console.log('error in creating user', error.message)
        }
    }

 
    return <div className= 'header-div'>

        <h3>Create a DevLink Account</h3>

        <br></br>
        <h4>First Name*</h4>
       <Input
       className= 'sign'
       name= 'FirstName'
       type= 'name'
       placeholder ='First Name'
       onChange = {handleChange}
       value = {contact.FirstName}
       />
       <br></br>
       <h4>Last Name*</h4>
       <Input 
       className= 'sign'
       name= 'LastName'
       type= 'name'
       placeholder ='Last Name'
       onChange = {handleChange}
       value = {contact.LastName}
       />
       <br></br>
       <h4>Email*</h4>
       <Input 
       className= 'sign'
       name= 'email'
       type= 'email'
       placeholder ='Email'
       onChange = {handleChange}
       value = {contact.email}
       />
       

       <br></br>
       <h4>Password*</h4>
       <Input 
       className= 'sign'
       name='password'
       type= 'password'
       placeholder ='Password'
       onChange = {handleChange}
       value = {contact.password}
       />

       <br></br>
       <h4>Confirm Password*</h4>
       <Input 
       className= 'sign'
       name='confirmPassword'
       type= 'password'
       placeholder ='Confirm Password'
       onChange = {handleChange}
       value = {contact.confirmPassword}
       />

       <br></br>

       <button onClick={handleSubmit} className= 'signBTN'>
        <Link to='/'  style={{ textDecoration: 'none'}} >Create</Link>
       </button>

       <br />
       <br />
        
        
    </div>
    

}
export default SignUp