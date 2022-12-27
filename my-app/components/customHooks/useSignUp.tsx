import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase/config"
import { useState } from "react"

const useSignUp = () => {

    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")


    const onClickHandler = () => {

       
        createUserWithEmailAndPassword(auth, newEmail, newPassword)
          
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
    return {
        newEmail,
        newPassword,
        onClickHandler,
        setNewEmail,
        setNewPassword
    }
}


export default useSignUp