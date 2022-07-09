import React, { useEffect, useState } from 'react'
import Pagination from '../pagination/pagination';

// Post.js dosyasındaki işlerin aynısını gerçekleştiriyoruz

 function Data() {
   const [todos, setTodos] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage] = useState(10);

 
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentTodos = todos.slice(indexOfFirstPost, indexOfLastPost);
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   useEffect(() => {
     loadTodos();
   }, []);

   const loadTodos = () => {
     fetch("https://jsonplaceholder.typicode.com/todos")
       .then((res) => res.json())
       .then((response) => {
         setTodos(response.slice(0, 100));
       })
       .catch((e) => {
         console.log(e);
       });
   };


   const renderTodos = () => {
     return (
       <React.Fragment>
         {currentTodos
           .sort((a, b) => a.id - b.id)
           .map((todo, index) => {
             return (
               <tr key={index}>
                 <th scope="row">{todo.userId}</th>
                 <td>{todo.id}</td>
                 <td>{todo.title}</td>
               </tr>
             );
           })}
       </React.Fragment>
     );
   };

   const renderTableTodos = () => {
     return (
       <table className="table">
         <thead>
           <tr>
             <th scope="col" display="flex">UserID</th>
             <th scope="col">ID</th>
             <th scope="col">Title</th>
           </tr>
         </thead>
         <tbody>{renderTodos()}</tbody>
         <div className="container">
           <Pagination
             postsPerPage={postsPerPage}
             totalPosts={todos.length}
             paginate={paginate}
           />
         </div>
       </table>
     );
   };

   return (
     <>
       <h1>TODOS</h1>
       <hr></hr>
       {renderTableTodos()}
     </>
   );
 }

export default Data