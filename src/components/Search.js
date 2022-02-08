import React from "react";
import './Card.css';
import Card from "../components/Card";
import {GiPopcorn} from  "@react-icons/all-files/gi/GiPopcorn";

class Search extends React.Component {

    render() {
      
        return <div class="topnav" >
            <div className='titleofsite'>
            <em style={{ color: "white", fontSize: "25px", position: "relative",  paddingLeft: "10px",  }}>Popcorn Movies </em>
            <em style={{ color: "white", fontSize: "25px", position:"absolute" , paddingLeft: "10px"  }}>  <GiPopcorn /> </em>
            </div>

            <form action="/" method="get">
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search movie"
                   
                />
                <button className='searchbutton' type="submit">Search</button>
                    

            </form>
        </div>

    }
}
export default Search;
