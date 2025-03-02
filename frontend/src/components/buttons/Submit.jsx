import PropTypes from "prop-types";

const Submit = ({text}) =>{
    return (
        <button
            type = "submit"
            className="bg-linear-to-br/hsl from-blue-700 to-blue-500 
            hover:from-blue-800 hover:to-blue-600
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