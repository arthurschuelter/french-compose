function Icon({ name, size = 20 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  const paths = {
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22z"/><path d="M4 5.5v14A2.5 2.5 0 0 1 6.5 17H20"/></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></>
  };
  return <svg {...common}>{paths[name]}</svg>;
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <a className="brand" href="/" aria-label="Bon Mot home"><span className="brand-mark">b.</span><span>bon mot<span className="brand-dot">.</span></span></a>
      <div className="sidebar-label">YOUR SPACE</div>
      <nav className="side-nav" aria-label="Main navigation">
        <a className="nav-item active" href="/"><Icon name="grid" size={18} /> <span>Practice room</span><span className="nav-indicator" /></a>
        <a className="nav-item" href="#library"><Icon name="book" size={18} /> <span>Grammar library</span></a>
      </nav>
      <div className="sidebar-bottom">
        <div className="streak-card"><div className="streak-icon">✳</div><div><strong>Petit à petit</strong><span>A little every day.</span></div></div>
        <div className="profile"><div className="avatar">A</div><div className="profile-info"><strong>Bonjour!</strong><span>Your learning space</span></div><span className="profile-more">···</span></div>
      </div>
    </aside>
  );
}

export default Sidebar;
