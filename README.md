# 🚀 Modern 3D Personal Portfolio

A stunning, highly interactive personal portfolio website built with **React**, **Vite**, and **GSAP (GreenSock)**. It features a beautiful dark-mode glassmorphism design, horizontal scroll sections, 3D element rendering, and seamless cross-device responsiveness (perfectly compatible across Phones, Tablets, and Laptops).

Feel free to fork this repository and use it as a template to build your own striking developer portfolio!

---

## 💻 How to Run Locally (For VS Code & Other Compilers)

If you want to download this code, modify it with your own details, and test it on your own computer, follow these simple steps:

### Prerequisites:
You need to have **Node.js** installed on your computer. If you don't have it, download and install it from [nodejs.org](https://nodejs.org/).

### Step-by-Step Guide:

1. **Clone the Repository**
   Open your terminal (or VS Code terminal) and run:
   ```bash
   git clone https://github.com/Abhishek-Gupta-1607/Portfolio-Website.git
   ```

2. **Open in VS Code**
   Navigate into the downloaded folder and open it inside your editor:
   ```bash
   cd Portfolio-Website
   code .
   ```

3. **Install Dependencies**
   Inside the VS Code terminal, install all the required packages (like React, GSAP, etc.) by running:
   ```bash
   npm install
   ```

4. **Start the Local Server**
   To view the website live on your computer as you make changes, run:
   ```bash
   npm run dev
   ```
   *Your terminal will give you a local link (usually `http://localhost:5173`). Command-Click (or Ctrl-Click) that link to open your portfolio in your browser!*

5. **Customize the Data!**
   Go into the `src/components/` folder and start swapping out my name, projects, and certifications with your own! Replace images inside the `public/images/` folder. Everything updates automatically in your browser while the server runs.

---

## 🐙 How to Upload this Code to Your Own GitHub

Before you can deploy the website to Vercel, you must securely push your local files onto your own personal GitHub account. Here is the easiest method:

1. **Clear the Old Git Link (If Cloned)**
   If you cloned this repository, open your terminal and run this to detach it from the original owner:
   ```bash
   git remote remove origin
   ```

2. **Create a New Empty Repository on GitHub**
   - Head over to [GitHub.com](https://github.com/) and click the green **"New"** button to create a new repository.
   - Name it (e.g., `personal-portfolio`).
   - **Important:** Leave it completely empty! Do NOT check the "Add a README file" box. Click **Create repository**.

3. **Push Your Code Up!**
   GitHub will give you a list of commands. Copy the block under *"push an existing repository from the command line"* and run them in your VS Code terminal exactly like this:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/personal-portfolio.git
   git branch -M main
   git push -u origin main
   ```

Once that finishes, refresh your GitHub page to see all your newly customized files securely backed up!

---

## 🌍 How to Deploy on Vercel (Get Your Own Live Link!)

Vercel is the easiest and fastest way to host your React application for free so that anyone in the world can view it on their phone, tablet, or laptop!

### Step-by-Step Deployment Guide:

1. **Upload Your Code to GitHub**
   *(You just completed this successfully using the steps right above!)*

2. **Create a Vercel Account**
   Go to [Vercel.com](https://vercel.com/) and sign up using your **GitHub account**. This explicitly links Vercel to your GitHub so it can see your repositories.

3. **Import Your Project**
   - Once logged into the Vercel dashboard, click the black **"Add New..."** button and select **"Project"**.
   - You will see a list of your GitHub repositories. Find your **Portfolio** repository and click the **"Import"** button next to it.

4. **Configure the Settings (Crucial)**
   Vercel handles almost everything automatically, but explicitly verify these settings before clicking deploy:
   - **Framework Preset:** Make sure it says **Vite**.
   - **Build Command:** It should automatically say `npm run build`.
   - **Output Directory:** It should automatically say `dist`.

5. **Deploy!**
   - Click the blue **"Deploy"** button!
   - Vercel will now install your packages and build your site into a live webpage. This usually takes about 1-2 minutes.
   
6. **Get Your Link!**
   Once the screen explodes with confetti 🎉, click **"Continue to Dashboard"**. Right at the top, you will see your brand new live **Domains** link (e.g., `https://your-portfolio.vercel.app`). 

   **Done!** Send that link to recruiters, friends, and family. It works beautifully on all screen sizes!
