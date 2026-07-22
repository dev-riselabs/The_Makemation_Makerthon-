export default function ProjectDetails() {
  return (
    <div className="w-full">
      {/* Header Container */}
      <div className="rounded-2xl border border-black/30 overflow-hidden mb-6">
        {/* Top yellow part */}
        <div className="bg-brand p-8 pb-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-sector-label text-text-primary text-sm px-5 py-1.5 rounded-lg">AI in Education</span>
            <span className="text-text-primary font-medium text-sm">Pre-Feasibility</span>
          </div>
          <h1 className="text-3xl font-bold font-jost text-text-primary mb-4">Project Number One</h1>
          <div className="flex items-center gap-2 text-text-primary">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1z" /></svg>
            <span className="text-sm font-medium">Full Name of the Project Owner</span>
          </div>
        </div>
        
        {/* Bottom stats part */}
        <div className="bg-white p-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-center border-t border-border-card">
          <div>
            <p className="text-2xl font-bold font-jost text-text-primary mb-1">Under - 1M</p>
            <p className="text-text-secondary text-sm">Funding Required</p>
          </div>
          <div>
            <p className="text-2xl font-bold font-jost text-investors-icon mb-1">0</p>
            <p className="text-text-secondary text-sm">Interested Investors</p>
          </div>
          <div>
            <p className="text-2xl font-bold font-jost text-makers-icon mb-1">$0</p>
            <p className="text-text-secondary text-sm">Total Interest Value</p>
          </div>
          <div>
            <p className="text-2xl font-bold font-jost text-text-primary mb-1">Strategic Partner</p>
            <p className="text-text-secondary text-sm">Funding Required</p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-5 gap-6 font-quicksand">
        {/* Left Column */}
        <div className="col-span-3 flex flex-col gap-6">
          {/* Project Overview */}
          <div className=" overflow-hidden rounded-2xl border border-border-card ">
            <div className="flex items-center gap-3 border-b border-b-black/30 px-6 py-10 bg-bg-secondary">
              <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1z" /></svg>
              <h2 className="text-xl font-semibold  text-text-primary">Project Overview</h2>
            </div>
            <div className="flex flex-col p-6 divide-y divide-black/30 sapce-y-6 gap-7.5">
              <p className="text-text-secondary text-sm leading-relaxed pb-6">
              Lorem ipsum dolor sit amet consectetur. Diam est ultricies facilisis magna risus neque amet tincidunt. Mi eget interdum lacinia sed amet quam. Pretium etiam dignissim ultrices et lobortis tristique convallis aliquam. In congue libero mauris vitae fringilla blandit nisl. Dignissim at odio auctor feugiat. Sit erat dignissim sit laoreet tortor pharetra egestas. Volutpat risus montes euismod sed luctus diam. Sed ut urna nunc cum proin. Tortor tristique pellentesque tristique senectus arcu sodales sit.
            </p>
            <div className="grid grid-cols-2 gap-4 pb-6">
              <div className="bg-bg-secondary rounded-xl p-4 border border-border-light">
                <p className="text-xs font-bold text-text-tertiary mb-1 uppercase">CURRENT STAGE</p>
                <p className="text-sm font-medium text-text-primary">Pre-Feasibility</p>
              </div>
              <div className="bg-bg-secondary rounded-xl p-4 border border-border-light">
                <p className="text-xs font-bold text-text-tertiary mb-1 uppercase">LOCATION</p>
                <p className="text-sm font-medium text-text-primary">Lagos, Nigeria</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-text-tertiary mb-2 uppercase">SECTOR</p>
              <span className="inline-block bg-brand text-text-primary text-xs font-bold px-4 py-1.5 rounded-full">AI in Education</span>
            </div>

            </div>
            
          </div>

          {/* Financial Overview */}
          <div className="rounded-2xl border border-border-card overflow-hidden">
            <div className="flex items-center gap-3 mb-6 bg-bg-secondary px-6 py-10">
              <svg className="w-5 h-5 text-investors-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <h2 className="text-xl font-semibold  text-text-primary">Financial Overview</h2>
            </div>
            <div className="p-6 flex flex-col gap-6 ">
            <div className="grid grid-cols-2 gap-4 ">
              <div className="bg-bg-secondary rounded-xl p-4 border border-border-light">
                <p className="text-xs font-bold text-text-tertiary mb-1 uppercase">TOTAL PROJECT COST</p>
                <p className="text-sm font-medium text-text-primary">Under - 1M</p>
              </div>
              <div className="bg-bg-secondary rounded-xl p-4 border border-border-light">
                <p className="text-xs font-bold text-text-tertiary mb-1 uppercase">INVESTOR TYPE NEEDED</p>
                <p className="text-sm font-medium text-text-primary">Strategic Partner</p>
              </div>
            </div>
            <div className="bg-bg-secondary rounded-xl p-4 border border-border-light ">
              <p className="text-xs font-bold text-text-tertiary mb-1 uppercase">TARGET INVESTOR PROFILE</p>
              <p className="text-sm font-medium text-text-primary">Strategic Partner</p>
            </div>
            <hr className="text-black/30"/>
            </div>
          </div>

          {/* Risk & Mitigation */}
          <div className="bg-bg-secondary rounded-t-2xl border border-border-card px-6 py-10">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#EA580C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <h2 className="text-xl font-semibold  text-text-primary">Risk & Mitigation</h2>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full col-span-2 flex flex-col gap-6">
          
          {/* Contact Information */}
          <div className="bg-bg-primary rounded-2xl border border-border-card overflow-hidden">
            <div className="bg-[#FAFAFA] p-5 border-b border-border-card flex items-center gap-3">
              <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1z" /></svg>
              <h2 className="text-xl font-medium text-text-primary">Contact Information</h2>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-4 text-[13px] text-text-secondary">
                <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1z" /></svg>
                <span>Full Name of the Project Owner</span>
              </div>
              <div className="flex items-center gap-4 text-[13px] text-text-secondary">
                <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1z" /></svg>
                <span>Musa Samuel</span>
              </div>
              <div className="flex items-center gap-4 text-[13px] text-text-secondary">
                <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1z" /></svg>
                <span>musasamuel@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-[13px] text-text-secondary">
                <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1z" /></svg>
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="bg-bg-primary rounded-2xl border border-border-card overflow-hidden">
            <div className="bg-[#FAFAFA] p-5 border-b border-border-card flex items-center gap-3">
              <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1z" /></svg>
              <h2 className="text-xl font-medium text-text-primary">Quick Facts</h2>
            </div>
            <div className="flex flex-col text-[13px]">
              <div className="flex justify-between items-center px-6 py-6 border-b border-border-light">
                <span className="text-text-secondary">Stage</span>
                <span className="font-medium text-gray-600 bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs">Pre-Feasibility</span>
              </div>
              <div className="flex justify-between items-center px-6 py-6 border-b border-border-light">
                <span className="text-text-secondary">Sector</span>
                <span className="font-medium bg-makers-bg text-icon-blue px-4 py-1.5 rounded-full text-xs">AI in Education</span>
              </div>
              <div className="flex justify-between items-center px-6 py-6 border-b border-border-light">
                <span className="text-text-secondary">Funding Goal</span>
                <span className="font-medium text-investors-icon">Under - 1M</span>
              </div>
              <div className="flex justify-between items-center px-6 py-6">
                <span className="text-text-secondary">Listed Date</span>
                <span className="font-medium text-text-primary">6/8/2026</span>
              </div>
            </div>
          </div>

          {/* Document Cards */}
          <div className="flex flex-col gap-4">
            
            {/* 1. Demo Video */}
            <div className="bg-bg-primary rounded-xl border border-border-card p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#312E81] flex items-center justify-center text-white shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  </div>
                  <span className="text-sm font-bold text-text-primary">1. Demo Video</span>
                </div>
                <svg className="w-5 h-5 text-text-primary cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </div>
              <div className="rounded-xl border border-gray-200 border-dashed p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop" alt="Demo Video" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-text-primary">edumate-demo.mp4</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">MP4 • 45.6 MB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Pitch Deck */}
            <div className="bg-bg-primary rounded-xl border border-border-card p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F43F5E] flex items-center justify-center text-white shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  </div>
                  <span className="text-sm font-bold text-text-primary">2. Pitch Deck</span>
                </div>
                <svg className="w-5 h-5 text-text-primary cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </div>
              <div className="rounded-xl border border-gray-200 border-dashed p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center bg-[#F43F5E] text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-text-primary">edumate-pitchdeck.pdf</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">MP4 • 45.6 MB</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
            </div>

            {/* 3. Documentation */}
            <div className="bg-bg-primary rounded-xl border border-border-card p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0F766E] flex items-center justify-center text-white shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <span className="text-sm font-bold text-text-primary">3. Documentation</span>
                </div>
                <svg className="w-5 h-5 text-text-primary cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </div>
              <div className="rounded-xl border border-gray-200 border-dashed p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center bg-[#0EA5E9] text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-text-primary">edumate-documentation.pdf</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">5.7 MB</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
            </div>

            {/* 4. Source Code */}
            <div className="bg-bg-primary rounded-xl border border-border-card p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0F766E] flex items-center justify-center text-white shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <span className="text-sm font-bold text-text-primary">4. Source Code</span>
                </div>
                <svg className="w-4 h-4 text-text-primary cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              </div>
              <div className="rounded-xl border border-gray-200 border-dashed p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.699-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  <div>
                    <p className="text-[12px] font-bold text-text-primary">github.com/visionai/edumate-ai</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">Private Repository</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
            </div>

            {/* 5. Use Prototype */}
            <div className="bg-bg-primary rounded-xl border border-border-card p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#22C55E] flex items-center justify-center text-white shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                  </div>
                  <span className="text-sm font-bold text-text-primary">5. Use Prototype</span>
                </div>
                <svg className="w-4 h-4 text-text-primary cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              </div>
              <div className="rounded-xl border border-gray-200 border-dashed p-3 flex items-center justify-between">
                <div>
                  <p className="text-[12px] font-bold text-text-primary">Website URL</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">https://edumate-ai.vercel.app</p>
                </div>
                <svg className="w-5 h-5 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
            </div>

            {/* 6. Screenshots */}
            <div className="bg-bg-primary rounded-xl border border-border-card p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0EA5E9] flex items-center justify-center text-white shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <span className="text-sm font-bold text-text-primary">6. Screenshots</span>
                </div>
                <svg className="w-5 h-5 text-text-primary cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&h=200&fit=crop" className="w-full h-full object-cover" alt="Screenshot 1" />
                </div>
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&h=200&fit=crop" className="w-full h-full object-cover" alt="Screenshot 2" />
                </div>
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&h=200&fit=crop" className="w-full h-full object-cover" alt="Screenshot 3" />
                </div>
                <div className="w-16 h-16 rounded-xl bg-black flex items-center justify-center text-white cursor-pointer shrink-0 hover:bg-gray-800 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
