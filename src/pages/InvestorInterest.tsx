export default function InvestorInterest() {
  const dummyData = Array(6).fill({
    investor: 'Brain Stephen',
    interest: 'Multilingual Learning Assistant'
  });

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold font-jost text-text-primary mb-2">Investor Interest</h1>
      <p className="text-text-secondary font-quicksand text-sm mb-10">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>

      <div className="flex flex-col gap-4">
        {dummyData.map((data, idx) => (
          <div key={idx} className="bg-bg-primary border border-border-card rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex-1 md:max-w-xs">
              <h4 className="text-xs font-bold text-text-primary mb-1 uppercase tracking-wide">Investor</h4>
              <p className="text-sm font-medium text-text-secondary font-quicksand">{data.investor}</p>
            </div>
            
            <div className="flex-1">
              <h4 className="text-xs font-bold text-text-primary mb-1 uppercase tracking-wide">Interest</h4>
              <p className="text-sm font-medium text-text-secondary font-quicksand">{data.interest}</p>
            </div>

            <div className="flex-shrink-0 mt-4 md:mt-0">
              <button className="bg-brand hover:bg-brand/90 text-text-primary text-sm font-bold py-2.5 px-6 rounded-lg transition-colors flex items-center gap-2">
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 5.50005C16.5 8.58338 11.5 13.0001 9 14.1667C6.5 13.0001 1.5 8.58338 1.5 5.50005C1.5 4.39561 1.93899 3.33634 2.72039 2.55494C3.50179 1.77353 4.56106 1.33338 5.665 1.33338C6.97333 1.33338 8.165 1.98338 9 3.00005C9.835 1.98338 11.0267 1.33338 12.335 1.33338C13.4389 1.33338 14.4982 1.77353 15.2796 2.55494C16.061 3.33634 16.5 4.39561 16.5 5.50005Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Send Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
