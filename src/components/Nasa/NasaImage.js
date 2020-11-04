import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

const NasaImage = (props) => {


    return (
        <div>
            <img src={props.NasaData} />
        </div>
    )
}

export default NasaImage 