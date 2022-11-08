import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { TextareaAutosize } from "@mui/material";

export const CustomTextField = styled(TextField)({
  "& .MuiTextField-root": {
    color: "white",
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
    borderRadius: "15px",
    backgroundColor: "white",
  },
});

export const CustomTextFieldTwo = styled(TextField)({
  "& .MuiTextField-root": {
    color: "white",
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#4747A6",
    },
    "&:hover fieldset": {
      borderColor: "#4747A6",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#4747A6",
    },
    borderRadius: "10px",
    backgroundColor: "white",
  },
});
export const CustomTextFieldThree = styled(TextField)({
  "& .MuiTextField-root": {
    color: "white",
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#D9D9D9",
    },
    "&:hover fieldset": {
      borderColor: "#D9D9D9",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#D9D9D9",
    },
    backgroundColor: "#D9D9D9",
  },
});

export const CustomTextArea = styled(TextareaAutosize)({
  "& .MuiTextField-root": {
    color: "white",
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#4747A6",
    },
    "&:hover fieldset": {
      borderColor: "#4747A6",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#4747A6",
    },
    borderRadius: "10px",
    backgroundColor: "white",
  },
});
