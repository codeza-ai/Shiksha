import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
const SectionPageInfo = [
    {"A": "This is SectionPage A"},
    {"B": "This is SectionPage B"},
    {"C": "This is SectionPage C"},
    {"D": "This is SectionPage D"}
]
SectionPage.propTypes = {
    SectionPage: PropTypes.string.isRequired
}
const SectionPage = () => {
    const { sectionName } = useParams(); 

    return (
        <div className="w-full">
            <div className="w-1/2">
                <div>
                    <h1>SectionPage - {sectionName}</h1>
                </div>
                <div>
                    {SectionPageInfo[sectionName]}
                </div>
            </div>
            <div className="w-1/2">
                <div id="SectionPageImage">
                </div>
            </div>
        </div>
    )
};

export default SectionPage;