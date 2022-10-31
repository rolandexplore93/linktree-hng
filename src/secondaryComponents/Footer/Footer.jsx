import './Footer.scss';
import images from '../../assets/images';
import logos from '../../assets/logos';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__container'>
            <div className='footer__logo'>
                <img src={logos.zuriLogo} alt="zuri-logo" />
            </div>
            <div className='footer__text'>HNG Internship 9 Frontend Task</div>
            <div className='footer__image'>
                <img src={images.ingressiveImage} alt="ingressive" />
            </div>
        </div>
    </div>
  )
}

export default Footer