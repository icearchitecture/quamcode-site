#!/bin/bash

echo "🚀 GitHub Repository Creator for QuamCode Site"
echo "============================================="
echo ""

# Check if gh is authenticated
if ! gh auth status >/dev/null 2>&1; then
    echo "📋 You need to authenticate with GitHub first."
    echo ""
    echo "Run: gh auth login"
    echo ""
    echo "Steps:"
    echo "1. Choose 'GitHub.com'"
    echo "2. Choose 'HTTPS' for protocol"
    echo "3. Authenticate with your browser or paste a token"
    echo ""
    echo "After authenticating, run this script again."
    exit 1
fi

echo "✅ GitHub CLI is authenticated"
echo ""

# Ask for repository visibility
echo "Choose repository visibility:"
echo "1) Public"
echo "2) Private"
read -p "Enter choice (1 or 2): " visibility_choice

if [ "$visibility_choice" = "1" ]; then
    visibility="--public"
    vis_text="public"
else
    visibility="--private"
    vis_text="private"
fi

# Ask for organization or personal account
echo ""
echo "Create repository under:"
echo "1) quamcode organization"
echo "2) Your personal account"
read -p "Enter choice (1 or 2): " account_choice

if [ "$account_choice" = "1" ]; then
    repo_name="quamcode/quamcode-site"
else
    current_user=$(gh api user -q .login)
    repo_name="$current_user/quamcode-site"
fi

echo ""
echo "📦 Creating $vis_text repository: $repo_name"
echo ""

# Create the repository and push
if gh repo create "$repo_name" $visibility --source=. --remote=origin --push; then
    echo ""
    echo "✅ Success! Repository created and code pushed."
    echo ""
    echo "🌐 View your repository at: https://github.com/$repo_name"
    echo ""
    echo "📋 Next steps:"
    echo "1. Visit the repository URL above"
    echo "2. Add a description"
    echo "3. Configure settings as needed"
    echo "4. Start developing!"
else
    echo ""
    echo "❌ Failed to create repository."
    echo "Please check the error message above."
fi
