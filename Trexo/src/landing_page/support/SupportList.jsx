import React from 'react'

function SupportList() {
  return ( 
    <>
   <div className="container mt-5">
    <div className="row">
      <div className="col-8">
       <div style={{display:"flex",justifyContent:"space-between" ,  border:"1px solid lightgrey"}}>
        <div   style={{display:"flex",justifyContent:"space-between"}}>
          <div style={{padding:"16px", width:"4rem" ,textAlign:"center" ,backgroundColor:"	#d0f0ff"}}><i className="fa-solid fa-circle-plus"></i></div>
          <div ><h3 style={{marginTop:"0.8rem" ,marginLeft:"1rem", fontSize:"20px"}}>Account opening</h3></div>
        </div>
        <div ><button style={{backgroundColor:"white", border:"none"}}><i class="fa-solid fa-caret-down" style={{marginRight:"1.3rem", marginTop:"1rem"}}></i></button></div>
       </div>
       <div style={{display:"flex",justifyContent:"space-between" ,  border:"1px solid lightgrey",marginTop:"1.8rem"}}>
        <div   style={{display:"flex",justifyContent:"space-between"}}>
          <div style={{padding:"16px", width:"4rem" ,textAlign:"center" ,backgroundColor:"	#d0f0ff"}}><i class="fa-solid fa-users"></i></div>
          <div ><h3 style={{marginTop:"0.8rem" ,marginLeft:"1rem", fontSize:"20px"}}>Your Trexo account</h3></div>
        </div>
        <div ><button style={{backgroundColor:"white", border:"none"}}><i class="fa-solid fa-caret-down" style={{marginRight:"1.3rem", marginTop:"1rem"}}></i></button></div>
       </div>
       <div style={{display:"flex",justifyContent:"space-between" ,  border:"1px solid lightgrey",marginTop:"1.8rem"}}>
        <div   style={{display:"flex",justifyContent:"space-between"}}>
          <div style={{padding:"16px", width:"4rem" ,textAlign:"center" ,backgroundColor:"	#d0f0ff"}}><i class="fa-solid fa-bars-staggered"></i></div>
          <div ><h3 style={{marginTop:"0.8rem" ,marginLeft:"1rem", fontSize:"20px"}}>Kite</h3></div>
        </div>
        <div ><button style={{backgroundColor:"white", border:"none"}}><i class="fa-solid fa-caret-down" style={{marginRight:"1.3rem", marginTop:"1rem"}}></i></button></div>
       </div>
       <div style={{display:"flex",justifyContent:"space-between" ,  border:"1px solid lightgrey" ,marginTop:"1.8rem"}}>
        <div   style={{display:"flex",justifyContent:"space-between"}}>
          <div style={{padding:"16px", width:"4rem" ,textAlign:"center" ,backgroundColor:"	#d0f0ff"}}><i class="fa-solid fa-indian-rupee-sign"></i></div>
          <div ><h3 style={{marginTop:"0.8rem" ,marginLeft:"1rem", fontSize:"20px"}}>Funds</h3></div>
        </div>
        <div ><button style={{backgroundColor:"white", border:"none"}}><i class="fa-solid fa-caret-down" style={{marginRight:"1.3rem", marginTop:"1rem"}}></i></button></div>
       </div>
       <div style={{display:"flex",justifyContent:"space-between" ,  border:"1px solid lightgrey" ,marginTop:"1.8rem"}}>
        <div   style={{display:"flex",justifyContent:"space-between"}}>
          <div style={{padding:"16px", width:"4rem" ,textAlign:"center" ,backgroundColor:"	#d0f0ff"}}><i class="fa-solid fa-coins"></i></div>
          <div ><h3 style={{marginTop:"0.8rem" ,marginLeft:"1rem", fontSize:"20px"}}>Coin</h3></div>
        </div>
        <div ><button style={{backgroundColor:"white", border:"none"}}><i class="fa-solid fa-caret-down" style={{marginRight:"1.3rem", marginTop:"1rem"}}></i></button></div>
       </div>
      </div>
      <div className="col-4">
        <div className='container ' style={{ marginTop:"6rem", marginLeft:"3rem"}}>
             <div style={{width:"225px", border:"1px solid lightgrey"}}>
              <h4 style={{backgroundColor:"lightgray", padding:"7px"}}>Quick links </h4>
             <ol style={{padding:"0", margin:"0"}}>
              <li style={{borderBottom:"1px solid lightgrey", padding:"4px",listStyle:"none"}}><a href="" style={{ display: "block", width: "100%", textDecoration: "none", color: "inherit" }}> <span>1.</span> Track account opening</a> </li>
              <li style={{borderBottom:"1px solid lightgrey", padding:"4px",listStyle:"none"}} ><a href="" style={{ display: "block", width: "100%", textDecoration: "none", color: "inherit" }}><span>2.</span>Track segment activation</a></li>
              <li style={{borderBottom:"1px solid lightgrey", padding:"4px",listStyle:"none"}}><a href="" style={{ display: "block", width: "100%", textDecoration: "none", color: "inherit" }}> <span>3.</span>Intraday margins</a></li>
              <li style={{listStyle:"none"}}><a href="" style={{ display: "block", width: "100%", textDecoration: "none", color: "inherit" }}><span>4.</span>Kite user mannual</a></li></ol></div> 
        </div>
      </div>
    </div>
   </div>
    </>
   );
}

export default SupportList;