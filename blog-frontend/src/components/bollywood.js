import '../styles/bollywood.css';

import React from 'react';
import { useNavigate } from "react-router-dom";


function Bollywood (){

    const io = require("socket.io-client");
    const socket = io("https://blogbackend-k5vd.onrender.com");
    const navigate = useNavigate();

    const goToArticle = () =>{
        socket.emit("B-ARTICLE", "Article page loaded. Routed from Bollywood page");
        navigate('/article');
    }

    const goToBollywood = () =>{
        socket.emit("B-BOLLYWOOD", "Bollywood page loaded.Routed from Bollywood page");
        navigate('/bollywood');
    }
    
        return(
            <>
            <div className='Bollywood-Page'>

            <div className='B-Header-Section'>
           
            <div className='B-Heading-1'>The</div>
            <div className='B-Heading-2'>Siren</div>
          

            <div class="B-menu-icon">
        <div class="B-bar-1"></div>
        <div class="B-bar-2"></div>
        <div class="B-bar-3"></div>
            </div>
            </div>

            {/* <div className='B-Body-Section'> */}
            
            <div className='B-Home' style={{ textDecoration: 'none' }} onClick={goToArticle}><b>Home</b></div>
            <div class='B-Bollywood' style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToBollywood();
    }}>Bollywood</div>
            <div class='B-Technology' style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Technology</div>
            <div className='B-Hollywood' style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Hollywood</div>
           <div className='B-Fitness' style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Fitness</div>
            <div className='B-Food' style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Food</div>
            <div className='B-Line'></div>
            
    <div className='B-Body-Section'>
            <div className='Bollywood-Section'>
                <div className='Bollywood-Header'>Bollywood</div>
                <div className='Bollywood-Header-Line'></div>

                <div className='BW1-Pic' onClick={goToArticle}></div>
                <div className='BW1-Head' style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Catch waves with an adventure guide</div>
                <div className='BW1-Text'>Gujarat is vastly underrated and it’s a mystery to us<span className='BW1-MobileText'> why the region isn’t more well-</span></div>
                <div className='BW1-Tag'>Travel</div>
                <div className='BW1-Date'>/ March 18 2023</div>
                <div className='BW1-HR-Line'></div>

                <div className='BW2-Pic' onClick={goToArticle}></div>
                <div className='BW2-Head' style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Catch waves with an adventure guide</div>
                <div className='BW2-Text'>Gujarat is vastly underrated and it’s a mystery to us<span className='BW2-MobileText'> why the region isn’t more well-</span></div>
                <div className='BW2-Tag'>Travel</div>
                <div className='BW2-Date'>/ March 18 2023</div>
                <div className='BW2-HR-Line'></div>

                <div className='BW3-Pic' onClick={goToArticle}></div>
                <div className='BW3-Head' style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Catch waves with an adventure guide</div>
                <div className='BW3-Text'>Gujarat is vastly underrated and it’s a mystery to us<span className='BW3-MobileText'> why the region isn’t more well-</span></div>
                <div className='BW3-Tag'>Travel</div>
                <div className='BW3-Date'>/ March 18 2023</div>
                <div className='BW3-HR-Line'></div>

                <div className='BW4-Pic' onClick={goToArticle}></div>
                <div className='BW4-Head' style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Catch waves with an adventure guide</div>
                <div className='BW4-Text'>Gujarat is vastly underrated and it’s a mystery to us<span className='BW4-MobileText'> why the region isn’t more well-</span></div>
                <div className='BW4-Tag'>Travel</div>
                <div className='BW4-Date'>/ March 18 2023</div>
                <div className='BW4-HR-Line'></div>

                <div className='BW5-Pic' onClick={goToArticle}></div>
                <div className='BW5-Head' style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Catch waves with an adventure guide</div>
                <div className='BW5-Text'>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-</div>
                <div className='BW5-Tag'>Travel</div>
                <div className='BW5-Date'>/ March 18 2023</div>
                <div className='BW5-HR-Line'></div>

                <div className='BW6-Pic' onClick={goToArticle}></div>
               <div className='BW6-Head'  style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Catch waves with an adventure guide</div>
                <div className='BW6-Text'>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-</div>
                <div className='BW6-Tag'>Travel</div>
                <div className='BW6-Date'>/ March 18 2023</div>
                <div className='BW6-HR-Line'></div>

                <div className='BW7-Pic' onClick={goToArticle}></div>
                <div className='BW7-Head' style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Catch waves with an adventure guide</div>
                <div className='BW7-Text'>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-</div>
                <div className='BW7-Tag'>Travel</div>
                <div className='BW7-Date'>/ March 18 2023</div>
                
                <div className='B-Load-Arrow'></div>
                <div className='B-Load-More'>LOAD MORE</div>

            </div>

            <div className='B-Top-Section'>
                <div className='B-Top-Header'>Top Posts</div>
                <div className='B-Header-Line'></div>

                <div className='BTP-1-Pic' onClick={goToArticle}></div>
                <div className='BTP-1-Head' style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Catch waves with an adventure guide</div>
                <div className='BTP-1-Tag'>Travel</div>
                <div className='BTP-1-Time'>/ March 19 2023</div>
                <div className='BTP-1-1'>1</div>
                <div className='BTP-1-HR'></div>

                <div className='BTP-2-Pic' onClick={goToArticle}></div>
                <div className='BTP-2-Head' style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Catch waves with an adventure guide</div>
                <div className='BTP-2-Tag'>Travel</div>
                <div className='BTP-2-Time'>/ March 19 2023</div>
                <div className='BTP-2-2'>2</div>
                <div className='BTP-2-HR'></div>

                <div className='BTP-3-Pic' onClick={goToArticle}></div>
                <div className='BTP-3-Head' style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Catch waves with an adventure guide</div>
                <div className='BTP-3-Tag'>Travel</div>
                <div className='BTP-3-Time'>/ March 19 2023</div>
                <div className='BTP-3-3'>3</div>
                <div className='BTP-3-HR'></div>

                <div className='BTP-4-Pic' onClick={goToArticle}></div>
                <div className='BTP-4-Head' style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0); goToArticle();
    }}>Catch waves with an adventure guide</div>
                <div className='BTP-4-Tag'>Travel</div>
                <div className='BTP-4-Time'>/ March 19 2023</div>
                <div className='BTP-4-4'>4</div>
                <div className='BTP-4-HR'></div>

                <div class="B-Adv-Border"></div>
                <div class="B-Adv">Advertisement</div>

            </div>

            </div>

            </div>
            </>
        );
    }


export default Bollywood;