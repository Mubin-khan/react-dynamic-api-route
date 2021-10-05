import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import NotFound from '../../NotFound/NotFound';
import Meal from '../Meal/Meal';

const Meals = (props) => {
    const [meals, setMeals] = useState([]);
    const [err, setErr] = useState(false);
   
    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.searchTextValue}`)
        .then(res => setMeals(res.data.meals))
        .catch(err => setErr(true));
        // console.log(meals)
    },[props.searchTextValue])
    return (
        <div>
             {
                 err && <NotFound></NotFound>
             }
              <Row xs={1} md={3} className="g-4 container mx-auto">
                {
                    meals?.map(elm => <Meal 
                    key = {elm.idMeal}
                    meal = {elm}
                    ></Meal>)
                }
              </Row>
        </div>
    );
};

export default Meals;