import PropTypes from "prop-types";

const Option = ({ op, index, isSelected, handleSelect }) => {
    return (
        <button
            className={`p-2 pl-4 rounded-lg border text-left transition-all w-full ${isSelected ? "text-blue-500 border-2" : "bg-white border-2 border-gray-300"
                }`}
            onClick={() => handleSelect(index)}
        >
            {op}
        </button>
    );
};

Option.propTypes = {
    op: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
    handleSelect: PropTypes.func.isRequired,
};

export default Option;
