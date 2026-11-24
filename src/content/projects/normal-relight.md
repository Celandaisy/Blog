---
title: "法线重打光"
published: 2026-11-12
order: 90
description: "Harmony 出 Surface Normal，进 AE 用 Normality 重新打光——不靠三维节点也能有体积感。"
image: "/assets/projects/normal-relight.webp"
tags: ["合成", "AE", "Normality"]
status: "已跑通"
link: []
---

## 思路

角色是二维的，但可以输出一张**世界空间法线图**。
到 AE 里用 Normality 把这张图当成"几何信息"，就能用一个假光源重新照一遍。

## 两个坑

1. **8 位会有台阶** —— 法线是数据不是颜色，必须 16/32 位
2. **G 轴方向反了** —— 和 Normality 的约定相反，要开 Invert Y

## 结果

比在 Harmony 里堆 3D 节点便宜，而且光源方向可以随时改。
