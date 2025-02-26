import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
const RegButton = ({priText, secText})=>{
    return <Link
        to="/register"
        className='bg-blue-500 hover:bg-blue-700 hover:scale-102 delay-75 text-lg font-semibold text-white p-6 pt-3 pb-3 rounded-md h-fit w-fit'
    >{priText}<span className='font-light'>{secText}</span></Link>
};

RegButton.propTypes = {
    priText: PropTypes.string,
    secText: PropTypes.string,
};

export default RegButton;