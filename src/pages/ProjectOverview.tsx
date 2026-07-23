import { BsCalendar4Event } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { FaCheck, FaCode, FaRegEdit } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { GrDocumentText } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoMdLink } from "react-icons/io";
import { LiaFilePdf } from "react-icons/lia";
import { LuVideo } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";

const stats = [
  {name : 'Demo Video', sub : 'MP4 · 45.6 MB', icon : LuVideo},
  {name : 'Pitch Deck', sub : 'PDF · 45.6 MB', icon : LiaFilePdf},
  {name : 'Source Code', sub : 'GitHub', icon : FaCode},
  {name : 'Documentation', sub : 'PDF · 45.6 MB', icon : GrDocumentText},
  {name : 'Prototype Link', sub : 'https://edumate.ai', icon : IoMdLink},
  {name : 'Screenshots', sub : '8 File', icon : CiImageOn},
]

function ProjectOverview() {

  return <section className="flex flex-col gap-7">
    <div className="flex flex-col gap-3.5">
      <h1 className="font-jost text-3xl font-bold text-black ">Welcome back, Joy Ijeoma!</h1>
      <p className="font-quicksand text-base text-black100">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
    </div>

    <div className="px-12.5 py-12.5 border border-brown rounded-3xl flex items-center  gap-7.5">
      <img src="/project-img.jpg" alt="" className=" rounded-md object-cover h-50 w-60"/>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-7.5">
              <div className="flex items-center gap-3.5">
                <h2 className="text-3xl font-jost text-black font-bold">EduMate AI</h2>
                <FaRegEdit className="w-6 h-6 text-black" />
              </div>
              <div className="bg-blue px-2.5 py-1.25 text-white rounded-md font-quicksand text-sm">In Progress</div>
            </div>
            <p className="text-base font-quicksand text-black100 max-w-[45ch]">AI-powered learning companion that helps students study smarter, practice better and succeed.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="border-2 border-border-light rounded-md px-4 py-2 shadow-btn text-investor-text font-medium text-xs">AI in Education</div>
            <div className="border-2 border-border-light rounded-md px-4 py-2 shadow-btn text-investor-text font-medium text-xs">EduTech</div>
            <div className="border-2 border-border-light rounded-md px-4 py-2 shadow-btn text-investor-text font-medium text-xs">Web App</div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2"><MdOutlineLocationOn className="w-6 h-6 shrink-0" /> <span className="text-base text-black font-quicksand">University of Lagos</span></div>
          <div className="flex items-center gap-2"><HiOutlineUserGroup className="w-6 h-6 shrink-0" /> <span className="text-base text-black font-quicksand">Team Vision AI</span></div>
          <div className="flex items-center gap-2"><BsCalendar4Event className="w-6 h-6 shrink-0" /> <span className="text-base text-black font-quicksand">Created on May 20, 2026</span></div>
        </div>
      </div>

    </div>

    <div className="p-7.5 border border-brown rounded-3xl flex flex-col gap-6">
      <div className="flex flex-col gap-2">
      <h1 className="font-jost text-xl font-bold text-black ">Attachments Summary</h1>
      <p className="font-quicksand text-base text-black100">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
    </div>
      <div className="grid grid-cols-3 gap-5">
{
  stats.map(({name, sub, icon:Icon},i) => <div key={i} className="flex items-center gap-6 p-5 rounded-xl border border-brown/58">
    <div className={`w-12.5 h-12.5 rounded-full flex items-center justify-center ${
      i === 1 ?  'bg-red/31 text-red' :
      i === 3 ? 'bg-orange/39 text-brand' :
      i === 5 ? 'bg-blue text-white' : 'bg-investors-icon/31 text-investors-icon'
    }`}><Icon className="w-5 h-5"/></div>
    <div className="flex flex-col gap-1">
      <h3 className="text-base font-jost text-black font-medium">{name}</h3>
      <span className="font-quicksand text-[11px] text-black">{sub}</span>
    </div>
    {i === 3 ? <FiClock className="w-4 h-4 text-shield self-end" /> : <FaCheck className="w-3 h-3 text-investors-icon self-end" />}
  </div>)
}
      </div>
    </div>

  </section>;
}

export default ProjectOverview;
