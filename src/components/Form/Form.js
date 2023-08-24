import './Form.css';
import { useEffect, useState } from "react";

function Form(){

const[email,setEmail]=useState("");
const[name,setName]=useState('');
const[pn,setPN]=useState('');
const[age,setAge]=useState('');
const[address,setAddress]=useState('');

    return(
        <div>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Name</label>
                    <input class="form-control" value={name} onChange={(e)=>{setName(e.target.value)}} id="exampleInputPassword1"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Phone Number</label>
                    <input  class="form-control" value={pn} onChange={(e)=>{setPN(e.target.value)}} id="exampleInputPassword1"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Age</label>
                    <input class="form-control" value={age} onChange={(e)=>{setAge(e.target.value)}} id="exampleInputPassword1"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Address</label>
                    <input  class="form-control" value={address} onChange={(e)=>{setAddress(e.target.value)}} id="exampleInputPassword1"></input>
                </div>
                
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        
       

    );
}

export default Form;