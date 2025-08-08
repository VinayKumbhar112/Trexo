import React from 'react'

function Notfound () {
  return ( 
    <>
    <div className='container ' style={{
    marginTop:"2rem"
  }}>
    <div className='row  '>
    <div className='col-12 d-flex flex-column justify-content-center align-items-center' style={{
    marginTop:"7rem"
  }}>
 <div className='heading'><h3>404 Not Found</h3>
 </div>
 <div className='para mt-5'>
  <p>Kiaan couldn’t find that page
We couldn’t find the page you were looking for. Visit Trexo's home page</p>
 </div>
  </div>  </div>
  </div>
    </>
   );
}

export default Notfound;