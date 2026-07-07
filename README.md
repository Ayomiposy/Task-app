# TaskFlow - Todo App

A modern, lightweight todo application built with React and Vite. Manage your tasks efficiently with a clean and intuitive interface.

## 🚀 Features

- ✅ **Create Tasks** - Add new tasks to your todo list
- 📝 **Edit & Delete** - Modify or remove tasks easily
- 💾 **Local Storage** - Tasks are automatically saved to your browser's local storage
- 🎨 **Beautiful UI** - Modern design with Tailwind CSS and shadcn/ui components
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and production builds
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎯 **Simple & Intuitive** - User-friendly interface with no unnecessary complexity

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) & [Base UI](https://base-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Code Quality:** [ESLint](https://eslint.org/)

## 📦 Installation

### Prerequisites
- Node.js 16+ (or [Bun](https://bun.sh/) as an alternative)
- npm, yarn, or bun package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ayomiposy/Task-app.git
   cd Task-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` to see your app in action!

## 🎯 Usage

### Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build the project for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

### Creating a Task

1. Enter your task description in the input field
2. Click the "Add" button or press Enter
3. Your task is automatically saved to local storage

### Managing Tasks

- Click the checkbox to mark a task as complete
- Click the delete icon to remove a task
- Tasks persist even after closing your browser

## 📁 Project Structure

```
Task-app/
├── src/
│   ├── components/
│   │   ├── todoForm.jsx      # Form to add new tasks
│   │   ├── todoList.jsx      # Display list of tasks
│   │   └── ui/               # Reusable UI components
│   │       ├── select.jsx
│   │       └── table.jsx
│   ├── lib/
│   │   └── utils.js          # Utility functions
│   ├── assets/               # Images and static assets
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles
├── public/                   # Static files
├── index.html                # HTML entry point
├── package.json              # Project dependencies
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
└── README.md                 # This file
```

## 🔧 Development

### Code Quality

This project uses ESLint to maintain code quality. Run the linter with:

```bash
npm run lint
```

### Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory ready for deployment.

## 🚀 Deployment

The built files can be deployed to any static hosting service:

- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [AWS S3](https://aws.amazon.com/s3/)

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created by Ayomiposy

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Support

For issues and questions, please open an issue on the [GitHub repository](https://github.com/Ayomiposy/Task-app).

---

**Happy task managing! 🎉**

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Task-app
