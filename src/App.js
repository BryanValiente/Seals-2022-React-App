import logo from "./logo.svg";
import "./App.css";

// Function made to play the animation required when called
function playAnimation() {
  // First the queryselector is there to select the h1 tag and then the style.setproperty is there to change the animation property to ...
  document
    .querySelector("h1")
    .style.setProperty(
      "animation",
      "5s ease 0s infinite normal none running moveone"
    );
}
/**
     * // exact same function made as before except this time this one is labeled as the offanimation one because 
// this function will stop any animation playing from the heading tag because we changed the (#of repeating times)
infinite to zero
*/
function offAnimation() {
  document
    .querySelector("h1")
    .style.setProperty("animation", "5s ease 0s normal 0 running moveone");
}

function App() {
  return (
    <>
    <div className="App">
    <header className="App-header">
      <style>
        
        </style>


    <h1 className="h1">Top 3 leadership creeds</h1>
    <button type="button" onClick={playAnimation}>
      On
    </button>
    <button type="button" onClick={offAnimation}>
      Off
    </button>
    <ol>
      <img
        className="img"
        id="chanceone"
        src="https://nathawatbrothers.b-cdn.net/wp-content/uploads/2019/06/3-keys-to-success-Dream-Work-Hard-and-Struggle.jpg"
        alt="man who hopefully has achieved something"
      />
      <hr />
      <li className="li">I believe nothing is hard just a lot of work</li>
      <p className="p">
        I've had a change in mindset because of this. I have seen tasks as things
        that take lots of time.
      </p>
      <img
        className="img"
        src="https://imageio.forbes.com/specials-images/imageserve/472301950/0x0.jpg?format=jpg&crop=5616,3159,x0,y162,safe&width=1200"
        alt="being proactive vs reactive"
      />
      <hr />
      <li className="li">I believe leadership is action not position</li>
      <p className="p">
        I have been more proactive because of this creed. I'm working to be a very
        proactive person and less reactive.
      </p>
      <img
        className="img"
        src="https://www.aconsciousrethink.com/wp-content/uploads/2021/04/honesty-is-important.jpg"
        alt="woman crossing her fingers, being honest"
      />
      <hr />
      <li className="li">I will not lie cheat or steal</li>
      <p className="p">
        I have tried to be more honest because of this creed. This includes
        letting people know my thoughts.
      </p>
    </ol>
    </header>
    </div>
  </>
    // <div className="App">
    //   <header className="App-header">

    //     {/* <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}
    //   </header>
    // </div>
  );
}

export default App;
