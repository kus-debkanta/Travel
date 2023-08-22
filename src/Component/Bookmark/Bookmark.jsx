import React from 'react'
import America from './America.png';
import './Bookmark.css';

export default function Bookmark() {
    return (
        <div className='bookmark-container'>
            <div className='header-image'>
                <h1>Your trip around the USA</h1>
                <p>Explore refine your bookmark bellow. Share and save the page link to have your favourate places at your finger tips!</p>
                <div className='buttonGroup'>
                    <button>Email bookmark link</button>
                    <button>Copy bookmark link</button>
                </div>
            </div>
            <i class="fas fa-share-alt share"></i>
            <img src={America} className='america-image'></img>
            <div className='footer-image'>
                <h1>Browse your fevourates</h1>
                <ul>
                    <li id='all'>All</li>
                    <li>States</li>
                    <li>Destination</li>
                    <li>Trips</li>
                    <li>Experineces</li>
                    <li>United Stories</li>
                </ul>
            </div>
            <div className='guide'>
                <h2>Start planning your ultimate USA jurney</h2>
                <p>Here some helpful links to keep exploring USA</p>
                <a>&bull; Experiences to explore</a>
                <br></br>
                <a>&bull; Trip ideas around the USA</a>
            </div>
            <div className='links'>
                <p>Quick links</p>
                <div>
                    <ul>
                        <li>Getting Here & Getting Around<i class="fas fa-bring-forward"></i></li>
                        <li>Visa & Entry<i class="fas fa-bring-forward"></i></li>
                        <li>Travel Planning<i class="fas fa-bring-forward"></i></li>
                        <li>Official Travel Information<i class="fas fa-bring-forward"></i></li>
                    </ul>
                    <ul>
                        <li>Health & Safety<i class="fas fa-bring-forward"></i></li>
                        <li>Shopping & Spending Money<i class="fas fa-bring-forward"></i></li>
                        <li>Accomodations<i class="fas fa-bring-forward"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}