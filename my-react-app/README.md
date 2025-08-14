<div align="center">

# my-react-app (React + Vite)

Practice playground for modern React fundamentals, UI patterns, and interactive components—all bootstrapped with Vite for a fast DX.

</div>

## ✨ What’s inside

- React 18/19 (as installed) with Vite dev server and HMR
- ESLint configured for React hooks/refresh
- A collection of small, focused components exploring core concepts:
	- Header navigation bar(s)
	- Card, Button, basic layout components
	- Student with PropTypes validation
	- UserGreeting with conditional rendering
	- List rendering (fruits/veggies) with keys
	- Counter app with animated/neumorphic styling
	- Color Picker (controlled input + live preview)
	- UpdateOBJECT: update nested object state from inputs
	- UpdateArray: add/delete fruits (delete on click), immutable updates
	- UpdateArrayObjects: manage an array of car objects; add unique items, delete on click
	- ToDoList: add/delete, move items up/down with immutable swaps

> Focus areas: state and events, controlled inputs, props/PropTypes, conditional rendering, list keys, immutability patterns (spread, filter), and simple UI/UX polish.

## 📁 Project structure

```
my-react-app/
├─ public/
├─ src/
│  ├─ App.jsx               # App shell wiring demo components
│  ├─ Header.jsx            # Navigation header(s)
│  ├─ Footer.jsx            # Footer example
│  ├─ Card.jsx              # Simple card UI
│  ├─ Button/Button.jsx     # Reusable button example
│  ├─ Student.jsx           # Props + PropTypes demo
│  ├─ UserGreeting.jsx      # Conditional rendering
│  ├─ List.jsx              # Lists with keys
│  ├─ Counter.jsx           # Counter with fancy styles
│  ├─ ColorPicker.jsx       # Controlled color input + preview
│  ├─ updateOBJECT.jsx      # Update object state
│  ├─ UpdateArray.jsx       # Update array (add/delete via click)
│  ├─ UpdateArrayObjects.jsx# Array of objects (cars), unique add, delete
│  ├─ ToDoList.jsx          # To-do with move up/down and delete
│  ├─ main.jsx              # React root
│  └─ index.css             # Global/component styles
├─ index.html
├─ package.json
├─ vite.config.js
└─ README.md
```

## 🚀 Getting started (Windows PowerShell)

Prerequisites: Node.js 18+ and npm.

```powershell
# Install dependencies
npm install

# Start dev server (http://localhost:5173 by default)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🧩 Notable implementation notes

- Controlled inputs for forms (value + onChange)
- Functional state updates to avoid stale closures: `setX(prev => [...prev, next])`
- Immutability when updating arrays/objects:
	- Add: `[...arr, item]`
	- Delete by index: `arr.filter((_, i) => i !== idx)`
	- Swap (move up/down): destructuring swap on a copied array
- Avoid direct DOM access in React (prefer state)
- List items need stable `key` props
- PropTypes used where relevant for developer feedback

## 🧭 Component highlights

- UpdateArray
	- Add fruit from input, minimum length guard, delete on list item click
	- Demonstrates cloning before `splice` or using `filter`
- UpdateArrayObjects
	- Cars list: `{year, make, model}`
	- Prevents duplicates via `.some()` value comparison
	- Delete by clicking item (index-based filter)
- ToDoList
	- Add/delete todo items
	- Reorder with Up/Down buttons using immutable swap
	- Optional: animated, colorful CSS theme

## 🧪 Linting

```powershell
npm run lint
```

## 📌 Roadmap / ideas

- Persist state to `localStorage`
- Keyboard UX (Enter to add in inputs)
- Active route-aware header / router integration
- Tests for core list/array utilities

## 📄 License

MIT — use freely for learning and experimentation.

