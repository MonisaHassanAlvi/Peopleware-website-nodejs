import React, { Component } from "react";
import search from "./search.PNG";
import search1 from "./search1.PNG";
import categories from "./categories.PNG";
import filter from "./filter.PNG";
import cross from "./cross.PNG";
import sort from "./sort.PNG";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faSearch } from "@fortawesome/free-solid-svg-icons";
//import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Logo from "./logo.PNG";
class Assign3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <TopBar></TopBar>
        <ShowBar></ShowBar>
        <ShowBar2></ShowBar2>
      </div>
    );
  }
}
function TopBar(params) {
  return (
    <div class="div_top_bar">
      <div class="div_image_logo">
        <img src={Logo} />
      </div>
      <div class="div_search_box">
        <img src={search}></img>
        <div class="search" size="10x"></div>
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
function ShowBar(params) {
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
function ShowBar2(params) {
  return (
    <div class="div_web_bar">
      <div class="div_web_bar_text1">
        {" "}
        SEARCH
        <div class="div_web_bar_text2"> OFFERS </div>
        <div class="div_web_bar_text3">WEB DEVELOPMENT</div>
      </div>
      <div class="div_web_bar_text4">Web Development Offers & Services</div>
      <div class="div_web_bar_text5">
        Looking for Web Development offers and services? PeoplePerHour has you
        covered.
      </div>
      <div class="div_3rd_border_searchbox">
        <p class="p_searchbox_text">web development</p>
        <img class="crossimg" src={cross}></img>
      </div>
      <div class="above">
        <div class="searchicon_border">
          <img
            class="searchicon_border_img"
            src={search1}
            style={{ width: "40px", height: "40px" }}
          ></img>
        </div>
        <button class="div_3rd_btn" style={{ width: "150px" }}>
          <img class="categories_img" src={categories}></img>
          <div>Categories</div>
        </button>
      </div>
      <div class="div_bottom_border"></div>
      <div class="div_show_bar_buttons">
        <button class="Filter_Button">
          <img class="filterimg" src={filter}></img>
          <div class="btn_filter">FILTER</div>
        </button>
        <button class="btn_Sort">
          <div>Sort:Relevance</div>
          <img class="sortimg" src={sort}></img>
        </button>
      </div>
    </div>
  );
}
export default Assign3;
