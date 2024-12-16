import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Detail() {
    const [product, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {id}=useParams()

    const fecthProduct = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json()
        setProducts(data)
        console.log(data);
        
        setLoading(false)
    }
    useEffect(() => { fecthProduct(); }, []);
    if (loading)
        return <p>Loading</p>
    return (
<>
<Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home"><Link to={'/'} className='text' style={{ textDecoration: "none" }} >E-commerce</Link></Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link><Link to={'/'} className='text' style={{ textDecoration: "none" }} >Home</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
<div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid"
                        style={{ borderRadius: '8px' ,height:'400px'}}
                    />
                </div>
                <div className="col-md-6">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p className="text-muted">Category: {product.category}</p>
                    <p className="fw-bold text-success">${product.price.toFixed(2)}</p>
                </div>
            </div>
        </div>
</>
    )
}

export default Detail