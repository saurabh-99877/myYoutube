import { useState,useEffect } from "react";
import { getCommentsUrl } from "../utils/constants";


const useComments = (params) => {
const [comments, setComments] = useState([]);

useEffect(() => {
 getComments();
}, []);

const getComments = async () => {
    const data = await fetch(getCommentsUrl(params));
    const json = await data.json();
    console.log(json.items,'comments');
    setComments(json.items);
    
}

return comments;
};

export default useComments;