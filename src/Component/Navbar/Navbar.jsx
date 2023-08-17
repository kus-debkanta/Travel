import React from 'react'
import { useState, useEffect } from 'react';
import Usa from './USA.png';
import Hidden from '../Hidden/Hidden';
import India from './Flag_of_India.png';
import countries from './Countries.json';
import './Navbar.css';
import America1 from './America1.jpg';
import America2 from './America2.jpg';
import America3 from './America3.jpg';
import America4 from './America4.jpg';
import America5 from './America5.jpg';
import America6 from './America6.jpg';
import America7 from './America7.jpg';
import { Link } from 'react-router-dom';

function Navbar(props) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = (props) => {
        setIsActive(current => !current);
    }
    const view = false;
    const icon = false;

    const [isShowing, setShowing] = useState(view);
    const [isIcon, setIcon] = useState(icon);

    const showinhHandler = (props) => {
        setShowing(!isShowing);
        setIcon(!isIcon)
    }
    const hidingHandler = (props) => {
        setShowing();
        setIcon(!isIcon)
    }

    const [isShow, setShow] = useState(view);
    const [isIconshow, setIconshow] = useState(icon);

    const destinationDetailsHandler = () => {
        if (isShow === false) {
            setShow(true);
            setIconshow(true);
        }
        else {
            setShow(false);
            setIconshow(false)
        }
    }

    const [isTripDetails, setTripDetails] = useState(false)
    const tripDetailsHandler = () => {
        setTripDetails(!isTripDetails)
    }

    const [cuntry, setData] = useState(countries);

    const [isRecord, setRecord] = useState([]);
    useEffect(() => {
        async function getUsers() {
            const response = await fetch('https://travel-api-lous.onrender.com/api/v1/admin/state', {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                },
            });
            const finaldata = await response.json();
            setRecord(finaldata);
        }
        getUsers();
    }, []);

    const array = ['Pacific', 'West', 'Southwest', 'Midwest', 'Southeast', 'Northeast', 'USA Territories'];

    const [result, setResult] = useState({
        region: null,
        name: null
    })

    var value = ''
    return (
        <div className='nav_bar_container'>
            <nav className='nav_bar' style={{ display: props.showValue ? 'grid' : 'grid' }}>
                <div className='upper_nav'>
                    <div className='first_nav'>
                        <div>
                            <img src={Usa}></img>
                            <figcaption>GoUSA.in</figcaption>
                        </div>
                        <p>The official travel site<br></br> of the USA</p>
                    </div>
                    <div className='last_nav'>
                        <ul>
                            <li onClick={handleClick} style={{color: 'red'}}><i className="fa fa-search" aria-hidden="true"></i></li>
                            <li style={{color: 'red'}}><i className="fa-regular fa-heart"></i></li>
                            <li style={{ backgroundColor: "red" }} onClick={showinhHandler}><i className={isIcon? 'fa-solid fa-xmark lastLi':'fa-solid fa-bars lastLi'} style={{ color: "white"}} ></i></li>
                            
                        </ul>
                    </div>
                </div>
                <div className='down_nav'>
                    <ul>
                        <li id='firstdest' onClick={destinationDetailsHandler}>Destinations<i className={isIconshow ? "fa-solid fa-sort-up" : "fa-solid fa-sort-down"}></i></li>
                        <li onClick={tripDetailsHandler}>Trips<i className={isTripDetails ? "fa-solid fa-sort-up" : "fa-solid fa-sort-down"}></i></li>
                        <li>Experiences<i className="fa-solid fa-sort-down"></i></li>
                    </ul>
                </div>
            </nav>
            {
                isShow ?
                    <div className='destinationdetails'>
                        <div className='header_bar'></div>
                        <ul>
                            <li style={{ color: 'orange', textDecoration: 'underline' }}>States</li>
                            <li>Cities</li>
                            <li>Parks</li>
                        </ul>
                        <div className='USAplaces'>

                            {array.map((items, id) => {
                                switch (items) {
                                    case "Pacific": return (
                                        <div key={id}>
                                        <img src={America1} style={{marginBottom: '10px'}}></img>
                                            <p style={{ color: '#90b3cf' }}>{items}</p>
                                            {isRecord.data?.map((item, index) =>
                                                <p key={index}>{item.region == items ? item.name : null}</p>
                                            )}
                                        </div>
                                    )
                                    case "West": return (
                                        <div key={id}>
                                        <img src={America7} style={{marginBottom: '10px'}}></img>
                                            <p style={{ color: '#90b3cf' }}>{items}</p>
                                            {isRecord.data?.map((item, index) =>
                                                <p key={index}>{item.region == items ? item.name : null}</p>
                                            )}
                                        </div>
                                    )
                                    case "Southwest": return (
                                        <div key={id}>
                                        <img src={America3} style={{marginBottom: '10px'}}></img>
                                            <p style={{ color: '#90b3cf' }}>{items}</p>
                                            {isRecord.data?.map((item, index) =>
                                                <p key={index}>{item.region == items ? item.name : null}</p>
                                            )}
                                        </div>
                                    )
                                    case "Midwest": return (
                                        <div key={id}>
                                        <img src={America2} style={{marginBottom: '10px'}}></img>
                                            <p style={{ color: '#90b3cf' }}>{items}</p>
                                            {isRecord.data?.map((item, index) =>
                                                <p key={index}>{item.region == items ? item.name : null}</p>
                                            )}
                                        </div>
                                    )
                                    case "Southeast": return (
                                        <div key={id}>
                                        <img src={America6} style={{marginBottom: '10px'}}></img>
                                            <p style={{ color: '#90b3cf' }}>{items}</p>
                                            {isRecord.data?.map((item, index) =>
                                                <p key={index}>{item.region == items ? item.name : null}</p>
                                            )}
                                        </div>
                                    )
                                    case "Northeast": return (
                                        <div key={id}>
                                        <img src={America5} style={{marginBottom: '10px'}}></img>
                                            <p style={{ color: '#90b3cf' }}>{items}</p>
                                            {isRecord.data?.map((item, index) =>
                                                <p key={index}>{item.region == items ? item.name : null}</p>
                                            )}
                                        </div>
                                    )
                                    case "USA Territories": return (
                                        <div key={id}>
                                        <img src={America4} style={{marginBottom: '10px'}}></img>
                                            <p style={{ color: '#90b3cf' }}>{items}</p>
                                            {isRecord.data?.map((item, index) =>
                                                <p key={index}>{item.region == items ? item.name : null}</p>
                                            )}
                                        </div>
                                    )
                                }
                            }
                            )}

                           
                        
                        </div >
                        <div className='destinationDetailsBar' style={{ height: "300px" }}>
                            <i className="fa-solid fa-x" onClick={destinationDetailsHandler}></i>
                        </div>
                    </div>
                    :
                    ""
            }
            {
                isTripDetails ? (
                    <div className='tripdetails'>
                        <div className='header_bar'></div>
                        <div className='tripdetailsMiddle'>
                            <div>
                                <img src='https://blog.hubspot.com/hubfs/image-file-extensions.jpg'></img>
                                <p className='tripdetailsFirstP'>Trip 1-2 weeks</p>
                                <p className='tripdetailsLastP'>Idaho Road Trip: of the beaten path to Yellowstone</p>
                            </div>
                            <div>
                                <img src='https://img.freepik.com/free-vector/traditional-diwali-background-with-image-text-space_1017-40122.jpg'></img>
                                <p className='tripdetailsFirstP'>Trip 1-2 weeks</p>
                                <p className='tripdetailsLastP'>A Specific Pride Road Trip</p>
                            </div>
                            <div>
                                <img src='https://wallpapers.com/images/hd/bubbles-background-cxu66nt9guprib70.jpg'></img>
                                <p className='tripdetailsFirstP'>Trip 1-2 weeks</p>
                                <p className='tripdetailsLastP'>Small Towns and Countri Road through Louisiana and Arkansans</p>
                            </div>
                        </div>
                        <button>View all trips</button>
                        <div className='tripdetailsBar'>
                            <i className="fa-solid fa-x" onClick={tripDetailsHandler}></i>
                            <div id='upper_side'></div>
                            <div id='down_side'></div>
                        </div>
                    </div>
                )
                    :
                    (
                        ""
                    )
            }
            <div className='main_bar' style={{ display: isShowing ? 'block' : 'none' }}>
                <div className='header_bar'></div>
                <div className='hidden_bar'>
                    <div className='bar_content'>
                        <ul>
                            <li><img src={India}></img>English (India)<i className="fa-solid fa-caret-down"></i></li>
                            <div></div>
                            <li  onClick={showinhHandler}>Brand USA</li>
                            <li onClick={showinhHandler}>Media Inquiries</li>
                            <li onClick={showinhHandler}><Link to='/contact' style={{color: 'black', textDecoration: 'none', width: '100%', display: 'block'}}>Contact US</Link></li>
                            <li onClick={showinhHandler}><Link to='/terms-of-use' style={{color: 'black', textDecoration: 'none', width: '100%', display: 'block'}}>Terms of Use</Link></li>
                            <li onClick={showinhHandler}><Link to='/USA-travel-information' style={{color: 'black', textDecoration: 'none',width: '100%', display: 'block'}}>USA Travel Information</Link></li>
                            <li onClick={showinhHandler}>FAQs</li>
                            <li onClick={showinhHandler}><Link to='/privacy-policy' style={{color: 'black', textDecoration: 'none', width: '100%', display: 'block'}}>Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='side_bar'>
                    <div id='upper_side'></div>
                    <div id='down_side'></div>
                </div>
            </div>
        </div >
    )
}
export default Navbar;