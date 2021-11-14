import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Pagination from './Pagination';
import './App.css';

function Datafetch() {
    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);


    useEffect(() =>{

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
        
            setPosts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, []);

//Get Current Posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost , indexOfLastPost);


    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
    
        <div className='pagination'>
         
            <ul>
                {
                   currentPosts.map(post => (<li key={post.id}><h6 className="display-8 text-danger">Title: {post.title}</h6> <br/></li> 
                    
                ))}
          
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length}  paginate={paginate}/>
            </ul>
           
        </div>
    )
}

export default Datafetch
