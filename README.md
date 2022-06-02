# Pluto site

The new pluto site.

Build with:

- NextJS
- Tailwind
- styled-jsx (for stuff that can't be achieved with tailwind)
- MDX (for docs - `src/pages/docs`)

## Dev setup

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js v16+](https://nodejs.org/)

### Setting up a dev environment

```bash
# Get the latest code
git clone https://github.com/plutoniummod/landing.git

# Change into the newly cloned directory
cd landing

# Install dependencies
npm install

# Start the local web server
npm run dev
```

## Translations workflow

- After any new `<FormattedMessage ... />` statements are added, run `npm run i18n:extract`
- To auto translate these new messages, run `npm run i18n:translate-missing`. Ensure a MS cognitive services key is set up as `NEXT_TRANSLATION_API_KEY` in `.env`
- Finally, run `npm run i18n:compile`, or restart the development server (`npm run dev`)

## Working on the docs

Docs can be found in `src/pages/docs`.  
Most of it is written in markdown, with some additional components (see below).

Creating a new page:

- You create a `src/pages/docs/blah.md` page, and it will appear at `localhost:3000/docs/blah`.  
- Then, edit `src/const/sidebar.js` to import the page, and add it to the appropiate section.  

NOTE:

- doc pages should always start with a title (h1).  
- index pages are named `index.md` (not `README.md`)
- MDX components should always have a blank line at the start and at the end of the component's content  

## Docs MDX components

Several components exist outside of the normal markdown syntax for situations where we want UI that can't be achieved with normal markdown.

### `<Alert />`

**Example**:

```jsx
<Alert 
  variant="warning" // ... or info, tip, danger.
>

The docs are a work in progress. Feel free to contribute on [GitHub](https://github.com/plutoniummod/site/).

</Alert>
```

**It looks like...**  
![Preview](https://jari.lol/G5F25VqtTq.png)

### `<Details />`

**Example**:

```jsx
<Details title="Spoiler"> 

![Img](https://i.imgur.com/ykDtpPU.png)

</Details>
```

**It looks like...**  
![Preview](https://jari.lol/e7ink1vhIH.png)

### `<Player />`

**Example**:

```jsx
<Player url="https://youtu.be/0ijMY8FiLSg" />
```

**It looks like...**  
A video player mate. It supports [everything URL react-player does](https://github.com/CookPete/react-player), because it _is_ react-player.

### `<NavTile />`

**Example**:

```jsx
<NavTiles>
    <NavTile title="Installing the Plutonium launcher" to="/docs/install/#plutonium-launcher" className="from-blue-500 to-blue-800 ring-blue-400">
        Learn how to install the launcher, which you will use to start playing on any of our clients.
    </NavTile>
</NavTiles>
```

**It looks like...**  

<img src="https://jari.lol/3k1ZSQdwrs.png" width="320">

### `<Redirect />`  

Use this to redirect to a different page.

**Example**:

```jsx
<Redirect to="/docs/modding/" />
```

**It looks like...**  
N/A
