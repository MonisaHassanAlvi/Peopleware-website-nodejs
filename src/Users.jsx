import React, { Component } from "react";
import PostUser from "./RESTAPI_CALLER1";
import Assign31 from "./Assign31";
import MyProjects from "./MyProjects";
class Users_Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      new_user_fname: "",
      new_user_lname: "",
      new_user_email: "",
      new_user_pass: "",
      flag1: false,
    };
  }
  render() {
    if (this.state.flag1 == false) {
      return (
        <div>
          <Assign31></Assign31>
          <div class="main_div_2nd">
            <div class="inside_main_div">
              <div class="inside_main_div1"> Start living your work dream</div>
              <div class="inside_main_div2">
                What do you want to do?(you can edit this later)
              </div>
              <div class="main_div_buttons">
                <button class="main_button1">
                  <div class="button1_text1">I WANT TO</div>
                  <div class="button1_text2">WORK AS A FREELANCER</div>
                </button>
                <button class="main_button2">
                  <div class="button2_text1">I WANT TO</div>
                  <div class="button2_text2">HIRE A FREELANCER</div>
                </button>
              </div>
              <form
                onSubmit={(event) => {
                  console.log(
                    this.state.new_user_fname +
                      this.state.new_user_lname +
                      this.state.new_user_email +
                      this.state.new_user_pass
                  );
                  console.log("Form's on Submit Called");
                  event.preventDefault();
                  PostUser({
                    firstname: this.state.new_user_fname,
                    lastname: this.state.new_user_lname,
                    email: this.state.new_user_email,
                    password: this.state.new_user_pass,
                  }).then((response) => {
                    console.log(response.data);
                  });
                }}
              >
                <div class="form_div">
                  <div class="form_div2">
                    <input
                      class="fname_input"
                      type="input"
                      placeholder="First name"
                      value={this.state.new_user_fname}
                      onChange={(event) => {
                        this.setState({ new_user_fname: event.target.value });
                      }}
                    ></input>
                    <input
                      class="lname_input"
                      type="input"
                      placeholder="Last name"
                      value={this.state.new_user_lname}
                      onChange={(event) => {
                        this.setState({ new_user_lname: event.target.value });
                      }}
                    ></input>
                  </div>
                  <input
                    class="email_input"
                    type="input"
                    placeholder="Email"
                    value={this.state.new_user_email}
                    onChange={(event) => {
                      this.setState({ new_user_email: event.target.value });
                    }}
                  ></input>
                  <input
                    class="password_input"
                    type="input"
                    placeholder="Password"
                    value={this.state.new_user_pass}
                    onChange={(event) => {
                      this.setState({ new_user_pass: event.target.value });
                    }}
                  ></input>
                </div>
                <input
                  onClick={() => {
                    this.message();
                  }}
                  class="SignUp_button"
                  type="submit"
                  value="SIGN UP"
                ></input>
                <button
                  class="message_class"
                  onClick={() => {
                    this.updateflag1();
                  }}
                >
                  Back
                </button>
              </form>
              <div class="div_end_form">
                <div class="div_end_form1">
                  <div>By signing up you accept PeoplePerHour's</div>
                  <div class="div_end_form_text">Terms of Service</div>
                  <div class="div_end_form_text1">and</div>
                  <div class="div_end_form_text">Privacy Policy</div>
                  <div>.This site</div>
                </div>
                <div class="div_end_form2">
                  <div>is protected by recaptcha and the Google</div>
                  <div class="div_end_form_text">Privacy Policy</div>
                  <div class="div_end_form_text1">and</div>
                  <div class="div_end_form_text2">Terms of Services</div>
                  <div>apply.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <MyProjects></MyProjects>;
    }
  }
  message() {
    alert("YOU ARE SUCCESSFULLY REGISTERED");
  }
  updateflag1() {
    this.setState({ flag1: true });
  }
}
export default Users_Display;
