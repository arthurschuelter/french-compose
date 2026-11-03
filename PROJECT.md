# Bon Mot project documentation

Bon Mot is a small French-learning web app built around short, approachable grammar practice games. The current experience is a home page that introduces the practice space and displays a catalog of planned games. Individual game routes currently use a shared placeholder screen.

## Current experience

- A responsive practice-room home page with navigation, an editorial welcome area, and a game catalog.
- Six catalog entries covering past tenses, verb forms, and grammar. Their metadata is kept in `src/data/games.js`.
- A shared game placeholder that shows a game's title, category, level, and description until its interactive experience is implemented.
- A warm visual system documented in [DESIGN_STYLE.md](DESIGN_STYLE.md).

## Technology

- React 19, bootstrapped with Create React App (`react-scripts`).
- `styled-components` for selected reusable components; global and page styles also use CSS.
- React Testing Library and Jest through the Create React App scripts.

## Getting started

Requirements: Node.js and npm.

```sh
npm install
npm start
```

The development server opens the app locally. Create a production build with:

```sh
npm run build
```

Run the test suite with `npm test`.

## Project structure

```text
public/                  HTML template and static assets
src/
  components/            Shared interface components (such as the sidebar)
  data/                  Game catalog and other app data
  pages/home/            Practice-room page and its styled components
  pages/games/           Shared placeholder and future game experiences
  App.js                 Application entry component
  App.css, index.css     Page and global styles
DESIGN_STYLE.md          Visual and interaction guidance
PROJECT.md               Product and development documentation
```

Add catalog entries in `src/data/games.js`. The game routes and placeholder behavior are intended to provide a starting point for future game implementations. Keep new screens aligned with the design guidance in `DESIGN_STYLE.md`.

## Roadmap

These are proposed future features; they are not implemented yet.

1. **Implement the first playable game** — Build an interactive passé composé activity with clear instructions, answer feedback, and a completion state.
2. **Add the remaining catalog games** — Create focused activities for the imparfait, past-tense choice, present-tense conjugation, agreement, and pronouns.
3. **Make catalog controls functional** — Filter games by category and make the browse action lead to a complete catalog view.
4. **Add progress tracking** — Show completed activities and streaks, with progress persistence across visits.
5. **Create a grammar reference library** — Add concise explanations and examples linked to related practice games.
6. **Improve learning preferences** — Let learners choose difficulty and session length, and provide accessible settings for motion and presentation.

## Design documentation

See [DESIGN_STYLE.md](DESIGN_STYLE.md) for colors, typography, layout patterns, responsive behavior, and accessibility guidance.
