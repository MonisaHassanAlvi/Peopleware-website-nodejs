import React, { Component } from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faSearch } from "@fortawesome/free-solid-svg-icons";
//import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Logo from "./logo.PNG";
import search from "./search.PNG";
class Assign31 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <TopBar1></TopBar1>
        <ShowBar1></ShowBar1>
      </div>
    );
  }
}
function TopBar1(params) {
  return (
    <div class="div_top_bar">
      <div class="div_image_logo">
        <img src={Logo} />
      </div>
      <div class="div_search_box">
        <div class="search" size="10x"></div>
        <img src={search}></img>
        <div class="div_search">SEARCH</div>
        <i class="arrow down"></i>
      </div>
      <div class="top_text">HOW IT WORKS</div>
      <div class="top_line"></div>
      <div class="top_text1">LOG IN</div>
      <div class="top_text1">SIGN UP</div>
      <div class="top_text2">FREELANCER?</div>
    </div>
  );
}
function ShowBar1(params) {
  return (
    <div class="div_2nd_bar">
      <div class="div_2nd_bar_text1">Technology & Programming</div>
      <div class="div_2nd_bar_text2">Writing and Translation</div>
      <div class="div_2nd_bar_text2">Design</div>
      <div class="div_2nd_bar_text2">Digital Marketing</div>
      <div class="div_2nd_bar_text2">Video, Photo & Image</div>
      <div class="div_2nd_bar_text2">Business</div>
      <div class="div_2nd_bar_text2">Music & Audio</div>
      <div class="div_2nd_bar_text2">Marketing, Branding & Sales</div>
      <div class="div_2nd_bar_text2">Social Media</div>
    </div>
  );
}
export default Assign31;
