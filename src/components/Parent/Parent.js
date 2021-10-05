import React, { useState } from 'react';
import Meals from '../body/Meals/Meals';
import Header from '../Header/Header';

const Parent = () => {
    const [searchTextValue, setSearchTextValue] = useState('');
   
    const handleChange = (e) =>{
        setSearchTextValue(e.target.value);
    } 

    return (
        <div>
            <Header handleChange={handleChange}></Header>
            <Meals searchTextValue={searchTextValue}></Meals>
        </div>
    );
};

export default Parent;