import { useState } from "react"
import "./Personlist.css";
import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";

function Personlist() {

     const [data, setData] = useState([
    {id:1, name:"Rattanan", gender:"ชาย"},
    {id:2, name:"Somdee", gender:"หญิง"},
    {id:1, name:"Seksan", gender:"ชาย"},
    {id:2, name:"Saranya", gender:"หญิง"}
  ])
  const [show, setShow] = useState(true)
  const myStyle={
    color:"red",
    fontSize:"25px"
  }
    return(

      <div className="container">
        <div className="header">
          <h2 style={myStyle}>จำนวนประชากร {data.length} คน</h2>
          <button onClick={()=>setShow(!show)}>{show ? "ซ่อน" : "แสดง"}</button>
        </div>
        
    <ul>
      {show && data.map((item) => (
      <li key={item.id} style={{borderStyle:"solid",borderColor:item.gender=="ชาย" ? "green" : "pink"}}>
      <img src={item.gender=="ชาย" ? boy : girl} width={50} height={50}/>
      <p>{item.name} {item.gender}</p>

      <div className="control">
        <button>ลบ</button>
      </div>
      </li>


      ))}
    </ul>
    </div>
    
    )
}

export default Personlist;