# Deploying Shiljo & Rosemariya Luxury Wedding Website to Render

You can deploy this website to **Render** completely **FREE** as a **Static Site** (the recommended and fastest option for Vite/React applications).

---

## ⚡ Option 1: Automatic Deployment with GitHub (Recommended)

### Step 1: Push the project to GitHub
In your project terminal, initialize Git and push to your GitHub account:

```bash
git init
git add .
git commit -m "Initial commit of Shiljo & Rosemariya luxury wedding website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

---

### Step 2: Connect to Render
1. Go to **[https://dashboard.render.com/](https://dashboard.render.com/)** and sign in.
2. Click the **"New +"** button in the top right.
3. Choose **"Static Site"**.
4. Connect your GitHub repository (`shiljo` or your chosen repo name).

---

### Step 3: Configure Settings on Render
Fill in these exact values:

| Field | Value |
|---|---|
| **Name** | `shiljo-rosemariya-wedding` (or any name you like) |
| **Branch** | `main` |
| **Root Directory** | *(leave empty / blank)* |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |

*(Optional)* Under **Redirects/Rewrites**:
- **Source**: `/*`
- **Destination**: `/index.html`
- **Action**: `Rewrite`

Click **"Create Static Site"**.

---

## 🚀 That's it!
Render will now automatically:
1. Pull your code from GitHub.
2. Run `npm install && npm run build`.
3. Publish your website to a live public URL like:
   `https://shiljo-rosemariya-wedding.onrender.com`

Any future git push to your `main` branch will automatically trigger a new deployment.
