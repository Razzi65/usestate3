import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


const Forms = () => {

    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")


    const onClickHandler = () =>{
const auth = getAuth();
createUserWithEmailAndPassword(auth, newEmail, newPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

    return(
    <div>
    
        <h1> SIGN UP PAGE</h1>

        <label htmlFor="email">Email</label>
    <input onChange={(e)=>setNewEmail(e.target.value)} id="email" type="Email" placeholder={"Write Email"} className="m-5 border-dark" />

   <label htmlFor="pw">Password</label>
    <input onChange={(e)=>setNewPassword(e.target.value)}  id="pw" type="password" placeholder={"write password"} />
        <br/>
        <button onClick={()=>onClickHandler()}> Submit </button>
    </div>
)}

export default Forms