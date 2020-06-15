import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardImgOverlay } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderDish({dish})
{
    return (
        <Card
            onClick={() => onclick(dish.id)}>
            <CardImg top src={baseUrl + dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function RenderComments({comments, postComment, dishId}) {
    return (
        <Card onclick={() => onclick(comments.id)}>
            <CardBody>
                <CardTitle>Comments</CardTitle>
                <CardText>{comments.comment}</CardText>
            </CardBody>
        </Card>
    );
}
<CommentForm dishId={dishId} addComment={addComment} />
const  DishDetail = (props) => 
{
    
    console.log({props});
    <CommentForm dishId={dishId} postComment={postComment} />
    this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    postComment={props.postComment}
    this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null)
    const dishDetail = 'test text';
    return (
        <div className="container">
            <div className="row">
            <RenderComments comments={props.comments}
        addComment={props.addComment}
        dishId={props.dish.id}
      />
                {dishDetail}
            </div>
        </div>
    );
}

export default DishDetail;