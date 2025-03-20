# Cursor Installation Guide

This comprehensive guide will walk you through installing and setting up Cursor, the AI-powered code editor that enables vibe coding. Follow these platform-specific instructions to get started quickly.

## System Requirements

Before installing Cursor, ensure your system meets these minimum requirements:

- **Windows**: Windows 10 or later (64-bit)
- **macOS**: macOS 10.15 (Catalina) or later
- **Linux**: Ubuntu 18.04 or later, or compatible distribution
- **RAM**: 8GB minimum (16GB recommended)
- **Storage**: 1GB free disk space
- **Internet Connection**: Required for AI features

## Windows Installation

### Step 1: Download the Installer
1. Visit [cursor.com](https://cursor.com)
2. Click the "Download" button
3. The Windows installer (.exe) will automatically download

### Step 2: Run the Installer
1. Locate the downloaded .exe file (typically in your Downloads folder)
2. Right-click and select "Run as administrator" (recommended)
3. If prompted by User Account Control, click "Yes"
4. Follow the on-screen instructions to complete installation

### Step 3: Launch Cursor
1. Find Cursor in your Start menu or desktop shortcut
2. Click to launch the application

## macOS Installation

### Step 1: Download the Installer
1. Visit [cursor.com](https://cursor.com)
2. Click the "Download" button
3. The macOS installer (.dmg) will automatically download

### Step 2: Install the Application
1. Open the downloaded .dmg file
2. Drag the Cursor icon to the Applications folder
3. If prompted about security settings, go to System Preferences > Security & Privacy, and click "Open Anyway"

### Step 3: Launch Cursor
1. Open your Applications folder
2. Click on the Cursor icon to launch
3. If prompted about permissions, follow the on-screen instructions

## Linux Installation

### Step 1: Download the Installer
1. Visit [cursor.com](https://cursor.com)
2. Click the "Download" button
3. Select the appropriate package for your distribution (.deb for Ubuntu/Debian or .rpm for Fedora/RHEL)

### Step 2: Install the Package
For Debian/Ubuntu:
```bash
sudo dpkg -i cursor_X.X.X_amd64.deb
sudo apt-get install -f  # Install dependencies if needed
```

For Fedora/RHEL:
```bash
sudo rpm -i cursor-X.X.X.x86_64.rpm
```

### Step 3: Launch Cursor
1. Open your applications menu
2. Find and click on Cursor
3. Alternatively, launch from terminal with `cursor`

## First-Time Setup

When you first launch Cursor, you'll be guided through a setup process:

### Step 1: Choose Keyboard Shortcuts
1. Select your preferred keyboard shortcut preset:
   - VS Code (default)
   - Sublime Text
   - JetBrains
   - Vim
   - Emacs
   - Custom

### Step 2: Select Language
1. Choose your preferred language for AI interactions
2. English is the default, but you can specify other languages

### Step 3: Configure Codebase Indexing
1. Decide whether to enable local codebase indexing
2. This feature helps the AI understand your code better
3. You can adjust indexing settings later

### Step 4: Install CLI Shortcuts (Optional)
1. Choose whether to install `cursor` and `code` commands
2. These allow you to open Cursor from the terminal

### Step 5: Import VS Code Settings (Optional)
1. If you're migrating from VS Code, you can import:
   - Extensions
   - Themes
   - User settings
   - Keyboard shortcuts

### Step 6: Set Data Preferences
1. Review and select your data sharing preferences
2. These settings affect how your code is processed for AI features

## Account Creation

To access all features, you'll need to create an account:

1. Click "Sign Up" or "Login" in Cursor
2. Choose your preferred sign-up method:
   - Email
   - Google
   - GitHub
3. Complete the registration process
4. New users receive a 14-day free trial of Cursor Pro

## Verifying Installation

To ensure Cursor is properly installed and functioning:

1. Open Cursor
2. Create a new file (File > New File or Ctrl/Cmd+N)
3. Type a simple comment (e.g., `// Hello Cursor`)
4. Try an AI feature by pressing Ctrl/Cmd+K to open the command palette
5. Type "AI: Chat" to test the AI assistant

## Troubleshooting Common Issues

### Application Won't Start
- Ensure your system meets the minimum requirements
- Try restarting your computer
- Check for conflicting software

### AI Features Not Working
- Verify your internet connection
- Ensure you're logged into your Cursor account
- Check if you have an active subscription or trial

### Performance Issues
- Close unused applications to free up memory
- Disable codebase indexing temporarily
- Check for system updates

## Updating Cursor

Cursor will automatically check for updates. When an update is available:

1. You'll see a notification in the application
2. Click "Update Now" or update later
3. The application will download and install the update
4. Restart Cursor when prompted

## Uninstalling Cursor

If you need to uninstall Cursor:

### Windows
1. Go to Settings > Apps > Apps & features
2. Find Cursor in the list
3. Click Uninstall and follow the prompts

### macOS
1. Open Finder and navigate to Applications
2. Find Cursor
3. Drag to Trash or right-click and select "Move to Trash"
4. Empty Trash

### Linux
For Debian/Ubuntu:
```bash
sudo apt-get remove cursor
```

For Fedora/RHEL:
```bash
sudo rpm -e cursor
```

## Next Steps

Now that you've successfully installed Cursor, you're ready to:

1. Explore the interface and features
2. Learn basic AI-assisted coding techniques
3. Start your first vibe coding project

Continue to the next section of the course to learn about Cursor basics and how to effectively use its AI features for vibe coding.
