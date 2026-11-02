import { games } from '../../data/games';

// Shared shell for future minigames. Add each game's actual UI in its own folder.
export default function GamePlaceholder({ gameSlug }) {
  const game = games.find((item) => item.slug === gameSlug);

  if (!game) return <main className="placeholder-page"><p>We couldn't find that practice.</p><a href="/">Back to the practice room</a></main>;

  return (
    <main className="placeholder-page">
      <a className="placeholder-back" href="/">← Back to the practice room</a>
      <span className="placeholder-category">{game.category} · {game.level}</span>
      <h1>{game.title}</h1>
      <p>{game.description}</p>
      <div className="placeholder-panel"><span>✳</span><h2>Your game goes here.</h2><p>This is a blank page template for a future minigame.</p></div>
    </main>
  );
}
