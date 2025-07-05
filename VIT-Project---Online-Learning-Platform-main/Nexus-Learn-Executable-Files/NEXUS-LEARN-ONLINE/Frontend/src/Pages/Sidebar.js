import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import nexus from "../nexusn1.png";

function Sidebar() {
  const navigate= useNavigate()

  useEffect(()=>{
    const loginCheck =localStorage.getItem("check")
    if(loginCheck!=="okk"){
      navigate("/")
    }
  })
const type = localStorage.getItem("type")


  
  return (
    <div>
      <i onClick={()=>navigate("/Addcts")}><img
      style={{
        width: "80%",
        height: "25vh",
      }}
       src= {nexus}></img></i>
      
        <div className='sideblack' style={{height:"70vh", width:"50%",backgroundColor:"#0a98e2",borderRadius:"20px", display:"flex",flexDirection:"column",color:"white",alignItems:"center",justifyContent:"space-evenly",marginLeft:"15%", marginTop:"2vh",}}>
            
            <i onClick={()=>navigate("/Addcts")} style={{fontSize:"23px"}} className='fa fa-home' title='Home' ></i>
            <i onClick={()=>navigate("/Allcourses")} style={{fontSize:"23px"}} class="fa fa-graduation-cap" title='Courses' ></i>
            <i onClick={()=>navigate("/Setting")} style={{fontSize:"23px"}} class="fa fa-cog" title='Settings' ></i>
            <i onClick={()=>{localStorage.removeItem("check");navigate("/")}} style={{fontSize:"23px"}} class="fa fa-sign-out" title='Signout'></i>


        </div>
    </div>
  )
}

export default Sidebar

