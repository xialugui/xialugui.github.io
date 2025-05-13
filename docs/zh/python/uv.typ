---

order: 1

---
#import "../../typst/chapter.typ":*

#show: config.with()


= #link("https://docs.astral.sh/uv/")[uv]
一个非常快速的Python包和项目管理器，用Rust编写。
#image("images/2025-05-12-10-13-40.png")
== 安装
=== windows
```bash
scoop install main/uv
uv //查看是否安装成功
```
=== linux
```bash
curl -x "http://user:pwd@127.0.0.1:1234" "http://httpbin.org/ip"

curl -LsSf https://astral.sh/uv/install.sh | sh
uv //查看是否安装成功
```
国内一般都会安装失败，可以手动下载uv-installer.sh，后更改脚本中的下载地址为：
```shell-unix-generic
if [ -n "${INSTALLER_DOWNLOAD_URL:-}" ]; then
    ARTIFACT_DOWNLOAD_URL="https://ghfast.top/$INSTALLER_DOWNLOAD_URL"
else
    ARTIFACT_DOWNLOAD_URL="https://ghfast.top/${INSTALLER_BASE_URL}/astral-sh/uv/releases/download/0.7.3"
fi
```
== 使用方式
=== 初始化项目
```bash
uv init
```
- 国内下载使用代理，代理查询：https://ghproxy.link；
- 代理使用形式：https://proxy.com/https://github.com/xx/xx/release/download/xx.zip
- 设置python 下载镜像：export UV_PYTHON_INSTALL_MIRROR=https://ghfast.top/https://github.com/astral-sh/python-build-standalone/releases/download
  

=== 依赖管理
+ 增加依赖：`uv add flask`；
+ 删除依赖：`uv remove flask`；
+ 更新环境：`uv sync`；
+ 列出已安装包：`uv pip list`；
=== 环境
+ 使用环境：`source .venv/bin/activate`;
+ 取消环境：`deactivate`;
== Python
+ 列出已安装python：`uv python list`；
+ 使用指定版本：`uv python use 3.10.6`；

== 使用国内源
```toml
[[tool.uv.index]]
url = "https://pypi.tuna.tsinghua.edu.cn/simple"
default = true
```