import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Home() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const fecthProduct = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json()
        setProducts(data)
        setLoading(false)
    }
    const [filteredProducts, setFilteredProducts] = useState([]);
    const search = (e) => {
        e.preventDefault();
        const title = e.target.title.value.toLowerCase();
        const filtered = products.filter(product => 
                product.title.toLowerCase().includes(title)
            );
            setFilteredProducts(filtered);
            setProducts(filteredProducts);


    };
    useEffect(() => { fecthProduct(); }, []);
    if (loading)
        return <p>Loading</p>
    return (<>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home"><Link to={'/'} className='text' style={{ textDecoration: "none" }} >E-commerce</Link></Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link><Link to={'/'} className='text' style={{ textDecoration: "none" }} >Home</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <div className="row mb-4">
            <div className="col-md-6 mx-auto mt-5">
                <form onSubmit={search}><input
                    type="text"
                    className="form-control"
                    placeholder="Search for products..." 
                    name='title'                   
                /></form>
            </div>
        </div>
        <div class="container mt-4">
            <div class="row g-3">
                {
                products.map((product) => (
                    <div key={product.id} className="col-md-4">
                        <div className="card h-100 w-100">
                            <img
                                src={product.image}
                                className="card-img-top"
                                alt={product.title}
                                style={{ maxHeight: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="fw-bold text-success">${product.price}</p>
                                <Link to={`/detail/${product.id}`}><div className="d-flex justify-content-center align-items-end"><button  className='btn btn-primary w-100'>View</button></div></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
    )
}

export default Home