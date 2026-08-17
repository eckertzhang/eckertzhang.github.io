#!/usr/bin/env bash
set -euo pipefail

# ============================================================================
# 一键生成 Tailwind CSS（无需 Node）。首次运行会自动下载 Tailwind 独立二进制。
#
# 用法：
#   ./build.sh            生成一次（压缩）
#   ./build.sh --watch    监听 index.html / script.js / data.js 变化，自动重建
# ============================================================================

cd "$(dirname "$0")"

TW_VERSION="v3.4.17"
TW_BIN=".tailwind/tailwindcss"

if [ ! -x "$TW_BIN" ]; then
  echo "未找到 Tailwind 二进制，正在下载 ${TW_VERSION} ..."
  mkdir -p .tailwind
  OS="$(uname -s)"
  ARCH="$(uname -m)"
  case "$OS" in
    Darwin) PLAT="macos" ;;
    Linux)  PLAT="linux" ;;
    *) echo "不支持的系统: $OS"; exit 1 ;;
  esac
  case "$ARCH" in
    arm64|aarch64) A="arm64" ;;
    x86_64|amd64)  A="x64" ;;
    *) echo "不支持的架构: $ARCH"; exit 1 ;;
  esac
  URL="https://github.com/tailwindlabs/tailwindcss/releases/download/${TW_VERSION}/tailwindcss-${PLAT}-${A}"
  curl -fsSL -o "$TW_BIN" "$URL"
  chmod +x "$TW_BIN"
  echo "下载完成。"
fi

echo "生成 static/css/tailwind.css ..."
"$TW_BIN" -c ./tailwind.config.js -i ./.tailwind/input.css -o ./static/css/tailwind.css --minify "$@"
echo "完成。"
