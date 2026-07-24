import { BsEmojiSmile } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaLink } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { TbSend2 } from "react-icons/tb";

let messagesArr  = [
   {
    message:
      "Hi Joy Ijeoma! Great progress on EduMate AI! I reviwed your demo and the AI tutor feature is really impressive.",
    time: "17:07",
    isSender: false,
  },
  {
    message: "Thank you so much, sir/ma. I appreciate the feedback",
    time: "17:07",
    isSender: true,
  },
  {
    message:
      "Hi Joy Ijeoma! Great progress on EduMate AI! I reviwed your demo and the AI tutor feature is really impressive.",
    time: "17:07",
    isSender: false,
  },
  {
    message: "Thank you so much, sir/ma. I appreciate the feedback",
    time: "17:07",
    isSender: true,
  },
];

function Message() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-3.5">
        <h1 className="text-[32px] font-jost text-black font-bold">Message</h1>
        <p className="font-quicksand text-base text-black100">
          Upload all required files and information for your project.
        </p>
      </div>
      <section className="flex flex-col divide-y divide-black rounded-2xl border border-black">
        <header className=" py-5 px-4.5 gap-7 grid grid-cols-3">
          <div className="border border-brown rounded-md py-2 px-3.5 flex items-center gap-1.25 focus-within:border-brand col-span-1 self-center">
            <CiSearch className="w-5 h-5 text-slate100" />
            <input
              type="search"
              name=""
              id=""
              placeholder="Search FAQs..."
              className="text-xs font-quicksand text-black/50 outline-none placeholder:text-slate100 "
            />
          </div>
          <div className="py-4 px-7.5 flex items-center justify-between col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/user2.jpg"
                alt=""
                className="w-15 h-15 rounded-full object-cover"
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-inter text-lg font-bold text-black">
                  Makerthon Administrator
                </h3>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-online-green"></div>
                  <span className="text-xs text-blue100 font-jost">Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button>
                <GrSearch className="w-4 h-4 text-black" />
              </button>
              <button>
                <IoIosArrowDown className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-3 divide-x divide-black">
          <div className="flex flex-col gap-4 px-4.5 py-5"></div>
          <div className="col-span-2 flex flex-col gap-4 px-4.5 py-5">
            <div className="flex flex-col gap-4 h-100 overflow-y-auto">
              <div className="self-center px-3 py-1.25 text-xs text-slate400 rounded-full shadow-today ">
                TODAY
              </div>
              {
                messagesArr.map(({message, time, isSender}, i) => <div key={i} className={`flex items-end gap-2 py-4 px-6 ${
                  isSender ? 'justify-end bg-orange100 rounded-2xl ' : 'justify-start shadow-client rounded-2xl rounded-bl-0'
                }`}>
                  <p>{message}</p>
                  <span>{time}</span>
                </div>)
              }
            </div>
            <div className="mt-auto border border-blue200 rounded-2xl p-4 flex flex-col gap-2.5 shadow-input">
              <div className="flex items-center gap-2">
                <button>
                  <FaLink className="w-4 h-4 text-blue300" />
                </button>
                <input
                  type="text"
                  name=""
                  id=""
                  className="text-black text-sm outline-none"
                />
              </div>
              <div className="flex items-center justify-end gap-2">
                <button className="rounded-full flex items-center justify-center border border-slate300 w-10 h-10">
                  <BsEmojiSmile className="w-6 h-6" />
                </button>
                <button className="flex py-2.5 px-4 gap-2 items-center rounded-full bg-brand hover:bg-shield text-black100 text-sm font-bold">
                  Send
                  <TbSend2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Message;
