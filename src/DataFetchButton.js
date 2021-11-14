import React, {useState, useEffect}  from 'react'
import axios from 'axios'


function DataFetchButton() {

    const [post, setPost] = useState({})
    const [Id, setId] = useState(1)
    const [IdFromButtonClick, setIdFromButtonClick ] = useState(1)
    
    const handleClick = () =>{
        setIdFromButtonClick(Id)
    }
    
    useEffect(() =>{

        axios.get(`https://jsonplaceholder.typicode.com/posts/${IdFromButtonClick}`)
        .then(res =>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [IdFromButtonClick])
    
    return (
        <div>
            <input type="text" className="m-5" value={Id} onChange={e => setId(e.target.value)}/>
            <button type="button" className="btn btn-primary" onClick={handleClick}>Fetch data</button>
            <div><h6 className="display-6">Title:{post.title}</h6> <br/><h5 className="display-8 text-primary">Body: {post.body}</h5> <br/><br/></div>
        </div>
    )
}
export default DataFetchButton
