import {products} from './data';
import Title from './Title';

const Products = () => {
    return (
        <section id='shop' className='products'>
            <Title title='New Arrivals'/>
            <div className='products-container row'>
            {products.map((product, index) => {
                    return (
                        <SingleProduct {...product} key = {index}/>
                    )
                })}
            </div>
        </section>
    );
};

const SingleProduct = (props) => {
    const {img, alt, brand, name, price} = props
    return (
        <div className='single-product col'>
            <img src={img} alt={alt}/>
            <div className='product-description row'>
                <div>
                    <h3>{brand}</h3>
                    <p>{name}</p>
                    <p>${price}</p>
                </div>
                <button className="cart-btn">
                    <a href='#buy'>
                        <i className='fas fa-shopping-cart cart-icon'></i>
                    </a>
                </button>
            </div>
        </div>
    );
};

export default Products;