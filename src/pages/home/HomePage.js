import '../../App.css';
import { games } from '../../data/games';
import * as S from './HomePage.styles';
import Sidebar from '../../components/Sidebar';

const categories = ['All games', 'Past tenses', 'Verb forms', 'Grammar'];

function Icon({ name, size = 20 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22z"/><path d="M4 5.5v14A2.5 2.5 0 0 1 6.5 17H20"/></>,
    spark: <><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></>,
    check: <><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></>
  };
  return <svg {...common}>{paths[name]}</svg>;
}

function GameCard({ game, index }) {
  return (
    <S.GameCardLink className={`game-card ${game.tone}`} href={`/games/${game.slug}`} aria-label={`Open ${game.title}`}>
      <div className="card-topline">
        <span className="game-icon"><Icon name={game.icon} size={22} /></span>
        <span className="card-number">0{index + 1}</span>
      </div>
      <div className="game-copy">
        <span className="game-category">{game.category}</span>
        <h3>{game.title}</h3>
        <p>{game.description}</p>
      </div>
      <div className="card-bottom">
        <span className="game-level">{game.level}</span>
        <span className="card-arrow"><Icon name="arrow" size={18} /></span>
      </div>
    </S.GameCardLink>
  );
}

function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <header className="topbar"><div className="breadcrumb">YOUR SPACE <span>/</span> <strong>PRACTICE ROOM</strong></div><div className="topbar-right"><span className="today-label">A fresh start, every day</span><span className="sun-mark">☼</span></div></header>
        <section className="welcome-section">
          <div className="welcome-text"><div className="eyebrow"><span className="eyebrow-line" /> VOTRE ATELIER DE FRANÇAIS</div><h1>Make French<br/><em>second nature.</em></h1><p>A small practice goes a long way. Pick a game, find your rhythm, and let the language settle in.</p><a className="text-link" href="#games">Find your next game <Icon name="arrow" size={16}/></a></div>
          <div className="hero-art" aria-label="French practice illustration"><div className="art-sun"/><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-paper paper-back"/><div className="art-paper paper-front"><div className="paper-line short"/><div className="paper-word">le temps</div><div className="paper-line"/><div className="paper-line mid"/><div className="paper-stamp">FR</div></div><span className="art-spark spark-a">✳</span><span className="art-spark spark-b">✦</span><span className="art-caption">un peu chaque jour</span></div>
        </section>
        <section className="games-section" id="games">
          <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> THE PRACTICE ROOM</div><h2>Choose your <em>next move.</em></h2></div><a className="browse-link" href="#games">Browse all <Icon name="arrow" size={16}/></a></div>
          <div className="filter-row" aria-label="Game categories">{categories.map((category, i) => <S.FilterChip $selected={i === 0} key={category}>{category}{i === 0 && <span className="chip-count">{games.length}</span>}</S.FilterChip>)}</div>
          <div className="games-grid">{games.map((game, index) => <GameCard key={game.slug} game={game} index={index} />)}</div>
        </section>
        <footer className="page-footer"><span>Made for the love of <em>les mots.</em></span><span><Icon name="check" size={15}/> Your progress, at your pace</span></footer>
      </main>
    </div>
  );
}

export default App;
