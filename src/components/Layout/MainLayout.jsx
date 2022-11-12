export const MainLayout =({children}) =>{

    return(
        <div 
            className="d-flex align-items-center justify-content-center"
            style ={{height: '100vh', zIndex:'-1'}}  
        >
            {children}
        </div>


    )
}

//className="container d-flex align-items justify-content-center position-absolute bg-light"