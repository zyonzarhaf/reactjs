const Newsletter = () => {
    return (
        <section className='newsletter'>
            <div className='newsletter-content row'>
                <div className='col'>
                    <h2>Join Our News Letter</h2>
                    <p>Get e-mails with our latest updates and <strong>exclusive offers</strong>.</p>
                </div>
                <form className='row'>
                    <input className='newsletter-input' type='text' placeholder='Your e-mail address...'/><span><button className='signup-btn'>Sign Up</button></span>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;