function UserIcon({ className = "w-6 h-6" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className={className} 
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" 
      />
    </svg>
  );
}

function StandingsIcon({ className = "w-6 h-6" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className={className}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" 
      />
    </svg>
  );
}

function LeagueIcon({ className = "w-6 h-6" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className={className}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.29 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" 
      />
    </svg>
  );
}

function FixturesIcon({ className = "w-6 h-6" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className={className}
    >
      <circle cx="14" cy="5" r="2" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l-1 7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l-2 7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l5 4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12.5 9l-4-2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12.5 9l4 1" />
      <circle cx="19" cy="20" r="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MyXIIcon({ className = "w-6 h-6" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className={className}
    >
      <circle cx="10" cy="15" r="7" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 15h14" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 8c2.5 0 4.5 3.134 4.5 7s-2 7-4.5 7S5.5 18.866 5.5 15 7.5 8 10 8z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 6.5c0 2.5-4 7.5-4 7.5s-4-5-4-7.5a4 4 0 1 1 8 0z" />
      <circle cx="15" cy="6.5" r="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export { UserIcon, StandingsIcon, LeagueIcon, FixturesIcon, MyXIIcon };