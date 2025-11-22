# Step-by-Step Deployment Guide

## ✅ Step 1: Git Initialization (COMPLETED)
- Git repository initialized
- Initial commit created with all project files

## 📝 Step 2: Create GitHub Repository

### Option A: Using GitHub Website (Recommended)

1. **Go to GitHub**: Open https://github.com in your browser
2. **Sign in** to your GitHub account (or create one if you don't have it)
3. **Click the "+" icon** in the top right corner
4. **Select "New repository"**
5. **Repository settings**:
   - **Repository name**: `Appscrip-task-mohamedhaarish` (exact name required)
   - **Description**: "ZYAN WORLD Product Listing Page - Next.js SSR Implementation"
   - **Visibility**: Choose **Public** (required for evaluation)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. **Click "Create repository"**

### Option B: Using GitHub CLI (if you have it installed)

```bash
gh repo create Appscrip-task-mohamedhaarish --public --source=. --remote=origin --push
```

---

## 🔗 Step 3: Connect Local Repository to GitHub

After creating the repository on GitHub, you'll see a page with setup instructions. Use these commands:

### If you haven't set your Git user info yet:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Add GitHub remote and push:

**Replace `YOUR_USERNAME` with your actual GitHub username:**

```bash
git remote add origin https://github.com/YOUR_USERNAME/Appscrip-task-mohamedhaarish.git
git branch -M main
git push -u origin main
```

**OR if you prefer SSH:**
```bash
git remote add origin git@github.com:YOUR_USERNAME/Appscrip-task-mohamedhaarish.git
git branch -M main
git push -u origin main
```

---

## 🚀 Step 4: Deploy to Netlify

### Method 1: Deploy via Netlify Dashboard (Easiest)

1. **Go to Netlify**: Open https://www.netlify.com/
2. **Sign up/Login**:
   - Click "Sign up" or "Log in"
   - Choose "Sign up with GitHub" (recommended for easy integration)
3. **Add New Site**:
   - Click "Add new site" button
   - Select "Import an existing project"
4. **Connect to GitHub**:
   - Click "GitHub" as your Git provider
   - Authorize Netlify to access your GitHub repositories
   - Search for and select: `Appscrip-task-mohamedhaarish`
5. **Configure Build Settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Base directory**: (leave empty)
6. **Deploy**:
   - Click "Deploy site"
   - Wait for the build to complete (usually 2-3 minutes)
7. **Get Your Live URL**:
   - Once deployed, you'll get a URL like: `https://random-name-123.netlify.app`
   - You can change the site name in Site settings → Change site name

### Method 2: Deploy via Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```
   (This will open a browser window for authentication)

3. **Initialize Netlify**:
   ```bash
   netlify init
   ```
   - Select "Create & configure a new site"
   - Choose your team (or create one)
   - Site name: (press Enter for random name, or type a custom name)
   - Build command: `npm run build`
   - Directory to deploy: `.next`

4. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

---

## ✅ Step 5: Verify Deployment

After deployment, verify:

1. **Site is accessible** at your Netlify URL
2. **Products load** from FakeStoreAPI
3. **Filters work** correctly
4. **Responsive design** works on mobile/tablet
5. **SEO metadata** is present:
   - Right-click → View Page Source
   - Check for `<title>`, `<meta name="description">`, and schema markup

---

## 🔧 Troubleshooting

### If build fails on Netlify:
- Check build logs in Netlify dashboard
- Ensure Node.js version is 18+ (set in `netlify.toml`)
- Verify all dependencies are in `package.json`

### If products don't load:
- Check browser console for errors
- Verify FakeStoreAPI is accessible
- Check network tab for API calls

### If you need to update the site:
- Make changes locally
- Commit: `git add . && git commit -m "Your message"`
- Push: `git push origin main`
- Netlify will automatically rebuild and deploy

---

## 📋 Quick Command Reference

```bash
# Check git status
git status

# Add and commit changes
git add .
git commit -m "Your commit message"

# Push to GitHub
git push origin main

# Check Netlify deployment status (if using CLI)
netlify status
```

---

## 🎯 Final Checklist

- [ ] GitHub repository created: `Appscrip-task-mohamedhaarish`
- [ ] Code pushed to GitHub
- [ ] Netlify account created
- [ ] Site deployed on Netlify
- [ ] Site is publicly accessible
- [ ] All features working (products, filters, responsive)
- [ ] SEO metadata verified

---

**Your site URL will be**: `https://[your-site-name].netlify.app`

Share this URL for evaluation! 🚀

