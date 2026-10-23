# Rajarajeshwari S. - Modern Developer Portfolio

A responsive developer portfolio built with **React 19**, **TypeScript**, **Tailwind CSS**, and **Vite**. Features a modern dark navy theme with purple/blue glowing accents, animated technical skill progress bars, interactive project showcases, BCA education history, and an accessible contact form.

---

## 🌟 Key Features

1. **Top Navigation Bar:**
   - Single-line wordmark with initials monogram.
   - Smooth navigation links with active scroll spy: Home, Skills, Projects, Education, Contact.
   - Primary action "Hire Me" button and responsive mobile hamburger drawer.

2. **Hero Section:**
   - Dedicated profile portrait card with glowing ambient halo and initials badge.
   - Developer title: *“Developer | Learner | Creator”*.
   - Direct CTA buttons: *Hire Me* and *View Projects*.
   - Direct social links: GitHub, LinkedIn, and Email with quick-copy clipboard tool.
   - Undergrad credentials strip for STG First Grade College, Chinakurali, Mandya.

3. **Technical Skills Section:**
   - Animated progress bars with tabular numerical labels:
     - **HTML**: 90%
     - **CSS**: 85%
     - **JavaScript**: 50%
     - **Python**: 55%
     - **SQL**: 60%
     - **MongoDB**: 60%
   - Interactive category filter tabs (All, Frontend, Backend, Database).
   - Glassmorphic cards with glowing progress tracks.

4. **Projects Showcase:**
   - Four distinct featured application cards:
     1. **Personal Portfolio** (React, TypeScript, Tailwind CSS, Motion)
     2. **To-Do List** (JavaScript ES6+, HTML5, CSS3, LocalStorage API)
     3. **Food Delivery** (React, JavaScript, Tailwind CSS, Cart State)
     4. **Reuse Market** (Python, SQL / MongoDB, JavaScript, Circular Economy)
   - Domain-specific mock UI graphics for each project.
   - Replaceable live demo and GitHub repository links with inline URL editor and quick copy buttons.
   - In-depth project specifications modal.

5. **Education Section:**
   - **Degree:** Bachelor of Computer Applications (BCA)
   - **Institution:** STG First Grade College
   - **Campus:** Chinakurali, Mandya, Karnataka, India
   - **Cohort Period:** 2024 – 2027
   - Coursework focus: Programming (C, C++, Java, Python), DBMS & SQL, Web Technologies, Computer Networks, and OOPS.

6. **Contact Section:**
   - Full client-side validated form (Name, Email format, Subject selector, Message length).
   - Explicit disclaimer explaining that client-side static web hosting requires an email service or backend API (such as EmailJS, Formspree, or Node/Express) for direct inbox delivery.
   - Working mailto launcher (`Send directly via Email App`) and `Copy Message Draft` button.
   - Verified contact cards for Email, Campus Location, GitHub, and LinkedIn.

7. **Footer:**
   - Copyright notice (`© Rajarajeshwari S.`).
   - Social links and "Deploy Guide" launcher.
   - Smooth "Back to Top" scroll button.

---

## 🚀 Running Locally

### Prerequisites
- Node.js version 18 or higher
- npm or pnpm / yarn

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rajarajeshwari-portfolio.git
   cd rajarajeshwari-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build locally:
   ```bash
   npm run preview
   ```

---

## 🌐 Deploying to Vercel

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio for Vercel deployment"
   git push origin main
   ```
2. Go to [Vercel](https://vercel.com) and sign in.
3. Click **Add New...** → **Project**.
4. Select your portfolio repository from GitHub.
5. Vercel auto-configures:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** Configured in `vercel.json` (`npm install --legacy-peer-deps`) and `.npmrc` (`legacy-peer-deps=true`) to prevent peer dependency resolution errors.
6. Click **Deploy**. Your site will be live within seconds with free SSL!

---

## 🌐 Deploying to Render

1. Push your repository to GitHub.
2. Sign in to [Render](https://render.com).
3. Click **New +** in the dashboard and select **Static Site**.
4. Connect your GitHub repository.
5. Fill in the build settings:
   - **Name:** `rajarajeshwari-portfolio`
   - **Branch:** `main`
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
6. Click **Create Static Site**. Render automatically builds and hosts your portfolio.

---

## 📸 Adding Pictures

You can add pictures in two simple ways:

### 1. Directly in the Live App (No Coding Required)
- **Profile Photo:** Hover over or click the avatar card in the Hero section, or click **"Change Profile Picture"**.
- **Project Screenshots:** Click the **camera icon** or **"+ Add Picture"** on any project card (Personal Portfolio, To-Do List, Food Delivery, or Reuse Market).
- You can:
  - **Upload any image file** directly from your computer or phone (JPG, PNG, WebP, SVG).
  - **Paste any image URL** from GitHub, Imgur, Cloudinary, etc.
  - **Select a high-resolution preset** preview.
  - Uploaded pictures are instantly saved in your browser's `localStorage` so they remain loaded across refreshes.

### 2. Permanently in the Source Code
- Place your image files inside `src/assets/` (e.g. `src/assets/profile.jpg`, `src/assets/food-delivery.png`).
- Open `src/data/portfolioData.ts` and set:
  - `PERSONAL_INFO.avatarUrl = "/src/assets/profile.jpg";`
  - `PROJECTS_DATA[n].imageUrl = "/src/assets/project-screenshot.png";`

---

## ⚙️ Customization

All personal details, skills, project links, and education data are organized in a single file:
👉 `src/data/portfolioData.ts`

Modify this file to easily update:
- Your real email address and social links
- Project demo URLs and GitHub repositories
- Skill percentages or descriptions
- Biography and photos

