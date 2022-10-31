import './ProfileLink.scss';

const ProfileLink = ({ title, link, id }) => {
  return (
    <div className='btn'>
        <a className='btn__link' href={link} id={id}>{title}</a>
    </div>
  )
}

export default ProfileLink