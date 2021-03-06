import { state } from '@angular/animations';
import { JsonpClientBackend } from '@angular/common/http';
import { createReducer, on, createAction } from '@ngrx/store';

export const productReducer = createReducer(
    { showProductCode: true},
    on(createAction('[Product] Toggle product code'), state =>{
        return {
            ...state,
            showProductCode: !state.showProductCode
        };
    })
);
