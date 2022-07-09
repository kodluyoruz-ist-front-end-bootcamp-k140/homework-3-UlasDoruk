import React, { useContext, useEffect, useState } from 'react'
import Pagination from "../pagination/pagination";
import "./style.css";
import ThemeContext from '../theme/darktheme';

function Posts() {

  const [posts,setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(25);
  const {theme} = useContext(ThemeContext)

// Pagination için gerekli dataları burdan topluyoruz
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

// LoadPost fonksiyonu ile API'dan çektiğimiz dataları useEffect ile yüklüyoruz
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
// renderPosts gelen dataları sıralayıp teker teker yazdığımız düzende ekrana yazdırıyor
  const renderPosts = ()=>{
    return (
      <React.Fragment>
      {currentPosts.sort((a,b)=>a.id-b.id).map((post,index)=>{
        return (
          <tr className={theme === "Dark" ? "colorwhite" : "colordark"} key={index}>
            <th scope="row">{post.userId}</th>
            <td>{post.id}</td>
            <td>{post.title}</td>
          </tr>
          )})}
    </React.Fragment>
    )}
// Ana html iskeletinin oluştuğu dataların tablosu  
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