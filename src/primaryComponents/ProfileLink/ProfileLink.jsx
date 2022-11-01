import './ProfileLink.scss';
import ReactTooltip from 'react-tooltip';

const ProfileLink = ({ title, link, id, dataTip, toolTipLinks, toolTipSubtext }) => {
  return (
    <div className='btn'>
        <a className='btn__link' href={link} id={id} data-tip={dataTip} data-for={toolTipLinks}>{title}</a>
        <ReactTooltip id={toolTipLinks}>{toolTipSubtext}</ReactTooltip>
    </div>
  )
}

export default ProfileLink