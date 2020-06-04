import YY from './core';
import * as utils from './utils';

// 暴露一个已经创建好的实例
const app = new YY({ key: '123' });

export {
    YY,
    app,
    utils,
};
