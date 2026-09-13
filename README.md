# 🚀 DevStack

DevStack is a web project where developers can select any technology to build a technology stack. Developers can select any item but can not select the same item twice.

---

## 🖼️ Project Preview

- Project Live link: https://dev-stack-ten-delta.vercel.app/
- GitHub Repository Link: 

---

## 🛠️ Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify

---

## ✨ Features

### 1. Keeping Selected Element in the Stack
If developer click an element , it will show in the stack.

### 2. Can't select item twice
After selecting a technology once, the developer can not select the technology again, and the button text will change into "Added to Stack". The selected item will show a border.

### 3. Show Toast
Toasts will be different depending on where button is clicked. 
- If button clicked "Add Stack" button --> The toast will show "Added to Stack"
- If selected item is clicked twice --> The toast will show warning with the message "The card is already added"
- If click cross(x) button --> Show "Remove one item"
- If click "Remove all button" --> "Remove all items from stack"

---


# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?
JSX stands for Javascript XML. It allows developers to HTML markup inside JavaScript used in React 


---

## 2. What is the difference between props and state?

Props data are used to pass data from parant component to child component and state is used to manage data locally within a single component.


---

## 3. What does the `useState` hook do, and where did you use it in this project?

The useState hook is a built-in React function that allows us to add state variables to functional components

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The useEffect hook is a built-in React feature that allows us to perform side effects in functional components.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

Every item rendered with .map() needs a unique key so React can identify which item is which when the list changes.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI elements based on a condition.

**Example from my project:**
I used it to show for "Remove All" button.

```tsx
<button
          className={`btn btn-outline btn-secondary ${totalElement > 0? "visible" : "hidden"}`}
          onClick={handleOnclick}
        >
          Remove All
        </button>
