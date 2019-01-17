<template>
    <div class='courses'>
        <p>深科技</p>
        <ul>
            <li>{{ micro_content }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            micro_content : null,
        }
    },
    created(){
        let _that = this;
        this.$axios.request({
            url: '/micro/',
            method: 'GET',
            params: {
                token: this.$store.state.online_user_info.user_token
            }
        }).then(response => {
            if (response.data.code === 1000){
                _that.micro_content = response.data.data;
            }else{
                alert(`认证失败：${response.data}`);
            }
        }).catch(error => alter(error));
    }, 
}
</script>

<style scoped>

</style>
