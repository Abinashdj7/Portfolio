# Portfolio Project Conventions

## Project Overview
**abinashsasikumar.com** is a personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS. It showcases projects, skills, and profile information in an interactive carousel interface powered by Swiper.js.

**Deployment:** GitHub Pages (`https://Abinashdj7.github.io/Portfolio`)

---

## Build & Development Commands

```sh
npm run dev       # Start development server (Vite HMR at localhost:5173)
npm run build     # Compile TypeScript + build with Vite
npm run lint      # ESLint check (strict: no warnings allowed)
npm run preview   # Preview production build
npm run deploy    # Build and deploy to GitHub Pages
```

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React | 18.3.1 |
| Language | TypeScript | 5.2.2 |
| Build Tool | Vite | 5.3.1 |
| Styling | Tailwind CSS | 3.4.4 |
| Carousel | Swiper | 11.1.4 |
| Linting | ESLint + TypeScript | Latest recommended |
| Bundler | Vite (React plugin) | Babel for fast refresh |

---

## Project Structure & Conventions

### Directory Layout
```
src/
├── main.tsx              # Entry point (React StrictMode)
├── App.tsx               # Root component (renders SlideSwiper)
├── SlideSwiper.tsx       # Main carousel orchestrator
├── ProfileCard.tsx       # Desktop profile view
├── ProfileCardMobile.tsx # Mobile profile view
├── ProjectCard.tsx       # Project showcase card
├── SkillCard.tsx         # Skill category card
├── index.css             # Global styles
├── App.css               # (if used)
├── *.css                 # Component-scoped styles
└── assets/               # Images & static files
```

### Component Architecture

1. **Carousel-First Design**: SlideSwiper.tsx manages Swiper instances and orchestrates all slides
2. **Responsive Components**: Cards have desktop (ProfileCard) and mobile (ProfileCardMobile) variants
3. **Prop-Based Config**: SkillCard and ProjectCard accept data via props (no state management needed)
4. **Inline Styles + Tailwind**: Mix utility classes with inline styles for responsive behavior

**Example Pattern:**
```tsx
interface Props {
  type: string;
  skills: string[];
}

export const SkillCard = ({ type, skills }: Props) => {
  return (
    <div className="profile-card skill-card">
      {skills.map((skill, index) => (
        <p key={index}>{skill}</p>
      ))}
    </div>
  );
};
```

---

## TypeScript Conventions

- **Strict Mode**: Enabled (`"strict": true`)
- **No Unused Locals**: Enforced (`"noUnusedLocals": true`)
- **JSX**: `react-jsx` (automatic runtime)
- **Module Resolution**: `bundler`
- **Target**: ES2020

**Expectations:**
- All React components must export named components (e.g., `export const Card = () => { }`)
- Props always typed via `interface Props { }`
- Use `useRef<Swiper | null>(null)` for Swiper instance typing

---

## CSS & Styling

### Tailwind CSS
- **Classes First**: Use Tailwind utilities for layout (flex, gap, p-*, etc.)
- **Responsive**: Breakpoints via `sm:`, `md:`, `lg:` (default @ 768px & 1024px)
- **Common Pattern**: `className="flex flex-row flex-wrap justify-center items-center gap-5"`

### Component-Scoped CSS
- Each component typically has a corresponding `.css` file in `src/`
- Use for animations, states, or complex styling not easily expressed in Tailwind
- **Naming**: `ComponentName.css` for `ComponentName.tsx`

### Mobile Detection
Swiper responsive breakpoints:
```ts
breakpoints: {
  0: { slidesPerView: 1, spaceBetween: 0 },    // Mobile
  768: { slidesPerView: 1, spaceBetween: 20 }, // Tablet
  1024: { slidesPerView: 1, spaceBetween: 30 } // Desktop
}
```
Window-based detection: `window.innerWidth <= 768` (tablet), `<= 375` (mobile)

---

## Swiper Integration

- **Ref-Managed**: Swiper instance stored in `useRef<Swiper | null>(null)`
- **Lifecycle**: Initialize in `useEffect`, destroy on cleanup
- **Navigation**: `swiper.slideTo(index)` for programmatic navigation
- **Config**: Mouse wheel, cursor grab, slide effect enabled

**Pattern:**
```tsx
const swiperRef = useRef<Swiper | null>(null);

useEffect(() => {
  swiperRef.current = new Swiper(".swiper", { /* config */ });
  return () => swiperRef.current?.destroy();
}, [dependencies]);

const slideTo = (i: number) => swiperRef.current?.slideTo(i);
```

---

## ESLint Rules

- **Plugin:** react-hooks/recommended
- **React Refresh:** Components must be exportable (named exports)
- **No Warnings:** Lint must pass with zero warnings

When editing components:
1. Run `npm run lint -- --fix` to auto-fix issues
2. Ensure no unused imports or variables
3. Hooks must follow rules (no conditional hooks, etc.)

---

## Vite Configuration

```ts
// base path for GitHub Pages deployment
base: "/Portfolio/"
```

**Key Points:**
- HMR enabled during development
- TypeScript compilation before bundling
- Build output: `dist/` directory

---

## Data Patterns

### Skills
```ts
const frontEndSkills = ["Html", "Css", "Javascript", "TailwindCSS", "React"];
const backEndLanguages = ["Java", "Php", "Python", "Javascript"];
// → Rendered dynamically in SkillCard loops
```

### Projects
```ts
{
  title: "Social media website with MERN stack",
  link: "https://github.com/...",
  description: "...",
  image: "https://res.cloudinary.com/..."
}
```

---

## Common Development Tasks

### Adding a New Route/Slide
1. Create component in `src/ComponentName.tsx`
2. Import in `SlideSwiper.tsx`
3. Add new `<div className ="swiper-slide">` with content
4. Update slide navigation buttons (`Btn to={index}`)

### Adding a Skill Category
1. Add array to `SlideSwiper.tsx`: `const newSkills = [...];`
2. Pass to `<SkillCard skills={newSkills} type="Category" />`

### Styling Components
1. Check if Tailwind utilities suffice
2. If not, add custom CSS in `ComponentName.css`
3. Import at top of `.tsx`: `import "./ComponentName.css";`

### Mobile Responsiveness
1. Test with `window.innerWidth` breakpoints
2. Create mobile component variants if layout differs significantly (see ProfileCardMobile)
3. Use Swiper breakpoints for slide configuration

---

## Quality Standards

- **Type Safety**: No `any` types without justification
- **Zero Lint Warnings**: All code must pass ESLint
- **Component Export**: Always use named exports for React components
- **Props Typing**: Always define `interface Props { }`
- **Cleanup**: React effects must return cleanup functions (especially for event listeners)

---

## Deployment

```sh
npm run deploy  # Runs build, then gh-pages -d dist
```

**Prerequisites:**
- GitHub token configured in environment
- Remote `origin` points to the correct repository

---

## Resources

- [Vite Docs](https://vitejs.dev)
- [React 18 Docs](https://react.dev)
- [Swiper API](https://swiperjs.com/swiper-api)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

