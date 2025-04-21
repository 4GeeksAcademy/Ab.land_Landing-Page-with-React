import React from 'react'

const Card = (props) => {

    return (
        <div className='col-10 col-sm-8 col-md-5 col-xl-3 offset-xl-0 offset-1'>
            <div className="card" >
                <img style={{ height: "225px", objectFit: "cover" }}
                    src={props.imgSrc}
                    className="card-img-top " alt={props.imgAlt} />
                <div className="card-body">
                    <h3 className="card-title text-center ">{props.title}</h3>
                    <p className="card-text">{props.content} </p>
                    <p className="card-text"><small className="text-body-secondary">{props.lastUpdate}</small></p>
                </div>
                <div className='card-footer text-center'>
                    <a href={props.anchorLink} target="blank" className='btn btn-primary'>Find Out More</a>
                </div>
            </div>
        </div>
    )
};



export default Card;
