import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All States Project');
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);
  const [activeInvestmentValue, setActiveInvestmentValue] = useState('Any');

  const filters = [
    { name: 'All States Project', count: 30 },
    { name: 'Lagos Projects', count: 30 },
    { name: 'Lagos Projects', count: 30 },
    { name: 'Lagos Projects', count: 30 },
  ];

  const projects = [
    {
      title: 'Project Number one',
      tag: 'AI in Education',
      description: 'Lorem ipsum dolor sit amet consectetur. Diam est ultricies facilisis magna risus neque amet tincidunt. Mi eget interdum lacinia sed amet quam. Pretium etiam dignissim ultrices et lobortis tristique convallis aliquam. In congue libero mauris vitae fringilla blandit nisl. Dignissim at odio auctor feugiat. Sit erat dignissim sit laoreet tortor pharetra egestas. Volutpat risus montes euismod sed luctus diam. Sed ut urna nunc cum proin. Tortor tristique pellentesque tristique senectus arcu sodales sit.',
      maker: 'Full name of Maker',
      location: 'Lagos, Nigeria',
      budget: '$ under - 1M',
      partner: 'Strategic Partner',
      contact: 'Contact: Musa Samuel'
    },
    {
      title: 'Project Number one',
      tag: 'AI in Education',
      description: 'Lorem ipsum dolor sit amet consectetur. Diam est ultricies facilisis magna risus neque amet tincidunt. Mi eget interdum lacinia sed amet quam. Pretium etiam dignissim ultrices et lobortis tristique convallis aliquam. In congue libero mauris vitae fringilla blandit nisl. Dignissim at odio auctor feugiat. Sit erat dignissim sit laoreet tortor pharetra egestas. Volutpat risus montes euismod sed luctus diam. Sed ut urna nunc cum proin. Tortor tristique pellentesque tristique senectus arcu sodales sit.',
      maker: 'Full name of Maker',
      location: 'Lagos, Nigeria',
      budget: '$ under - 1M',
      partner: 'Strategic Partner',
      contact: 'Contact: Musa Samuel'
    },
    {
      title: 'Project Number one',
      tag: 'AI in Education',
      description: 'Lorem ipsum dolor sit amet consectetur. Diam est ultricies facilisis magna risus neque amet tincidunt. Mi eget interdum lacinia sed amet quam. Pretium etiam dignissim ultrices et lobortis tristique convallis aliquam. In congue libero mauris vitae fringilla blandit nisl. Dignissim at odio auctor feugiat. Sit erat dignissim sit laoreet tortor pharetra egestas. Volutpat risus montes euismod sed luctus diam. Sed ut urna nunc cum proin. Tortor tristique pellentesque tristique senectus arcu sodales sit.',
      maker: 'Full name of Maker',
      location: 'Lagos, Nigeria',
      budget: '$ under - 1M',
      partner: 'Strategic Partner',
      contact: 'Contact: Musa Samuel'
    }
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold font-jost text-text-primary mb-1">Browse Projects</h1>
          <p className="text-text-secondary font-quicksand text-sm">30 projects available</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-icon-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input type="text" placeholder="Search projects..." className="pl-9 pr-4 py-2 border border-border-secondary rounded-lg text-sm font-medium focus:outline-none focus:border-brand w-[240px] md:w-[300px]" />
          </div>
          <button 
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="flex items-center gap-2 text-sm font-bold text-text-secondary hover:text-text-primary transition-colors border border-border-secondary py-2 px-4 rounded-lg bg-bg-primary"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
            Filters
          </button>
        </div>
      </div>

      {/* Filter Deals Panel */}
      {isFiltersOpen && (
        <div className="border border-border-card rounded-2xl p-6 bg-bg-primary mb-8">
          <h3 className="text-lg font-bold font-jost text-text-primary mb-6">Filter Deals</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Sector */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-text-tertiary mb-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1z" /></svg>
                Sector
              </label>
              <div className="relative">
                <select className="w-full appearance-none bg-bg-primary border border-border-card text-text-secondary text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-brand cursor-pointer">
                  <option>All Sectors</option>
                  <option>Technology</option>
                  <option>Health</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-tertiary">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            {/* State / Location */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-text-tertiary mb-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                State / Location
              </label>
              <div className="relative">
                <select className="w-full appearance-none bg-bg-primary border border-border-card text-text-secondary text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-brand cursor-pointer">
                  <option>All Locations</option>
                  <option>Lagos</option>
                  <option>Abuja</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-tertiary">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            {/* Stage */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-text-tertiary mb-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                Stage
              </label>
              <div className="relative">
                <select className="w-full appearance-none bg-bg-primary border border-border-card text-text-secondary text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-brand cursor-pointer">
                  <option>All Stages</option>
                  <option>Seed</option>
                  <option>Series A</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-tertiary">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            {/* Investment Value */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-text-tertiary mb-2">
                <span className="font-bold text-lg leading-none">$</span>
                Investment Value
              </label>
              <div className="relative">
                <select className="w-full appearance-none bg-bg-primary border border-border-card text-text-secondary text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-brand cursor-pointer">
                  <option>Any</option>
                  <option>Under $1M</option>
                  <option>Over $100M</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-tertiary">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Investment Value Quick Filters */}
          <div className="flex flex-wrap gap-3">
            {['Any', 'Under $1M', '$1M - $10M', '$10M - $50M', '$50M - $100M', 'Over $100M'].map(val => (
              <button
                key={val}
                onClick={() => setActiveInvestmentValue(val)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${activeInvestmentValue === val ? 'bg-brand border-brand text-text-primary' : 'bg-bg-primary border-border-card text-text-secondary hover:border-brand'}`}
              >
                {val}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        {filters.map((filter, index) => {
          const isActive = activeFilter === filter.name;
          return (
            <button
              key={index}
              onClick={() => setActiveFilter(filter.name)}
              className={`flex items-center gap-3 px-4 py-2 rounded-xl border transition-colors ${isActive ? 'border-brand bg-brand/5' : 'border-border-card bg-bg-secondary hover:border-brand'}`}
            >
              <svg className={`w-4 h-4 ${isActive ? 'text-brand' : 'text-icon-gray'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className={`text-sm font-medium ${isActive ? 'text-text-primary' : 'text-icon-gray'}`}>{filter.name}</span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isActive ? 'bg-brand/10 text-brand' : 'bg-bg-primary text-icon-gray'}`}>
                {filter.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-border-card rounded-2xl p-6 bg-bg-primary">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-bold font-jost text-text-primary">{project.title}</h2>
                <span className="text-xs font-bold text-text-secondary bg-bg-secondary px-3 py-1 rounded-full border border-border-light">
                  {project.tag}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-brand text-bg-primary text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-brand/90 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  Express Interest
                </button>
                <Link to={`/admin/projects/${index + 1}`} className="flex items-center gap-2 bg-bg-primary border border-border-card text-text-primary text-sm font-bold px-5 py-2.5 rounded-lg hover:border-brand transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  View Details
                </Link>
              </div>
            </div>

            <p className="text-text-secondary font-quicksand text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-text-teal">
              <span>{project.maker}</span>
              <span className="text-icon-gray font-bold px-1">•</span>
              <span>{project.location}</span>
              <span className="text-icon-gray font-bold px-1">•</span>
              <span>{project.budget}</span>
              <span className="text-icon-gray font-bold px-1">•</span>
              <span>{project.partner}</span>
              <span className="text-icon-gray font-bold px-1">•</span>
              <span>{project.contact}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
