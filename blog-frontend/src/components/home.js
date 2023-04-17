import '../styles/blog.css';

import React from 'react';
import { useNavigate } from "react-router-dom";
// import { useEffect } from 'react';

function Home(){

    // useEffect()
    const io = require("socket.io-client");
    const socket = io("https://blogbackend-k5vd.onrender.com");
    const navigate = useNavigate();

    // const goToHome = () =>{
    //     socket.emit("HOME", "Home page loaded");
    //     navigate('/');
    // }
    
    const goToArticle = () =>{
        socket.emit("ARTICLE", "Article page loaded");
        navigate('/article');
    }

    const goToBollywood = () =>{
        socket.emit("BOLLYWOOD", "Bollywood page loaded");
        navigate('/bollywood');
    }

return(
    <>
    <div class="blog-structure">
    <div class="Mobile-Head">

        <div class="Mobilehead1">The</div>
        <div class="Mobilehead2">Siren</div>
    <div class="menu-icon">
        <div class="bar-1"></div>
        <div class="bar-2"></div>
        <div class="bar-3"></div>
    </div>
    </div>    
    <h1 class="head1">The</h1>
    <div class="head2">Siren</div>

    <div class='Mobile-Space'></div>

    <div className='Home' onClick={goToArticle}><b>Home</b></div>
    <div class="Home-Line"></div>
    <div class="Bollywood" onClick={goToBollywood}><b>Bollywood</b></div>
    <div class="Bollywood-Line"></div>
    <div class="Tech" onClick={goToArticle}><b>Technology</b></div>
    <div class="Tech-Line"></div>
    <div class="Hollywood" onClick={goToArticle}><b>Hollywood</b></div>
    <div class="Fitness" onClick={goToArticle}><b>Fitness</b></div>
    <div class="Food" onClick={goToArticle}><b>Food</b></div>
    <div class="hr-line"></div>
    <div class="Img1">
        <span id="TitleFont">
            Title of vertical gallery
        </span>
        <span id="SubTitleFont">
        Travel / February 27 2023
        </span>
    </div>
    <div class="Img2">
    <span id="Img2Font">
            The Sound Cloud<br /> you loved is doomed
        </span>
        <span id="Img2SubFont">
        Travel / February 27 2023
        </span>
    </div>
    <div class="Img3">
    <span id="Img3Font">
            The Sound Cloud<br /> you loved is doomed
        </span>
        <span id="Img3SubFont">
        Travel / February 27 2023
        </span>
    </div>

    <div class="Latest">The Latest</div>
    <div class="Latest-line"></div>

    <div class="LatestCard-1">
    <div class="Temple-1" onClick={goToArticle}></div>
    <div class="Temple-1-Text" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
}}>Joshua Tree <br /> Overnight Adventure</div>
        <div class="Temple-2-Text">Gujarat is vastly underrated and it’s a mystery
         to us why the region isn’t more well-known as a tourist destination. 
         It has a plethora of temples and palaces</div>
        <div class="Temple-Footer">Travel</div> 
        <div class="Temple-Footer-2">/ February 27 2023</div> 
    </div>

    <div class="LatestCard-2">
    <div class="Temple-2" onClick={goToArticle}></div>
    <div class="Temple2-2-Text" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Joshua Tree <br /> Overnight Adventure</div>
        <div class="Temple-22-Text">Gujarat is vastly underrated and it’s a mystery
         to us why the region isn’t more well-known as a tourist destination. 
         It has a plethora of temples and palaces</div>
        <div class="Temple2-Footer">Travel</div> 
        <div class="Temple2-Footer-2">/ February 27 2023</div> 
    </div>

    <div class="LatestCard-3">
    <div class="Temple-3" onClick={goToArticle}></div>
    <div class="Temple3-Text" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Joshua Tree <br /> Overnight Adventure</div>
        <div class="Temple-33-Text">Gujarat is vastly underrated and it’s a mystery
         to us why the region isn’t more well-known as a tourist destination. 
         It has a plethora of temples and palaces</div>
         <div class="Temple3-Footer">Travel</div> 
        <div class="Temple3-Footer-3">/ February 27 2023</div> 
    </div>

    <div class="Latest-Article">Latest Articles</div>
    <div class="Latest-Article-Line"></div>
    <div class="Latest-Article-HR-Line"></div>

    <div class="LA-P1" onClick={goToArticle}></div>
    <div class="LA-P1-Head" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Catch waves with an adventure guide</div>
    <div class="LA-P1-Text">Gujarat is vastly underrated and it’s a mystery to us <span id="LA-P1-Mobile">why the region isn’t more well-</span></div>
    <div class="LA-P1-Foot">Travel</div>
    <div class="LA-P1-Foot-2">/ February 27 2023</div> 
    <div class="LA-P1-HR-Line"></div>

    <div class="LA-P2" onClick={goToArticle}></div>
    <div class="LA-P2-Head" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Catch waves with an adventure guide</div>
    <div class="LA-P2-Text">Gujarat is vastly underrated and it’s a mystery to us <span id="LA-P2-Mobile">why the region isn’t more well-</span></div>
    <div class="LA-P2-Foot">Travel</div>
    <div class="LA-P2-Foot-2">/ February 27 2023</div> 
    <div class="LA-P2-HR-Line"></div>

    <div class="LA-P3" onClick={goToArticle}></div>
    <div class="LA-P3-Head" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Catch waves with an adventure guide</div>
    <div class="LA-P3-Text">Gujarat is vastly underrated and it’s a mystery to us <span id="LA-P3-Mobile">why the region isn’t more well-</span></div>
    <div class="LA-P3-Foot">Travel</div>
    <div class="LA-P3-Foot-2">/ February 27 2023</div> 
    <div class="LA-P3-HR-Line"></div>

    <div class="LA-P4" onClick={goToArticle}></div>
    <div class="LA-P4-Head" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Catch waves with an adventure guide</div>
    <div class="LA-P4-Text">Gujarat is vastly underrated and it’s a mystery to us <span id="LA-P4-Mobile">why the region isn’t more well-</span></div>
    <div class="LA-P4-Foot">Travel</div>
    <div class="LA-P4-Foot-2">/ February 27 2023</div> 

    <div class="LoadArrow"></div>
    <div class="LoadText">Load More</div>

    <div class="Adv-Border"></div>
    <div class="Adv">Advertisement</div>

    <div class="Top-Posts">Top Posts</div>
    <div class="Top-Posts-Line"></div>

    <div class="TP-Pic-1" onClick={goToArticle}></div>
    <div class="TP-P1-Head" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Catch waves with an adventure guide</div>
    <div class="TP-P1-Foot">Travel</div>
    <div class="TP-P1-Foot-2">/ February 27 2023</div>
    <div class="TP-P1-1">1</div>
    <div class="TP-P1-HRLine"></div>

    <div class="TP-Pic-2" onClick={goToArticle}></div>
    <div class="TP-P2-Head" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Catch waves with an<br /> adventure guide</div>
    <div class="TP-P2-Foot">Travel</div>
    <div class="TP-P2-Foot-2">/ February 27 2023</div>
    <div class="TP-P2-2">2</div>
    <div class="TP-P2-HRLine"></div>

    <div class="TP-Pic-3" onClick={goToArticle}></div>
    <div class="TP-P3-Head" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Catch waves with an<br /> adventure guide</div>
    <div class="TP-P3-Foot">Travel</div>
    <div class="TP-P3-Foot-2">/ February 27 2023</div>
    <div class="TP-P3-3">3</div>
    <div class="TP-P3-HRLine"></div>

    <div class="TP-Pic-4" onClick={goToArticle}></div>
    <div class="TP-P4-Head" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Catch waves with an<br /> adventure guide</div>
    <div class="TP-P4-Foot">Travel</div>
    <div class="TP-P4-Foot-2">/ February 27 2023</div>
    <div class="TP-P4-4">4</div>

    <div class="TP-Max">
        <span id="TPFont">
            Title of vertical gallery
        </span>
        <span id="TPSubFont">
        Travel / February 27 2023
        </span>
    </div>

    <div class="Latest-Stories">Latest Stories</div>
    <div class="Latest-Stories-Line"></div>
    <div class="Latest-Stories-HRLine"></div>

    <div class="LS-H1" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Catch waves with an adventure guide</div>
    <div class="LS-T1">Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination.
     It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</div>
    <div class="LS-F1-1">TECH</div>
    <div class="LS-F1-2">/ TODAY AT 11:54</div>
    <div class="LS-HR-1"></div>

   <div class="LS-H2" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Catch waves with an adventure guide</div>
    <div class="LS-T2">Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination.
     It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</div>
    <div class="LS-F2-1">STYLE</div>
    <div class="LS-F2-2">/ MARCH 02 2023</div>
    <div class="LS-HR-2"></div>

    <div class="LS-H3" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Catch waves with an adventure guide</div>
    <div class="LS-T3">Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination.
     It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</div>
    <div class="LS-F3-1">TECH</div>
    <div class="LS-F3-2">/ MARCH 02 2023</div>
    <div class="LS-HR-3"></div>

    <div class="Latest-Stories-HRLine-2"></div>

    <div class="ViewArrow"></div>
    <div class="ViewText" onClick={goToArticle}>VIEW MORE</div>

    </div>
    </>
);
}


export default Home;