import React, { Component } from "react";
import Users_Display from "./Users";
import Assign3 from "./Assign3";
import endbar from "./endbar.PNG";
import GetProjects from "./RESTAPI_CALLER";

class MyProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr_withObjects: [],
      flag: false,
    };
  }
  render() {
    if (this.state.flag == false) {
      return (
        <div>
          <Assign3></Assign3>
          <div class="main_div">
            <div class="main_div_projects_column">
              <div class="main_div_projects_row">
                {this.state.arr_withObjects.map((proj) => {
                  return (
                    <div class="div_projects">
                      <div class="div_project_data" key={proj.title}>
                        <img
                          class="main_img"
                          alt=""
                          src={proj.img}
                          style={{ height: "200", width: "400px" }}
                        />
                        <h2 class="h2_title">{proj.title}</h2>
                        <button class="skillbutton">{proj.skills}</button>
                        <div class="div_logo_img">
                          <img class="logo_img" src={proj.logo} />
                          <div class="div_name">{proj.name}</div>
                          <div class="div_price">{proj.price}</div>
                        </div>
                        <div class="div_main_rating">
                          <img class="starimg" src={proj.star}></img>
                          <div class="rating">{proj.rating}</div>
                          <div class="reviews">{proj.reviews}</div>
                        </div>
                        <div class="border_before"></div>
                        <div class="time">{proj.time}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div class="main_div_projects_row">
                {this.state.arr_withObjects.map((proj) => {
                  return (
                    <div class="div_projects">
                      <div class="div_project_data" key={proj.title}>
                        <img
                          class="main_img"
                          alt=""
                          src={proj.img}
                          style={{ height: "200", width: "400px" }}
                        />
                        <h2 class="h2_title">{proj.title}</h2>
                        <button class="skillbutton">{proj.skills}</button>
                        <div class="div_logo_img">
                          <img class="logo_img" src={proj.logo} />
                          <div class="div_name">{proj.name}</div>
                          <div class="div_price">{proj.price}</div>
                        </div>
                        <div class="div_main_rating">
                          <img class="starimg" src={proj.star}></img>
                          <div class="rating">{proj.rating}</div>
                          <div class="reviews">{proj.reviews}</div>
                        </div>
                        <div class="border_before"></div>
                        <div class="time">{proj.time}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div class="main_div_projects_row">
                {this.state.arr_withObjects.map((proj) => {
                  return (
                    <div class="div_projects">
                      <div class="div_project_data" key={proj.title}>
                        <img
                          class="main_img"
                          alt=""
                          src={proj.img}
                          style={{ height: "200", width: "400px" }}
                        />
                        <h2 class="h2_title">{proj.title}</h2>
                        <button class="skillbutton">{proj.skills}</button>
                        <div class="div_logo_img">
                          <img class="logo_img" src={proj.logo} />
                          <div class="div_name">{proj.name}</div>
                          <div class="div_price">{proj.price}</div>
                        </div>
                        <div class="div_main_rating">
                          <img class="starimg" src={proj.star}></img>
                          <div class="rating">{proj.rating}</div>
                          <div class="reviews">{proj.reviews}</div>
                        </div>
                        <div class="border_before"></div>
                        <div class="time">{proj.time}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div class="main_div_projects_row">
                {this.state.arr_withObjects.map((proj) => {
                  return (
                    <div class="div_projects">
                      <div class="div_project_data" key={proj.title}>
                        <img
                          class="main_img"
                          alt=""
                          src={proj.img}
                          style={{ height: "200", width: "400px" }}
                        />
                        <h2 class="h2_title">{proj.title}</h2>
                        <button class="skillbutton">{proj.skills}</button>
                        <div class="div_logo_img">
                          <img class="logo_img" src={proj.logo} />
                          <div class="div_name">{proj.name}</div>
                          <div class="div_price">{proj.price}</div>
                        </div>
                        <div class="div_main_rating">
                          <img class="starimg" src={proj.star}></img>
                          <div class="rating">{proj.rating}</div>
                          <div class="reviews">{proj.reviews}</div>
                        </div>
                        <div class="border_before"></div>
                        <div class="time">{proj.time}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div class="main_div_projects_row">
                {this.state.arr_withObjects.map((proj) => {
                  return (
                    <div class="div_projects">
                      <div class="div_project_data" key={proj.title}>
                        <img
                          class="main_img"
                          alt=""
                          src={proj.img}
                          style={{ height: "200", width: "400px" }}
                        />
                        <h2 class="h2_title">{proj.title}</h2>
                        <button class="skillbutton">{proj.skills}</button>
                        <div class="div_logo_img">
                          <img class="logo_img" src={proj.logo} />
                          <div class="div_name">{proj.name}</div>
                          <div class="div_price">{proj.price}</div>
                        </div>
                        <div class="div_main_rating">
                          <img class="starimg" src={proj.star}></img>
                          <div class="rating">{proj.rating}</div>
                          <div class="reviews">{proj.reviews}</div>
                        </div>
                        <div class="border_before"></div>
                        <div class="time">{proj.time}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div class="main_div_projects_row">
                {this.state.arr_withObjects.map((proj) => {
                  return (
                    <div class="div_projects">
                      <div class="div_project_data" key={proj.title}>
                        <img
                          class="main_img"
                          alt=""
                          src={proj.img}
                          style={{ height: "200", width: "400px" }}
                        />
                        <h2 class="h2_title">{proj.title}</h2>
                        <button class="skillbutton">{proj.skills}</button>
                        <div class="div_logo_img">
                          <img class="logo_img" src={proj.logo} />
                          <div class="div_name">{proj.name}</div>
                          <div class="div_price">{proj.price}</div>
                        </div>
                        <div class="div_main_rating">
                          <img class="starimg" src={proj.star}></img>
                          <div class="rating">{proj.rating}</div>
                          <div class="reviews">{proj.reviews}</div>
                        </div>
                        <div class="border_before"></div>
                        <div class="time">{proj.time}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div class="main_div_projects_row">
                {this.state.arr_withObjects.map((proj) => {
                  return (
                    <div class="div_projects">
                      <div class="div_project_data" key={proj.title}>
                        <img
                          class="main_img"
                          alt=""
                          src={proj.img}
                          style={{ height: "200", width: "400px" }}
                        />
                        <h2 class="h2_title">{proj.title}</h2>
                        <button class="skillbutton">{proj.skills}</button>
                        <div class="div_logo_img">
                          <img class="logo_img" src={proj.logo} />
                          <div class="div_name">{proj.name}</div>
                          <div class="div_price">{proj.price}</div>
                        </div>
                        <div class="div_main_rating">
                          <img class="starimg" src={proj.star}></img>
                          <div class="rating">{proj.rating}</div>
                          <div class="reviews">{proj.reviews}</div>
                        </div>
                        <div class="border_before"></div>
                        <div class="time">{proj.time}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div class="main_div_projects_row">
                {this.state.arr_withObjects.map((proj) => {
                  return (
                    <div class="div_projects">
                      <div class="div_project_data" key={proj.title}>
                        <img
                          class="main_img"
                          alt=""
                          src={proj.img}
                          style={{ height: "200", width: "400px" }}
                        />
                        <h2 class="h2_title">{proj.title}</h2>
                        <button class="skillbutton">{proj.skills}</button>
                        <div class="div_logo_img">
                          <img class="logo_img" src={proj.logo} />
                          <div class="div_name">{proj.name}</div>
                          <div class="div_price">{proj.price}</div>
                        </div>
                        <div class="div_main_rating">
                          <img class="starimg" src={proj.star}></img>
                          <div class="rating">{proj.rating}</div>
                          <div class="reviews">{proj.reviews}</div>
                        </div>
                        <div class="border_before"></div>
                        <div class="time">{proj.time}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button
                class="linking_signup"
                onClick={() => {
                  this.updateflag();
                }}
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return <Users_Display></Users_Display>;
    }
  }
  updateflag() {
    this.setState({ flag: true });
  }
  componentDidMount() {
    console.log("Users_Display Mounted");
    this.FetchProjects();
  }
  FetchProjects() {
    GetProjects().then((response) => {
      console.log(response.data);
      this.setState({ arr_withObjects: response.data });
    });
    return [];
  }
}
export default MyProjects;
