---

order: 2

---





# Marimo
## 启动
- marimo edit --headless --no-token --watch；
## 设置手动运行
```toml
[tool.marimo.runtime]
auto_instantiate = false
on_cell_change = "lazy"
```