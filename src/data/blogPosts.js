export const blogPosts = [
  {
    id: 1,
    title: 'My First Blog Post',
    excerpt:
      'Welcome to my blog. This first post is all about learning React fundamentals through reusable components, props, and state.',
    content: `Welcome to my blog! This first post is all about learning React fundamentals through reusable components, props, and state. Vite keeps everything fast, and React keeps the UI organized.

When I first started with React, the component model felt weird — why split everything into tiny pieces? But once you build something real, it clicks. Each component owns its own logic, its own look, its own slice of state. You stop thinking in pages and start thinking in building blocks.

Props let those blocks talk to each other cleanly. State lets them respond to the world. Together, they're the foundation of almost everything React does. This lab was a solid intro to both — building a blog from scratch forced me to think carefully about what data lives where, what gets passed down, and what stays local.

The thing I didn't expect: debugging is actually easier when things are broken into components. When something's wrong, you already know the blast radius. It's contained. That alone sold me on the whole approach.`,
    author: 'Ziona Agyemang',
    date: '2026-03-21',
    category: 'React Basics',
    readTime: '4 min read',
  },
  {
    id: 2,
    title: 'Why I Like Component-Based Design',
    excerpt:
      'Breaking a page into components makes the code easier to read, update, and debug. Each section has a clear job.',
    content: `Breaking a page into components makes the code easier to read, update, and debug. Instead of one giant file, each section has a clear job — which keeps the whole project from turning into spaghetti chaos.

I used to write frontend code in big flat files. One HTML file, one CSS file, one JS file — everything tangled together. Changing one thing broke three others. You'd spend twenty minutes tracking down where a class was actually being applied.

Component-based design fixes this by giving every piece a home. The Navbar doesn't know about the BlogPost. The BlogPost doesn't know about the Footer. They each do their own thing, and the App just wires them together. It's modular in the way that actually matters.

The real win is for future-you. Come back to a project six months later and you're not reading the whole codebase — you're just opening the component that's relevant. That's huge. Components are basically self-documenting when you name them right.

React pushes this pattern hard, and honestly? It's one of the things I appreciate most about it. The file structure basically becomes your architecture.`,
    author: 'Ziona Agyemang',
    date: '2026-03-18',
    category: 'Web Development',
    readTime: '5 min read',
  },
  {
    id: 3,
    title: 'Small Styling Choices, Big Difference',
    excerpt:
      'Even basic CSS can make a project feel polished. Consistent spacing, readable typography, and strong contrast go a long way.',
    content: `Even basic CSS can make a project feel polished. Consistent spacing, readable typography, and strong contrast help a simple page look intentional instead of accidental.

Design is mostly invisible when it's done right. When something looks clean, it's usually because someone made a hundred small decisions that all quietly agree with each other — the font sizes follow a scale, the spacing is consistent, the colors have a real hierarchy.

I started paying attention to this stuff because I kept asking: why does my work look amateurish compared to what I see on real products? The code was fine. The layout was fine. But it looked flat.

The answer was usually in the details. A 16px gap vs a 24px gap. A border-radius of 4px vs 12px. A gray that was slightly too warm or too cool for the palette. These things don't sound like much, but they stack.

CSS custom properties helped a lot here. Once I started storing my core spacing values, colors, and type sizes as variables, everything automatically stayed in sync. Change one value and the whole app adjusts. It makes iteration way less painful and keeps the visual language tight across components.`,
    author: 'Ziona Agyemang',
    date: '2026-03-15',
    category: 'UI Design',
    readTime: '5 min read',
  },
  {
    id: 4,
    title: 'React Router: Navigation That Actually Makes Sense',
    excerpt:
      'React Router turns a single-page app into something that feels like a real multi-page website — without the full page reloads.',
    content: `React Router turns a single-page app into something that feels like a real multi-page website — without the full page reloads. Once you get the mental model, it's genuinely elegant.

The core idea is that your URL is just state. Instead of telling the browser "go fetch this page," you're telling React "render this component when the URL matches this pattern." The browser never actually reloads — the router just swaps components in and out of the view.

BrowserRouter, Routes, and Route are the three pieces you need to get started. Wrap your app, define your routes, done. Link replaces your anchor tags so navigation happens client-side. useParams pulls the dynamic parts of the URL into your component so you can fetch or filter data based on them.

The part that surprised me: nested routes. You can define routes inside routes, which maps really naturally to nested UI — a layout wrapping different page content, for example. The Outlet component is where child routes render. It's a clean model once it clicks.

React Router v6 made a lot of this simpler than earlier versions. Less boilerplate, more intuitive API. Worth learning properly rather than just copying patterns — the mental model is useful across frameworks.`,
    author: 'Ziona Agyemang',
    date: '2026-03-12',
    category: 'React Router',
    readTime: '6 min read',
  },
  {
    id: 5,
    title: 'useContext: Global State Without the Drama',
    excerpt:
      "useContext is React's built-in answer to prop drilling — and it's simpler than most people expect.",
    content: `useContext is React's built-in answer to prop drilling — passing data through layers of components that don't actually need it, just so the bottom layer can access it.

The pattern is simple: create a context, provide it near the top of your component tree, and consume it anywhere below. No passing, no threading, no intermediate components touching data they don't care about.

The theme toggle in this app uses exactly this. ThemeContext holds the current mode and the toggle function. ThemeProvider wraps the whole app and owns the state. Any component — Navbar, BlogPost, Footer — can call useTheme() and immediately know whether it's dark or light mode, and toggle it if needed.

What I like: it scales cleanly. Add a new consumer anywhere in the tree, no refactoring needed. The data just flows.

What to watch out for: overusing it. Context triggers a re-render in every consumer when the value changes, so heavy-duty dynamic state can cause performance issues. For relatively stable shared state — themes, auth, locale — it's perfect. For everything else, keep it local.

Combined with localStorage, the theme persists across reloads. It's a genuinely satisfying pattern to implement because the result feels polished in a way users actually notice.`,
    author: 'Ziona Agyemang',
    date: '2026-03-10',
    category: 'React Basics',
    readTime: '5 min read',
  },
];
