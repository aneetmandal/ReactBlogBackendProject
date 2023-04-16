import '../styles/article.css';

import React from 'react';
import { useNavigate } from "react-router-dom";

function Article(){

    const io = require("socket.io-client");
    const socket = io("http://localhost:3001");
    const navigate = useNavigate();

    const goToHome = () =>{
        socket.emit("HOME", "Home page loaded. Routed from Article page");
        navigate('/');
    }

    return(
        <>
        <div className='Article-Page'>
        <div className='Header-Section'>
            <div className='Heading-1'>The</div>
            <div className='Heading-2'>Siren</div>
            <button className='Heading-3' onClick={goToHome}>
                <div className='Btn-Text'>Get Started</div>
            </button>
        </div>
        <div className='Body-Section'>
            <div className='Body-Header'>5 Ways to animate a React app</div>
            <div className='Author-Pic'></div>
            <div className='Author-Name'>Dmitry Nozhenko</div>
            <div className='Author-Timestamp'>March 12, 2023 · 10 min read</div>
            <div className='Social-Media'></div>

            <div className='Img-1'></div>
            <div className='Body-Text'>Animation in ReactJs app is a popular topic and there are many ways to create 
            different types of animations.Many developers create animation exclusively using css and adding classes to 
            HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay 
            attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries,
             components for creating animation in React.<br /><br />Let’s talk about them</div>

             <div className='Img-2'></div>

             <button className='Btn-1'>
                <div className='Btn-1-Text'>React</div>
             </button>
             <button className='Btn-2'>
                <div className='Btn-2-Text'>Javascript</div>
             </button>
             <button className='Btn-3'>
                <div className='Btn-3-Text'>Animation</div>
             </button>

             <div className='Claps'>
                <div className='Claps-Icon'></div>
                <div className='Claps-Text'>9.3K claps</div>
             </div>

            <div className='Author-Footer'>
                <div className='Line-1'></div>
                <div className='Author-Footer-Pic'></div>
                <div className='Author-Footer-Text'>WRITTEN BY</div>
                <div className='Author-Footer-Name'>Dmitry Nozhenko</div>
                <div className='Author-Footer-Timestamp'>March 12, 2023 · 10 min read</div>
                <div className='Line-2'></div>
            </div>

            <div className='Mobile-Footer'>
            <div className='MF-Header'>More From The Siren</div>
            <div className='MF1-Text'>Performance Comparison for 5 JavaScript Object Iterations</div>
            <div className='MF1-Author'>Dmitry Nozhenko</div>
            <div className='MF1-Pic'></div>

            <div className='MF2-Text'>Performance Comparison for 5 JavaScript Object Iterations</div>
            <div className='MF2-Author'>Dmitry Nozhenko</div>
            <div className='MF2-Pic'></div>

            <div className='MF3-Text'>Performance Comparison for 5 JavaScript Object Iterations</div>
            <div className='MF3-Author'>Dmitry Nozhenko</div>
            <div className='MF3-Pic'></div>

            <div className='MF4-Text'>Performance Comparison for 5 JavaScript Object Iterations</div>
            <div className='MF4-Author'>Dmitry Nozhenko</div>
            <div className='MF4-Pic'></div>
            
        </div>

        </div>

        <div className='Footer-Section'>
        <div className='Footer-Heading'>More From The Siren</div>
        <div className='Footer-Heading-Line'></div>

        <div className='Footer-Card-1'>
            <div className='FC1-Head'>Also tagged Reactjs</div>
            <div className='FC1-Pic'></div>
            <div className='FC1-Title'>Joshua Tree Overnight Adventure</div>
            <div className='FC1-Author-Pic'></div>
            <div className='FC1-Author-Name'>Dmitry Nozhenko</div>
            <div className='FC1-Author-Timestamp'>March 12, 2023 · 10 min read</div>
        </div>

        <div className='Footer-Card-2'>
            <div className='FC2-Head'>Related reads</div>
            <div className='FC2-Pic'></div>
            <div className='FC2-Title'>Joshua Tree Overnight Adventure</div>
            <div className='FC2-Author-Pic'></div>
            <div className='FC2-Author-Name'>Dmitry Nozhenko</div>
            <div className='FC2-Author-Timestamp'>March 12, 2023 · 10 min read</div>
        </div>

      
            <div className='FC3-Head'>Related reads</div>
            <div className='FC3-Pic'></div>
            <div className='FC3-Title'>Joshua Tree Overnight Adventure</div>
            <div className='FC3-Author-Pic'></div>
            <div className='FC3-Author-Name'>Dmitry Nozhenko</div>
            <div className='FC3-Author-Timestamp'>March 12, 2023 · 10 min read</div>
       

        </div>

        <div className='Left-Box'>
            <div className='Left-Claps-Icon'></div>
                <div className='Left-Claps-Text'>9.3K claps</div> 
                <div className='Share'></div>
                <div className='Share-Text'>Share this article</div>
        </div>

        {/* <div className='Mobile-Footer'>
            <div className='MF-Header'>More From The Siren</div>
            <div className='MF1-Text'>Performance Comparison for 5 JavaScript Object Iterations</div>
            <div className='MF1-Author'>Dmitry Nozhenko</div>
            <div className='MF1-Pic'></div>

            <div className='MF2-Text'>Performance Comparison for 5 JavaScript Object Iterations</div>
            <div className='MF2-Author'>Dmitry Nozhenko</div>
            <div className='MF2-Pic'></div>

            <div className='MF3-Text'>Performance Comparison for 5 JavaScript Object Iterations</div>
            <div className='MF3-Author'>Dmitry Nozhenko</div>
            <div className='MF3-Pic'></div>

            <div className='MF4-Text'>Performance Comparison for 5 JavaScript Object Iterations</div>
            <div className='MF4-Author'>Dmitry Nozhenko</div>
            <div className='MF4-Pic'></div>
            
        </div> */}

        </div>
        </>
    );
}

export default Article;