import React from 'react';
import './experience.css';
import img1 from './article.png';
import img2 from './video.jpg';

export default class Experience extends React.Component{
    render(){
        return(
            <div>
                <div class="text">
                <h1>Share your Experience from failures</h1>
                </div>
                <div class="main">
                <div class="box1">
                    <div class="box11"><h1>Article</h1><hr /></div>
                    <div class="box2">
                        <div class="box21">
                            <p align="left">An article from the alumnus regarding their experience with failure.</p>
                            <div align="left"><button type="submit">Share</button></div>
                        </div>
                        <div class="image">
                        <img src={img1} class="img1" />
                        </div>
                    </div>
                </div>
                <div class="box1">
                    <div class="box11"><h1>Video</h1><hr /></div>
                    <div class="box2">
                        <div class="box21">
                            <p align="left">Video Clips from the alumnus regarding their experience with failure.</p>
                            <div align="left"><button type="submit">Share</button></div>
                        </div>
                        <div class="image">
                        <img src={img2} class="img1" />
                        </div>
                    </div>
                </div>
                </div>
                <div class="text">
                <h1>Share your contact</h1>
                <p>To stay connected with CDC and help CDC in bringing more companies to campus.</p>
                </div>
                <div align="right">
                <button type="submit">Register</button>
                </div>
            </div>
        )
    }
}