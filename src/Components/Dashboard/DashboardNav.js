import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import homeIcon from '../../images/dashboard_sprite/home_dashboard.svg';
import statisticsIcon from '../../images/dashboard_sprite/statistics.svg';
import exchangeRatesIcon from '../../images/dashboard_sprite/exchange_rates.svg';
import Media from 'react-media';

const DashboardNav = () => <>
    <div >
    <Media queries={{
        small: "(max-width: 767px)",
        medium: "(min-width: 768px) "
        }}>

        {matches => 
            (<div>
                {matches.small && <div className='Dashboard_icon'>
                    <NavLink
                        exact
                        to="/"
                        className="Dashboard_ic"
                        activeClassName="Dashboard_icon_active"
                    >
                        <div>
                        <img className='Dashboard_icon_fill' src={homeIcon} alt="" width={38} />
                        <p className="Dashboard_hidden_label">Главная</p>
                        </div>
                    </NavLink>

                    <NavLink
                        to="/statistics"
                        className="Dashboard_ic"
                        activeClassName="Dashboard_icon_active"
                    >
                        <div>
                        <img className='Dashboard_icon_fill' src={statisticsIcon} alt="" width={38} />
                        <p className="Dashboard_hidden_label">Статистика</p>
                        </div>
                        
                    </NavLink>  

                    <NavLink
                        exact
                        to="/exchange_rates"
                        className="Dashboard_ic"
                        activeClassName="Dashboard_icon_active"
                    >
                        <img className='Dashboard_icon_fill' src={exchangeRatesIcon} alt="" width={38} />
                    </NavLink>
                </div>}
       
                {matches.medium && <div>    
                    <NavLink
                        exact
                        to="/"
                        className="Dashboard_ic"
                        activeClassName="Dashboard_icon_active"
                    >
                        <div>
                        <img className='Dashboard_icon_fill' src={homeIcon} alt="" width={38} />
                        <p className="Dashboard_hidden_label">Главная</p>
                        </div>
                    </NavLink>

                    <NavLink
                        to="/statistics"
                        className="Dashboard_ic"
                        activeClassName="Dashboard_icon_active"
                    >
                        <div>
                        <img className='Dashboard_icon_fill' src={statisticsIcon} alt="" width={38} />
                        <p className="Dashboard_hidden_label">Статистика</p>
                        </div>
                        
                    </NavLink>  

    
                </div>}
                    
            </div>
        )}
    </Media> 

</div>
</>

export default DashboardNav;