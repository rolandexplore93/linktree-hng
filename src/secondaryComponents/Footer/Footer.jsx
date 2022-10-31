import './Footer.scss';
import images from '../../assets/images';
import logos from '../../assets/logos';

const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <img src={logos.zuriLogo} alt="zuri-logo" />
        </div>
        <div>HNG Internship 9 Frontend Task</div>
        <div>
            <img src={images.ingressiveImage} alt="ingressive" />
        </div>
    </div>
  )
}

export default Footer