import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Option from "./Option";

const Question = ({ qnumber, question, options }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(()=>{
        setSelectedOption(null);

        // If user has already answered this question, set the selected option
        const savedAnswer = localStorage.getItem(`q${qnumber}`);
        if(savedAnswer){
            setSelectedOption(parseInt(savedAnswer));
        }
    }, [qnumber]);

    const handleSelect = (index) => {
        setSelectedOption(index);
        // Set the selected option in local storage with section and question number
        const storedAnswers = JSON.parse(localStorage.getItem("answers")) || [];
        const updatedAnswers = storedAnswers.filter(answer => answer.qnumber !== qnumber);
        updatedAnswers.push({ qnumber, selectedOption: index+ 1});
        localStorage.setItem("answers", JSON.stringify(updatedAnswers));
    };

    return (
        <div className="p-10 w-full bg-white rounded-2xl text-2xl">
            <div id="question" className="mb-10 flex gap-2">
                <div className="font-bold">Q{qnumber}:</div>
                <div className="">{question}</div>
            </div>
            <div id="options" className="flex flex-col gap-2">
                {options.map((op, index) => (
                    <Option
                        key={index}
                        op={op}
                        index={index}
                        isSelected={selectedOption === index}
                        handleSelect={handleSelect}
                    />
                ))}
            </div>
        </div>
    );
};

Question.propTypes = {
    question: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    qnumber: PropTypes.number.isRequired,
};

export default Question;