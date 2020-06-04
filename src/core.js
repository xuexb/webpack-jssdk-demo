import defaults from './defaults';

export default class YY {
    constructor(options = {}) {
        this.$options = { ...defaults, ...options };
        this.check();
    }

    check() {
        if (this.$options.key) {
            console.log(`key 存在，通过`);
        } else {
            console.log(`key 不存在，不通过`);
        }
    }

    show() {
        console.log('show');
    }
}
