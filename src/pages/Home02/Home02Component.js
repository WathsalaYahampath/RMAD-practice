import Navbar from "../../components/Navigation/Navbar";
import Form from "../../components/Form/Form";


function Home02Component(){
  
    return(  
        <div>
            <Navbar header="Home"></Navbar>
            <div className="col">
               
                <Form></Form>

            </div>
            <div className="col">
                
            </div>
        </div>
        
    );
}

export default Home02Component;