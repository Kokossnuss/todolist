<script setup lang="ts">
    import { _Auth } from '../../Authstore';
    import { _User } from '../Userstore';
    import { ref } from 'vue';
    function submit(username:any,email:any,password:any){
        const inputs= [username, email, password];
        return _User.register_FETCH(inputs);
    }
    const username= ref(null)
    const email= ref(null)
    const password= ref(null)
</script>
<template>
    <div class="regcont">
        <input ref="username" v-model="_User.state.username" type="text" placeholder="Username"/>
        <input ref="email" v-model="_User.state.email" type="email" placeholder="Email"/>
        <input ref="password" v-model="_User.state.password" type="password" placeholder="Password"/>
        <div class="btnCont">
            <button class="textBtn forgotPw">
                forgot password?
            </button>
            <button @click="_Auth.DISPATCH_tologin" class="textBtn register">
                Login existing User
            </button>
            <button @click="submit(username, email, password)" type="submit" class="submit">
                Submit
            </button>
        </div>
    </div>
</template>

<style scoped>
.regcont{
    width: 100%;
    height: fit-content;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
}
input{
    width: 250px;
    margin-bottom: 30px;
    height: 30px;
    text-align: center;
    border: none;
    border-bottom: 2px solid darkgray;
    border-left: 2px solid darkgray;
    background-color: lightgray;
}
.btnCont{
    width: 100%;
    height: 80px;
    position: relative;
}
.textBtn{
    background-color: transparent;
    border: none;
    text-decoration: underline;
}
.textBtn:active{
    color: darkgrey;
}
.forgotPw{
    position: absolute;
    left: 30px;
    top: 5px;
}
.register{
    position: absolute;
    left: 30px;
    bottom: 20px;
}
.submit{
    width: 70px;
    height: 30px;
    position: absolute;
    right: 30px;
    top: 0;
    background-color: lime;
    border-radius: 15px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 0px;
    border-color: green;
    font-size: 15px;
}
</style>