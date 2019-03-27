import React,{Component} from 'react';

class DataFetch extends Component{
    
    componentDidMount(){
    window.fetch('https://randomuser.me/api/')
    .then(results=>{return results.json()})
    .then(data=>{data.results.map((pic)=>{
        return(
            <div><img src={pic.picture.medium}/></div>
            )
    }
    
    )})
   
    
  }
  render(){
      return(
        <div>
            hehe
        </div>)
}
    
}
export default DataFetch