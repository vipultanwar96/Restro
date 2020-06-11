import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, CardImgOverlay } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({dish})
{
    return (
        <Card
            onClick={() => onclick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function RenderComments({comments}) 
{
    return (
        <Card onclick={() => onclick(comments.id)}>
            <CardBody>
                <CardTitle>Comments</CardTitle>
                <CardText>{comments.comment}</CardText>
            </CardBody>
        </Card>
    );
}

const  DishDetail = (props) => 
{
    
    console.log({props});

    const dishDetail = 'test text';
    return (
        <div className="container">
            <div className="row">
                {dishDetail}
            </div>
        </div>
    );
}

export default DishDetail;