import React from "react";
import './Home.css';


export default function Home() {
  return (
    <div className="home">
      {/* card */}
      <div className="card">
        {/* card header */}
        <div className="card-header">
          <div className="card-pic">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt=""
            />
          </div>
           
              <h5>radha </h5>
            
        </div>

        {/* card image */}
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1598089841813-f910cb0dfcac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fEluZGlhbiUyMGZlc3RpdmFsJTIwa3Jpc2huYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60 "
            alt=""
          />
        </div>

        {/* card content */}

        <div className="card-content">
          <span className="material-symbols-outlined">favorite</span>
          <p>1 Like</p>
          <p>This is amazing</p>
        </div>

        {/* add comment */}
        <div className="add-comment">
          <span className="material-symbols-outlined">
            sentiment_very_satisfied
          </span>
          <input type="text" placeholder="add a comment" />
          <button className="comment">Post</button>
        </div>
      </div>
    </div>
  );
}
