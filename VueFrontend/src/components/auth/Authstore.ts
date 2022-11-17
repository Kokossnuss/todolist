import { reactive } from "vue";

interface storeProps{
    authContent:string,
    err: Boolean,
    errmsg: string,
}

export const state:storeProps={
    authContent:'Login',
    err: false,
    errmsg:'testing'
}

export const _Auth= reactive({
    state,
    DISPATCH_tologin(){
        this.state.authContent= 'Login'
        this.DISPATCH_clearerr()
    },
    DISPATCH_toregister(){
        this.state.authContent= 'Register'
        this.DISPATCH_clearerr()
    },
    DISPATCH_error(message:string){
        this.state.err= true;
        this.state.errmsg= message;
    },
    DISPATCH_clearerr(){
        this.state.err= false;
        this.state.errmsg= ''
    }
})