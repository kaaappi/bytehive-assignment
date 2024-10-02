import React from "react";
import { Button, Modal, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { appLogin } from "../../../redux/actions/authActions";
import { updatePopup } from "../../../redux/actions/popupActions";
import theme from "../../../theme/theme";
import { RootState } from "../../../redux/reducers/rootReducer";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  validatePassword,
  validateUsernameOrEmail,
} from "../../../utils/validation";

interface IFormInput {
  usernameOrEmail: string;
  password: string;
}

const SignInPopup = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.popup.isOpen);
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const handleClose = () => dispatch(updatePopup({ status: false }));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(
      appLogin({ email: data.usernameOrEmail, password: data.password }),
    );
  };

  return (
    <>
      <Modal open={isOpen} onClose={handleClose}>
        <ModalContent>
          <FormHead>
            <Typography variant="h4">Sign in</Typography>
            <Button aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </Button>
          </FormHead>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="standard"
              fullWidth
              id="usernameOrEmail"
              label="Email or username"
              {...register("usernameOrEmail", {
                validate: validateUsernameOrEmail,
              })}
              error={!!errors.usernameOrEmail}
              helperText={errors.usernameOrEmail?.message}
              margin="normal"
            />
            <TextField
              variant="standard"
              fullWidth
              id="password"
              label="Password"
              type="password"
              {...register("password", {
                validate: validatePassword,
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              margin="normal"
            />
            <Typography pt="4rem">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Log In"}
              </Button>
            </Typography>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

const ModalContent = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  padding: "2.5rem",
  borderRadius: "30px",
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  maxWidth: "435px",
  "@media (max-width: 600px)": {
    width: "90%",
    padding: "1.5rem",
  },
});

const FormHead = styled("div")({
  paddingBottom: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export default SignInPopup;
