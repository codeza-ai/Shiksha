import { Link } from "react-router-dom";

const StartTest = ()=> {
    return (
    <div>
        <div id="instructions">
            <div>
                <h2>Instructions:</h2>
            </div>
            <div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div>
                <Link to={"/section/A"}>Start</Link>
            </div>
        </div>
    </div>);
};
export default StartTest;