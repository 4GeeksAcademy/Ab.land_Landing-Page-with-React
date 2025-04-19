import React from 'react'

const Card = (props) => {

    return (

        <div className="card col-10 offset-1 col-sm-8 offset-sm-2 col-md-5 offset-md-0 offset-xl-0 col-xl-3  p-0 my-2 ms-md-5 ms-xl-0" >
            <img style={{height:"225px",width:"auto", objectFit: "cover"}}
             src={props.imgSrc}
            className="card-img-top " alt={props.imgAlt}/>
                <div className="card-body">
                    <h3 className="card-title text-center ">{props.cardTitle}</h3>
                    <p className="card-text">{props.cardContent} </p>
                    <p className="card-text"><small className="text-body-secondary">{props.cardDate}</small></p>
                </div>
                <div className='card-footer text-center'>
                    <a href={props.aLink} target="blank" className='btn btn-primary'>Find Out More</a>
                </div>
        </div>

    )
};



export default Card;
