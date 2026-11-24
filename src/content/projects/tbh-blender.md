---
title: "TBH ↔ Blender 混合管线"
published: 2026-11-20
order: 100
description: "相机同步、角色代理、AOV 分层。让 Toon Boom 和 Blender 在同一套镜头里工作。"
image: "/assets/projects/tbh-blender.webp"
tags: ["工具", "Harmony", "Blender", "Python"]
status: "进行中"
link: []
---

## 要解决什么

二维角色（Harmony）和三维环境（Blender）要在同一个镜头里对齐。
两个软件各自没法知道对方在干什么，所以需要一套约定：

- **相机**：Harmony 里定好机位，导出参数，在 Blender 里复现
- **角色**：Blender 里放低模 proxy，位置对齐 Harmony 的平面
- **分层**：角色出 AOV（色块/法线/遮罩），环境出 EXR，一起进合成

## 现在的状态

相机同步能对到 0–1 像素；代理还在调；AOV 命名已统一。

## 技术点

- Harmony 的 OGL 坐标 → Blender 矩阵，中间差一个 4.5
- 平面中心要对准画面中心，不是角色位置
- 合成靠法线重打光，不依赖 Harmony 3D 节点
