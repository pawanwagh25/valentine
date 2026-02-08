# Deploying to GitHub Pages

## Prerequisites
1. **Install Git**: Download from [git-scm.com](https://git-scm.com/download/win)
2. **Create a GitHub Account**: Sign up at [github.com](https://github.com)
3. Restart your terminal after installing Git

## Step-by-Step Deployment Guide

### Step 1: Configure Git (First Time Only)
```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 2: Initialize & Commit Your Code
```powershell
cd c:\Users\Pavan\Downloads\valentine
git init
git add .
git commit -m "Initial Valentine's Day website"
```

### Step 3: Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `valentine` (IMPORTANT - must match!)
3. Click "Create repository"
4. **Do NOT** initialize with README, .gitignore, or license

### Step 4: Push to GitHub
Copy the commands from your GitHub repo (they'll look like):
```powershell
git remote add origin https://github.com/YOUR_USERNAME/valentine.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 5: Update Homepage in package.json
Edit `package.json` and change this line:
```json
"homepage": "https://YOUR_USERNAME.github.io/valentine",
```
Replace `YOUR_USERNAME` with your GitHub username.

### Step 6: Deploy to GitHub Pages
```powershell
npm run deploy
```

This will:
- Build your project (`npm run build`)
- Create a `gh-pages` branch
- Push it to GitHub automatically

### Step 7: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** (gear icon)
3. Scroll to **Pages** section (left sidebar)
4. Select `gh-pages` branch under "Source"
5. Click **Save**

Wait 1-2 minutes and your site will be live at:
```
https://YOUR_USERNAME.github.io/valentine
```

## For Future Updates
After making changes:
```powershell
git add .
git commit -m "Your commit message"
git push origin main
npm run deploy
```

## Troubleshooting
- **Git not found**: Restart your terminal after installing Git
- **Push rejected**: Make sure your repository exists on GitHub
- **Site not showing**: Check Settings > Pages in your GitHub repo, wait 2-3 minutes for deployment
