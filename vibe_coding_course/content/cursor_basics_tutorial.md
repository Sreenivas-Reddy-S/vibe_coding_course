# Cursor Basics Tutorial: Getting Started with Vibe Coding

This tutorial will guide you through the basics of using Cursor for vibe coding, focusing on practical usage of its AI features to help you build software without extensive coding knowledge.

## Understanding the Cursor Interface

After installing Cursor and completing the initial setup, you'll be presented with the main interface:

### Key Interface Elements

1. **Editor Area**: The central space where you'll write and edit code
2. **File Explorer**: Left sidebar showing your project files and folders
3. **AI Panel**: Right sidebar for AI interactions (Chat and Composer)
4. **Status Bar**: Bottom bar showing editor status and additional options
5. **Command Palette**: Accessible via Ctrl/Cmd+Shift+P for quick commands

## Essential AI Features for Vibe Coding

Cursor offers several AI-powered features that make vibe coding possible:

### 1. AI Chat

The AI Chat feature allows you to have a conversation with the AI about your code or project.

**How to Access:**
- Click the "Chat" tab in the AI Panel
- Use keyboard shortcut: Ctrl/Cmd+L

**Common Use Cases:**
- Ask questions about your code
- Request explanations of complex functions
- Get suggestions for improvements
- Troubleshoot errors

**Example Prompts:**
- "What does this function do?"
- "How can I optimize this code?"
- "Explain this error message to me"
- "What libraries should I use for a web scraping project?"

### 2. Tab Completion

Cursor's Tab feature predicts your next edits and allows you to accept suggestions with a single keystroke.

**How to Access:**
- As you type, suggestions will appear automatically
- Press Tab to accept the suggestion

**Best Practices:**
- Type a few characters to get more accurate suggestions
- Use Tab to quickly complete common patterns
- Combine with comments to guide the AI's suggestions

### 3. Composer

Composer is Cursor's most powerful feature for vibe coding, allowing you to generate or modify entire blocks of code using natural language.

**How to Access:**
- Click the "Composer" tab in the AI Panel
- Use keyboard shortcut: Ctrl/Cmd+K

**How to Use:**
1. Select code you want to modify (optional)
2. Open Composer
3. Describe what you want in natural language
4. Review the AI's suggestion
5. Click "Apply" to insert the code

**Example Prompts:**
- "Create a function that calculates the average of an array of numbers"
- "Add error handling to this function"
- "Convert this code to use async/await instead of promises"
- "Create a simple React component for a contact form"

## Vibe Coding Workflow in Cursor

Now let's walk through a typical vibe coding workflow using Cursor:

### Step 1: Start with a Clear Goal

Before coding, have a clear idea of what you want to build. For example:
- "I want to create a simple weather app"
- "I need a script to organize my files"
- "I want to build a personal portfolio website"

### Step 2: Project Setup

1. Open Cursor
2. Create a new folder for your project
3. Use AI Chat to help plan your project structure:
   - "I want to build a weather app. What files and folders should I create?"

### Step 3: Initial Code Generation

1. Create your first file (e.g., `index.html` or `app.js`)
2. Use Composer to generate starter code:
   - "Create a basic HTML structure for a weather app"
   - "Set up a Node.js server with Express"

### Step 4: Iterative Development

This is where vibe coding truly shines:

1. **Describe a feature** you want to add:
   - "Add a search bar that lets users enter a city name"

2. **Review and apply** the generated code

3. **Test the feature** to see if it works

4. If you encounter errors, **copy the error message** and ask the AI:
   - "I'm getting this error: [paste error]. How do I fix it?"

5. **Refine through conversation**:
   - "Make the search bar look nicer with some CSS"
   - "Add validation to ensure users enter a valid city name"

### Step 5: Expanding Your Project

As you become comfortable with the basic workflow, you can tackle more complex features:

1. Use AI Chat to brainstorm new features:
   - "What features could I add to make this weather app more useful?"

2. Break down complex features into smaller tasks:
   - "I want to add a 5-day forecast. What steps should I take?"

