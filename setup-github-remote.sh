#!/bin/bash

# QuamCode Site - GitHub Remote Setup
# Replace <your-org> with your GitHub username or organization

echo "🚀 Setting up GitHub remote for QuamCode site"
echo ""
echo "Please enter your GitHub username or organization:"
read -p "GitHub username/org: " github_user

if [ -z "$github_user" ]; then
    echo "❌ GitHub username/org cannot be empty"
    exit 1
fi

# Add remote origin
git remote add origin "https://github.com/${github_user}/quamcode-site.git"

echo ""
echo "✅ Remote added: https://github.com/${github_user}/quamcode-site.git"
echo ""
echo "📋 Next steps:"
echo "1. Create a new repository on GitHub named 'quamcode-site'"
echo "2. Make sure it's empty (no README, .gitignore, or license)"
echo "3. Run: git push -u origin main"
echo ""
echo "Or if you want to use a different repository name:"
echo "git remote set-url origin https://github.com/${github_user}/[your-repo-name].git"
