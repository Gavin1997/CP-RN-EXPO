# App 目录结构说明

## 概述

这个目录使用 Expo Router 的文件系统路由，实现了模块化的应用结构。

## 目录结构

```
src/app/
├── (app)/                    # 主应用模块（需要认证）
│   ├── _layout.tsx          # Tab 导航布局
│   ├── home/                # 主页模块
│   │   └── index.tsx        # 主页入口
│   ├── news/                # 资讯模块
│   │   ├── index.tsx        # 资讯列表
│   │   ├── add-post.tsx     # 发布资讯
│   │   └── [id].tsx         # 资讯详情
│   ├── videos/              # 影视模块
│   │   └── index.tsx        # 影视列表
│   ├── cp/                  # CP模块
│   │   └── index.tsx        # CP内容
│   └── profile/             # 个人资料模块
│       └── index.tsx        # 个人资料页面
├── _layout.tsx              # 根布局
├── login.tsx                # 登录页面
├── onboarding.tsx           # 引导页面
└── [...messing].tsx         # 404页面
```

## 模块说明

### 1. 主页模块 (home)

- 展示推荐内容、热门话题
- 作为应用的首页入口

### 2. 资讯模块 (news)

- 展示最新资讯内容
- 支持发布新资讯
- 支持查看资讯详情

### 3. 影视模块 (videos)

- 展示影视内容
- 视频推荐功能

### 4. CP模块 (cp)

- 展示CP相关内容
- 配对推荐功能

### 5. 个人资料模块 (profile)

- 个人资料管理
- 设置选项
- 用户相关功能

## 路由规则

- `(app)` 目录下的所有页面都需要用户认证
- 每个模块都有自己的 `index.tsx` 作为入口
- 动态路由使用 `[param].tsx` 格式
- 嵌套路由通过目录结构实现

## 开发规范

1. **组件命名**: 使用 PascalCase，如 `HomeScreen`
2. **文件命名**: 使用 kebab-case，如 `add-post.tsx`
3. **目录命名**: 使用 kebab-case，如 `user-profile`
4. **路由参数**: 使用方括号 `[id].tsx`
5. **布局文件**: 统一命名为 `_layout.tsx`

## 扩展指南

### 添加新模块

1. 在 `(app)` 目录下创建新模块目录
2. 创建 `index.tsx` 作为模块入口
3. 在 `_layout.tsx` 中添加对应的 Tab 配置
4. 添加相应的图标组件

### 添加子页面

1. 在模块目录下创建新文件
2. 使用适当的命名约定
3. 更新相关的导航链接

### 添加动态路由

1. 使用 `[param].tsx` 格式创建文件
2. 在组件中使用 `useLocalSearchParams` 获取参数
3. 实现相应的页面逻辑
