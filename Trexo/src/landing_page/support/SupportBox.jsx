import React from 'react'

function SupportBox() {
  return (
    <>
    <div style={{backgroundColor:"#f1f1f1", width:"100%" ,height:"15rem"}}>
       <div className="container" >
        <div className="row" style={{
       
        }}>
          <div style={{   display:"flex",
          flexDirection:"row",
          justifyContent:"space-between"}}>
          <div>
          <h3 style={{fontFamily:"sans-serif", marginLeft:"4rem" ,marginTop:"4rem"}}>Support Portal</h3></div>
          <div>
          <button type="button" class="btn btn-primary" style={{marginRight:"5rem" ,marginTop:"4rem", }}>My Tickects</button></div></div>
        </div>
        <div className="row">
          <div className="input-group flex-nowrap mt-4" style={{width:"80%" ,margin:"0 auto" ,height:"60px",boxShadow: "0 8px 16px rgba(0,0,0,0.2)"}}>
  <span className="input-group-text" id="addon-wrapping" style={{backgroundColor:"white"}}>
    <button style={{backgroundColor:"white" , border:"none"}}><i className="fa-solid fa-magnifying-glass" ></i></button></span>
  <input type="text" className="form-control" placeholder="Eg: How do i activate F&O.." aria-label="Username" aria-describedby="addon-wrapping"  />
</div>
        </div>
       </div>
       </div>
    </>
    );
}

export default SupportBox;