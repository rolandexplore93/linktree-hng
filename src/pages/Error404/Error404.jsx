// import Images from '../../assets/images';
// import primaryComponents from '../../components/primaryComponents';
import "./Error404.scss";
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
    const navigate = useNavigate()
    return (
        <div className='error-page'>
            {/* <img width="250px" src={Images.notFoundImage} className='error__404' alt='error-image' /> */}
            <div className='mb-3 mt-4 text-center'>
                <h4 >Something went wrong!</h4>
                <p className='mb-0'>
                    The page you are looking for must have been removed, renamed or it is yet to exist.
                </p>
            </div>
            <button
            className='btn btn--primary px-5' 
            onClick={()=> navigate("/")}
            >
                Return to Home
            </button>
        </div>
    )
}

export default Error404