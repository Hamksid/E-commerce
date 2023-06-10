import React from 'react'
import  Search  from './Svg/search.svg'

const Header = () => {
  return (
    <div id="header">
         <h1>Welcome to </h1>
         <h2>Al-Lateef_Products</h2>
          <div id='search'> 
             <img src={Search} style={{marginLeft:"9px"}} />
             <input type="search" placeholder="Search products, brands and categories" style={{marginLeft:"1%",width:"75%",height:"40px", fontSize:"20px"}} />
             <input type="button" value="Search" style={{width:"21%",color:"white",fontSize:"90%",border:"2px solid black",borderTopRightRadius:"20px",borderBottomRightRadius:"20px",background:"#f68b1e"}} />
          </div>
    </div>
  )
}

export default Header