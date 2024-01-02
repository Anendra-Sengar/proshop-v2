// import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import products from '../products';
import { Col, Image, ListGroup, Row, Card, Button } from 'react-bootstrap';
import Rating from '../component/Rating';
import { useGetProductDetailsQuery } from '../redux/slices/productsApiSlice';
import Loader from '../component/Loader';
import Message from '../component/Message';

// import axios from 'axios';

const ProductScreen = () => {
    //usestate hook
    // const [product, setProduct] = useState([]);

    //useparam react-router-dom
    const { id: productId } = useParams(); //id as known productid 

    //useEffect hook
    // useEffect(() => {
    //   const fetchProduct = async () => {
    //     const {data} = await axios.get(`/api/products/${productId}`);
    //     setProduct(data);
    //   }
    //   fetchProduct();
    // }, [productId])

    const { data: product, isLoading, error } = useGetProductDetailsQuery(productId);
    return (
        <>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>

            {isLoading ?
                (
                    <Loader/>
                )
                : error ?
                    <Message variant='danger'>
                        {error?.data?.message || error.error}
                        </Message>
                    :
                    (<>
                        <Row>
                            <Col md={5}>
                                <Image src={product.image} alt={product.image} fluid />
                            </Col>
                            <Col md={4}>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <h3>{product.name}</h3>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Price: ${product.price}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Description: {product.description}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Price:</Col>
                                                <Col>${product.price}</Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Status:</Col>
                                                <Col>
                                                    <strong>
                                                        {product.countStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                                    </strong>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Button
                                                className='btn-block'
                                                disabled={product.countStock === 0} >
                                                Add To Cart
                                            </Button>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        </Row>
                    </>)
            }

        </>
    )
}

export default ProductScreen