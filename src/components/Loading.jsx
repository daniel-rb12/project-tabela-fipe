import React from 'react'
import '../css/loading.css'

function Loading() {
  return (
    <div
      id="bg-load"
      className="vh-100 d-flex flex-column align-items-center justify-content-center"
    >
        <div id="spn" className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}

export default Loading;
