# 🤖 AI Arena

AI Arena is an **AI-powered comparison platform** where users can compare responses from multiple AI models, evaluate them, and choose the best output.

---

## 🚀 Features

* ⚡ **Multiple AI Responses** – Get multiple AI outputs for a single question
* 🧠 **Comparison System** – Compare Solution A vs Solution B
* 📊 **Score Board** – Assign scores to each response
* 💬 **Chat Interface** – Clean and simple chat UI
* ⏳ **Real-time Loading State** – AI typing experience
* ❌ **Error Handling** – Proper feedback on API failures
* Based on TypeScript

---

## 🏗️ Tech Stack

* **Frontend:** React.js
* **State Management:** Redux Toolkit
* **API Handling:** Axios
* **Architecture:** 4-Layer Architecture
  (Store → Slice → Services → Hooks → Components)

---

## 📁 Folder Structure

```
src/
 ├── app/              # Redux store
 ├── features/         # Redux slices
 ├── services/         # API calls
 ├── hooks/            # Custom hooks
 ├── components/       # UI components
 ├── pages/            # Main pages
 └── App.js
```

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/ai-arena.git
cd ai-arena
npm install

```

---

## 🔌 API Usage

Example API call:

```javascript
export async function chatAiResponse(question) {
  const result = await api.post('/use-graph', { question });
  return result.data;
}
```

---

## 🧠 State Management Flow

```
User Input
   ↓
Custom Hook (useAI)
   ↓
Dispatch Actions
   ↓
Redux Slice Update
   ↓
UI Re-render
```

---

## 📸 UI Overview

* Chat Input Box
* AI Response Panel
* Solution A / Solution B Comparison
* Score Board

---

## ❗ Error Handling

* Network error → "No response from server"
* Server error → Show API message
* Fallback → "Something went wrong"

---

## 🔥 Future Improvements

* 🔐 Authentication (Login / Signup)
* 🌐 Multiple AI integrations (OpenAI, Gemini, etc.)
* 📈 Analytics Dashboard
* 🎨 Improved UI/UX animations
* ⚡ Streaming AI responses

---

## 🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Rahul Kumar

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
