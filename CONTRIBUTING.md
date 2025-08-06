# Contributing to @valian/eslint-config

First off, thanks for taking the time to contribute! ❤️

All types of contributions are encouraged and valued. See the [Table of Contents](#table-of-contents) for different ways to help and details about how this project handles them. Please make sure to read the relevant section before making your contribution. It will make it a lot easier for us maintainers and smooth out the experience for all involved. The community looks forward to your contributions. 🎉

> And if you like the project, but just don't have time to contribute, that's fine. There are other easy ways to support the project and show your appreciation, which we would also be very happy about:
>
> - Star the project
> - Tweet about it
> - Refer this project in your project's readme
> - Mention the project at local meetups and tell your friends/colleagues

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [I Have a Question](#i-have-a-question)
- [I Want To Contribute](#i-want-to-contribute)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Your First Code Contribution](#your-first-code-contribution)
- [Improving The Documentation](#improving-the-documentation)
- [Development Setup](#development-setup)
- [Tooling Choices](#tooling-choices)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
- [Testing](#testing)
- [Release Process](#release-process)
- [Dependency Management](#dependency-management)
- [Getting Help](#getting-help)
- [Join The Project Team](#join-the-project-team)

## Code of Conduct

This project and everyone participating in it is governed by Valian's Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## I Have a Question

> If you want to ask a question, we assume that you have read the available [Documentation](README.md).

Before you ask a question, it is best to search for existing [Issues](https://github.com/valian-ca/eslint-config/issues) that might help you. In case you have found a suitable issue and still need clarification, you can write your question in this issue. It is also advisable to search the internet for answers first.

If you then still feel the need to ask a question and need clarification, we recommend the following:

- Open an [Issue](https://github.com/valian-ca/eslint-config/issues/new).
- Provide as much context as you can about what you're running into.
- Provide project and platform versions (nodejs, pnpm, etc), depending on what seems relevant.

We will then take care of the issue as soon as possible.

## I Want To Contribute

> ### Legal Notice
>
> When contributing to this project, you must agree that you have authored 100% of the content, that you have the necessary rights to the content and that the content you contribute may be provided under the project license.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for @valian/eslint-config, **including completely new features and minor improvements to existing functionality**. Following these guidelines will help maintainers and the community to understand your suggestion and find related suggestions.

#### Before Submitting an Enhancement

- Make sure that you are using the latest version.
- Read the [documentation](README.md) carefully and find out if the functionality is already covered, maybe by an individual configuration.
- Perform a [search](https://github.com/valian-ca/eslint-config/issues) to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.
- Find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature. Keep in mind that we want features that will be useful to the majority of our users and not just a small subset. If you're just targeting a minority of users, consider writing an add-on/plugin library.

#### How Do I Submit a Good Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://github.com/valian-ca/eslint-config/issues).

- Use a **clear and descriptive title** for the issue to identify the suggestion.
- Provide a **step-by-step description of the suggested enhancement** in as many details as possible.
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why. At this point you can also tell which alternatives do not work for you.
- You may want to **include screenshots and animated GIFs** which help you demonstrate the steps or point out the part which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
- **Explain why this enhancement would be useful** to most @valian/eslint-config users. You may also want to point out the other projects that solved it better and which could serve as inspiration.

### Your First Code Contribution

#### Prerequisites

- **Node.js**: Version 20 or higher (see `engines` in package.json)
- **pnpm**: Version 10.11.1 (enforced by `packageManager` field)
- **Git**: Latest version recommended

#### Quick Start

1. **Fork the repository** on GitHub
2. **Clone your fork**:

   ```bash
   git clone https://github.com/YOUR_USERNAME/eslint-config.git
   cd eslint-config
   ```

3. **Install dependencies**:

   ```bash
   pnpm install
   ```

   > **Note**: This project enforces pnpm usage via the `preinstall` script. Using npm or yarn will result in an error.

4. **Create a feature branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Make your changes** following the [Code Standards](#code-standards)

6. **Test your changes**:

   ```bash
   # Run all linting checks
   pnpm eslint
   pnpm prettier
   pnpm lint:md
   ```

7. **Commit your changes** using conventional commits:

   ```bash
   git commit -m "feat: add new rule for import sorting"
   ```

8. **Push to your fork** and create a pull request

### Improving The Documentation

Documentation is a crucial part of any open source project. We welcome contributions to improve our documentation in the following areas:

- **README.md**: Main project documentation
- **CONTRIBUTING.md**: This file
- **Code comments**: Inline documentation in source files
- **Examples**: Usage examples and tutorials

When improving documentation:

- Keep it clear, concise, and easy to follow
- Use proper markdown formatting
- Include code examples where appropriate
- Test any code examples you provide
- Update related documentation when making changes

## Development Setup

### Prerequisites

- **Node.js**: Version 20 or higher (see `engines` in package.json)
- **pnpm**: Version 10.11.1 (enforced by `packageManager` field)

### Quick Start

1. **Clone the repository**:

   ```bash
   git clone https://github.com/valian-ca/eslint-config.git
   cd eslint-config
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

   > **Note**: This project enforces pnpm usage via the `preinstall` script. Using npm or yarn will result in an error.

3. **Verify setup**:
   ```bash
   pnpm eslint
   pnpm prettier
   pnpm lint:md
   ```

## Tooling Choices

This project uses a different set of tools than other Valian projects. Here's why:

### Package Manager: pnpm

- **Why**: Better disk space efficiency, faster installs, and stricter dependency management
- **Enforcement**: The `preinstall` script prevents using npm/yarn
- **Version**: Locked to 10.11.1 for consistency

### ESLint Flat Config

- **Why**: Modern ESLint configuration system (default since v9.0.0)
- **Benefits**: Better performance, more flexible configuration, native ESM support
- **Migration**: This project migrated from the legacy `.eslintrc` format

### Conventional Commits

- **Why**: Standardized commit messages for automated changelog generation
- **Tool**: commitlint with husky pre-commit hooks
- **Format**: `<type>(<scope>): <description>`

### Automated Dependency Updates

- **Tool**: Renovate (configured in `.github/renovate.json5`)
- **Strategy**: Monthly updates with semantic versioning
- **Grouping**: Dependencies are grouped by type (ESLint, Node.js, etc.)

## Development Workflow

### Available Scripts

| Script          | Description                                          |
| --------------- | ---------------------------------------------------- |
| `pnpm eslint`   | Lint all files using the project's own configuration |
| `pnpm prettier` | Check code formatting                                |
| `pnpm lint:md`  | Lint markdown files                                  |
| `pnpm bump`     | Generate changelog and bump version                  |

### Making Changes

1. **Create a feature branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the [Code Standards](#code-standards)

3. **Test your changes**:

   ```bash
   # Run all linting checks
   pnpm eslint
   pnpm prettier
   pnpm lint:md
   ```

4. **Commit your changes** using conventional commits:

   ```bash
   git commit -m "feat: add new rule for import sorting"
   ```

5. **Push and create a pull request**

### Project Structure

```
eslint-config-valian/
├── rules/                 # Individual rule configurations
│   ├── base.mjs          # Base ESLint rules and plugins
│   ├── typescript.mjs    # TypeScript-specific rules
│   ├── react.mjs         # React-specific rules
│   ├── node.mjs          # Node.js-specific rules
│   ├── jest.mjs          # Jest testing rules
│   ├── json.mjs          # JSON file linting
│   ├── import-sort.mjs   # Import sorting rules
│   └── no-cycle.mjs      # Circular dependency prevention
├── eslint.config.mjs     # Main flat config file
├── index.mjs             # Package exports
└── package.json          # Package configuration
```

## Code Standards

### ESLint Configuration

- **Format**: Flat config (ESLint v9+)
- **File Extension**: `.mjs` for ESM modules
- **Structure**: Modular rule configurations in `rules/` directory

### Code Style

- **Formatter**: Prettier (configured via `eslint-config-prettier`)
- **Rules**: Valian rules
- **TypeScript**: Strict mode enabled

### Import Organization

- **Plugin**: `eslint-plugin-simple-import-sort`
- **Order**: Built-ins → External → Internal → Relative
- **Auto-fix**: Available via `--fix` flag

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types**:

- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples**:

```bash
git commit -m "feat: add new rule for import sorting"
git commit -m "fix: resolve TypeScript parser configuration issue"
git commit -m "docs: update README with flat config examples"
```

## Testing

### Manual Testing

1. **Test against your own project**:

   ```bash
   # In your project directory
   pnpm add -D /path/to/eslint-config-valian
   ```

2. **Create test configuration**:

   ```js
   // eslint.config.js
   import { defineConfig } from 'eslint/config'
   import { config } from '@valian/eslint-config'

   export default defineConfig([
     ...config.base,
     ...config.typescript,
     // Add your project-specific overrides
   ])
   ```

3. **Run ESLint**:
   ```bash
   npx eslint .
   ```

### Automated Testing

- **Linting**: The project lints itself using its own configuration
- **Formatting**: Prettier ensures consistent code style
- **Markdown**: markdownlint-cli2 checks documentation quality

## Release Process

### Automated Releases

This project uses automated releases via:

1. **Conventional Commits**: Commit messages determine version bumps
2. **changelogen**: Automatically generates changelog entries
3. **Renovate**: Handles dependency updates

### Manual Release

To manually trigger a release:

```bash
pnpm bump
```

This will:

- Analyze commit history
- Determine version bump (patch/minor/major)
- Update CHANGELOG.md
- Create a git tag

### Version Strategy

- **Patch**: Bug fixes and minor improvements
- **Minor**: New features (backward compatible)
- **Major**: Breaking changes

## Dependency Management

### Updating Dependencies

Dependencies are automatically updated by Renovate:

- **Schedule**: Monthly updates
- **Strategy**: Semantic versioning
- **Grouping**: Dependencies are grouped by type
- **Auto-merge**: Minor and patch updates are auto-merged

### Manual Updates

To manually update dependencies:

```bash
# Update all dependencies
pnpm update

# Update specific package
pnpm update eslint

# Check for outdated packages
pnpm outdated
```

### Peer Dependencies

This package has peer dependencies on:

- `eslint`: `>=9.28.0`
- `typescript`: `>=5.8.3`

These versions are enforced to ensure compatibility.

## Getting Help

### Common Issues

**pnpm not found**:

```bash
npm install -g pnpm@10.11.1
```

**ESLint configuration errors**:

- Ensure you're using ESLint v9+
- Check that your `eslint.config.js` follows flat config format
- Verify TypeScript project configuration

**Import resolution issues**:

- Check that `tsconfig.json` includes the correct paths
- Ensure `tsconfigRootDir` is set correctly in parser options

### Resources

- [ESLint Flat Config Documentation](https://eslint.org/docs/latest/use/configure/configuration-files-new)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [pnpm Documentation](https://pnpm.io/)

### Contact

- **Issues**: [GitHub Issues](https://github.com/valian-ca/eslint-config/issues)
- **Discussions**: [GitHub Discussions](https://github.com/valian-ca/eslint-config/discussions)

## Join The Project Team

We're always looking for contributors who are passionate about code quality and developer experience. If you'd like to become a more active contributor:

1. **Start small**: Fix bugs, improve documentation, or add tests
2. **Be consistent**: Regular contributions help build trust
3. **Communicate**: Ask questions, share ideas, and provide feedback
4. **Follow the process**: Adhere to our contribution guidelines

### Becoming a Maintainer

After demonstrating consistent contributions and understanding of the project:

1. **Express interest**: Let us know you'd like to become a maintainer
2. **Review process**: We'll discuss your contributions and commitment
3. **Gradual transition**: Start with limited permissions and expand over time

## Attribution

This guide is based on the [contributing.md](https://contributing.md/) template and best practices from [GitHub's contribution guidelines](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors) and [Mozilla's Working Open Workshop](https://mozillascience.github.io/working-open-workshop/contributing/).

---

Thank you for contributing to @valian/eslint-config! 🎉
