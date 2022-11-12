import { useState } from "react"
import { createContext } from "react"


export const LoginContext = createContext()
export const LoginProvider = ({children}) =>{

    const [logged, setLogged] = useState(true)

    return(
        <LoginContext.Provider
            value={{logged}}>            
            { children }
        </LoginContext.Provider>
    )
}


 

// el children es para seguir viendo el NavBar

/*    

    function logout(){
        setLogged(false)
        setUser(undefined)
    }
    function loging() {
        setLogged(true)
    }

    function wait(){
        setWaiting(false)
    }
    function error(){
        setWaiting(false)
    }

firebaseLogin(user){

    const{
        displayName,
        isAnonymous,
        photoURL,
        email,
        uid
    }
}*/
    
/*ver a quien le modifica el cambio de nombre*/

/*    <LoginContext.Provider
        >
/*            {children}
        </LoginContext.Provider>
     adentro de LoginContext.Provider>value={{logged}}*/