import React, { useState } from 'react'

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