import React from "react";

 function Pagination  ({ postsPerPage, totalPosts, paginate })  {
  const pageNumbers = [];
  // Toplam post sayısı bölü her sayfada gösterilecek item sayısı = Toplam sayfa sayısı
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {/* pageNumbers'ın içeriği kadar number paramatresi kadar döndürüyoruz!! */}
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            {/* JSX html etikleri ile sayfalama */}

            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination