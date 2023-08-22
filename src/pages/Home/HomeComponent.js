import RoundedButton from "../../components/RoundedButton.js/RoundedButton";
import Navbar from "../../components/Navigation/Navbar";
import { useEffect, useState } from "react";




function HomeComponent(){
    //state ccreation
    const[name,setName]=useState("")
    const[address,setAddress]=useState("")
    const[salary,setSalary]=useState("")
    const[age,setAge]=useState("")

    useEffect(()=>{
        console.log("hi");
    },[name,address]);
console.log("Hello")
    return(  
        <div>
            <Navbar text="Home "></Navbar>
             
            <h1 style={{fontFamily:'revert',color:'green',fontStyle:'italic'}}>This is my Home Component</h1>
            
            <RoundedButton text="Click to go About"/><br/><br/>
            <input placeholder="Enter Name"value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
            <input placeholder="Enter Address"value={address} onChange={(e)=>{setAddress(e.target.value)}}/><br/><br/>
            <input placeholder="Enter Salary"value={salary} onChange={(e)=>{setSalary(e.target.value)}}/><br/><br/>
            <input placeholder="Enter Age"value={age} onChange={(e)=>{setAge(e.target.value)}}/><br/><br/><br/>
            <button type="button" className="btn btn-danger" onClick={()=>{console.log(name)}}>Enter</button>

        </div>
        
    );
}

export default HomeComponent;