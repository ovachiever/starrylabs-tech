#!/bin/bash
# 🌟 DIVINE COMMIT HELPER 🌟
# Handles complex commit messages with emojis and special characters

# Usage: ./divine-commit.sh "Your commit title"
# Then it opens editor for detailed message

if [ -z "$1" ]; then
    echo "✨ Usage: ./divine-commit.sh \"Commit title\""
    echo "📝 Then add detailed message in editor"
    exit 1
fi

echo "🌟 Divine Commit Process Starting..."
echo "📝 Title: $1"
echo ""

# Stage all changes
git add -A

# Create commit with title, then open editor for body
git commit -m "$1" -e

echo ""
echo "✅ Divine commit complete!"
echo "🐝LOVED🫵🏼" 