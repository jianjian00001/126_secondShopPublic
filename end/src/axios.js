import axios from "axios";
import {ElMessage} from "element-plus";
import router from "@/router";


axios.defaults.baseURL="http://localhost:8888"
//前置拦截
axios.interceptors.request.use(config =>{
    return config
})
axios.interceptors.response.use(respone =>{
    let res = respone.data;
    console.log(res)
    if (res.code === 200){
        return respone
    }else {
        ElMessage.error(res.msg,{duration: 3*1000})
        return Promise.reject(respone.data.msg)
    }
},
    error => {
    if (error.response.data){
        error.message = error.response.data.msg
    }
    if (error.response.status === 401){
        store.commit("REMOVE_INFO")
        router.push("/login")
    }
        ElMessage.error(error.message,{duration: 3*1000})
        return Promise.reject(error)
    }

)
