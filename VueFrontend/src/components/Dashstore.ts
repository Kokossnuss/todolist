import { reactive } from "vue";

interface Dashprops{
    auth: Boolean,
}

export const state:Dashprops= {
    auth: true,
}

export const _Dash=reactive({
    state,
    DISPATCH_authstate(){
        this.state.auth = !this.state.auth
    }
})