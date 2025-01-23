# 计数排序

## 直觉

计数排序是每个玩过斗地主的人都掌握的技巧，很多人拿上扑克就会。下面的动图生动地模拟了抓牌、理牌的过程，一切都发生地那么自然。
![计数排序演示动画](counting-sort-animate.svg)^[https://oi-wiki.org/basic/counting-sort/]

有三点需要指出：

1. 牌按顺序排列，即按照 A->2->3...->K 依次排列，A=1，J=11，Q=12，K=13；
2. 抓到的牌按顺序插到相应位置上，同样的牌依顺序堆叠；
3. 整副牌有序，相同的牌也有序（和未堆叠之前顺序是相同的）；

把握上面三点，手牌便整理好。之后可以将手牌收紧，重新展开。

## 实现

```java
public int[] countingSort(int[] elements) {
  int[] counts = new int[max];
  for (int element : elements) {
    counts[element]++;
  }
  for (int i = 1; i < max; i++) {
    counts[i] += counts[i - 1];
  }
  int[] result = new int[elements.length];

  for (int i = elements.length - 1; i >= 0; i--) {
    result[--counts[elements[i]]] = elements[i];
  }
}

```

### 核心

1. 使用一个长度大于元素值的数组，这样做能通过hash直接计算元素的个数，即`array[value]++`；
2. 知道了每个元素有多少个之后，便可以通过元素个数的前缀和知道元素的位置（这里的位置是从1开始的，代码中要减掉1），即
   `counts[i] += counts[i - 1]`；
3. 通过上面的步骤，我们只知道某个元素组中最早的元素的位置，该组内的其他元素的位置要根据其相对于最早元素位置做减法，即
   `result[--counts[elements[i]]] = elements[i]`；



## 参考文献
