import logo from './../../assets/Img/caramelo3.png'
import { Css } from './index'
export const Logo = () => {

    const {img} = Css
    
    return(
        <img height='70'
            width='40'
            src={logo}
            alt={logo}
            className={img}
            />
    )
}