# 🚀 NASA Astronomy Picture of the Day (APOD) Viewer

This is a simple React application that fetches and displays NASA's Astronomy Picture of the Day (APOD), including the image, title, and description. It was built with **React** and styled using **Tailwind CSS**.

---

## 🖼️ Features

- Fetches the NASA APOD using their public API.

- Displays the picture of the day, its title, and a detailed description.

- Responsive layout with Tailwind CSS.

- Basic usage of local state to persist and manage the data.

---

## 🛠️ Installation & Setup

To run this project locally, follow these steps:

1\. **Create a new Vite project (React + JS):**

```bash
   npm create vite@latest nasa-apod --template react

   cd nasa-apod
```

Install Tailwind CSS:

```bash
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p
```

Install project dependencies and run the app:

```
npm install

npm run dev
```

Create a .env file in the root directory with your NASA API key:

```env
VITE_NASA_API_KEY=your_actual_api_key
```

---

🔍 How It Works

When the app loads, it makes a fetch request to the NASA APOD API using the API key stored in the environment variable.

The response is parsed and its data (image URL, title, description) is stored locally in the component's state.

The UI then displays this data using styled components made with Tailwind CSS.

## Optional: You can use localStorage to persist data and avoid re-fetching on every refresh.

📚 What I Learned

This project was a great way to:

Learn how to fetch data from a public API in React.

Work with environment variables and .env files using Vite.

Practice managing component state and conditionally rendering content.

Use Tailwind CSS for responsive and utility-first styling.

## Understand how to persist data locally using localStorage (optional but helpful).

🌌 API Reference

NASA APOD API: https://api.nasa.gov/

## You can sign up for a free API key and use it in your .env file.

🧠 Author

Made by **David Proaño**
