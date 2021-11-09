import React from "react";
import { Link } from "react-router-dom";

const FeatureItems = (props) => {
    const {imgURL,title,buttonDesc,redirect}=props;
    const redirectURL=`/home/${redirect}`;
    console.log("url will be",redirectURL);
  return (
    <div className="col-sm-4">
      <div  className="card cardhover" style={{width:'18rem',textAlign:'center',alignItems:'center'}}>
        <img style={{width:'80px'}} src={imgURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            Brief intro of service
          </p>
          <Link to={redirectURL} className="btn btn-primary">
            {buttonDesc}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureItems;
