import React from "react";
import "./Experience.css";

export default class Experience extends React.Component {
  render() {
    return (
      <div>
        <div className="textt">
          <h1>Share your Experience from failures</h1>
        </div>
        <div className="main">
          <div className="box1">
            <div className="box11">Article</div>
            <hr />
            <div className="box2">
              <div className="box21">
                <p className="para">
                  An article from the alumnus regarding their experience with
                  failure.
                </p>
                <div align="left">
                  <a href="https://forms.gle/i6YveP9dXhpJmA5RA" target="_blank">
                    <button type="submit">Share</button>
                  </a>
                </div>
              </div>
              <div className="image">
                <img src="assets/img/article.png" className="img1" />
              </div>
            </div>
          </div>
          <br />
          <div className="box1">
            <div className="box11">Video</div>
            <hr />
            <div className="box2">
              <div className="box21">
                <p className="para">
                  Video Clips from the alumnus regarding their experience with
                  failure.
                </p>
                <div align="left">
                  <a href="https://forms.gle/epqBg66RejtTTc1PA" target="_blank">
                    <button type="submit">Share</button>
                  </a>
                </div>
              </div>
              <div className="image">
                <img src="assets/img/video.jpg" className="img1" />
              </div>
            </div>
          </div>
        </div>
        <div className="textt">
          <h1>Share your contact</h1>
          <div>
            To stay connected with CDC and help CDC in bringing more companies
            to campus.
          </div>
        </div>
        <div align="right">
          <a href="https://forms.gle/U8EGCkXQNGV6g5qD6" target="_blank">
            <button type="submit">Register</button>
          </a>
        </div>
      </div>
    );
  }
}
