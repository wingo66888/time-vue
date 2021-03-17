// 常數 時鐘 = {資料 () {}}
const clock = {
    data() {
        return {
            h: 99,
            m: 99,
            s: 99
        }
    },
    methods: {
        // 更新時鐘
        updateClock() {
            var date = new Date();
            // console.log(date);
            // 更新小時 分鐘 秒數
            this.h = date.getHours();
            this.m = date.getMinutes();
            this.s = date.getSeconds();
        }
    },
    mounted() {
        setInterval(this.updateClock,1000);
    }
};
// vue建立 App(常數時鐘).安裝(常數時鐘)
Vue.createApp(clock).mount("#clock");