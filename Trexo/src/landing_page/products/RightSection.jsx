import React from 'react'

function RightSection({
   imageurl,
  productName,
  productDescription,
  learnMore,
}
) {
  return (  
    <>
   <div className="container mt-5">
    <div className="row">
     
      <div className="col-5 " style={{
        marginTop:"10rem",
       
     
      }} >
        <h3 style={{marginLeft:"11rem"}}>{productName}</h3>
        <p className='mt-4' style={{marginLeft:"11rem"}}>{productDescription}</p>
       <a href="#" style={{marginLeft:"11rem"}}>{learnMore} <i className="fa-solid fa-arrow-right"></i></a>
        
      </div>
       <div className="col-5  ">
        <img src={imageurl} alt="img" style={{
          height:"550px",
          marginLeft:"2rem"
        }}/>
      </div>
    </div>
   </div>
    </>
  );
}

export default RightSection;
