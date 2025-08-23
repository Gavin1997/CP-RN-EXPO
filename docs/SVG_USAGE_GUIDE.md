# SVG在Expo项目中的高效使用指南

本指南介绍了在React Native Expo项目中高效使用SVG的多种方案，解决手动转换SVG为React组件的痛点。

## 🎯 解决的问题

- ✅ 避免手动将SVG转换为React组件
- ✅ 自动化SVG组件生成流程
- ✅ 支持多种使用场景
- ✅ 保持代码一致性和可维护性

## 📦 已配置的工具

### 1. react-native-svg-transformer

- **用途**: 直接导入SVG文件作为React组件
- **配置**: 已在 `metro.config.js` 中配置
- **类型支持**: 已添加 `svg.d.ts` 声明文件

### 2. 自动生成脚本

- **脚本位置**: `scripts/generate-svg-components.js`
- **用途**: 将SVG文件自动转换为标准化的React组件
- **支持**: 监听模式、批量处理

### 3. 通用SVG组件

- **组件**: `SvgIcon`
- **用途**: 快速创建简单SVG图标
- **特性**: 支持RTL、动态颜色、尺寸调整

## 🚀 使用方案

### 方案1: 直接导入SVG文件 (推荐用于复杂图标)

```tsx
// 直接导入SVG文件
import HeartIcon from '@/assets/icons/heart.svg';

// 使用
<HeartIcon width={32} height={32} fill="red" />;
```

**优点:**

- 最简单的使用方式
- 保持SVG原有特性
- 支持所有SVG特性

**注意:**

- 需要重启Metro服务器
- SVG文件需要放在正确的目录中

### 方案2: 自动生成React组件 (推荐用于大量图标)

```bash
# 一次性生成所有SVG组件
pnpm run svg:generate

# 监听SVG文件变化并自动生成
pnpm run svg:watch
```

```tsx
// 使用生成的组件
import { HeartIcon, StarIcon } from '@/components/ui/icons';

// 使用
<HeartIcon color="#EF4444" />
<StarIcon color="#F59E0B" style={{ width: 40, height: 40 }} />
```

**优点:**

- 标准化的组件结构
- 支持TypeScript
- 支持RTL语言
- 自动导出管理

**工作流程:**

1. 将SVG文件放入 `src/components/ui/svgs/` 目录
2. 运行 `pnpm run svg:generate`
3. 生成的组件会出现在 `src/components/ui/icons/` 目录
4. 自动更新 `index.tsx` 导出文件

### 方案3: 使用通用SvgIcon组件 (推荐用于简单图标)

```tsx
import { SvgIcon, Path, Circle } from '@/components/ui';

// 简单路径图标
<SvgIcon size={32} color="#EF4444" viewBox="0 0 24 24">
  <Path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
</SvgIcon>

// 组合图标
<SvgIcon size={32} color="#8B5CF6">
  <Circle cx="12" cy="12" r="10" />
  <Path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" />
</SvgIcon>
```

**优点:**

- 无需额外文件
- 快速原型开发
- 动态图标生成
- 完全的自定义控制

## 📁 目录结构

```
src/
├── components/
│   └── ui/
│       ├── icons/          # 生成的图标组件
│       │   ├── index.tsx   # 自动生成的导出文件
│       │   ├── heart.tsx   # 生成的组件
│       │   └── star.tsx
│       ├── svgs/           # 原始SVG文件
│       │   ├── heart.svg
│       │   └── star.svg
│       └── svg-icon.tsx    # 通用SVG组件
├── assets/
│   └── icons/              # 可选：用于方案1的SVG文件
scripts/
└── generate-svg-components.js  # 生成脚本
```

## ⚙️ 配置文件

### metro.config.js

```javascript
// 已配置SVG transformer
config.transformer = {
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};

config.resolver = {
  assetExts: config.resolver.assetExts.filter((ext) => ext !== 'svg'),
  sourceExts: [...config.resolver.sourceExts, 'svg'],
};
```

### svg.d.ts

```typescript
// SVG模块类型声明
declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
```

## 🛠️ 开发工作流

### 添加新图标的流程

1. **准备SVG文件**

   ```bash
   # 将SVG文件放入svgs目录
   cp new-icon.svg src/components/ui/svgs/
   ```

