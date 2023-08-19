// components/list-of-posts.jsx
import { useState } from "react";
import { usePosts, useCategories } from "api/useApi";
import Link from "next/link";

export default function ListOfPost({ onClose }) {
  const {
    posts,
    isLoading: isLoadingPosts,
    isError: isErrorPosts,
  } = usePosts();
  const {
    categories,
    isLoading: isLoadingCategories,
    isError: isErrorCategories,
  } = useCategories();
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

  if (isLoadingPosts || isLoadingCategories) {
    return <div>Loading...</div>;
  }

  if (isErrorPosts || isErrorCategories) {
    return <div>Error loading data.</div>;
  }

  // Create a Set to track unique category names
  const uniqueCategoryNames = new Set();

  return (
    <div>
      {/* Place the accordion here */}
      <div className="">
        {faqs.map((faq, index) => (


          <div key={faq.question}>
            <div className="flex cursor-pointer list-none" onClick={() => toggleAccordion(index)}>
              <span>{faq.question}</span>
              <span className={`transition transform ${openAccordion === index ? "-rotate-90" : "rotate-0"}`}>
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M15,6l-6,6l6,6" />
                </svg>
              </span>
            </div>

            {openAccordion === index && (<p className="text-neutral-600 mt-3 animate-fadeIn">
                {faq.answer}
              </p>)}
          </div>




        ))}
      </div>

      {posts.map((post) => (
        <div key={post.id} className="my-2">
          {post.categories.length === 0 ? (
            <Link href={`/${post.slug}`} onClick={onClose}>
              {post.title.rendered}
            </Link>
          ) : (








            post.categories.map((categoryId, index) => {
              const category = categories.find((cat) => cat.id === categoryId);

              if (!uniqueCategoryNames.has(category.name)) {
                uniqueCategoryNames.add(category.name);
                return (
                  <div key={category.id}>
                    <div className="flex cursor-pointer list-none" onClick={() => toggleAccordion(index)}>
                    <div className="bg-green-200">
                      {category.name}
                    </div>
                      <span className={`transition transform ${openAccordion === index ? "-rotate-90" : "rotate-0"}`}>
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M15,6l-6,6l6,6" />
                </svg>
              </span>
                    </div>
                    {/* related Post titles */}
                    {posts.filter((postItem) => postItem.categories.includes(category.id)).sort((a, b) => a.id - b.id).map((postItem) => (


                        <ul key={postItem.id}>
                          <Link href={`/${postItem.slug}`} onClick={onClose}>
                            {openAccordion === index && (<p className="text-neutral-600 mt-3 animate-fadeIn">
                            {postItem.title.rendered}
                            </p>)}
                          </Link>
                        </ul>



                      ))}
                  </div>
                );
              }
              return null; // Category name already displayed, don't render
            })









          )}
        </div>
      ))}
    </div>
  );
}
