import React, { useState } from "react";
import Cookies from "js-cookie";
import Header from './Header';
import Body from "./Body";
import productsData from './productsData.json';
const Home = ()=>{
    const [sreachResut , setSreachresult] = useState('');
    return(
        <div>
              <Header setdata={setSreachresult}/>
       <Body productsData1={productsData} getdata={sreachResut} />
        </div>
     
    )
}
export default Home;