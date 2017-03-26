import React from "react";
import { HoverFunction } from  "./HoverFunction";
import { render } from "react-dom";

export class Book extends React.Component {
  constructor(props) {
    super()
    //console.log(props.book);
    this.state={book:props.book,
                htmlcontent:{option:false
               }};
  }
 getOptions(e){
         e.preventDefault();
        this.setState({htmlcontent:{option:true}})
        }
    
    hideOptions(e){
        e.preventDefault();
        this.setState({htmlcontent:{option:false}})
    }
    
  render(){
    return(
     <div className="col-lg-3 col-xs-12 col-md-6">
        <div className="intro alert-success"onMouseOver={this.getOptions.bind(this)} onMouseLeave={this.hideOptions.bind(this)} ref="element" >
            <div className="">
                        {this.state.htmlcontent.option && < HoverFunction name={this.refs} deletefun={this.props.deleteElement}></HoverFunction>}
                        <div className=" col-lg-4 col-xs-4 col-md-4 alert-info">
                               <span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span>
                </div>
                <div className=" col-lg-8 col-xs-8 col-md-8 alert-info">
                               { this.state.book.name }
                </div>
                             { this.state.book.ex }
            </div>
        </div>
                               
    </div>
   
    );
  }
}

export class BooksRow extends React.Component {
  constructor(props) {
    super()
    //console.log(props.bookPair);
    this.state={bookPair:props.bookPair};
  }
    
    
  render(){
    return(
      <div className="row voffset">
    {
      this.state.bookPair.map((book, index) => (
        <Book key={ index } book={ book } deleteElement={this.props.delete}/>
      ))
    }
  </div>
    );
  }
}


export class Home extends React.Component {
  constructor(props) {
    super()
  
    this.state={books:[
  {
    name: 'HTML-1',
      ex:'HTML is a markup language that is used for creating web pages. The HTML tutorial section will help you understand the basics of HTML, so that you can create your own web pages.'
  },
  {
    name: 'CSS-1',
      ex:'CSS is used for describing the presentation of web pages. The CSS tutorial section will help you learn the essentials of CSS, so that you can fine control the style and layout of your HTML document.'
  },
  {
    name: 'Bootstrap-1',
      ex:'Bootstrap is a powerful front-end framework for faster and easier web development. The Bootstrap tutorial section will help you learn the techniques of Bootstrap so that you can create web your own website.'
  },
  
  {
    name: 'HTML-2',
      ex:'HTML is a markup language that is used for creating web pages. The HTML tutorial section will help you understand the basics of HTML, so that you can create your own web pages.'
  },
  {
    name: 'CSS-2',
      ex:'CSS is used for describing the presentation of web pages. The CSS tutorial section will help you learn the essentials of CSS, so that you can fine control the style and layout of your HTML document.'
  },
  {
            name:'Bootstrap-2',
            ex:'Bootstrap is a powerful front-end framework for faster and easier web development. The Bootstrap tutorial section will help you learn the techniques of Bootstrap so that you can create web your own website.'
  },
   {
            name:'HTML-3',
            ex:'HTML is a markup language that is used for creating web pages. The HTML tutorial section will help you understand the basics of HTML, so that you can create your own web pages.'
   },
    {
            name:'CSS-3',
         ex:'CSS is used for describing the presentation of web pages. The CSS tutorial section will help you learn the essentials of CSS, so that you can fine control the style and layout of your HTML document.'
    },
  {
            name:'Bootstrap-3',
            ex:'Bootstrap is a powerful front-end framework for faster and easier web development. The Bootstrap tutorial section will help you learn the techniques of Bootstrap so that you can create web your own website.'
  }
      
]};
    console.log("inside const");
    console.log(this.state.books);
  }
   
    deleteblock(element){
      console.log(element);
        var newBooks=this.state.books;
        for(var i=newBooks.length-1; i>=0; i--) {
    if( newBooks[i].name == element ) newBooks.splice(i,1);
        }
        //console.log(newBooks);
        
        this.setState({books:newBooks});
        
        console.log(this.state.books);
    }
    
    
  render(){
    return(
      <div className="container-fluid">
    {
      this.state.books.reduce((pairs, book, index) => { // split the books into pairs
        if(index % 4 === 0) {
           pairs.push([]);
        }
        pairs[pairs.length - 1].push(book);
        return pairs;
      }, []).map((pair, index) => ( // map the pairs to row
        <BooksRow key={ index } bookPair={ pair } delete={this.deleteblock.bind(this)}/>
      ))
    }
  </div> 
    );
  }
}