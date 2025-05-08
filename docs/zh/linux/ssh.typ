#import "../../typst/chapter.typ":*

#show: config.with(outline-depth: 1)

= SSH
== 非对称密钥访问
+ 使用gitbash；
+ 生成密钥对：ssh-kengen；
+ 选择默认位置保存公钥私钥；
+ 上传公钥到服务器：ssh-copy-id user\@host；
+ ssh连接：ssh user\@host；