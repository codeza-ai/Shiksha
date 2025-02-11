import PropTypes from "prop-types";
import Option from "./Option";

Question.propTypes = {
    question: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    answer: PropTypes.number.isRequired,
    qnumber: PropTypes.number.isRequired
};

const Question = ({qnumber, question, options})=>{
    return(
        <div>
            <div id="question">
                <div>{qnumber}</div>
                <div>{question}</div>
            </div>
            <div id="options">
                <div>
                    {options.map((index, op)=>{
                        return <Option op={op} key={index}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Question;