# Code Complexity Analyzer Extension (Chrome)

This Chrome extension analyzes the **time and space complexity** of your code using the **Groq API**. Just **copy code to clipboard** and click **"Analyze"**—no need to paste anything manually!

---

## 🚀 Features

- Clipboard-based auto-analysis
- Supports Python, JavaScript, C++, Java, etc.
- Uses Groq's LLaMA model to give accurate complexity breakdown
- Lightweight UI
- Fully offline (no server needed except for Groq API)

---

## 🛠️ Setup Instructions

### 1. Clone or Download the Repository

git clone https://github.com/dhirajwankhede/Code_Complexity_Analyzer_Extension_Chrome.git
cd Code_Complexity_Analyzer_Extension_Chrome

### 2.Create a new file named config.js in the root folder and write the line given below with your groq api key in it:

// config.js

const GROQ_API_KEY = "your_groq_api_key_here";

### 3. Load Extension in Chrome

1.Open Chrome and go to chrome://extensions

2.Enable Developer Mode

3.Click Load unpacked

4.Select the project folder

5.Click the extension icon and hit Analyze
