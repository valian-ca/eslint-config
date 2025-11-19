# Agent Knowledge Base

This file encapsulates key knowledge about the architecture, patterns, and standards used in this repository (`@valian/eslint-config`). It is intended to guide AI agents and developers in maintaining consistency.

## 1. Project Purpose

This repository hosts a **shareable ESLint configuration** package. It exports multiple preset configurations (base, react, typescript, etc.) that consuming projects can import and combine using ESLint's Flat Config system.

## 2. Architecture

- **`index.mjs`**: The main entry point. It aggregates exports from `rules/` and provides a default `config` object.
- **`eslint.config.mjs`**: The configuration used _by this repository itself_ for linting its own code.
- **`rules/*.mjs`**: Modular configuration files. Each file typically exports a specific set of rules (e.g., `react.mjs`, `typescript.mjs`).

## 3. Configuration Patterns (Critical)

We strictly follow the **ESLint v10 / v9.21+ style** for Flat Config.

### 3.1. The `defineConfig` Helper

All rule files **MUST** use the `defineConfig` helper from `eslint/config`. This ensures type safety and enables the `extends` property.

**✅ Correct:**

```javascript
import { defineConfig } from 'eslint/config'

export const myConfig = defineConfig([
  {
    name: 'valian/my-scope/feature',
    extends: [somePlugin.configs.recommended],
    rules: { ... }
  }
])
```

**❌ Incorrect (Legacy/Raw Array):**

```javascript
export const myConfig = [
  ...somePlugin.configs.recommended,
  {
    rules: { ... }
  }
]
```

### 3.2. The `extends` Property

We use the `extends` property to inherit from plugins or other configs. This is cleaner than array spreading (`...`).

- **Requirement**: `defineConfig` must be used for `extends` to work.
- **Version Support**: This feature works natively in ESLint v9.21.0+ and v10.

### 3.3. Naming Convention

Every configuration object **MUST** have a unique `name` property to aid in debugging (`eslint --print-config`).

- **Format**: `valian/<scope>/<description>`
- **Examples**:
  - `valian/react/base`
  - `valian/typescript/strict`
  - `valian/base/linter-options`

## 4. Dependency Management

- **Manager**: `pnpm` is enforced.
- **Versioning**: We target `eslint` version `^9.x`.
- **Peer Dependencies**: Consumers are expected to install `eslint` and `typescript` themselves.

## 5. Task Guidelines

### Adding a New Rule Set

1.  Create `rules/<feature>.mjs`.
2.  Import `defineConfig` from `eslint/config`.
3.  Define the config using the `extends` pattern if inheriting from a plugin.
4.  Export it as a named export.
5.  Re-export it in `index.mjs`.

### Refactoring Existing Rules

If you encounter a file exporting a raw array (without `defineConfig`), refactor it to use `defineConfig` and `extends` to maintain consistency.

### Common Pitfalls

- **"extends not found"**: This usually happens if you forget to wrap the array in `defineConfig`.
- **Version Mismatch**: While `extends` is a v10 feature, it was backported to v9.21. Do not be afraid to use it, but ensure consumers have a recent v9 version.
