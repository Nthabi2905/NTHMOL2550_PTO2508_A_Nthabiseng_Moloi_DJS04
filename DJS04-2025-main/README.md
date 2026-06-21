# DSJ04 React Podcast App

An advanced podcast browsing experience built with React. Browse shows from the [Podcast API](https://podcast-api.netlify.app) with live search, sorting, genre filtering, and pagination — all synchronised through centralised state.

## Features

### Search
- Live title search that matches any part of the podcast name (case-insensitive).
- Results update as you type without resetting sort, filters, or page selection unnecessarily.
- Changing the search query resets to page 1 so you always see relevant results first.

### Sort
- **Newest first** — sorted by last updated date.
- **Title A–Z** and **Title Z–A** — alphabetical sorting.
- Sorting works together with active search and genre filters.

### Filter
- Multi-select genre filter using pill-style checkboxes.
- Genre titles are mapped from `src/data/genres.js` (the API only returns genre IDs).
- Selected filters persist while navigating between pages.
- "Clear filters" button appears when one or more genres are active.

### Pagination
- Shows 12 podcasts per page with Previous/Next controls and numbered pages.
- Displays a result summary (e.g. "Showing 1–12 of 46").
- Pagination respects the current search, sort, and filter state.

## Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── components/       # Reusable UI components
│   ├── Controls.jsx
│   ├── GenreFilter.jsx
│   ├── Pagination.jsx
│   ├── PodcastCard.jsx
│   ├── PodcastList.jsx
│   ├── SearchBar.jsx
│   └── SortControls.jsx
├── context/
│   └── PodcastContext.jsx   # Centralised app state
├── data/
│   └── genres.js            # Genre ID → title mapping
├── services/
│   └── api.js               # API fetch logic
├── utils/
│   └── podcastUtils.js      # Search, sort, filter, paginate helpers
├── App.jsx
└── main.jsx
```

## API

Podcast data is fetched from:

```
https://podcast-api.netlify.app
```

Each podcast preview includes `id`, `title`, `description`, `seasons`, `image`, `genres` (array of IDs), and `updated` (ISO date string).

## Tech stack

- React 19
- Vite 6
- Plain CSS (no UI framework)

## License

Educational project for DJS04 coursework.
