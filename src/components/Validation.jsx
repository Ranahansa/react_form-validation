import React from 'react'

const Validation = () => {

    const [username, setUsername] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[confirmPassword, setConfirmPassword] = useState("")

    const [usernameError, setUsernameError] = useState()
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
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}/>
                    <p>{usernameError}</p>

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