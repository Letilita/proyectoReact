import { Link } from "react-router-dom";
import { Css } from "./index";
export const Pages = () => {

    const menu = ["Inicio","Promociones","Nosotros","Contacto"];
    const {li} = Css

    return(
        <ul className='align-self-center'>
           {menu.map(item =>
           <Link
           key={item}
           className ={li}
           to={item.toLowerCase()}>
           {item}
           </Link>
           )}
        </ul>
    )
}
