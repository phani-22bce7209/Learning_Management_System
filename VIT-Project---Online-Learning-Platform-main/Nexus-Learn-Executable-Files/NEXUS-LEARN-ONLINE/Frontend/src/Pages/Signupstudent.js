import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { baseUrl } from './BaseUrl'
import { ToastContainer, toast } from "react-toastify";

function Signupstudent() {
  const navigate = useNavigate()
  useEffect(()=>{getCourseData()},[])

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [grade, setGrade] = useState("")
  const [areaOfStudy, setAreaOfStudy] = useState("")
  const [skills, setSkills] = useState([])
  const [language, setLanguage] = useState("")
  const [skillInput, setSkillInput] = useState("")
  const [validation, setValidation] = useState(false)

  

  const postStudentData = () => {
    if (name !== "" & email !== "" & password !== "" & grade !== "" & areaOfStudy !== "" &  language !== ""&email.includes("@")&email.includes(".com")) {
      const item = {
        name: name,
        email: email,
        password: password,
        grade: grade,
        areaOfStudy: areaOfStudy,
        skills: skills,
        language: language,
        type: "student",
        profilePhoto: "",
      }
      axios.post(baseUrl + "addstudents", item).then(() => navigate("/"))
    } else {
      setValidation(true)
    }
  }

  const [courseData, setCourseData] = useState([])


  const getCourseData = () => {
    axios.get(baseUrl + "addcourse").then((res) => setCourseData(res.data.data))
  }
  return (
    <div>
      
        <div className='lgnd1'
          style={{
            height: "100vh",
            width: "100vw",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className='lgnd1' style={{ height: "97vh", width: "70%" }}>

            <label
              style={{
                fontSize: 30,
                fontWeight: "bolder",
                letterSpacing: "1px",

              }}
            >
              Signup as a student
            </label>

            <br />
            <br />
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", height: "60px", justifyContent: "space-evenly" }}>
              <input onChange={(e) => setName(e.target.value)} placeholder="Full Name" style={{ width: "50%", height: 40,border:validation===true&name===""?"1px solid red":"1px solid #0a98e2" }} />
            </div>

            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", height: "60px", justifyContent: "space-evenly", }}>

              <input onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" style={{ width: "50%", height: 40, border:validation===true&email===""?"1px solid red":"1px solid #0a98e2"}} />
              <label style={{fontSize:12, color:"red", display:(!email.includes("@")||!email.includes(".com"))&validation?"block":"none"}}>*Invalid Email</label>

            </div>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", height: "60px", justifyContent: "space-evenly" }}>
              <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={{ width: "50%", height: 40,border:validation===true&password===""?"1px solid red":"1px solid #0a98e2" }} />
            </div>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", height: "60px", justifyContent: "space-evenly" }}>
              <select onChange={(e) => setGrade(e.target.value)} style={{ width: "50%", height: 40,border:validation===true&grade===""?"1px solid red":"1px solid #0a98e2" }}>
                <option selected disabled>Knowledge Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advance</option>
                <option>Fluent</option>
              </select>
            </div>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", height: "60px", justifyContent: "space-evenly" }}>

              <select onChange={(e) => setAreaOfStudy(e.target.value)} style={{ width: "50%", height: 40,border:validation===true&areaOfStudy===""?"1px solid red":"1px solid #0a98e2" }}>
                <option selected disabled>Area of study</option>
                <option>High School Diploma</option>
                <option>Associate's Degree</option>
                <option>Bachelor's Degree</option>
                <option>Master's Degree</option>
                <option>PhD or Doctorate</option>
                <option>Teaching Certification</option>
                <option>other</option>
              </select>
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", gap: 10, marginBottom: 10 }}>
              <input
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              placeholder="Enter a skill"
              style={{
                width: "40%",
                height: 40,
                border: validation && skills.length === 0 ? "1px solid red" : "1px solid #0a98e2"
              }}
            />
            <button
            className="btn btn-outline-primary"
            onClick={() => {
              if (skillInput.trim() !== "" && !skills.includes(skillInput.trim())) {
                setSkills([...skills, skillInput.trim()]);
                setSkillInput(""); // clear input box
              }
            }}
            >
            Add
            </button>
          </div>

            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
  <div style={{ width: "50%", display: "flex", flexWrap: "wrap", gap: 10, marginTop: 10 }}>
    {skills.map((skill, index) => (
      <span
        key={index}
        style={{
          backgroundColor: "#e0f7fa",
          padding: "5px 10px",
          borderRadius: "15px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {skill}
        <span
          onClick={() => setSkills(skills.filter((_, i) => i !== index))}
          style={{
            marginLeft: 8,
            color: "red",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          ×
        </span>
      </span>
    ))}
  </div>
</div>


            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", height: "60px", justifyContent: "space-evenly" }}>
              <select onChange={(e) => setLanguage(e.target.value)} style={{ width: "50%", height: 40, border:validation===true&language===""?"1px solid red":"1px solid #0a98e2"}}>
                <option selected disabled>Learning Objective</option>
                <option>Become a Web Developer</option>
                <option>To obtain Data Analytics and Problem-Solving abilities</option>
                <option>Gain Logic Development skills</option>
                <option>Become Dev-Ops Engineer</option>
                <option>Become a Software Developer</option>
                <option>Develop Artificial Intelligence professional</option>
                <option>Acquire knowledge of Quality Assurance</option>


              </select>
            </div>
            <br />
            <button onClick={() => { postStudentData() }} style={{ width: "100%", height: 40, borderRadius: 5, color: "white", backgroundColor: "#9edc57", border: "none"  }}>Create Account</button><br /><br />
            <label>Already have an account? <span onClick={() => navigate("/")} style={{ color: "#8b5fb3" }}>Login</span></label>
          </div>
        </div>
    </div>
  );
}

export default Signupstudent;