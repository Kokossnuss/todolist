import { reactive } from "vue";
import axios from "axios";
import { auth_API } from "@/utils/constant";
import { _Dash } from "@/components/Dashstore";
import { _Auth } from "../Authstore";
import { AuthForm_ } from "@/middlewares/AuthForm_";

interface userprops{
    username: string,
    email: string,
    password: string,
    jwt: string,
}

export const state:userprops={
    username: '',
    email: '',
    password: '',
    jwt: '',
}

export const _User= reactive({
    state,
    jwt_STORE(payload:string){
      this.state.jwt= payload
    },
    async login_FETCH(inputs:Array<HTMLElement>){
        AuthForm_.clearerr(inputs);
        let response = axios 
            .post(auth_API.login,{
                identifier:this.state.username,
                password: this.state.password
            })
            .catch(err=>{
                AuthForm_.middleware(err.response.data.error.message, inputs)
                throw console.log(err)
            })
            .then(response=>{
                _Dash.DISPATCH_authstate();
                _Auth.DISPATCH_clearerr();
                return response.data.jwt
            })
        return this.state.jwt= await response
    },
    async register_FETCH(inputs:Array<HTMLElement>){
        AuthForm_.clearerr(inputs);
        let response = axios
                .post(auth_API.register,{
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password
                })
                .catch(err=>{
                    AuthForm_.middleware(err.response.data.error.message, inputs)
                    throw console.log(err)
                })
                .then(resp=>{
                    _Dash.DISPATCH_authstate();
                    _Auth.DISPATCH_clearerr();
                    console.log(resp);
                    return resp.data.jwt
                }) 
        return this.state.jwt = await response
    },
    async forgotpw_FETCH(inputs:Array<HTMLElement>){
        AuthForm_.clearerr(inputs);
        let response = axios
            .post(auth_API.forgotpw,{
                email: this.state.email
            })
            .catch(err=>{
                _Auth.DISPATCH_error('Something went wrong with the request');
                throw console.log(err)
            })
            .then(resp=>{
                _Auth.DISPATCH_clearerr();
                return resp
            })
    }
})