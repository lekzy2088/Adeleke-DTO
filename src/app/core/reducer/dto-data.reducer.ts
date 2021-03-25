import * as DTO_Actions from './../actions/add-data.action'
import { DTO_Model } from '../../shared/models/dto.model'

// Creating Reducer for Store
export function DTO_reducer(state: DTO_Model[]= [], action: DTO_Actions.AddDTO) {
    switch(action.type) {
        case DTO_Actions.ADD_DTO_DATA:
            return [...state, action.payload];
        default:
            return state;
    }
}