import React, { useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "./SignIn.css";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import OtpInput from "react-otp-input";
import { useFormik } from "formik";
import * as Yup from "yup";
import Moment from "moment";
import { connect } from "react-redux";
import {
  setUser,
} from "../../redux/auth/authActions";
import Firebase from "../../firebase";
import firebase from "firebase";

function SignIn({ setUser, addOrUpdatePhone, signUpSuccess }) {
  const [openAuth, setOpenAuth] = React.useState(false);
  const [signIn, setSignIn] = React.useState(true);
  const [otp, setOtp] = React.useState(false);
  const [signUp, setSignUp] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const history = useHistory();
  const [userId, setUserId] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [otpInput, setOtpInput] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [userState, setUserState] = React.useState(null);
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // user has logged in
        console.log(authUser);
        setUserState(authUser);
      } else {
        // user has logged out
        setUserState(null);
      }
    });
    return () => {
      // perform some cleanup actions
      unsubscribe();
    };
  }, [userState]);
  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "visible",
        callback: function (response) {
        },
        // defaultCountry: "IN",
      }
    );
    // window.recaptchaVerifier.render().then((widgetId) => {
    //   window.recaptchaWidgetId = widgetId;
    // });
    // .catch((
    //  grecaptcha.reset(window.recaptchaWidgetId)
    // ))
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault()
    setUpRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    Firebase.auth()
      .signInWithPhoneNumber(`+91${mobile}`, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        localStorage.setItem("phoneNumber", mobile);
        setSignIn(false);
        setMobile("");
        setOtp(true);
      })
      .then(() => {
        setUser({
          Number: mobile,
          Email: email,
          Name: name,
          userId: mobile,
        });
      })
      .catch((error) => {
        alert(error);
      });
  };
  const onSubmitOtp = () => {
    const confirmOtp = window.confirmationResult;
    confirmOtp.confirm(otpInput).then(async () => {
      alert(localStorage.getItem("phoneNumber"));
      const isUserExist = await firebase.database().ref("Users").orderByChild("Number").equalTo(localStorage.getItem('phoneNumber')).once("value");
      if (isUserExist.exists()) {
        const userExist = Object.values(isUserExist.val())
        alert("user is already exist");
        localStorage.setItem('phoneNumber', mobile);
            setOpenAuth(false);
          } else {
            setOtp(false);
            let UniqueIdTransaction = firebase.database().ref('UniqueId'); 
                    UniqueIdTransaction.transaction((data) => {
                        return data+1;
                   }).then(() => {
                     setSignUp(true);
                    alert('UniqueIdTransaction Done')}).catch((error) => console.log('UniqueIdTransaction error', error))
          }
        })
  };
  const handleRegisterSubmit = async (e) => {
    setUserId(()=>{
      const start=1
      const number=0
      const total=0
      while(start<=number){
        total +=start
        start+=1
      }
      return total
    });
    alert(localStorage.getItem("phoneNumber"));try {
      const userUniqueId = await firebase.database().ref("UniqueId").once("value");
      const lastUniqueId =  userUniqueId.val();
      let userName = '';
      if (lastUniqueId > 0 && lastUniqueId < 10) {
        userName += "LA0" + lastUniqueId;
      } else if (lastUniqueId >= 10 && lastUniqueId < 100) {
        userName += "LA00" + lastUniqueId;
      } else if (lastUniqueId >= 100 && lastUniqueId < 1000) {
        userName += "LA0000000" + lastUniqueId;
      } else if (lastUniqueId >= 1000 && lastUniqueId < 10000) {
        userName += "LA000000" + lastUniqueId;
      } else if (lastUniqueId >= 10000 && lastUniqueId < 100000) {
        userName += "LA00000" + lastUniqueId;
      } else if (lastUniqueId >= 100000 && lastUniqueId < 1000000) {
        userName += "LA0000" + lastUniqueId;
      } else if (lastUniqueId >= 1000000 && lastUniqueId < 10000000) {
        userName += "LA000" + lastUniqueId;
      } else if (lastUniqueId >= 10000000 && lastUniqueId < 100000000) {
        userName += "LA00000000" + lastUniqueId;
      } else if (lastUniqueId >= 100000000 && lastUniqueId < 1000000000) {
        userName += "LA000000000" + lastUniqueId;
      } else {
        userName += lastUniqueId;
      }
      const date2 = Moment(new Date()).format('YYYY-MM-DD');
      var firebaseref=firebase.database().ref().child("Users").child(userName);
          firebaseref.child("UserName").set(userName);
          firebaseref.child("Email").set(email);
          firebaseref.child("JoiningDate").set(date2);
          firebaseref.child("Name").set(name);
          firebaseref.child("Number").set(localStorage.getItem('phoneNumber'))
        .then(() => {
          // setUser({
          //   Email: email,
          //   Name: name,
          //   // Number:userAuth.mobile,
          //   userId: userName,
          // });
          setOpenAuth(false);
        })
        .catch((e) => {
          alert(e);
        });
    } catch (e) {
      alert(e);
    }
  };
  // const formik = useFormik({
  //   initialValues: {
  //     mobile: "",
  //     email: "",
  //     name: "",
  //     otp: "",
  //   },
  //   validationSchema: Yup.object({
  //     mobile: Yup.number()
  //       .typeError("That doesn't look like a mobile number")
  //       .positive("A mobile number can't start with a minus")
  //       .integer("A mobile number can't include a decimal point")
  //       .min(10)
  //       .max(10)
  //       .required("Required!"),
  //     email: Yup.string().email("Invalid email format").required("Required!"),
  //     userName: Yup.string().required("Required!"),
  //     otp: Yup.string().required("Required!"),
  //   }),
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  // const handleClickOpen = () => {
  //     ;}
  //   } else if (openType === "signIn_2") {
  //     setSignIn_2({
  //       signIn: false,
  //       signIn_2: true,
  //       signUp_1: false,
  //     });
  //   } else if (openType === "signUp_1") {
  //     setSignIn_2({
  //       signIn: false,
  //       signIn_2: false,
  //       signUp_1: true,
  //     });
  //   }
  // };
  // const handleClose = (closeType) => {
  //   if (closeType === "signIn") {
  //     setSignIn({
  //       signIn: false,
  //     });
  //   } else if (closeType === "signIn_2") {
  //     setSignIn_2({
  //       signIn_2: false,
  //     });
  //   } else if (closeType === "signUp_1") {
  //     setSignIn_2({
  //       signUp_1: false,
  //     });
  //   }
  // };

  return (
    <>
      {userState ? (
        <a onClick={() => firebase.auth().signOut()}>Logout</a>
      ) : (
        <a onClick={() => setOpenAuth(true)}>SignIn | SignUp</a>
      )}
      <div className="gradiant">
        <Dialog
          fullScreen={fullScreen}
          onClose={() => setOpenAuth(false)}
          aria-labelledby="customized-dialog-title"
          open={openAuth}
          className="signIn__container"
        >
          <div className="signIn__content">
            <div className="signIn__left">
              <img src="./Images/signIn1.svg" alt="" className="signIn__img1" />
              <img src="./Images/signIn2.svg" alt="" className="signIn__img2" />
              <img src="./Images/logo.png" alt="" className="signIn__logo" />
              <h3 className="signIn__lefth3">WELCOME</h3>
              <p className="signIn__leftp">
                Please Sign In or Sign Up to continue with us
              </p>
              <img src="./Images/signIn.svg" alt="" className="signIn__men" />
            </div>
            <div className="signIn__right">
              <IconButton
                aria-label="close"
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  color: "gray",
                }}
                onClick={() => setOpenAuth(false)}
              >
                <CloseIcon />
              </IconButton>
              {signIn && (
                <form>
                  {/* onSubmit={formik.handleSubmit}> */}
                  <center className="buttons">
                    <button className="signIn__button">SignIn</button>
                    <Link
                      className="signUp__button"
                    >
                      <button className="signUp__button">SignUp</button>
                    </Link>
                  </center>
                  <h3>Sign In</h3>
                  <p className="signIn__middle">
                    Please enter your mobile number and we will send you an OTP
                    to verify your mobile number
                  </p>
                  <center className="signIn__mobileInput">
                    <p className="signIn__mobileNumber">Mobile Number</p>
                    <input
                      type="number"
                      autoComplete="on"
                      placeholder="Enter your mobile number here"
                      name="mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      // required
                      // value={phone}
                      // onChange={(e)=>setPhone(e.target.value)}
                      // value={formik.values.mobile}
                      // onChange={formik.handleChange}
                    />
                    {/* {formik.errors.mobile && formik.touched.mobile && (
                    <p>{formik.errors.mobile}</p>
                  )} */}
                  </center>
                  <Link
                    className="otp__button"
                  >
                    <button
                      className="otp__button"
                      type="submit"
                      disabled={!mobile}
                      onClick={handleLoginSubmit}
                    >
                      Generate OTP
                    </button>
                  </Link>
                  <div id="recaptcha-container"></div>
                </form>
              )}
              {otp && (
                <form onSubmit={() => setOtpInput(false)}>
                  <center className="buttons">
                    <button className="signIn__button">SignIn</button>
                    <Link
                      className="signUp__button"
                    >
                      <button className="signUp__button" onClick={onSubmitOtp}>
                        SignUp
                      </button>
                    </Link>
                  </center>
                  <h3>Sign In</h3>
                  <p className="signIn__middle">
                    {`We have sent an OTP to +91 ${mobile}. Enter code here.`}
                  </p>
                  <center
                    style={{ width: "300px", height: "50px", color: "black" }}
                  >
                    <input
                      type="number"
                      // numInputs={6}
                      // seprater={<span>-</span>}
                      name="otp"
                      value={otpInput}
                      onChange={(e) => setOtpInput(e.target.value)}
                      required
                      // style={{ width: "50px",height:'50px',color:'black',fontSize:'30px'}}
                      // value={formik.values.otp}
                      // onChange={formik.handleChange}
                    />
                    {/* {formik.errors.otp && formik.touched.otp && (
                    <p>{formik.errors.otp}</p>
                  )} */}
                  </center>
                  <Link
                    className="otp__button"
                  >
                    <button
                      className="otp__button"
                      type="submit"
                      disabled={!otpInput}
                      onClick={onSubmitOtp}
                    >
                      Confirm OTP
                    </button>
                  </Link>
                </form>
              )}
              {signUp && (
                <form>
                  <center className="buttons">
                    <Link
                      className="signIn__button"
                    >
                      <button className="signIn__button">SignIn</button>
                    </Link>
                    <button className="signUp__button">SignUp</button>
                  </center>
                  <h3 style={{ marginTop: "-70px" }}>Sign Up</h3>
                  <p className="signIn__middle">
                    Please enter the below details to continue with us
                  </p>
                  <center className="signIn__mobileInput">
                    <p className="signIn__mobileNumber">Name</p>
                    <input
                      type="text"
                      placeholder="Enter your name here"
                      name="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      // value={name}
                      // onChange={() => setName(handleInputChange())}
                      // value={formik.values.userName}
                      // onChange={formik.handleChange}
                    />
                    {/* {formik.errors.userName && formik.touched.userName && (
                    <p>{formik.errors.userName}</p>
                  )} */}
                  </center>
                  <center className="signIn__mobileInput">
                    <p className="signIn__mobileNumber">Email</p>
                    <input
                      type="email"
                      placeholder="Enter your email here"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      // value={email}
                      // onChange={() => setEmail(handleInputChange())}
                      // value={formik.values.email}
                      // onChange={formik.handleChange}
                    />
                    {/* {formik.errors.email && formik.touched.email && (
                    <p>{formik.errors.email}</p>
                  )} */}
                  </center>
                  <Link
                    className="otp__button"
                  >
                    <button
                      className="otp__button"
                      onClick={handleRegisterSubmit}
                      type="submit"
                      disabled={!name && !email}
                    >
                      Submit
                    </button>
                  </Link>
                </form>
              )}
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
}
const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});
export default connect(null, mapDispatchToProps)(SignIn);
