import React from "react";
import Card from "../components/Card";
import '../components/Card.css'
import '../App.css';

class Like extends React.Component {


  
    render() {
        return (
            <div className="LikedContainer" style={{color:'white'}}>
    
              {
                this.props.likeList.map(movie=>{
                    return(
                        <Card
                        key={Math.random()}
                        title={movie.title}
                        imageUrl={movie.imageUrl}
                        body={movie.body}
                        delete={(data)=>this.props.deleteMovie(data)}
                      
                       
                    />
                   
                    )
                })
 
              }
              <div className='footer-text'>
                 <p >Created by Simge Kavalcı</p>
                 </div>
            </div>
        )
    };
};

export default Like;