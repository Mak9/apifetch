import React, { Component } from 'react';
import DataFetch from './Component/DataFetch.js'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class App extends Component {
  
  constructor(){
    super()
    this.state={
      pictures:[],
    }
  }
  
  componentDidMount(){
    window.fetch('https://randomuser.me/api/')
    .then(results=>{return results.json()})
    .then(data=>{let pictures=data.results.map((pic)=>{
        return(
            <div className="row justify-content-center"><div className="col-4"><Card>
        <CardImg width="50%" src={pic.picture.large}/>
        <CardBody>
          <CardTitle><b>{`${pic.name.first} ${pic.name.last}`}</b></CardTitle>
          <CardSubtitle>{pic.email}</CardSubtitle>
        </CardBody>
      </Card></div></div>
            )
    }
    
    )
    this.setState({pictures:pictures})
    })
   
    
  }
  
  render() 
  {
    return (
      <div className="App">
        {this.state.pictures}
      </div>
    );
  }
}

export default App;
