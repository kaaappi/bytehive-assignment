export const UPDATE_POPUP = "UPDATE_POPUP";

interface UpdatePopupProps {
  status: boolean;
}

export const updatePopup = ({ status }: UpdatePopupProps) => ({
  type: UPDATE_POPUP,
  payload: {
    status,
  },
});
