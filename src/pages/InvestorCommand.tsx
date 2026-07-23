import { GrDocumentText } from "react-icons/gr";
import {  PiSuitcaseBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const dealSide = [
    {title : 'Discover Investment Opportunities', desc : 'Browse all projects and find your next investment opportunity.', btn: 'Browse All Deals', icon : PiSuitcaseBold},
    {title : 'Access Data Room', desc : 'Review documents for projects you have met with during the festivals.', btn: 'Open Project Documents', icon : GrDocumentText},
    {title : 'Operational Support', desc : 'Need assistance with your table assignment or technical issues?', btn: 'Contact Facilitator',},
]

function InvestorCommand() {
    const navigate = useNavigate()
  return (
    <section className="flex flex-col gap-6 font-inter">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1 ">
          <h1 className="text-[30px] font-extrabold text-investor-text">
            Investor Command
          </h1>
          <p className="text-text-tertiary text-base">
            Track your scheduled deals, log investment interest, and access
            project data rooms.
          </p>
        </div>
        <div className="flex items-center gap-3">
            <button className="border border-border-light px-5 py-2.5 flex items-center justify-center text-sm rounded-xl text-investor-text font-medium shadow-btn hover:bg-bg-tertiary transition-all">Overview</button>
            <button onClick={()=> navigate('/investor/projects')} className="border border-btn-green bg-btn-green px-5 py-2.5 flex items-center justify-center gap-2 text-sm rounded-xl font-bold text-white shadow-btnB  hover:bg-investors-icon transition-all"><PiSuitcaseBold className="w-4 h-4"/> Browse Deals</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col gap-5 col-span-2">
            <div className="flex items-center justify-between gap-3">
                <h2 className="text-investor-text font-bold text-xl">My Scheduled Sessions</h2>
                <div className="bg-makers-bg border border-label rounded-full px-2.5 py-0.5 text-label-text text-xs font-semibold">0 Scheduled</div>
            </div>
            <div className="border border-border-secondary shadow-btn py-12 flex items-center justify-center rounded-2xl text-sm text-text-tertiary">No scheduled sessions found. Facilitators will assign tables based on your interests.</div>
        </div>
        <aside className="flex flex-col gap-6">
            {
                dealSide.map(({title, btn, desc, icon:Icon}, i) => <div key={title} className={`
                    border rounded-2xl p-6 flex flex-col gap-2 ${
                        i === 0 ? 'bg-linear-to-r to-mint-linear from-mint-linear2 border-mint border-2' : 'bg-white border-border-secondary shadow-btn'
                    }
                    `}>
                        <div className="flex items-center gap-2">
                           {Icon && <Icon className={`w-5 h-5 shrink-0 ${i === 0 ? 'text-btn-green' : 'text-icon-gray'}`}/>} 
                            <h3 className="text-deal-title text-2xl font-semibold">{title}</h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-text-secondary text-xs">{desc}</p>
                            <button className={`border  py-2 flex items-center justify-center gap-2 text-base font-medium rounded-xl transition-all ${
                                i === 0 ? 'border-btn-green bg-btn-green text-white font-bold hover:bg-investors-icon ' : 'border-border-dark  bg-btn-bg text-deal-title hover:bg-bg-tertiary '
                            }`}>{i === 0 && Icon && <Icon className="w-5 h-5"/>}{btn}</button>
                        </div>
                    </div>)
            }

        </aside>
      </div>
    </section>
  );
}

export default InvestorCommand;
