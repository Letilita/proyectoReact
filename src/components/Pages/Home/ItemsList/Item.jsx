export const Item = ({item}) =>{

    const {nombre,imagen,precio,marca,descripcion} = item

    return(
        <div className="col"> 
            <div className="card">
                <img src={imagen} className="card-img-top" alt={imagen}/>
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">{descripcion}</p>
                        <p className="card-text">${precio}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{marca}</small>
                    </div>
  
            </div>
        </div>
     
    )
}