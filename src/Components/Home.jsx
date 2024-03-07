import React, { useState } from "react";
import Cookies from "js-cookie";
import Header from './Header';
import Body from "./Body";
import productsData from './productsData.json';
const Home = ({Method})=>{
    const [sreachResut , setSreachresult] = useState('');
    return(
        <div>
              <Header setdata={setSreachresult}/>
       <Body productsData1={productsData} Method={Method} getdata={sreachResut} />
        </div>
     
    )
}
export default Home;