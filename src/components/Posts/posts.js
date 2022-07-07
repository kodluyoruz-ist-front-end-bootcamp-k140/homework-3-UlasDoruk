import React, { useEffect, useState } from 'react'
import Pagination from "../pagination/pagination";

function Posts() {

  const [posts,setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(25);


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  useEffect(()=>{
    loadPosts()
  },[])

  const loadPosts = ()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res)=>res.json())
      .then((response) => {
        setPosts(response)   
      }).catch((e)=>{
        console.log(e)
      });
  }

  const renderPosts = ()=>{
    return (
      <React.Fragment>
      {currentPosts.sort((a,b)=>a.id-b.id).map((post,index)=>{
        return (
          <tr key={index}>
            <th scope="row">{post.userId}</th>
            <td>{post.id}</td>
            <td>{post.title}</td>
          </tr>
          )})}
    </React.Fragment>
    )}

    const renderTablePosts = ()=>{
      return (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">UserID</th>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
            </tr>
          </thead>
          <tbody>{renderPosts()}</tbody>
          <div className='container'>  
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </div>
        </table>
      );
    }

  return <>
  <h1>POSTS</h1>
  <hr></hr>
  {renderTablePosts()}
  </>;
}

export default Posts