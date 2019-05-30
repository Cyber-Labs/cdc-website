import React from "react";
import "./Experience.css";

export default class Experience extends React.Component {
  render() {
    return (
      <div>
        <div class="textt">
          <h1>Share your Experience from failures</h1>
        </div>
        <div class="main">
          <div class="box1">
            <div class="box11">Article</div>
            <hr />
            <div class="box2">
              <div class="box21">
                <p class="para">
                  An article from the alumnus regarding their experience with
                  failure.
                </p>
                <div align="left">
                  <a href="https://forms.gle/i6YveP9dXhpJmA5RA" target="_blank">
                    <button type="submit">Share</button>
                  </a>
                </div>
              </div>
              <div class="image">
                <img src="assets/img/article.png" class="img1" />
              </div>
            </div>
          </div>
          <br />
          <div class="box1">
            <div class="box11">Video</div>
            <hr />
            <div class="box2">
              <div class="box21">
                <p class="para">
                  Video Clips from the alumnus regarding their experience with
                  failure.
                </p>
                <div align="left">
                  <a href="https://forms.gle/epqBg66RejtTTc1PA" target="_blank">
                    <button type="submit">Share</button>
                  </a>
                </div>
              </div>
              <div class="image">
                <img src="assets/img/video.jpg" class="img1" />
              </div>
            </div>
          </div>
        </div>
        <div class="textt">
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
