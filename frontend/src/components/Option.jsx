import PropTypes from "prop-types";

Option.propTypes= {
    op: PropTypes.string.isRequired
}

const Option = ({op})=> {
    return <div>
        {op}
    </div>
};

export default Option;