import React from "react";


export class HoverFunction extends React.Component {
  constructor(props) {
    super()
  }
    
     delete(ele,e){
        e.preventDefault();
        console.log(this.props.name.element.children["0"].children["2"].innerText);
         this.props.deletefun(this.props.name.element.children["0"].children["2"].innerText);
    }
  render(){
    return(
        <div id="frontlayer">
            <div className="">
                <div className="row">
                
                    <button className="btn btn-primary col-lg-3 col-lg-offset-1 col-xs-3 col-xs-offset-1 col-md-3 col-md-offset-1" onClick={this.delete.bind(this)}><span className="glyphicon glyphicon-trash"></span></button>
                
        
                <button className="btn btn-primary col-lg-4 col-xs-4 col-md-4" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-open"></span></button>
                
                    <button className="btn btn-primary col-lg-3 col-xs-3 col-md-3"><span className="glyphicon glyphicon-print"></span></button>
                
                </div>
            </div>
        </div>
    )
  }
}