2. **生成React组件**

   ```bash
   # 一次性生成
   pnpm run svg:generate

   # 或使用监听模式
   pnpm run svg:watch
   ```

3. **使用生成的组件**

   ```tsx
   import { NewIcon } from '@/components/ui/icons';

   <NewIcon color="#333" size={24} />;
   ```

### 开发时的监听模式

```bash
# 启动监听模式，自动检测SVG文件变化
pnpm run svg:watch
```

监听模式会：

- 监听 `src/components/ui/svgs/` 目录
- 自动生成新的组件
- 更新导出文件
- 实时反映变化

## 🎨 自定义和扩展

### 修改生成的组件模板

编辑 `scripts/generate-svg-components.js` 中的 `createComponentTemplate` 函数：

```javascript
const createComponentTemplate = (componentName, svgContent, width, height) => {
  // 自定义模板逻辑
  return `
    // 你的自定义模板
  `;
};
```

### 扩展SvgIcon组件

```tsx
// 创建专用的图标组件
export const IconButton = ({ onPress, children, ...props }) => (
  <TouchableOpacity onPress={onPress}>
    <SvgIcon {...props}>{children}</SvgIcon>
  </TouchableOpacity>
);
```

## 📊 方案对比

| 特性           | 直接导入 | 自动生成 | SvgIcon组件 |
| -------------- | -------- | -------- | ----------- |
| 设置复杂度     | 低       | 中       | 低          |
| 使用复杂度     | 低       | 低       | 中          |
| 性能           | 最好     | 好       | 好          |
| 灵活性         | 中       | 中       | 高          |
| 维护性         | 中       | 高       | 高          |
| TypeScript支持 | 好       | 最好     | 好          |
| 适用场景       | 复杂SVG  | 大量图标 | 简单图标    |

## 🔧 故障排除

### 常见问题

1. **SVG导入失败**

   - 确保重启了Metro服务器
   - 检查SVG文件语法是否正确
   - 确认metro.config.js配置正确

2. **生成的组件有问题**

   - 检查原始SVG文件格式
   - 确认SVG包含有效的path数据
   - 查看生成脚本的输出日志

3. **类型错误**
   - 确认svg.d.ts文件存在
   - 检查tsconfig.json包含了svg.d.ts
   - 重启TypeScript服务

### 调试技巧

```bash
# 查看生成脚本详细输出
pnpm run svg:generate

# 检查Metro配置
npx expo start --clear

# 验证TypeScript配置
npx tsc --noEmit
```

## 📈 性能优化

1. **按需导入**

   ```tsx
   // ✅ 好的做法
   import { HeartIcon } from '@/components/ui/icons/heart';

   // ❌ 避免
   import * as Icons from '@/components/ui/icons';
   ```

2. **合理使用方案**

   - 复杂SVG：使用直接导入
   - 大量简单图标：使用自动生成
   - 动态图标：使用SvgIcon

3. **SVG优化**
   - 使用SVGO优化SVG文件
   - 移除不必要的属性和元素
   - 合并相似的路径

## 🎯 最佳实践

1. **命名规范**

   - SVG文件使用kebab-case：`user-profile.svg`
   - 组件使用PascalCase：`UserProfile`

2. **颜色管理**

   - 使用动态颜色而非硬编码
   - 遵循设计系统的颜色规范

3. **尺寸标准化**

   - 定义标准尺寸：16, 20, 24, 32, 48
   - 使用相对单位而非绝对单位

4. **可访问性**
   - 为图标添加适当的accessibilityLabel
   - 考虑高对比度模式

## 🔄 升级和维护

### 定期维护任务

1. **清理未使用的图标**

   ```bash
   # 查找未使用的图标组件
   grep -r "import.*from.*icons" src/
   ```

2. **更新依赖**

   ```bash
   npx expo install react-native-svg@latest
   pnpm update react-native-svg-transformer
   ```

3. **优化SVG文件**
   ```bash
   # 使用SVGO优化SVG
   npx svgo src/components/ui/svgs/*.svg
   ```

这个指南提供了在Expo项目中高效使用SVG的完整解决方案，选择最适合你项目需求的方案即可！
