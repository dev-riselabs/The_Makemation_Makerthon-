import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <main className="grow flex flex-col items-center pt-8 px-4 pb-12 w-full max-w-5xl mx-auto">
      {/* Badge */}
      <div className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium mb-10 bg-badge-bg text-badge-text">
        <svg className="w-5 h-5 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
        Account Creation
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-3 text-center font-jost text-text-primary">
        Welcome to Makemation AI National Festivals Makerthon 2026
      </h1>
      <p className="text-text-secondary font-quicksand text-lg mb-12 text-center">
        Sign in to manage your projects or investment
      </p>

      {/* Form Card */}
      <div className="w-full max-w-175 bg-bg-primary border border-border-card rounded-xl p-8 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
        <h2 className="text-2xl font-bold font-jost text-text-primary mb-8">Sign In</h2>
        
        <form className="flex flex-col font-quicksand gap-6">
          {/* Email Address */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-primary">Email Address</label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-icon-gray">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <input type="email" placeholder="your@email.com" className="w-full pl-12 pr-4 py-3 rounded-xl border border-border-secondary focus:outline-none focus:border-brand text-text-primary placeholder-icon-gray bg-bg-secondary/50" />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-text-primary">Password</label>
              <Link to="#" className="text-sm font-medium text-forgot hover:underline">Forgot?</Link>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-icon-gray">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <input type="password" placeholder="••••••••" className="w-full pl-12 pr-12 py-3 rounded-xl border border-border-secondary focus:outline-none focus:border-brand text-text-primary placeholder-icon-gray bg-bg-secondary/50" />
              <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-icon-gray">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </button>
            </div>
          </div>

          {/* Stay signed in */}
          <div className="flex items-center gap-3 mt-1">
            <input type="checkbox" id="stay-signed-in" className="w-4 h-4 rounded border-border-dark text-brand focus:ring-brand accent-brand cursor-pointer" />
            <label htmlFor="stay-signed-in" className="text-sm font-medium text-text-secondary cursor-pointer">Stay signed in for 30 days</label>
          </div>

          {/* Submit Button */}
          <button type="button" className="w-full bg-brand text-text-primary font-bold font-jost py-3.5 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mt-4">
            Sign In
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
          
          <div className="mt-8 text-center">
            <Link to="/register" className="font-bold text-sm text-text-primary hover:underline font-jost">
              Register for the Makerthon
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
