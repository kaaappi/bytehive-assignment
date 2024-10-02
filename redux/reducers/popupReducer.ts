import { UPDATE_POPUP } from "../actions/popupActions";

export interface PopupStateType {
  isOpen: boolean;
}

const initialState: PopupStateType = {
  isOpen: false,
};

const popupReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_POPUP:
      return {
        ...state,
        isOpen: action.payload.status,
      };
    default:
      return state;
  }
};

export default popupReducer;
