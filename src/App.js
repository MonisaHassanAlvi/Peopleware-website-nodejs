import logoend from "./images/logo_end.PNG";
import bottomicons from "./bottomicons.PNG";
function App() {
  return (
    <div class="border_9th">
      <img class="border_9th_img" src={logoend} />
      <div class="border_9th_categories">
        <h2 class="border_9th_category1">
          {" "}
          PRODUCT
          <div class="border_9th_category1_classes">
            <h3 class="h3_border_9th_category1">About</h3>
            <h3 class="h3_border_9th_category1">Team</h3>
            <h3 class="h3_border_9th_category1">Careers</h3>
            <h3 class="h3_border_9th_category1">Blog</h3>
          </div>
        </h2>
        <h2 class="border_9th_category1">
          {" "}
          SUPPORT
          <div class="border_9th_category1_classes">
            <h3 class="h3_border_9th_category1">How it works</h3>
            <h3 class="h3_border_9th_category1">Trust and Safety</h3>
            <h3 class="h3_border_9th_category1">Help Centre</h3>
          </div>
        </h2>
        <h2 class="border_9th_category1">
          {" "}
          DISCOVER
          <div class="border_9th_category1_classes">
            <h3 class="h3_border_9th_category1">Plus Works</h3>
            <h3 class="h3_border_9th_category1">Academy</h3>
          </div>
        </h2>
        <h2 class="border_9th_category1">
          {" "}
          RESOURCES
          <div class="border_9th_category1_classes">
            <h3 class="h3_border_9th_category1">Customer Stories</h3>
            <h3 class="h3_border_9th_category1">Business Cost Calculator</h3>
            <h3 class="h3_border_9th_category1">Startup Cities</h3>
          </div>
        </h2>
        <h2 class="border_9th_category1">
          {" "}
          BROWSE
          <div class="border_9th_category1_classes">
            <h3 class="h3_border_9th_category1">Freelance Services</h3>
            <h3 class="h3_border_9th_category1">Freelance Sevices By</h3>
            <h3 class="h3_border_9th_category1">Country</h3>
            <h3 class="h3_border_9th_category1">Freelance Skills</h3>
          </div>
        </h2>
      </div>
      <div class="border_9th_icons">
        <img class="bottomiconsimg" src={bottomicons}></img>
      </div>
      <div class="border_9th_last">
        <div class="border_9th_last_text">Terms</div>
        <div class="border_9th_last_text">Privacy</div>
        <div class="border_9th_last_text1">© 2021 People Per Hour Ltd</div>
      </div>
    </div>
  );
}
export default App;
