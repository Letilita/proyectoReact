import { Logo,Pages,Css } from "./index";

export const NavBar = () =>{
        
        const {containerNavBar} = Css

return(
        <div className={containerNavBar}>
           <Logo />
           <Pages />
           <Logo />
        </div>
        )
}