---

order: 1

---

#import "../../typst/chapter.typ":*

#show: config.with()

= tmux
== 复制文本
```
ctrl+b,[
```
== 创建会话
```shell-unix-generic
tmux new -s <session-name>
```
== 创建窗口
```shell-unix-generic
tmux neww <window-name>
```
== 切换窗口
```
ctrl+b,window-index
```