3. Use Composer to implement each part:
   - "Create a function that fetches 5-day forecast data from the API"
   - "Display the forecast data in a horizontal scrollable list"

## Practical Example: Creating a Simple To-Do List

Let's walk through a concrete example of vibe coding with Cursor:

### Step 1: Project Setup

1. Create a new folder called "todo-app"
2. Open this folder in Cursor

### Step 2: Create HTML Structure

1. Create a new file called `index.html`
2. Open Composer (Ctrl/Cmd+K)
3. Enter this prompt:
   ```
   Create a simple HTML structure for a todo list app with:
   - A heading "My Todo List"
   - An input field to add new tasks
   - An "Add" button
   - An empty unordered list to display tasks
   ```
4. Review the generated code and click "Apply"

### Step 3: Add Styling

1. Create a new file called `styles.css`
2. Use Composer with this prompt:
   ```
   Create CSS styles for my todo list app with:
   - A clean, modern look
   - Rounded corners on the input and buttons
   - A hover effect on the buttons
   - A subtle animation when adding new tasks
   - Make it responsive for mobile devices
   ```
3. Review and apply the code
4. Link the CSS file in your HTML

### Step 4: Add JavaScript Functionality

1. Create a new file called `app.js`
2. Use Composer with this prompt:
   ```
   Create JavaScript for a todo list app that:
   - Adds new tasks when the user clicks the Add button or presses Enter
   - Displays tasks in the unordered list
   - Allows users to mark tasks as completed by clicking on them
   - Allows users to delete tasks with a delete button
   - Saves tasks to localStorage so they persist when the page is reloaded
   ```
3. Review and apply the code
4. Link the JavaScript file in your HTML

### Step 5: Test and Refine

1. Open your `index.html` file in a browser to test
2. If you encounter any issues, copy the error message
3. Use AI Chat to troubleshoot:
   - "I'm getting this error when I try to add a task: [error message]"
4. Use Composer to refine features:
   - "Modify the code to add a timestamp to each task"
   - "Add the ability to edit existing tasks"

## Advanced Tips for Effective Vibe Coding

### 1. Be Specific in Your Prompts

The more specific your instructions, the better the AI will understand what you want:

**Less Effective:** "Make a login form"
**More Effective:** "Create a login form with email and password fields, validation, and a 'Forgot Password' link"

### 2. Provide Context

Help the AI understand your project by explaining the context:

"This is part of a larger e-commerce site. The login form should match the site's modern, minimalist style with blue accent colors."

### 3. Iterate Gradually

Instead of trying to build everything at once, build your project in small, manageable steps:

1. Start with basic functionality
2. Test to make sure it works
3. Add more features one by one
4. Refine and polish

### 4. Learn from the Generated Code

Even if you're not an experienced programmer, try to understand what the generated code is doing:

1. Ask the AI to explain sections you don't understand
2. Look for patterns in the code
3. Make small modifications to see what changes

### 5. Combine AI Features

Use different AI features together for the best results:

1. Use Chat to plan and understand concepts
2. Use Composer to generate and modify code
3. Use Tab completion for quick edits

## Troubleshooting Common Issues

### AI Generates Incorrect Code

If the AI generates code that doesn't work or doesn't match what you wanted:

1. Be more specific in your prompt
2. Break down your request into smaller parts
3. Show the AI what's wrong and ask for corrections

### Context Limitations

If the AI seems to forget parts of your project:

1. Remind the AI about important context
2. Focus on one file or component at a time
3. For larger projects, provide summaries of other parts

### Performance Issues

If Cursor becomes slow:

1. Close unused files and tabs
2. Restart Cursor if needed
3. For large projects, consider working on smaller sections

## Next Steps

Now that you understand the basics of vibe coding with Cursor, you're ready to:

1. Experiment with your own small projects
2. Follow along with the step-by-step project guide in the next section
3. Explore more advanced features of Cursor

Remember, vibe coding is about iterative development through conversation with AI. Don't be afraid to experiment, make mistakes, and learn as you go!
