// nuxt已经把store(vuex)关联到应用，只需要维护各个模块，
// 每个模块下面通常需要暴露三个属性

// state:存数据
export const state = {
    userInfo: {
        token: "",
        user: {
            //nickname: "白切黑周泽楷"
        }
    }
}

// mutations:同步设置修改state的数据
export const mutations = {
    // 设置用户数据
    setUserInfo(state,data){
        state.userInfo = data;
    },
    // 清除用户数据
    clearUserInfo(state){
        state.userInfo = {
            token: "",
            user: {}
        }
    }
}
 
// actions: 异步设置修改state的数据
export const actions = {
    // 登录
    login({commit}, data){
        return this.$axios({
            url: "/accounts/login",
            method: "POST",
            data: data
        }).then(res => {
            const data = res.data;
            // 保存到state
            commit("setUserInfo", data);
            return data;
        })
    }
}