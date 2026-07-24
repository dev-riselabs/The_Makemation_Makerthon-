import { CiSearch } from "react-icons/ci";
import { GrSearch } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";

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
                <img src="/user2.jpg" alt="" className="w-15 h-15 rounded-full object-cover" />
                <div className="flex flex-col gap-1">
                    <h3 className="font-inter text-lg font-bold text-black">Makerthon Administrator</h3>
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-online-green"></div>
                        <span className="text-xs text-blue100 font-jost">Online</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <button><GrSearch className="w-4 h-4 text-black" /></button>
                <button><IoIosArrowDown className="w-4 h-4 text-black" /></button>
            </div>
          </div>
        </header>
        <div></div>
      </section>
    </section>
  );
}

export default Message;
