import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchStoriesBySpace from "../../store/story/actions";
import { selectStories } from "../../store/story/selectors";
import { useParams } from "react-router-dom";
import {card} from "react-bootstrap";

export default function SpaceDetailsPage() {
    const dispatch = useDispatch();
    const spacedetail = useSelector(selectStories);
    console.log("here is spacedetail",spacedetail);
    //console.log(spacedetail.space);
    const routerParams = useParams();
    console.log(routerParams);
    useEffect(()=> {
       
        dispatch(fetchStoriesBySpace(routerParams.id))
    },[])
    return(
        <div style={{height:250,width:"50%",margin:"auto"}}>
        {spacedetail.map((detail)=>{
            return <div style={{backgroundColor:detail.space.backgroundColor,color:detail.space.color,padding:20,height:380,width:250,marginBlock:30}}>
            <h3>{detail.name}</h3>
            <p>{detail.content}</p>
           <img src={detail.imageUrl} style={{height:200 ,width:200}}></img>
            </div>
        })
    }
       </div>
    )
}