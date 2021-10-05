import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Meal.css';

const Meal = (props) => {
    const {strMealThumb,strMeal,strInstructions,idMeal} = props.meal;
    const history = useHistory();

    const handleClick = id =>{
      history.push(`/discription/${id}`);
    }

    return (
        <div>
             <Col>
                    <Card  className="meal">
                      <Card.Img className="thumb" variant="top" src={strMealThumb} />
                      <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>
                        {
                          strInstructions.slice(0,250)
                        }
                        </Card.Text>
                      </Card.Body>
                      <Button onClick={()=>handleClick(idMeal)} variant="primary">Go somewhere</Button>
                    </Card>
             </Col>
        </div>
    );
};

export default Meal;