import React from 'react'

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

    return (
        <div>
            <div className='card'>
                <div className='card-image'> </div>

                <form>
                    <input type="text" placeholder='Username'
                    style={{borderColor:userColor}}
                    value={userName} 
                    onChange={(e) => setUserName(e.target.value)}/>
                    <p>{userNameError}</p>

                    <input type="email" 
                    placeholder='Email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                    <p>{emailError}</p>

                    <input type="password" 
                    placeholder='Password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                    <p>{passwordError}</p>

                    <input type="password" 
                    placeholder='Confirm Password' 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <p>{confirmPasswordError}</p>
                </form>

            </div>    
        </div>
    )
}

export default Validation