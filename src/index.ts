import * as vscode from "vscode";
import * as fs from "fs";

const mapping = new Map<string, string>();

function activate(context: vscode.ExtensionContext) {
  const mappingFilePath =
    vscode.workspace
      .getConfiguration("mapping-variable-name")
      .get<string>("jsonPath") || "./mapping-variable-name.json";

  function loadMapping() {
    const workspaceFolder = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
    if (!workspaceFolder) {
      return;
    }

    // 读取映射文件，文件名从配置中获取
    if (!fs.existsSync(mappingFilePath)) {
      return;
    } else {
      const mapping = JSON.parse(fs.readFileSync(mappingFilePath, "utf8"));
      mapping.forEach((key: string, value: string) => {
        mapping.set(key, value);
      });
    }
  }

  loadMapping();

  // 监听映射文件变化
  vscode.workspace.onDidChangeTextDocument((event) => {
    if (event.document.uri.fsPath === mappingFilePath) {
      loadMapping();
    }
  });

  // 注册 HoverProvider
  const hoverProvider = vscode.languages.registerHoverProvider("javascript", {
    provideHover(document, position, token) {
      const range = document.getWordRangeAtPosition(position);
      const word = document.getText(range);

      // 如果映射存在，返回 Hover 信息
      if (mapping[word]) {
        return new vscode.Hover(`**Mapped to:** ${mapping[word]}`);
      } else {
        return null;
      }
    },
  });
  context.subscriptions.push(hoverProvider);
}

function deactivate() {
  mapping.clear();
}

export { activate, deactivate };
