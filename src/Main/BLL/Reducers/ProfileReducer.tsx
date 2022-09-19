

export enum ProfileConst {

}

type ProfileType = {

}

type ProfileState = {
    list: ProfileType[]
}

const initialState: ProfileState = {
    list: []
}

export const ProfileReducer = (state = initialState, action:ProfileActionTypes): ProfileType => {
    switch (action.type){
        case '': return state
        default: return state
    }
}

type ProfileActionTypes = ReturnType<any>