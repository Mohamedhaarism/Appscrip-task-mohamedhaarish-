# GitHub Push Instructions

## If you're getting "Repository not found" error:

### Option 1: Verify Repository Name
1. Go to your GitHub repository
2. Click the green "Code" button
3. Copy the HTTPS URL
4. Verify it matches: `https://github.com/Mohamedhaarism/Appscrip-task-mohamedhaarish.git`

### Option 2: Use Personal Access Token (PAT)

1. **Create a Personal Access Token**:
   - Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token (classic)"
   - Name it: "Netlify Deployment"
   - Select scopes: `repo` (full control of private repositories)
   - Click "Generate token"
   - **Copy the token** (you won't see it again!)

2. **Push using token**:
   ```bash
   git push https://YOUR_TOKEN@github.com/Mohamedhaarism/Appscrip-task-mohamedhaarish.git main
   ```
   (Replace YOUR_TOKEN with your actual token)

### Option 3: Use SSH (Recommended for long-term)

1. **Check if you have SSH key**:
   ```bash
   ls ~/.ssh
   ```

2. **Generate SSH key if needed**:
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

3. **Add SSH key to GitHub**:
   - Copy your public key: `cat ~/.ssh/id_ed25519.pub`
   - Go to GitHub → Settings → SSH and GPG keys → New SSH key
   - Paste your key and save

4. **Update remote to use SSH**:
   ```bash
   git remote set-url origin git@github.com:Mohamedhaarism/Appscrip-task-mohamedhaarish.git
   git push -u origin main
   ```

### Option 4: Use GitHub Desktop or VS Code
- Install GitHub Desktop or use VS Code's built-in Git
- These tools handle authentication automatically

---

## Quick Check Commands:

```bash
# Check current remote
git remote -v

# Update remote if needed
git remote set-url origin https://github.com/Mohamedhaarism/Appscrip-task-mohamedhaarish.git

# Try pushing again
git push -u origin main
```

