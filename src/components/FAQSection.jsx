import { useState } from "react";
import { ChevronDown, ChevronUp, Mail } from "lucide-react";
import { faqData } from "../data/FAQ";

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openQuestions, setOpenQuestions] = useState({});

  

  const toggleQuestion = (id) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
  <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
    Frequently Asked Questions
  </h2>

  <div className="flex flex-col md:flex-row gap-8">
    <div>
      {/* Categories */}
      <div className="flex flex-col flex-wrap gap-3 mb-6">
        {Object.keys(faqData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-md capitalize transition-colors shadow ${
              activeCategory === category
                ? "bg-orange-400 text-white hover:bg-white hover:text-orange-400 hover:border border-orange-400"
                : "bg-gray-200 text-gray-700  hover:bg-white hover:text-orange-400 hover:border border-orange-400"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-md">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-semibold text-gray-800">Want to know more?</h3>
          <Mail className="w-6 h-6 text-gray-500" />
        </div>
        <a
          href="mailto:myemail@gmail.com"
          className="text-orange-400 hover:text-orange-300 font-medium"
        >
          mzajbe@gmail.com
        </a>
      </div>
    </div>

    {/* Questions */}
    <div className="space-y-4 flex-1">
      {faqData[activeCategory].map((item, index) => {
        const questionId = `${activeCategory}-${index}`;
        return (
          <div
            key={questionId}
            className="border rounded-md shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleQuestion(questionId)}
              className="w-full px-4 py-3 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="font-medium text-left text-gray-800">
                {item.question}
              </span>
              {openQuestions[questionId] ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>

            <div
              className={`transition-all duration-200 ease-in-out ${
                openQuestions[questionId]
                  ? "max-h-48 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-4 py-3 bg-white text-gray-700">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</div>

  );
};

export default FAQSection;
