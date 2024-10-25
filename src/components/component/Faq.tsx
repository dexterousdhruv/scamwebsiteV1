import { useState } from 'react';
import faqData from '../../data/faqData.json';

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index: any) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section id="faq" className="bg-black py-12">
      <div className="mx-auto w-full max-w-7xl px-45">
        <h2 className="text-5xl font-bold text-white mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 transition-all duration-300 hover:border-gray-600"
            >
              <button
                className="flex justify-between items-center w-full text-left px-5 py-4"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-bold text-white">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-orange-400 transform transition-transform duration-200 ${openQuestion === index ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-5 py-3 bg-orange-500 bg-opacity-70 transition-all duration-200 ease-in-out ${
                  openQuestion === index
                    ? 'max-h-40 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className=" text-gray-300 text-base leading-relaxed font-semibold text-center">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
