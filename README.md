# React Application

## Folder Structure

- public
  - For static files like images, icons, etc.
- src
  - entire application source files.
  - main.jsx: entry point of the application.
  - index.css: global styles for the application or brand kit.
  - App.jsx: main component of the application.
  - App.css: styles for the main component.
- .gitignore: specifies files and directories to be ignored by Git.
- eslint.config.js: configuration file for ESLint (a linting tool for JavaScript, which helps identify and fix problems in your code).
- index.html: the main HTML file that serves as the entry point for the application.
- package.json: contains metadata about the project and its dependencies.
- README.md: this file, which provides an overview of the project and its structure.
- vite.config.js: configuration file for Vite (a build tool and development server for modern web applications).

## package.json vs package-lock.json

- `package.json`: This file contains metadata about the project, including its name, version, dependencies, scripts, and other configurations. It is manually edited by developers to add or update dependencies and scripts.
- `package-lock.json`: This file is automatically generated when you install or update dependencies. It locks the versions of the installed packages and their dependencies, ensuring that the same versions are used across different environments. It helps maintain consistency in the project by preventing unexpected changes in the dependency tree.

## Props Drilling

Props drilling is a term used in React to describe the process of passing data from a parent component to a deeply nested child component through multiple layers of intermediate components.

This can lead to a situation where components that do not need the data are forced to accept it as props just to pass it down to their children. This can make the code harder to read and maintain, especially in larger applications.

## Hooks

[x] What is hooks? Why it is required?
[x] useState, useEffect
[ ] API calling using useEffect
[ ] Rendering API data in jsx
[ ] Keys in Array
[ ] React Forms
[ ] useMemo & useCallback
[ ] useReducer & useRef
[ ] Array methods: push, pop, map, reduce, filter, forEach, slice, splice, indexOf
[ ] React Router V6

### What is hooks? Why it is required?

Hooks:

- Earlier, React components were class-based (Stateful components).
- class components - state and lifecycle methods.
- class components are more complex and harder to read.

- on the other hand, functional components are simpler and easier to read.
- but functional components do not have state and lifecycle methods.
- Hooks were introduced in React 16.8 (February 2019) to allow functional components to have state and lifecycle methods.

- Hooks are functions that let you use state and other React features in functional components.
- Now, functional components are the preferred way to write React components.
