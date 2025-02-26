import PropTypes from "prop-types";

const Submit = ({text}) =>{
    return (
        <button
            type = "submit"
            className="bg-blue-500 hover:bg-blue-700 
            hover:scale-102 delay-75 text-lg font-semibold 
            text-white p-6 pt-3 pb-3 rounded-md flex gap-2"
        >
            {text}
        </button>
    )
};

Submit.propTypes ={
    text: PropTypes.string.isRequired
}

export default Submit;