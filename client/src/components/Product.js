import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
import {Link} from 'react-router-dom'

const Product = ({product}) => {
return (
   
    <Card className = "my-3 p-3 rounded">
        <a href = "https://amzn.to/3xkpVGT">
      <Card.Img src = {product.image} variant ='top'/>
      </a>
        <Card.Body>
        <a href = {"https://amzn.to/3xkpVGT"}>
      <Card.Title as ="div">
          <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as ="div">
             <div className ="my-3">
                 <Rating value = {product.rating} text = {`${product.numReviews} reviews`} />
             </div>
        </Card.Text>
        <Card.Text as = "h3">
            ${product.price}
        </Card.Text>
        </Card.Body>

    </Card>
   
)
}

export default Product