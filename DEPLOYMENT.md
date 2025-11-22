# Deployment Instructions

## GitHub Repository Setup

1. Initialize git repository (if not already done):
```bash
git init
```

2. Add all files:
```bash
git add .
```

3. Create initial commit:
```bash
git commit -m "Initial commit: ZYAN WORLD PLP implementation"
```

4. Create a new repository on GitHub named: `Appscrip-task-mohamedhaarish`

5. Add remote and push:
```bash
git remote add origin https://github.com/[your-username]/Appscrip-task-mohamedhaarish.git
git branch -M main
git push -u origin main
```

## Netlify Deployment

### Option 1: Deploy via Netlify Dashboard

1. Go to [https://www.netlify.com/](https://www.netlify.com/)
2. Sign up/Login
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository: `Appscrip-task-mohamedhaarish`
5. Netlify will auto-detect Next.js settings
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialize and deploy:
```bash
netlify init
netlify deploy --prod
```

## Environment Variables

No environment variables are required for this project as it uses the public FakeStoreAPI.

## Post-Deployment

After deployment, your site will be available at:
`https://[your-site-name].netlify.app`

Update the schema markup URL in `app/layout.tsx` with your actual Netlify URL if needed.

## Verification Checklist

- [ ] Site is accessible on Netlify
- [ ] Products are loading from FakeStoreAPI
- [ ] Filters are working correctly
- [ ] Responsive design works on mobile/tablet
- [ ] SEO metadata is present (check page source)
- [ ] Schema markup is present (check page source)

