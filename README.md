# webpack-jssdk-demo
一个 webpack 打包 JSSDK 的示例

## 命令

```bash
# 安装依赖
yarn install

# 本地开发调试
yarn dev

# 打包，产出 dist
yarn build
```

## 使用

### npm

```js
import { app, YY } from 'webpack-jssdk-demo';
// or
const { app, YY } = require('webpack-jssdk-demo');

const test = new YY({});

utils.decode();
```

### CDN

```html
<script src="jd.map.js"></script>
<script>
const test = new JD.YY();
test.show();

console.log(JD.utils.encode('ok'));
</script>
```