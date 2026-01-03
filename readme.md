# BSides Brisbane Website

This is a Jekyll-based static website for BSides Brisbane.

## Prerequisites

- **Ruby** 2.7.0 or higher
  - Download from [ruby-lang.org](https://www.ruby-lang.org/en/downloads/) or use a version manager like [rbenv](https://github.com/rbenv/rbenv) or [rvm](https://rvm.io/)
  - Verify installation: `ruby --version`

## Local Development Setup

### 1. Install Bundler

Install the specific version of Bundler required for this project:

```bash
gem install bundler:2.2.34
```

### 2. Install Dependencies

Install all required gems and dependencies:

```bash
bundler _2.2.34_ install
```

### 3. Start the Jekyll Server

Run the development server:

```bash
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`

**Optional flags:**
- `--drafts` - Include draft posts
- `--future` - Include posts with future dates
- `--livereload` - Enable live reloading

Example:
```bash
bundle exec jekyll serve --drafts --future
```

### 4. Building the Site

To build the site without running a server:

```bash
bundle exec jekyll build
```

The built site will be in the `_site` directory.

## Making Changes with Git

### Initial Setup (First Time Only)

If you haven't cloned the repository yet:

```bash
git clone https://github.com/bsidesbrisbane/bsidesbrisbane.github.io.git
cd bsidesbrisbane.github.io
```

### Making Changes

1. **Check your current branch and status:**
   ```bash
   git status
   git branch
   ```

2. **Create a new branch for your changes:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
   Or if you prefer to use the main branch directly:
   ```bash
   git checkout main
   ```

3. **Make your changes** to files in the project

4. **Stage your changes:**
   ```bash
   # Stage specific files
   git add path/to/file.md
   
   # Or stage all changes
   git add .
   ```

5. **Commit your changes:**
   ```bash
   git commit -m "Description of your changes"
   ```

6. **Push to GitHub:**
   ```bash
   # If using a feature branch
   git push origin feature/your-feature-name
   
   # If using main branch
   git push origin main
   ```

### Pull Request Workflow (Recommended)

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make and commit your changes:**
   ```bash
   git add .
   git commit -m "Your commit message"
   ```

3. **Push the branch:**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create a Pull Request:**
   - Go to the GitHub repository
   - Click "New Pull Request"
   - Select your feature branch
   - Add a description of your changes
   - Submit the pull request for review

### Updating Your Local Repository

Before starting new work, pull the latest changes:

```bash
git checkout main
git pull origin main
```

### Common Git Commands

- **View changes:** `git diff`
- **View commit history:** `git log`
- **Undo uncommitted changes:** `git checkout -- filename`
- **View remote repositories:** `git remote -v`
- **Fetch latest changes:** `git fetch origin`
- **Merge changes:** `git merge origin/main`

## Project Structure

- `_posts/` - Blog posts organized by year
- `_layouts/` - Page templates
- `_includes/` - Reusable components
- `_sass/` - Stylesheets
- `assets/` - Images, CSS, and JavaScript files
- `_config.yml` - Site configuration
- `_site/` - Generated site (do not edit directly)

## Troubleshooting

- **Port already in use:** Use `bundle exec jekyll serve --port 4001` to use a different port
- **Dependencies issues:** Run `bundler _2.2.34_ install` again
- **Build errors:** Check Jekyll version compatibility with `bundle exec jekyll --version`
