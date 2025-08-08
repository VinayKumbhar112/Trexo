import React from 'react'
function Types() {
  return ( 
    <>
   <div className='container mt-5'>
    <div className='row'>
      <div className="heading" style={{
        textAlign:"center"
      }}> 
        <h2>Explore different account types</h2>
      </div>

<div className="cardscollection mt-5" style={{
  display:"flex",
  gap:"4px",
  
}}>
<div className='cards'>
<a href="" style={{
  textDecoration:"none"
}}>
    <div className="d-flex align-items-start p-3 border rounded shadow-sm bg-white" style={{ maxWidth: '350px' }}>
      <div className="d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10" style={{ width: '40px', height: '40px', marginTop:"0.8rem"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0d6efd" className="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          <path fillRule="evenodd" d="M8 9a5 5 0 0 0-4.546 2.916.5.5 0 0 0 .832.554A4 4 0 0 1 8 10a4 4 0 0 1 3.714 2.47.5.5 0 0 0 .832-.554A5 5 0 0 0 8 9z"/>
        </svg>
      </div>
      <div className="ms-3">
        <h6 className="fw-semibold mb-1" style={{color:"grey", marginTop:"1rem"}}>Individual Account</h6>
        <p className="mb-0 text-muted" style={{ fontSize: '14px', marginTop:"2rem" }}>
          Invest in equity, mutual funds and derivatives
        </p>
      </div>
    </div>
</a>
</div>
<div className='cards'>
<a href="" style={{
  textDecoration:"none"
}}>
    <div className="d-flex align-items-start p-3 border rounded shadow-sm bg-white" style={{ maxWidth: '350px' }}>
      <div className="d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10" style={{ width: '40px', height: '40px', marginTop:"0.8rem"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0d6efd" className="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          <path fillRule="evenodd" d="M8 9a5 5 0 0 0-4.546 2.916.5.5 0 0 0 .832.554A4 4 0 0 1 8 10a4 4 0 0 1 3.714 2.47.5.5 0 0 0 .832-.554A5 5 0 0 0 8 9z"/>
        </svg>
      </div>
      <div className="ms-3">
        <h6 className="fw-semibold mb-1" style={{color:"grey", marginTop:"1rem"}}>Minor Account</h6>
        <p className="mb-0 text-muted" style={{ fontSize: '14px', marginTop:"2rem" }}>
          Invest in equity, mutual funds and derivatives
        </p>
      </div>
    </div>
</a>
</div>
<div className='cards'>
<a href="" style={{
  textDecoration:"none"
}}>
    <div className="d-flex align-items-start p-3 border rounded shadow-sm bg-white" style={{ maxWidth: '350px' }}>
      <div className="d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10" style={{ width: '40px', height: '40px', marginTop:"0.8rem"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0d6efd" className="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          <path fillRule="evenodd" d="M8 9a5 5 0 0 0-4.546 2.916.5.5 0 0 0 .832.554A4 4 0 0 1 8 10a4 4 0 0 1 3.714 2.47.5.5 0 0 0 .832-.554A5 5 0 0 0 8 9z"/>
        </svg>
      </div>
      <div className="ms-3">
        <h6 className="fw-semibold mb-1" style={{color:"grey", marginTop:"1rem"}}>HUF Account</h6>
        <p className="mb-0 text-muted" style={{ fontSize: '14px', marginTop:"2rem" }}>
          Invest in equity, mutual funds and derivatives
        </p>
      </div>
    </div>
</a>
</div>
<div className='cards'>
<a href="" style={{
  textDecoration:"none"
}}>
    <div className="d-flex align-items-start p-3 border rounded shadow-sm bg-white" style={{ maxWidth: '350px' }}>
      <div className="d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10" style={{ width: '40px', height: '40px', marginTop:"0.8rem"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0d6efd" className="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          <path fillRule="evenodd" d="M8 9a5 5 0 0 0-4.546 2.916.5.5 0 0 0 .832.554A4 4 0 0 1 8 10a4 4 0 0 1 3.714 2.47.5.5 0 0 0 .832-.554A5 5 0 0 0 8 9z"/>
        </svg>
      </div>
      <div className="ms-3">
        <h6 className="fw-semibold mb-1" style={{color:"grey", marginTop:"1rem"}}>NRI Account</h6>
        <p className="mb-0 text-muted" style={{ fontSize: '14px', marginTop:"2rem" }}>
          Invest in equity, mutual funds and derivatives
        </p>
      </div>
    </div>
</a>
</div>
</div>
    </div>
    </div>
   
    </>
   );
}

export default Types;