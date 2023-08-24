import './Form.css';
import { useEffect, useState } from "react";
import { db } from '../../firebase-config';
import { collection, addDoc, getDocs, QuerySnapshot } from "firebase/firestore";

function Form(){

const[email,setEmail]=useState("");
const[name,setName]=useState('');
const[pn,setPN]=useState('');
const[age,setAge]=useState('');
const[address,setAddress]=useState('');
const[students, setStudents]= useState([]);

useEffect(()=>{ 
    console.log("use effect called"); 
    getStudents();            
             
    },[]); 



// useEffect(()=>{              //use effect eka[] athule mukuth nathi welawata component eka call wenakotama use effect eka call wee..
//     console.log("hi");        // ehi [] athulata state list eka dunnoth state eka change wenkotama use effect eka call wee.
// },[]); //[name,address]

const addStudent=async()=>{
    console.log("hiiiiiiiiiiiiiiiiiiii");    
    const docRef = await addDoc(collection(db, "Students"), {
        email: email,
        name: name,
        pn: pn,
        age: age,
        address: address
      }).then(()=>{
        alert("added successfully")
        console.log("data added!") 
        clearData(); 
      }).catch((error)=>{
        alert("added fail")
        console.log(error)  
      });
   // console.log(email+" "+name+""+pn+" "+age+" "+address)
}

const clearData=()=>{
    setAddress('');
    setName('');
    setAge('');
    setPN('');
    setEmail('');

}

const getStudents=async()=>{
    const querySnapshot =await getDocs(collection(db, "Students"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    
    //console.log(doc.id, " => ", doc.data());

    setStudents(QuerySnapshot.docs.map)

    });

}

    return(
        <div>
            <div className="row">
                <div className="col">
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
                        
                        
                        <button type="button" class="btn btn-primary" onClick={addStudent}>Save Student</button>
                    </form>
                </div>
                <div className="col">
                     <table class="table table-sm">
                            <thead>
                                <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone no.</th>
                                <th scope="col">Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                </tr>
                            </tbody>
                            </table>
                </div>
            </div>
           
        </div>
        
       

    );
}

export default Form;