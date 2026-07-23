import { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FiInfo } from "react-icons/fi";
import { IoArrowForwardOutline } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const faqs = [
  {
    id: 1,
    title: "What is Makerthon",
    desc: "Makerthon is a national AI innovation challenge where students build real, working AI-powered solutions to solve Nigeria’s most pressing problems. It is part of the Makemation National AI Festivals across 12 universities.",
  },
  {
    id: 2,
    title: "Who can participate in Makerthon?",
    desc: "Makerthon is a national AI innovation challenge where students build real, working AI-powered solutions to solve Nigeria’s most pressing problems. It is part of the Makemation National AI Festivals across 12 universities.",
  },
  {
    id: 3,
    title: "How do I register for Makerthon?",
    desc: "Makerthon is a national AI innovation challenge where students build real, working AI-powered solutions to solve Nigeria’s most pressing problems. It is part of the Makemation National AI Festivals across 12 universities.",
  },
  {
    id: 4,
    title: "Can I participate as an individual or do I need a team?",
    desc: "Makerthon is a national AI innovation challenge where students build real, working AI-powered solutions to solve Nigeria’s most pressing problems. It is part of the Makemation National AI Festivals across 12 universities.",
  },
  {
    id: 5,
    title: "What are the challenge tracks?",
    desc: "Makerthon is a national AI innovation challenge where students build real, working AI-powered solutions to solve Nigeria’s most pressing problems. It is part of the Makemation National AI Festivals across 12 universities.",
  },
  {
    id: 6,
    title: "What is the timeline for Makerthon?",
    desc: "Makerthon is a national AI innovation challenge where students build real, working AI-powered solutions to solve Nigeria’s most pressing problems. It is part of the Makemation National AI Festivals across 12 universities.",
  },
  {
    id: 7,
    title: "What are the submission requirements?",
    desc: "Makerthon is a national AI innovation challenge where students build real, working AI-powered solutions to solve Nigeria’s most pressing problems. It is part of the Makemation National AI Festivals across 12 universities.",
  },
  {
    id: 8,
    title: "How do I submit my project?",
    desc: "Makerthon is a national AI innovation challenge where students build real, working AI-powered solutions to solve Nigeria’s most pressing problems. It is part of the Makemation National AI Festivals across 12 universities.",
  },
  {
    id: 9,
    title: "Can I edit my submission after submitting?",
    desc: "Makerthon is a national AI innovation challenge where students build real, working AI-powered solutions to solve Nigeria’s most pressing problems. It is part of the Makemation National AI Festivals across 12 universities.",
  },
  {
    id: 10,
    title: "How will project be judge?",
    desc: "Makerthon is a national AI innovation challenge where students build real, working AI-powered solutions to solve Nigeria’s most pressing problems. It is part of the Makemation National AI Festivals across 12 universities.",
  },
  {
    id: 11,
    title: "What are the prizes?",
    desc: "Makerthon is a national AI innovation challenge where students build real, working AI-powered solutions to solve Nigeria’s most pressing problems. It is part of the Makemation National AI Festivals across 12 universities.",
  },
];

function Faq() {
  const [activeFaq, setActiveFaq] = useState<null | number>(1);

  function handleActiveFaqChange(id: number) {
    setActiveFaq((prev) => (prev === id ? null : id));
  }

  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center gap-3 justify-between">
        <div className="flex flex-col gap-3.5">
          <h1 className="text-[32px] font-jost text-black font-bold">FAQs</h1>
          <p className="font-quicksand text-base text-black100">
            Find answers to common questions about Makerthon
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-base font-quicksand text-brown">
            <AiOutlineQuestionCircle className="w-4 h-4" /> Upload Guidelines
          </div>
          <div className="flex items-center gap-2 text-base font-quicksand text-brown">
            <FiInfo className="w-4 h-4" /> Upload Tips
          </div>
        </div>
      </div>
      <div className="border border-brown rounded-md py-2 px-3.5 flex items-center gap-1.25 focus-within:border-brand">
        <CiSearch className="w-5 h-5 text-slate100" />
        <input
          type="search"
          name=""
          id=""
          placeholder="Search FAQs..."
          className="text-xs font-quicksand text-black/50 outline-none placeholder:text-slate100 "
        />
      </div>
      <div className="flex flex-col gap-6">
        {faqs.map(({ id, title, desc }) => (
          <div
            key={id}
            className="border border-brown rounded-2xl px-15 py-12 flex gap-6 flex-col"
          >
            <div className="flex items-center justify-between gap-3">
              <h4 className="font-jost text-black text-base font-semibold">
                {title}
              </h4>
              <button
                onClick={() => handleActiveFaqChange(id)}
                className={`${activeFaq === id ? "rotate-90" : ""}`}
              >
                <MdOutlineArrowForwardIos className="w-6 h-6" />
              </button>
            </div>
            {activeFaq === id && (
              <p className="text-sm font-quicksand text-black">{desc}</p>
            )}
          </div>
        ))}
      </div>
      <div className="border border-brown rounded-2xl p-5 flex gap-9 flex-col">
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-jost text-black font-medium">
            Need More Help?
          </h3>
          <p className="font-quicksand text-[11px] text-black">
            Can’t find the answer you’re looking for? We’re here to help!
          </p>
        </div>
        <button className="bg-brand hover:bg-shield transition-all rounded-md cursor-pointer text-black flex gap-4 p-2 text-base font-bold items-center justify-center">
          Contact Support{" "}
          <IoArrowForwardOutline className="w-4 h-4 text-black" />
        </button>
      </div>
    </section>
  );
}

export default Faq;
