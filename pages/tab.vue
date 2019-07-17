<template>
    <div style="passing:50px">
        <div class="ctrl">
            <span v-for="(item,index) in ['新闻', '娱乐', '军事']" 
            :key="index" 
            @click="handleClick(index)" 
            :class="{ active: index === current }">
                {{item}}
            </span>
        </div>

        <div v-if="current === 0">
            <ul>
                <li>近日某某地区持续高温...</li>
                <li>佳节将至返乡人群逐日增多</li>
                <li>5.6级的台风2号将在南部沿海地区登陆</li>
            </ul>
        </div>
        <div v-if="current === 1">
            <ul>
                <li>全职高手2播放时间待定？</li>
                <li>魔道祖师2首播时间从7月推至10月？</li>
                <li>全职高手大电影荣耀巅峰将在8月16号播出</li>
            </ul>
        </div>
        <div v-if="current === 2">
            <ul>
                <li>近日我军将在沿海地区进行军演</li>
                <li>我国最强轻型战机又获突破</li>
                <li>我国“导弹坦克”诞生载28枚导弹</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // 非常重要的变量,记录当前显示的下标
            current:0
        }
    },
    // 定义事件
    methods: {
        handleClick(index){
            this.current = index;
        }
    }
}
</script>

<style lang="less" scoped>
.ctrl span {
    cursor: pointer;
}
</style>


