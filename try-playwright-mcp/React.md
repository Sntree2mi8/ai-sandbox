# React Documentation

## What is React?

React is a JavaScript library for building user interfaces for web and native platforms. It allows developers to create reusable components that can be combined to build interactive screens, pages, and applications.

## Key Features

### 1. Component-Based Architecture
- Create reusable UI components (e.g., `Thumbnail`, `LikeButton`, `Video`)
- Components are JavaScript functions that return markup (JSX)
- Easy to combine components from different developers and teams

### 2. Interactivity and State Management
- Components can receive data through props and manage internal state
- Built-in hooks like `useState` for managing component state
- Dynamically update the UI based on user interactions

### 3. Cross-Platform Development
- Build both web and native applications using the same skills
- React Native enables truly native mobile app development
- Supports server-side and client-side rendering

## How to Initialize a React App

### Method 1: Using Create React App (Quick Start)

The easiest way to start a new React project is using Create React App:

```bash
npx create-react-app my-app
cd my-app
npm start
```

For TypeScript support:
```bash
npx create-react-app my-app --template typescript
```

### Method 2: Using Vite (Modern & Fast)

Vite offers a faster development experience:

```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
```

For TypeScript:
```bash
npm create vite@latest my-react-app -- --template react-ts
```

### Method 3: Using Next.js (Full-Stack Framework)

For production-ready applications with server-side rendering:

```bash
npx create-next-app@latest my-app
cd my-app
npm run dev
```

### Method 4: Adding React to Existing HTML

You can add React to any HTML page:

```html
<!-- Add React and ReactDOM -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

<!-- Add Babel for JSX -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<!-- Your React component -->
<script type="text/babel">
  function MyApp() {
    return <h1>Hello, world!</h1>;
  }
  
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(<MyApp />);
</script>
```

## Basic React Component Example

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
```

## Project Structure (Create React App)

```
my-app/
├── node_modules/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Next Steps

1. Learn React fundamentals at [react.dev/learn](https://react.dev/learn)
2. Explore the official tutorial
3. Learn about React hooks and state management
4. Understand component lifecycle and effects
5. Practice building small projects

## Useful Resources

- Official Documentation: [react.dev](https://react.dev)
- React GitHub: [github.com/facebook/react](https://github.com/facebook/react)
- Community Forums: [github.com/reactjs/react.dev/discussions](https://github.com/reactjs/react.dev/discussions)