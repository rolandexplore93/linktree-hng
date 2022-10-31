import icons from '../../assets/icons';
import images from '../../assets/images';
import './Content.scss';


const Content = () => {
  return (
    <div className='content'>
        <div className='content__profile'>
            <div className='content__profile-details'>
                <img className='content__profile-pic' src={images.profileImage} alt="profile-pic" />
                <p className='content__profile-name'>Ogundipe Orobola Roland</p>
                <img className='content__profile-share-icon' src={icons.avatarIcon} alt="profile-share-icon" />
            </div>
            <div>Link</div>
        </div>
        <div className='content__socials'>
            <img src={icons.slack} alt="slack-icon" />
            <img src={icons.github} alt="github-icon" />
        </div>
    </div>
  )
}

export default Content