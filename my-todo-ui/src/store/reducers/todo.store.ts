
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoSliceModel {}

const todoStore = createSlice({
    name: 'todo-store',
    initialState: {
        loading: false,
        success: false,
        error: false,
        tasksList: null,
        taskCreationRes: null,
        taskUpdateRes: null,
        taskDeleteRes: null
    } as TodoSliceModel,
    reducers: {
        todoListFetch: (state: TodoSliceModel) => {
            return {
                ...state,
                loading: true,
                success: false,
                error: false
            }
        },
        todoListFetchSuccess: (state: TodoSliceModel, action: PayloadAction<any>) => {
            return {
                ...state,
                loading: false,
                success: true,
                error: false,
                tasksList: action.payload
            }
        },
        todoListFetchFail: (state: TodoSliceModel) => {
            return {
                ...state,
                loading: false,
                success: false,
                error: true,
                tasksList: null
            }
        },
        todoTaskCreate: (state: TodoSliceModel) => {
            return {
                ...state,
                loading: true,
                success: false,
                error: false
            }
        },
        todoTaskCreateSuccess: (state: TodoSliceModel, action: PayloadAction<any>) => {
            return {
                ...state,
                loading: false,
                success: true,
                error: false,
                taskCreationRes: action.payload
            }
        },
        todoTaskCreateFail: (state: TodoSliceModel) => {
            return {
                ...state,
                loading: false,
                success: false,
                error: true,
                taskCreationRes: null
            }
        },
        todoTaskUpdate: (state: TodoSliceModel) => {
            return {
                ...state,
                loading: true,
                success: false,
                error: false
            }
        },
        todoTaskUpdateSuccess: (state: TodoSliceModel, action: PayloadAction<any>) => {
            return {
                ...state,
                loading: false,
                success: true,
                error: false,
                taskUpdateRes: action.payload
            }
        },
        todoTaskUpdateFail: (state: TodoSliceModel) => {
            return {
                ...state,
                loading: false,
                success: false,
                error: true,
                taskUpdateRes: null
            }
        },
        todoTaskDelete: (state: TodoSliceModel) => {
            return {
                ...state,
                loading: true,
                success: false,
                error: false
            }
        },
        todoTaskDeleteSuccess: (state: TodoSliceModel, action: PayloadAction<any>) => {
            return {
                ...state,
                loading: false,
                success: true,
                error: false,
                taskDeleteRes: action.payload
            }
        },
        todoTaskDeleteFail: (state: TodoSliceModel) => {
            return {
                ...state,
                loading: false,
                success: false,
                error: true,
                taskDeleteRes: null
            }
        }
    }
})

export default todoStore;