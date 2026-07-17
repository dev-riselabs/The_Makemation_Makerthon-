import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Register() {
  const { type } = useParams();
  const isInvestor = type === 'investor';
  const [step, setStep] = useState(1);
  const [currentStage, setCurrentStage] = useState('');
  const [fundingRequired, setFundingRequired] = useState('');
  const [investorType, setInvestorType] = useState('');
  const [projectReadiness, setProjectReadiness] = useState<string[]>([]);
  const [availableDocs, setAvailableDocs] = useState<string[]>([]);
  const [legalIssues, setLegalIssues] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [investorFirmTypes, setInvestorFirmTypes] = useState<string[]>([]);
  const [typicalCheckSize, setTypicalCheckSize] = useState('');
  const [preferredStages, setPreferredStages] = useState<string[]>([]);
  const [investorAgreeTerms, setInvestorAgreeTerms] = useState(false);

  return (
    <main className="flex-grow flex flex-col items-center pt-8 px-4 pb-12 max-w-4xl mx-auto w-full">
      {/* Back Button */}
      <div className="w-full flex justify-start mb-6">
        <Link to="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors font-quicksand font-medium hover:bg-gray-50 px-3 py-2 rounded-lg -ml-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </Link>
      </div>

      {/* Badge */}
      <div className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium mb-8 bg-badge-bg text-badge-text">
        <svg className="w-5 h-5 text-text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.896 18.008L18.608 15.7L19.296 15.012L21.604 17.3L20.896 18.008ZM17.7 6.373L17.012 5.685L19.3 3.396L20.008 4.085L17.7 6.373ZM6.3 6.393L4.011 4.084L4.7 3.395L7.008 5.684L6.3 6.393ZM3.085 18.007L2.396 17.299L4.685 15.01L5.392 15.699L3.085 18.007ZM7.965 17.882L12 15.463L16.054 17.927L14.998 13.347L18.542 10.292L13.873 9.872L12 5.547L10.146 9.845L5.477 10.247L9.021 13.345L7.965 17.882ZM6.442 20L7.912 13.725L3 9.481L9.47 8.933L12 3L14.55 8.933L21.02 9.481L16.108 13.725L17.578 20L12 16.66L6.442 20Z" fill="currentColor"/>
        </svg>
        {isInvestor ? 'Investor Registration' : 'Project Owner Registration'}
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center font-jost text-text-primary">
        {isInvestor ? 'Join as an Investor' : 'Register Your Project'}
      </h1>
      <p className="text-text-secondary font-quicksand text-lg mb-12 text-center">
        Join the Makemation AI National Festivals Makerthon
      </p>

      {/* Stepper */}
      {isInvestor ? (
        <div className="flex items-center md:justify-center justify-start w-full max-w-2xl mx-auto mb-12 overflow-x-auto py-4 px-4 snap-x">
          {/* Step 1 */}
          <div className="flex items-center shrink-0">
            <div className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-quicksand text-sm transition-colors ${step === 1 ? 'bg-brand text-text-primary font-bold shadow-md' : 'bg-gray-100 text-text-tertiary font-medium'}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              Account
            </div>
            <div className="h-0.5 w-6 md:w-12 bg-gray-200"></div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center shrink-0">
            <div className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-quicksand text-sm transition-colors ${step === 2 ? 'bg-brand text-text-primary font-bold shadow-md' : 'bg-gray-100 text-text-tertiary font-medium'}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              Firm
            </div>
            <div className="h-0.5 w-6 md:w-12 bg-gray-200"></div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center shrink-0">
            <div className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-quicksand text-sm transition-colors ${step === 3 ? 'bg-brand text-text-primary font-bold shadow-md' : 'bg-gray-100 text-text-tertiary font-medium'}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Investment
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center md:justify-center justify-start w-full max-w-2xl mx-auto mb-12 overflow-x-auto py-4 px-4 snap-x">
          {/* Step 1 */}
          <div className="flex items-center shrink-0">
            <div className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-quicksand text-sm transition-colors ${step === 1 ? 'bg-brand text-text-primary font-bold shadow-md' : 'bg-gray-100 text-text-tertiary font-medium'}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              Account
            </div>
            <div className="h-0.5 w-6 md:w-12 bg-gray-200"></div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center shrink-0">
            <div className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-quicksand text-sm transition-colors ${step === 2 ? 'bg-brand text-text-primary font-bold shadow-md' : 'bg-gray-100 text-text-tertiary font-medium'}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              Project
            </div>
            <div className="h-0.5 w-6 md:w-12 bg-gray-200"></div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center shrink-0">
            <div className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-quicksand text-sm transition-colors ${step === 3 ? 'bg-brand text-text-primary font-bold shadow-md' : 'bg-gray-100 text-text-tertiary font-medium'}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Funding
            </div>
            <div className="h-0.5 w-6 md:w-12 bg-gray-200"></div>
          </div>

          {/* Step 4 */}
          <div className="flex items-center shrink-0">
            <div className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-quicksand text-sm transition-colors ${step === 4 ? 'bg-brand text-text-primary font-bold shadow-md' : 'bg-gray-100 text-text-tertiary font-medium'}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Documents
            </div>
          </div>
        </div>
      )}

      {/* Form Card */}
      <div className="w-full bg-bg-primary border border-border-card rounded-3xl p-6 md:p-12 shadow-[0_4px_20px_rgb(0,0,0,0.03)] mb-12">
        <form className="w-full flex flex-col font-quicksand">
          
          {/* STEP 1: Account */}
          {step === 1 && (
            <>
              <h2 className="text-2xl font-bold font-jost text-text-primary mb-8">Create Your Account</h2>
              <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">
                {/* First Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-secondary">First Name *</label>
                  <input type="text" placeholder="John" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand text-text-primary placeholder-gray-400 bg-gray-50" />
                </div>
                
                {/* Last Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-secondary">Last Name *</label>
                  <input type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand text-text-primary placeholder-gray-400 bg-gray-50" />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-secondary">Email *</label>
                  <div className="relative">
                    <input type="email" placeholder="me@gmail.com" className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 focus:outline-none focus:border-brand text-text-primary placeholder-gray-400 bg-gray-50" />
                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </button>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-secondary">Phone Number *</label>
                  <input type="tel" placeholder="080 000 0000" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand text-text-primary placeholder-gray-400 bg-gray-50" />
                </div>

                {/* Password */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-secondary">Password *</label>
                  <div className="relative">
                    <input type="password" placeholder="Min 8 chars" className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 focus:outline-none focus:border-brand text-text-primary placeholder-gray-400 bg-gray-50" />
                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </button>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-1">Password: 8+ chars, uppercase, lowercase, number, special char</p>
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-secondary">Confirm *</label>
                  <input type="password" placeholder="Confirm" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand text-text-primary placeholder-gray-400 bg-gray-50" />
                </div>
              </div>

              <div className="flex justify-end mt-10">
                <button onClick={() => setStep(2)} type="button" className="bg-brand text-text-primary font-bold font-jost px-8 py-3 rounded-xl flex items-center gap-2 hover:opacity-90 transition-opacity">
                  Continue
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </>
          )}

          {/* STEP 2: Project / Firm Information */}
          {step === 2 && !isInvestor && (
            <>
              <h2 className="text-2xl font-bold font-jost text-text-primary mb-8">Project Information</h2>
              <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">
                {/* Project Title (full width) */}
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-medium text-text-secondary">Project Title *</label>
                  <input type="text" placeholder="Your project name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand text-text-primary placeholder-gray-400 bg-gray-50" />
                </div>

                {/* University */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-secondary">University *</label>
                  <input type="text" placeholder="University name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand text-text-primary placeholder-gray-400 bg-gray-50" />
                </div>

                {/* Location */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-secondary">Location *</label>
                  <input type="text" placeholder="Lagos, Nigeria" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand text-text-primary placeholder-gray-400 bg-gray-50" />
                </div>

                {/* Sector (full width) */}
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-medium text-text-secondary">Sector *</label>
                  <div className="relative">
                    <input type="text" placeholder="Min 8 chars" className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 focus:outline-none focus:border-brand text-text-primary placeholder-gray-400 bg-gray-50" />
                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </button>
                  </div>
                </div>

                {/* Project Summary (full width) */}
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-medium text-text-secondary">Project Summary * (max 100 words)</label>
                  <textarea placeholder="Brief description..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand text-text-primary placeholder-gray-400 bg-gray-50 min-h-[120px] resize-none"></textarea>
                </div>
              </div>

              <div className="flex justify-between items-center mt-10">
                <button onClick={() => setStep(1)} type="button" className="flex items-center gap-2 font-bold font-jost text-text-primary hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  Back
                </button>
                <button onClick={() => setStep(3)} type="button" className="bg-brand text-text-primary font-bold font-jost px-8 py-3 rounded-xl flex items-center gap-2 hover:opacity-90 transition-opacity">
                  Continue
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </>
          )}

          {step === 2 && isInvestor && (
            <>
              <h2 className="text-2xl font-bold font-jost text-text-primary mb-8">Firm Information</h2>
              <div className="flex flex-col gap-8">
                {/* Firm Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-secondary">Firm/Organization Name *</label>
                  <input type="text" placeholder="Your firm name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand text-text-primary placeholder-gray-400 bg-gray-50" />
                </div>

                {/* Investor Type */}
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium text-text-secondary">Investor Type * (select all that apply)</label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {['Angel Investor', 'Venture Capital', 'Private Equity', 'Family Office', 'Corporate VC', 'Development Finance'].map((item, idx) => {
                      const isSelected = investorFirmTypes.includes(item);
                      return (
                        <button 
                          key={idx} 
                          type="button" 
                          onClick={() => {
                            if (isSelected) setInvestorFirmTypes(investorFirmTypes.filter(i => i !== item));
                            else setInvestorFirmTypes([...investorFirmTypes, item]);
                          }}
                          className={`w-full px-4 py-4 rounded-xl border text-sm font-medium transition-colors text-center ${isSelected ? 'bg-text-primary text-white border-text-primary' : 'bg-white border-gray-200 text-text-secondary hover:border-text-primary hover:text-text-primary'}`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Sectors of Interest */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-secondary">Sectors of Interest *</label>
                  <div className="relative">
                    <input type="text" placeholder="Search and select sectors..." className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 focus:outline-none focus:border-brand text-text-primary placeholder-gray-400 bg-gray-50" />
                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </button>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1">Select all sectors that match your investment focus</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-12">
                <button onClick={() => setStep(1)} type="button" className="flex items-center gap-2 font-bold font-jost text-text-primary hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  Back
                </button>
                <button onClick={() => setStep(3)} type="button" className="bg-brand text-text-primary font-bold font-jost px-8 py-3 rounded-xl flex items-center gap-2 hover:opacity-90 transition-opacity">
                  Continue
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </>
          )}

          {/* STEP 3: Stage & Funding (Project Owner) */}
          {step === 3 && !isInvestor && (
            <>
              <h2 className="text-2xl font-bold font-jost text-text-primary mb-8">Stage & Funding</h2>
              
              <div className="flex flex-col gap-8">
                {/* Current Stage */}
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium text-text-secondary">Current Stage *</label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {['Concept', 'Feasibility Completed', 'Seeking Financing', 'Construction/Development', 'Operational/Expansion'].map((item, idx) => {
                      const isSelected = currentStage === item;
                      return (
                        <button 
                          key={idx} 
                          type="button" 
                          onClick={() => setCurrentStage(item)}
                          className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-colors text-center ${isSelected ? 'bg-text-primary text-white border-text-primary' : 'bg-white border-gray-200 text-text-secondary hover:border-text-primary hover:text-text-primary'}`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Funding Required */}
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium text-text-secondary">Funding Required *</label>
                  <div className="grid md:grid-cols-4 gap-4">
                    {['Under $1M', '$1M - $10M', '$10M -$50M', 'Above $50M'].map((item, idx) => {
                      const isSelected = fundingRequired === item;
                      return (
                        <button 
                          key={idx} 
                          type="button" 
                          onClick={() => setFundingRequired(item)}
                          className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-colors text-center ${isSelected ? 'bg-text-primary text-white border-text-primary' : 'bg-white border-gray-200 text-text-secondary hover:border-text-primary hover:text-text-primary'}`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Investor Type Needed */}
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium text-text-secondary">Investor Type Needed *</label>
                  <div className="grid md:grid-cols-4 gap-4">
                    {['Equity', 'Debt', 'PPP Partner', 'Grant'].map((item, idx) => {
                      const isSelected = investorType === item;
                      return (
                        <button 
                          key={idx} 
                          type="button" 
                          onClick={() => setInvestorType(item)}
                          className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-colors text-center ${isSelected ? 'bg-text-primary text-white border-text-primary' : 'bg-white border-gray-200 text-text-secondary hover:border-text-primary hover:text-text-primary'}`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Project Readiness */}
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium text-text-secondary">Project Readiness * (select all that apply)</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {['Land/site secured', 'Government approval', 'Feasibility study', 'Financial model', 'EIA/ESIA completed', 'Revenue model'].map((item, idx) => {
                      const isSelected = projectReadiness.includes(item);
                      return (
                        <div 
                          key={idx} 
                          onClick={() => {
                            if (isSelected) {
                              setProjectReadiness(projectReadiness.filter(i => i !== item));
                            } else {
                              setProjectReadiness([...projectReadiness, item]);
                            }
                          }}
                          className={`flex items-center gap-4 px-5 py-4 rounded-xl border cursor-pointer transition-colors ${isSelected ? 'bg-text-primary text-white border-text-primary' : 'bg-white border-gray-200 hover:border-text-primary'}`}
                        >
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${isSelected ? 'border-white' : 'border-gray-400'}`}>
                            {isSelected && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
                          </div>
                          <span className={`text-sm font-medium ${isSelected ? 'text-white' : 'text-text-secondary'}`}>{item}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-10">
                <button onClick={() => setStep(2)} type="button" className="flex items-center gap-2 font-bold font-jost text-text-primary hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  Back
                </button>
                <button onClick={() => setStep(4)} type="button" className="bg-brand text-text-primary font-bold font-jost px-8 py-3 rounded-xl flex items-center gap-2 hover:opacity-90 transition-opacity">
                  Continue
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </>
          )}

          {/* STEP 3: Investment (Investor) */}
          {step === 3 && isInvestor && (
            <>
              <h2 className="text-2xl font-bold font-jost text-text-primary mb-8">Investment Preferences</h2>
              
              <div className="flex flex-col gap-8">
                {/* Typical Check Size */}
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium text-text-secondary">Typical Check Size *</label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {['Under $500k', '$500k - $2M', '$2M - $10M', '$10M - $50M', '$50M - $100M', 'Above $100M'].map((item, idx) => {
                      const isSelected = typicalCheckSize === item;
                      return (
                        <button 
                          key={idx} 
                          type="button" 
                          onClick={() => setTypicalCheckSize(item)}
                          className={`w-full px-4 py-4 rounded-xl border text-sm font-medium transition-colors text-center ${isSelected ? 'bg-text-primary text-white border-text-primary' : 'bg-white border-gray-200 text-text-secondary hover:border-text-primary hover:text-text-primary'}`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Preferred Stages */}
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium text-text-secondary">Preferred Stages *</label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {['Seed', 'Early stage', 'Growth', 'Late Stage', 'Infrastructure'].map((item, idx) => {
                      const isSelected = preferredStages.includes(item);
                      return (
                        <button 
                          key={idx} 
                          type="button" 
                          onClick={() => {
                            if (isSelected) setPreferredStages(preferredStages.filter(i => i !== item));
                            else setPreferredStages([...preferredStages, item]);
                          }}
                          className={`w-full px-4 py-4 rounded-xl border text-sm font-medium transition-colors text-center ${isSelected ? 'bg-text-primary text-white border-text-primary' : 'bg-white border-gray-200 text-text-secondary hover:border-text-primary hover:text-text-primary'}`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Terms Agreement Checkbox */}
                <div className="flex flex-col gap-4 mt-2">
                  <div 
                    onClick={() => setInvestorAgreeTerms(!investorAgreeTerms)}
                    className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 cursor-pointer hover:border-gray-300 transition-colors bg-white"
                  >
                    <div className="w-5 h-5 rounded-[4px] border-2 border-text-primary flex items-center justify-center flex-shrink-0">
                      {investorAgreeTerms && <div className="w-2.5 h-2.5 bg-text-primary rounded-[2px]"></div>}
                    </div>
                    <span className="text-[15px] font-medium text-text-secondary">
                      I agree to the <span className="font-bold text-text-primary">Terms</span> and <span className="font-bold text-text-primary">Privacy Policy.</span> *
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-12">
                <button onClick={() => setStep(2)} type="button" className="flex items-center gap-2 font-bold font-jost text-text-primary hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  Back
                </button>
                <button type="submit" onClick={(e) => e.preventDefault()} className="bg-brand text-text-primary font-bold font-jost px-8 py-3 rounded-xl flex items-center gap-2 hover:opacity-90 transition-opacity">
                  Complete Registration
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </>
          )}

          {/* STEP 4: Documents */}
          {step === 4 && (
            <>
              <h2 className="text-2xl font-bold font-jost text-text-primary mb-8">Final Details</h2>
              
              <div className="flex flex-col gap-8">
                {/* Why should this project be considered */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-secondary">Why should this project be considered? *</label>
                  <textarea placeholder="Impact, alignment with Nigeria development goals..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand text-text-primary placeholder-gray-400 bg-gray-50 min-h-[100px] resize-none"></textarea>
                </div>

                {/* Available Documents */}
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium text-text-secondary">Available Documents *</label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {['Pitch Deck', 'Feasibility Study', 'Financial Model', 'Government Approval', 'Land Documents', 'EIA/ESIA'].map((item, idx) => {
                      const isSelected = availableDocs.includes(item);
                      return (
                        <button 
                          key={idx} 
                          type="button" 
                          onClick={() => {
                            if (isSelected) {
                              setAvailableDocs(availableDocs.filter(i => i !== item));
                            } else {
                              setAvailableDocs([...availableDocs, item]);
                            }
                          }}
                          className={`w-full px-4 py-4 rounded-xl border text-sm font-medium transition-colors text-center ${isSelected ? 'bg-text-primary text-white border-text-primary' : 'bg-white border-gray-200 text-text-secondary hover:border-text-primary hover:text-text-primary'}`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Upload Document */}
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium text-text-secondary">Upload Document *</label>
                  <div className="w-full border border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center bg-gray-50/50 cursor-pointer hover:bg-gray-50 transition-colors">
                    <svg className="w-8 h-8 text-text-primary mb-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.5 9.15002C17.0674 6.30906 14.6191 4.15002 11.6667 4.15002C8.71424 4.15002 6.26593 6.30906 5.83333 9.15002C3.16524 9.47547 1.11111 11.7588 1.11111 14.5389C1.11111 17.4844 3.49942 19.8728 6.44444 19.8728H17.2222C19.8608 19.8728 22 17.7336 22 15.0945C22 12.4554 19.8608 10.3163 17.2222 10.3163C17.2222 10.3163 17.5 9.15002 17.5 9.15002ZM11.6667 8.31668L15.5556 12.2056H12.7778V15.5389H10.5556V12.2056H7.77778L11.6667 8.31668Z"/>
                    </svg>
                    <p className="text-sm font-bold text-text-primary mb-1">Click to upload or drag and drop</p>
                    <p className="text-[10px] text-gray-500 font-medium tracking-wide">PDF, PNG, DOC, DOCX [MAX. 5MB]</p>
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="flex flex-col gap-4 mt-2">
                  <div 
                    onClick={() => setLegalIssues(!legalIssues)}
                    className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 cursor-pointer hover:border-gray-300 transition-colors bg-white"
                  >
                    <div className="w-5 h-5 rounded-[4px] border-2 border-text-primary flex items-center justify-center flex-shrink-0">
                      {legalIssues && <div className="w-2.5 h-2.5 bg-text-primary rounded-[2px]"></div>}
                    </div>
                    <span className="text-[15px] font-medium text-text-secondary">This project has legal/regulatory issues to disclose</span>
                  </div>

                  {legalIssues && (
                    <textarea 
                      placeholder="Describe issues..." 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand text-text-primary placeholder-gray-400 bg-gray-50 min-h-[100px] resize-none"
                    ></textarea>
                  )}

                  <div 
                    onClick={() => setAgreeTerms(!agreeTerms)}
                    className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 cursor-pointer hover:border-gray-300 transition-colors bg-white"
                  >
                    <div className="w-5 h-5 rounded-[4px] border-2 border-text-primary flex items-center justify-center flex-shrink-0">
                      {agreeTerms && <div className="w-2.5 h-2.5 bg-text-primary rounded-[2px]"></div>}
                    </div>
                    <span className="text-[15px] font-medium text-text-secondary">
                      I confirm all information is accurate and agree to the <span className="font-bold text-text-primary">Terms</span> and <span className="font-bold text-text-primary">Privacy Policy.</span> *
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-12">
                <button onClick={() => setStep(3)} type="button" className="flex items-center gap-2 font-bold font-jost text-text-primary hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  Back
                </button>
                <button type="submit" onClick={(e) => e.preventDefault()} className="bg-brand text-text-primary font-bold font-jost px-8 py-3 rounded-xl flex items-center gap-2 hover:opacity-90 transition-opacity">
                  Submit Registration
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </>
          )}

        </form>
      </div>

      {/* Sign In */}
      <p className="text-text-tertiary font-quicksand text-lg">
        Already registered? <Link to="/" className="font-bold text-text-primary hover:underline">Sign In</Link>
      </p>
    </main>
  );
}
