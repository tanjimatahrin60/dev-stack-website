# 🚀 Dev Stack

<p align="center">
  <strong>Explore Technologies. Create Your Stack.</strong>
</p>

<p align="center">
  A modern and interactive web application for discovering technologies and building a personalized developer stack.
</p>

<p align="center">
  <a href="https://dev-stack-tahrin.netlify.app/">
    <img src="https://img.shields.io/badge/Live_Demo-6366F1?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo">
  </a>
  <a href="https://github.com/tanjimatahrin60/dev-stack-website">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
</p>

---

## 🌟 About Dev Stack

**Dev Stack** is a technology showcase and stack-building application created with React and TypeScript.

The goal of this project is to provide a simple way to explore different development technologies and select the ones that fit a developer's learning or project journey.

Users can browse technologies, view their details, and add their preferred technologies to create a personalized stack.

---

## 🚀 Main Features

<table>
  <tr>
    <td width="50%" valign="top">

### 🔎 Explore Technologies

Discover different technologies and get a quick overview of what each technology is used for.

</td>

<td width="50%" valign="top">

### 🧩 Build a Stack

Select technologies and organize them into your own personalized development stack.

</td>
  </tr>

  <tr>
    <td width="50%" valign="top">

### ⚡ Interactive UI

The selected technologies update dynamically as users interact with the application.

</td>

<td width="50%" valign="top">

### 📱 Responsive Experience

The application is designed to provide a smooth experience on desktop, tablet, and mobile devices.

</td>
  </tr>
</table>

---

## 🛠️ Technologies Used

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white" alt="DaisyUI">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/React_Toastify-FF4785?style=for-the-badge" alt="React Toastify">
</p>

---

## 📌 Project Highlights

- Component-based React architecture
- Type-safe development with TypeScript
- Dynamic technology selection
- JSON data integration
- State management with React Hooks
- Conditional UI rendering
- Responsive layout with Tailwind CSS
- User feedback with React Toastify

---

## 💻 Installation

Follow these steps to run the project locally.

### Clone the repository

```bash
git clone https://github.com/nafiulkabirbd/dev-stack.git

```

## 📚 React Questions & Answers

<details>
<summary><strong>1. What is JSX and why is it used in React?</strong></summary>

<br>

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript.

It makes React UI code easier to read, write and understand.

</details>

<br>

<details>
<summary><strong>2. What is the difference between props and state?</strong></summary>

<br>

**Props** are used to pass data from a parent component to a child component.

**State** is data managed inside a component. When state changes, React updates the UI.

</details>

<br>

<details>
<summary><strong>3. What does the `useState` hook do and where did you use it in this project?</strong></summary>

<br>

The `useState` hook is used to create and manage state inside a React component.

In this project, I used `useState` to manage the technologies selected by the user for their personalized tech stack.

</details>

<br>

<details>
<summary><strong>4. What does the `useEffect` hook do and why did you need it to load the JSON data?</strong></summary>

<br>

The `useEffect` hook is used to perform side effects in a React component.

I used it to load the technology data from the JSON file when the application starts.

</details>

<br>

<details>
<summary><strong>5. Why does every item in a `.map()` list need a unique `key` prop?</strong></summary>

<br>

React uses the `key` prop to identify each item in a list.

A unique key helps React understand which items have changed, been added or removed and update the UI efficiently.

</details>

<br>

<details>
<summary><strong>6. What is conditional rendering? Show one place you used it.</strong></summary>

<br>

Conditional rendering means displaying different UI based on a condition.

In this project, I used it to show a message when no technology has been selected.

```tsx
{selectedTechs.length === 0 ? (
  <p>No Technologies Selected</p>
) : (
  // Selected technologies
)}

```

</details>

## 🙏 Thank You

<p align="left">
  Thanks for visiting <strong>Dev Stack</strong>.
</p>

<p align="left">
  This project is part of my learning journey with React and TypeScript.
</p>

<p align="left">
  <strong>Learn • Practice • Build • Grow</strong>
</p>
