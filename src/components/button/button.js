import React, { useState } from 'react'

// Önceki elementleri ve dataları props olarak geçtik
function Button({children,...items }) {
  return (
    <>
      <button
        type="button"
        className="btn btn-dark btn-lg" {...items}
        >{children}
        </button>
    </>
  );
}

export default Button