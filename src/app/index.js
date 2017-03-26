import React from "react";
import { render } from "react-dom";
import { Header } from  "./components/Header";
import { Home } from  "./components/Home";

import { HoverFunction } from  "./components/HoverFunction";

class App extends React.Component{
    
    
     constructor(props) {
    super()
    //console.log(props.book);
    
  }
    
    
   
    render(){
    
        
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12  col-lg-12  col-md-12 ">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12  col-lg-12  col-md-12 " id="home">
                        <Home ></Home>
                     
                    </div>
            
                </div>y
            </div>
        );
    }
}

render(<App/>,window.document.getElementById("app"));