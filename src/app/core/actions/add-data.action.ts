import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { DTO_Model } from '../../shared/models/dto.model'

// Creating Action to Add Data to Store
export const ADD_DTO_DATA = '[DTO_DATA] Add'
export class AddDTO implements Action {
    readonly type = ADD_DTO_DATA 
    constructor(public payload: DTO_Model) {}
}
export type Actions = AddDTO