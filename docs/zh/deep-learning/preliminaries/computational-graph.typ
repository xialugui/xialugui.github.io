---

order: 2

---

#import "../../../typst/chapter.typ": *
#show :config.with()
#set math.mat(delim: "[")
= 计算图


== 雅克比矩阵
雅克比矩阵用来计算向量对向量的梯度。有输入数据：$bold(x) = vec(x_1,x_2,x_3)$
权重：$bold(w_1)=vec(w_11,w_12,w_13),bold(w_2)=vec(w_21,w_22,w_23)$,中间变量$bold(y)=vec(y_1,y_2)$，其中$y_1 = x_1 w_11+x_2 w_12+x_3 w_13 ,y_2 = x_1 w_21+x_2 w_22+x_3 w_23$,

为例，其$bold(y)$对$bold(w_1)$的雅克比矩阵为：
$
  J_(bold(y w_1)) = mat(partial(y_1)/partial(w_11),partial(y_1)/partial(w_12),partial(y_1)/partial(w_13);partial(y_2)/partial(w_11),partial(y_2)/partial(w_12),partial(y_2)/partial(w_13))=
  mat(x_1,x_2,x_3;0,0,0,)
$，
其$bold(y)$对$bold(w_2)$的雅克比矩阵为：
$
  J_(bold(y w_2)) = mat(partial(y_1)/partial(w_21),partial(y_1)/partial(w_22),partial(y_1)/partial(w_23);partial(y_2)/partial(w_21),partial(y_2)/partial(w_22),partial(y_2)/partial(w_23))=
  mat(0,0,0;x_1,x_2,x_3)
$，
向量$bold(x)$对$x_1,x_2$的导数为：
$
    dot(bold(x_1)) = mat(1;0)\
    dot(bold(x_2)) = mat(0;1)
$

$
  
$

同时有损失函数：
$
  L = 1/2(y-"label")^2
$，L对y的雅克比矩阵为：
$
  J_L = mat(partial(L)/partial(y))=
  mat(y-"label")
$，