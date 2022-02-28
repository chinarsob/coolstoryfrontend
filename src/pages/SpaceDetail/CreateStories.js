import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { postStory } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";
import { useNavigate } from "react-router-dom";

export default function CreateStories(){
    const user = useSelector(selectUser);
const navigate = useNavigate();
    if(user.token == null){
        navigate("/");
    }
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [storyImage,setstoryImage] = useState();
    function submitForm(event) {
        event.preventDefault();
    
        // console.log(name, content, imageUrl);
        dispatch(postStory(name, content, storyImage));
        setName("");
        setContent("");
        setstoryImage("");
      }
    return(
        <div style={{marginLeft:"100"}}>
        <form >
        <div style={{paddingTop:20}}><label>Name</label>
            <input type="text" value={name} onChange={event => setName(event.target.value)}></input>
            </div>
            <div style={{paddingTop:20}}><label>Content</label>
            <input type="text" value={content} onChange ={event =>setContent(event.target.value)}></input>
            </div>
            <div style={{paddingTop:20}}><label>Image</label>
            <input type="text" onChange={(e)=>setstoryImage(e.target.value)}></input>
            <img src = {storyImage} Alt="No Image" style={{height:100,width:100}}></img>
            </div>
            <div>
                <button type="submit"onClick={submitForm}>Post Story</button>
            </div>
        </form>
        </div>
    )
}