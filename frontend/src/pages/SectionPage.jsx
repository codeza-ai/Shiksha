import { useEffect } from "react";
import { useParams } from "react-router-dom";
import checkSection from "../util/section";
import checkSession from "../util/session";
import logout from "../util/logout";

const SectionPageInfo = {
  A: "This section evaluates quantitative aptitude, problem-solving skills, and numerical reasoning. It includes arithmetic, algebra, geometry, and data interpretation to assess logical application and mathematical proficiency.",
  B: "Designed to test language proficiency, logical thinking, and word association, this section includes analogies, sentence completion, and critical reasoning to measure verbal intelligence and linguistic dexterity.",
  C: "This section focuses on pattern recognition, spatial reasoning, and logical sequencing using puzzles, shape transformations, and visual analogies to assess abstract thinking and problem-solving capabilities.",
  D: "Evaluating reading proficiency and analytical skills, this section includes passages with inference-based questions, testing the ability to understand, interpret, and extract key information effectively.",
};

const sectionImage = {
  A: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  B: "https://images.unsplash.com/photo-1521424159246-e4a66f267e4b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  C: "https://images.unsplash.com/photo-1612611741189-a9b9eb01d515?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  D: "https://images.unsplash.com/photo-1601646371844-27ca327a468e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const SectionPage = () => {
  const { sectionName } = useParams();
  function goBack() {
    window.history.back();
  }
  function startQuiz() {
    localStorage.setItem("currentSection", sectionName);
    window.location.href = `/test/section/${sectionName}/question/1`;
  }

  useEffect(() => {
    async function check() {
      const session = await checkSession();
      if (!session) {
        await logout();
        alert("Session expired. Please login again.");
      }
      const section = await checkSection(sectionName);
      if (section) {
        if (sectionName != "D") {
          window.location.href = `/test/section/${String.fromCharCode(sectionName.charCodeAt(0) + 1)}`;
        } else {
          window.location.href = "/test/finish";
        }
      }
    }

    if (sectionName > "D") {
      window.location.href = "/notfound";
    }
    check();
  }, [sectionName]);
  return (
    <div className="w-full h-screen bg-gray-100 flex justify-evenly items-center">
      <div className="w-1/3 bg-white p-5 gap-10 h-2/3 flex flex-col justify-around rounded-2xl text-center">
        <div>
          <div className="w-full mt-5">
            <h1 className="text-4xl text-black">Section - {sectionName}</h1>
          </div>
          <div className="w-full mt-8">{SectionPageInfo[sectionName]}</div>
        </div>
        <div className="w-full flex justify-center gap-5">
          <button
            className="bg-gray-800 hover:bg-black hover:scale-102 delay-75 text-lg font-semibold text-white p-6 pt-3 pb-3 rounded-md h-fit w-fit"
            onClick={() => goBack()}
          >
            Go Back
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 hover:scale-102 delay-75 text-lg font-semibold text-white p-6 pt-3 pb-3 rounded-md h-fit w-fit"
            onClick={() => startQuiz()}
          >
            Start Quiz
          </button>
        </div>
      </div>
      <div className="w-1/3 h-2/3 flex justify-center items-center">
        <img
          src={sectionImage[sectionName]}
          alt="Section Image"
          className="max-w-full max-h-full"
        />
      </div>
    </div>
  );
};

export default SectionPage;
