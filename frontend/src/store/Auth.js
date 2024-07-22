import { createSlice } from "@reduxjs/toolkit";

const authslice =createSlice({
    name:"auth",
    initialState:{role:"user",isloggedin:"false"},

    reducers:{

        login(state){
         
            state.isloggedin="true"
           
        },
        logout(state){
            state.isloggedin="false"
        },
        changestate(state,action){
            const role=action.payload
            state.role=role
        }



    }
})

export const authactions =authslice.actions;

export default authslice.reducer