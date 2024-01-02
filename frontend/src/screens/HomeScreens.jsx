import { Row, Col } from "react-bootstrap"
import Product from "../component/Product"
import { useGetProductsQuery } from "../redux/slices/productsApiSlice"
import Loader from "../component/Loader"
import Message from "../component/Message"

// import products from "../products"
// import { useEffect, useState } from "react"
// import axios from 'axios';

const HomeScreens = () => {

    // const [products, setProducts] = useState([]);

    // useEffect(() => {

    //     const fetchProducts = async () => {
    //         const {data} = await axios.get('/api/products');
    //         console.log(data)
    //         setProducts(data);

    //using fetch await
    // const respones = await fetch('/api/products');
    // const data =await respones.json();
    // setProducts(data)

    // using fetch callback
    // fetch('/api/products')
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         // Handle successful data retrieval
    //         setProducts(data);
    //     })
    //     .catch(error => {
    //         // Handle errors
    //         console.error('Fetch error:', error);
    //     });
    //     }

    //     fetchProducts();
    // }, [])

    const { data: products, isLoading, error } = useGetProductsQuery();

    return (
        <>
            {
                isLoading ?
                    (
                        <Loader />
                    )
                    : error ?
                        (
                            <Message variant='danger'>
                                {error?.data?.message || error.error}
                            </Message>
                        )
                        :
                        (
                            <>
                                <h1>Latest Products</h1>
                                <Row>
                                    {products.map((product) => (
                                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                            <Product product={product} />
                                        </Col>
                                    ))}
                                </Row>
                            </>
                        )
            }

        </>
    )
}

export default HomeScreens