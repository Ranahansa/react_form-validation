import React ,{useState} from 'react'
import './style.css'


const Validation = () => {

    const [userName, setUserName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[confirmPassword, setConfirmPassword] = useState("")

    const [userNameError, setUserNameError] = useState()
    const [emailError, setEmailError] = useState()
    const [passwordError, setPasswordError] = useState()
    const [confirmPasswordError, setConfirmPasswordError] = useState()

    const[userColor, setUserColor] = useState("")
    const[emailColor, setEmailColor] = useState("")
    const[passwordColor, setPasswordColor] = useState("")
    const[confirmPasswordColor, setConfirmPasswordColor] = useState("")

    const validate = (e) => {
        e.preventDefault()

        if(userName.length < 1){
            setUserNameError("Username is required")
            setUserColor("red")
        } else if(userName.length < 3){
            setUserNameError("Username must be 3 characters or longer")
            setUserColor("red")
        } else {
            setUserNameError("")
            setUserColor("green")
        }

        if(email.includes("@") && email.includes(".")){
            setEmailError("")
            setEmailColor("green")
        } else {
            setEmailError("Email is not valid")
            setEmailColor("red")
        }

        if(password.length < 8){
            setPasswordError("Password is required")
            setPasswordColor("red")
        } else {
            setPasswordError("")
            setPasswordColor("green")
        }

        if(password !== confirmPassword){
            setConfirmPasswordError("Passwords must match")
            setConfirmPasswordColor("red")
        } else {
            setConfirmPasswordError("")
            setConfirmPasswordColor("green")
        }
    }

    return (
        <div>
            <div className='card'>
                <div className='card-image'> </div>

                <form>
                    <input type="text" 
                    placeholder='Username'
                    style={{borderColor:userColor}}
                    value={userName} 
                    onChange={(e) => setUserName(e.target.value)}/>
                    <p>{userNameError}</p>

                    <input type="email" 
                    placeholder='Email' 
                    style={{borderColor:emailColor}}
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                    <p>{emailError}</p>

                    <input type="password" 
                    placeholder='Password' 
                    style={{borderColor:passwordColor}}
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                    <p>{passwordError}</p>

                    <input type="password" 
                    placeholder='Confirm Password' 
                    style={{borderColor:confirmPasswordColor}}
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <p>{confirmPasswordError}</p>

                    <button onClick={validate} className='btn' type='submit'>Submit</button>
                </form>

            </div>    
        </div>
    )
}

export default Validation