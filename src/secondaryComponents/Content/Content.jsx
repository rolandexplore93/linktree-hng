import './Content.scss';
import icons from '../../assets/icons';
import images from '../../assets/images';
import primaryComponents from '../../primaryComponents';

const Content = () => {

  return (
    <div className='content'>
        <div className='content__profile'>
            <div className='content__profile-details'>
                <img className='content__profile-pic' id='profile__img' src={images.profileImage} alt="profile-pic" />
                <p className='content__profile-name twitter' id='twitter'>oga_rolly</p>
                <p className='content__profile-name slack' id='slack'>rollyJS</p>
                <img className='content__profile-share-icon' src={icons.avatarIcon} alt="profile-share-icon" />
            </div>
            <div className='profile-links'>
                <primaryComponents.ProfileLink 
                    title={'Twitter Link'} 
                    id={'twitter'}
                />
                <primaryComponents.ProfileLink 
                    title={'Zuri Team'} 
                    link={'https://training.zuri.team/'}
                    id={'btn__zuri'}
                />
                <primaryComponents.ProfileLink 
                    title={'Zuri Books'} 
                    link={'http://books.zuri.team'}
                    id={'books'}
                />
                <primaryComponents.ProfileLink 
                    title={'Python Books'} 
                    link={'https://books.zuri.team/python-for-beginners?ref_id=rollyJS'}
                    id={'book__python'}
                />
                <primaryComponents.ProfileLink 
                    title={'Background Check for Coders'} 
                    link={'https://background.zuri.team'}
                    id={'pitch'}
                />
                <primaryComponents.ProfileLink 
                    title={'Design Books'} 
                    link={'https://books.zuri.team/design-rules'}
                    id={'book__design'}
                />
            </div>
        </div>
        <div className='content__socials'>
            <img src={icons.slack} id='slack' alt="slack-icon" />
            <img src={icons.github} alt="github-icon" />
        </div>
    </div>
  )
}

export default Content