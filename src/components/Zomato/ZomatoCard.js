import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

const ZomatoCard = (props) => {
    console.log(props.searchResults);
    return (
        <Row>
            {
                props.searchResults
                    .map(
                        result => {
                            return (
                                <Card body outline color="secondary">

                                    <CardTitle>{result.restaurant.name}</CardTitle>
                                    <CardText>
                                        <br />
                        Rating: {result.restaurant.user_rating.aggregate_rating} from {result.restaurant.user_rating.votes} votes.
                                        <br />
                        People believe this restaurant is: {result.restaurant.user_rating.rating_text}.
                        <br />
                        Phone Number: {result.restaurant.phone_numbers}
                                    </CardText>
                                    <a href={result.restaurant.menu_url} target="_blank"><Button color="success">View Menu!</Button></a>
                                </Card>
                            )
                        }
                    )
            }
        </Row >
    );
};

export default ZomatoCard;