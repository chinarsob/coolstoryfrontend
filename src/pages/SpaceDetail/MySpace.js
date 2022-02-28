import React, {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { deleteStory } from "../../store/user/actions";
import { useNavigate } from "react-router-dom";
import  "./style.css";
import EditSpaceForm from "../../components/EditSpaceForm.js";

export default function MySpace() {

    console.log("in page my space");
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const [showform,setshowform] = useState(false);
    // console.log("user",user);
    if (user.token === null) {
        navigate("/");
      }
    

    return (
       
       <div style={{ height:300,marginBlock:"auto"}}>
       {user.token!= null ?
       <div>
           <div>
            <button onClick={()=>navigate("/createstories")}>Post a cool story</button></div>
            <div style={{backgroundColor:user.space.backgroundColor,color:user.space.color,marginTop:10,height:170,width:600,marginLeft:350,display:"flex",flexDirection:"column",alignItems:"center"}} className="myspace">
            <h3>Title:{user.space.title}</h3>
            <p>Description:{user.space.description}</p>
            <button onClick={()=>setshowform(!showform)}>{showform ? "Close" : "Edit my space"}</button>
           
            </div> 
            {showform && (
          <div>
            <EditSpaceForm />
          </div>
        )}

    {user.space.stories.length>0 ?
        <div style={{display:"flex",justifyContent:"space-around"}}>
       { user.space.stories.map((story)=>{
            return<div style={{backgroundColor:user.space.backgroundColor,color:user.space.color,padding:20,height:380,width:250,marginBlock:30}}>
            <h3>{story.name}</h3>
            <p>{story.content}</p>
           <img src={story.imageUrl} style={{height:200 ,width:200}}></img>
           <button onClick={()=>{
               dispatch(deleteStory(story.id))}}>Delete story</button>
            </div>
       }) 
    }
       </div>            
    : "No story found for space"}
    </div>
: "" }
</div> )
}
