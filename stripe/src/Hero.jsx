import { useAppContext } from "./context";
import phoneImg from './images/phone.svg';

const Hero = () => {
    const {closeSubmenu} = useAppContext();
    return (
        <section className='hero' onMouseOver={closeSubmenu}>
            <div className='hero-center'>
                <article className='hero-info'>
                    <h1>payments infrastructure for the internet</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, aliquid optio tenetur alias accusantium dolor vitae adipisci exercitationem quis quia? Enim ratione, ex expedita error totam consequuntur aliquam sit obcaecati.
                    </p>
                    <button className='btn'>start now</button>
                </article>
                <article className='hero-images'>
                    <img src={phoneImg} alt='' className='phone-img'/>
                </article>
            </div>
        </section>
    )
};

export default Hero;