# Minigames

The homepage catalog lives in `src/data/games.js`. Each item has a `slug`, which maps to `/games/:gameSlug` and is rendered by the shared `GamePlaceholder` page until a game is implemented.

Suggested structure when building a game:

```
src/pages/games/
  GamePlaceholder.js
  passe-compose/
    PasseComposeGame.js
    index.js
  imparfait/
    ImparfaitGame.js
    index.js
```

Keep reusable game UI in `src/components/` and shared game data or question sets in `src/data/`.
