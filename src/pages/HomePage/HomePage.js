import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchSpace from "../../store/space/actions";
import { selectSpaces } from "../../store/space/selectors";
import "./style.css"
import { Link } from "react-router-dom";

export default function HomePage() {
    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(fetchSpace)
    },[])

    
    const spaces = useSelector(selectSpaces);
    console.log("no val",spaces);

    return(
        <div className="container">
        {spaces.map((space)=>{
            return <div style={{backgroundColor:space.backgroundColor, color:space.color,padding:10}} className="card">
            <h3>{space.title}</h3>
            <p>{space.description}</p>
            <div className="baseitem"><Link to={`/space/${space.id}`}>View details</Link></div>
            </div>
        })
    }
       </div>
    )
}
