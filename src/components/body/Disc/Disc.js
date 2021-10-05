import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { animated, useSpring } from 'react-spring';
import NotFound from '../../NotFound/NotFound';
import './Disc.css';

const Disc = () => {
    const [err, setErr] = useState(false)
    const [discrip, setDiscrip] = useState({});
    const {id} = useParams(); 
    const [flip, set] = useState(false)
    const propss = useSpring({to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 200,
       
        onRest: () => set(!flip),})

    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => setDiscrip(res.data.meals[0]))
        .catch(err => setErr(true));
        console.log(discrip)
    },[])

    return (
        <div>
            {
                 err && <NotFound></NotFound>
             }
            <div>
            <Card className="text-center">
                <Card.Header><animated.div style={propss} className="food">All about the Food</animated.div></Card.Header>
                <Card.Img className="mx-auto rounded-2 mt-4" style={{width:"25%"}} variant="top" src={discrip.strMealThumb} />
                <Card.Body>
                    <p>Area : <i>{discrip.strArea}</i></p>
                    <Card.Title>{discrip.strMeal}</Card.Title>
                    <Card.Text>
                        {discrip.strInstructions?.slice(0, 300)}
                    </Card.Text>
                </Card.Body>
                <Button variant="primary">
                    <a  style={{textDecoration:"none"}} className="text-light fw-bold" href={discrip.strYoutube}> Youtube </a>
                </Button>
                </Card>
            </div>
        </div>
    );
};

export default Disc;