const Footer = () => {
    return (
        <footer>
            <div className='footer-content row'>
                <div id='contact' className='col'>
                    <h4>Contact</h4>
                    <p>Address: Lorem ipsum,<br/>dolor sit amet consectetur adipisicing elit.</p>
                    <p>Phone: 01 1234 567</p>
                    <p>Hours: 08:00 - 18:00, Mon-Sat</p>
                </div>
                <div id='about' className='col'>
                    <h4>About</h4>
                    <p>About Us</p>
                    <p>Delivery Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                    <p>Contact Us</p>
                </div>
                <div id='my-account' className='col'>
                    <h4>My Account</h4>
                    <p>Sign In</p>
                    <p>View Cart</p>
                    <p>My Wishlist</p>
                    <p>Track My Order</p>
                    <p>Help</p>
                </div>
                <div id='install-app' className='col'>
                    <h4>Install App</h4>
                    <p>From App Store or Google Play</p>
                    <div id='apps' className='row'>
                        <img src='' alt='app-store'/>
                        <img src='' alt='google-play'/>
                    </div>
                    <p>Secured Payment Gateways</p>
                    <div id='payment' className='row'>
                        <img src='' alt='Visa, Mastercard'/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;