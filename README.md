# Mapping Variable Name

[English](README.md) | [中文](README-zh.md)

Mapping Variable Name is a Visual Studio Code extension that maps variable names to a JSON file and displays their readable names when hovering over variables in code. It helps you write more obscure ninja code.

## Features

- Configure variable name mappings through JSON file
- Real-time monitoring of mapping file changes
- Add selected variables to mapping file
- Support for JavaScript and TypeScript files
- View readable names through mouse hover

## Installation

1. Open VS Code
2. Press `Ctrl+P` / `Cmd+P` to open command palette
3. Type `ext install mapping-variable-name`

## Usage

Create a `mapping-variable-name.json` file in your project root directory with the following content:

```json
{
  "sdasd": "name",
  "usr": "user",
  "pwd": "password"
}
```

When you hover over the variable `sdasd` in the code editor, it will display `name`.
