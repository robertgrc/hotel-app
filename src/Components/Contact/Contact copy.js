import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button, TextField, Typography, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

const Form = styled.form`
  display: flex;
`;

const FormContent = styled.div`
  flex-direction: column;
`;

const FieldWrapper = styled.div`
  padding: 25px;
`;
//#016170
//#009393
//#00e0c6

const useStyles = makeStyles({
  textField: {
    width: "450px",
    color: "#ccddff",
    fontFamily: "Montserrat",
    letterSpacing: "-0.2px",

    "& .MuiOutlinedInput-root": {
      //clicked (focused) state
      "&.Mui-focused fieldset": {
        borderColor: "#fff",
      },
    },
    //default border
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "5px",
      borderColor: "#ccddff",
    },
    //label
    "& .MuiInputLabel-animated": {
      color: "#fff",
      fontSize: "15px",
      fontFamily: "Montserrat",
    },
    //herperText
    "& .MuiFormHelperText-root": { color: "#ccddff" },
    //hover
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
    },
    //label focused
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#fff",
    },
  },

  header: {
    textTransform: "uppercase",
    fontWeight: "400",
    fontFamily: "Montserrat",
  },
});

const buttonStyles = {
  color: "#ccddff",
  width: "450px",
  height: "40px",
  fontSize: "20px",
  fontWeight: "800",
  borderRadius: "49px",
  fontFamily: "Montserrat",
  letterSpacing: "4px",
  backgroundColor: "#019CAD",
  marginTop: "20px",

  "&:hover": {
    backgroundColor: " #05bace",
  },
};

const Contact2 = () => {
  const form = useRef();
  const classes = useStyles();

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (email || name || message || subject === "") {
      setNameError(true);
      setEmailError(true);
      setSubjectError(true);
      setMessageError(true);
    }

    if (!email || !name || !message || !subject) {
      return toast.warning("Please fill the inputs", {
        position: "bottom-center",
        autoClose: 4000,
      });
    }

    const clearInputs = () => {
      setName("");
      setSubject("");
      setEmail("");
      setMessage("");
    };

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Your email has been sent", {
            position: "bottom-center",
            autoClose: 4000,
          });
          clearInputs();
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong please try again", {
            position: "bottom-center",
            autoClose: 4000,
          });
        }
      );
  };

  return (
    <>
      <div class="animation"></div>
      <div class="animation animation-2"></div>
      <div class="animation animation-3"></div>
      <Grid container direction="column" alignItems="center">
        <Form ref={form}>
          <Grid
            container
            direction="column"
            sx={{ padding: "20px", marginTop: "20px" }}
          >
            <Typography
              variant="h4"
              gutterBottom
              className={classes.header}
              sx={{
                color: "rgb(0,105,148) ",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "42px",
                letterSpacing: "6px",
              }}
            >
              Contact
            </Typography>
            <FormContent>
              <FieldWrapper>
                <TextField
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="user_name"
                  value={name}
                  variant="outlined"
                  label="Name"
                  required
                  className={classes.textField}
                  error={nameError}
                />
              </FieldWrapper>
              <FieldWrapper>
                <TextField
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  name="subject"
                  value={subject}
                  label="Subject"
                  variant="outlined"
                  required
                  className={classes.textField}
                  error={subjectError}
                />
              </FieldWrapper>
              <FieldWrapper>
                <TextField
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="user_email"
                  value={email}
                  label="Email"
                  variant="outlined"
                  required
                  className={classes.textField}
                  error={emailError}
                  helperText="example@example.com"
                />
              </FieldWrapper>
              <FieldWrapper>
                <TextField
                  onChange={(e) => setMessage(e.target.value)}
                  type="message"
                  name="message"
                  value={message}
                  label="Message"
                  variant="outlined"
                  required
                  className={classes.textField}
                  error={messageError}
                  multiline
                  rows={5}
                />
              </FieldWrapper>
              <Button
                variant="outlined"
                sx={buttonStyles}
                type="submit"
                onClick={sendEmail}
              >
                Send
              </Button>
              <ToastContainer />
            </FormContent>
          </Grid>
        </Form>
      </Grid>
    </>
  );
};
export default Contact2;
