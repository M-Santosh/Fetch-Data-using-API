import React from 'react'
import Datafetch from './Datafetch';

function pagination({ postsPerPage, totalPosts, paginate}) {
    const PageNumbers = [];

    for(let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++){
        PageNumbers.push(i);
    }
   
    return (
        <nav>
            <ol className="pagination">
                {PageNumbers.map(number => (
                    <li key = {number} className ="page-item">
                        
                        <a onClick={() => paginate(number)}  className="page-link">
                            {number}
                            </a>
                        </li>
                ))}
            </ol>
        </nav>
    )
}

export default pagination
