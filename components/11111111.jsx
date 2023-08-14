import {useState} from 'react';


export default function Accordion() {
    const faqs = [
        {
            question: "question1",
            answer: "answer1",
        },
        {
            question: "question2",
            answer: "answer2",
        },
        {
            question: "question3",
            answer: "answer3",
        },
    ];

    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        if (openAccordion === index) {
            setOpenAccordion(null);
        } else {
            setOpenAccordion(index);
        }
    };

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div key={faq.question}>
                    <div
                        className="flex cursor-pointer list-none"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span>{faq.question} </span>
                        <span className={`transition transform ${openAccordion === index ? '-rotate-90' : 'rotate-0'}`}>
          <svg
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
          >
            <path d="M15,6l-6,6l6,6"/>
          </svg>
        </span>
                    </div>
                    {openAccordion === index && (
                        <p className="text-neutral-600 mt-3 animate-fadeIn">
                            {faq.answer}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}
