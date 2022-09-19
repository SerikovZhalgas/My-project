

export enum AuthConst {

}

type AuthType = {

}

type AuthState = {
    list: AuthType[]
}

const initialState: AuthState = {
    list: []
}

export const AuthReducer = (state = initialState, action:AuthActionTypes): AuthType => {
    switch (action.type){
        case '': return state
        default: return state
    }
}

type AuthActionTypes = ReturnType<any>