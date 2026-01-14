# AtiQ's Portfolio (FolioX)

This is an interactive portfolio website for an AI Developer. This project blends advanced web technologies with practical AI integration to demonstrate technical expertise in a visually stunning way.

## 🚀 Concept & Features


This portfolio is designed to be an immersive experience that acts as a live demonstration of my skills in AI, Frontend & Backend Engineering.

### Key Features:
*   **🤖 Integrated AI Chatbot**:
    *   Powered by **Google Gemini 2.5 Flash** (via `@google/generative-ai`).
    *   Context-aware: The bot is "trained" on Atiq's specific resume data (skills, projects, experience).
    *   Interactive: Floats as a chat bubbles, fully responsive, with a "pulse" animation indicating active status.
    *   **Tech**: Custom React component, Markdown rendering support.
      
*   **📱 Fully Responsive Design**:
    *   Mobile-first approach.
    *   Chatbot and layout adapt intelligently to all screen sizes.
      
*   **🎨 Modern Aesthetic**:
    *   "Claymorphism" and "Glassmorphism" inspired design elements.
    *   Clean, typography-driven layout (Inter font family).
    *   Consistent "Blue" brand identity across favicons, buttons, and accents.

## 🛠️ Tech Stack

This project is built with a modern, performance-focused stack:

### Core Framework
*   **[React 19](https://react.dev/)**: The latest version of the library for web user interfaces.
*   **[Vite](https://vitejs.dev/)**: Next-generation frontend tooling for lightning-fast builds.

### Artificial Intelligence
*   **[Google Generative AI SDK](https://www.npmjs.com/package/@google/generative-ai)**: Direct integration with the Gemini API for the chatbot functionality.

### Styling & Icons
*   **CSS Modules / Global CSS**: Custom handcrafted styles for glassmorphism and layout.
*   **[React Icons](https://react-icons.github.io/react-icons/)**: Comprehensive icon library.
*   **[React Markdown](https://github.com/remarkjs/react-markdown)**: For rendering rich text responses from the AI.

## 📦 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/rahamanatiq/FolioX.git
    cd FolioX
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Environment Configuration**
    *   Create a `.env` file in the root directory.
    *   Add your Google Gemini API key:
        ```env
        VITE_GEMINI_API_KEY=your_actual_api_key_here
        ```

4.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` to view it in the browser.

## 🚀 Deployment (Vercel)

This project has been deployed on Vercel.
### Visit: rahmanatiq.vercel.app
---
by Atiqur Rahman*
