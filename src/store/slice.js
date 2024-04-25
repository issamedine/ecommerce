import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    basket: [],
    error: ''
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            const isExist = state.basket.find(el => el.id === action.payload.id)

            if(isExist) {
                state.error = "product exist";
                // return;
            }
            if(!isExist) state.basket.push(action.payload)
        },
        decrement: (state) => {
            //   state.value -= 1
        },
        incrementByAmount: (state, action) => {
            //   state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer