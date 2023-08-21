import RoundedButton from "../../components/RoundedButton.js/RoundedButton";
import Navbar from "../../components/Navigation/Navbar";
function AboutComponent(){
    return(
        <div>
        <Navbar text="About"></Navbar>
        <h1 style={{fontFamily:'revert',color:'green',fontStyle:'italic'}}>This is my About Component</h1>
        <RoundedButton text="click to go Home"/>
        
        </div>
        
    );
}

export default AboutComponent;