# Mapping Variable Name

[English](README.md) | [中文](README-zh.md)

Mapping Variable Name 是一个 Visual Studio Code 扩展，将代码中的变量名映射到 JSON 文件，当鼠标悬停在代码中的变量上时显示其对应的可读名称。让你写出更加难读懂的忍者代码。

## 功能特点

- 通过 JSON 文件配置变量名映射
- 实时监听映射文件变化，自动更新
- 可选中变量添加到映射文件中
- 支持 JavaScript 和 TypeScript 文件
- 鼠标悬停即可查看变量的可读名称

## 安装

1. 打开 VS Code
2. 按下 `Ctrl+P` / `Cmd+P` 打开命令面板
3. 输入 `ext install mapping-variable-name`

## 使用方法

在项目根目录创建 `mapping-variable-name.json` 文件，并添加以下内容：

```json
{
  "sdasd": "name",
  "usr": "user",
  "pwd": "password"
}
```

在代码编辑器中，当鼠标悬停在变量 `sdasd` 时，会显示 `name`。
