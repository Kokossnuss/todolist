import { _User } from "../components/auth/content/Userstore";
import { reactive } from "vue";
import { _Auth } from "@/components/auth/Authstore";

interface validation{
    username: Boolean|null,
    email:Boolean|null,
    password: Boolean|null
}

export const validationstate:validation={
    username: null,
    email: null,
    password: null
}

export const AuthForm_= reactive({
    validationstate,
    middleware(message:string, inputs:Array<HTMLElement>){
            switch(inputs.length){
                case 3:
                    if(message.includes('username')){
                        inputs[0].style.borderColor= 'red';
                        _Auth.DISPATCH_error(message)
                        return
                    } if(message.includes('email')){
                        inputs[1].style.borderColor= 'red';
                        _Auth.DISPATCH_error(message)
                        return
                    } if(message.includes('password')){
                        inputs[2].style.borderColor= 'red';
                        _Auth.DISPATCH_error(message)
                        return
                    } else{
                        inputs[0].style.borderColor= 'red';
                        inputs[1].style.borderColor= 'red';
                        inputs[2].style.borderColor= 'red';
                        _Auth.DISPATCH_error('Use valid Registration information')
                    }
                break;
                case 2:
                    if(message.includes('identifier')){
                        inputs[0].style.borderColor='red';
                        _Auth.DISPATCH_error(message)
                        return
                    } if(message.includes('password')){
                        inputs[1].style.borderColor='red';
                        _Auth.DISPATCH_error(message)
                        return
                    } else{
                        inputs[0].style.borderColor= 'red';
                        inputs[1].style.borderColor= 'red';
                        _Auth.DISPATCH_error('User not existing or incorrect Logininformation')
                    }
                break;
            }
        },
        clearerr(inputs:Array<HTMLElement>){
            inputs.forEach(element => {
                element.style.borderColor= 'black';
            });
        }
    })