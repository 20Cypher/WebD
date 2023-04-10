import React from "react";

export default function About(props) {
  // const [style, setStyle] = useState({
  //   backgroundColor: "white",
  //   color: "black",
  //   border: "1px solid white",
  // });

  // const [btnText, setbtnText] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (style.color === "white") {
  //     setStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setbtnText("Enable Dark Mode");
  //   } else {
  //     setStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white",
  //     });
  //     setbtnText("Enable Light Mode");
  //   }
  // };

  let style = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104" : "white",
  };

  return (
    <div>
      <div className="container">
        <h1
          className="my-3"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        >
          About Us
        </h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={style}
              >
                <strong>Accordion Item #1</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={style}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                incidunt inventore autem explicabo tempora delectus soluta
                eligendi iusto sed repellat quod in, corrupti id officia
                assumenda distinctio maiores a. Quae
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={style}
              >
                <strong>Accordion Item #2</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={style}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                praesentium, necessitatibus ab ratione, nisi corrupti, cumque
                sunt aspernatur iste obcaecati autem vel mollitia veniam unde
                nemo aperiam nesciunt velit beatae.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={style}
              >
                <strong>Accordion Item #3</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={style}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus optio nesciunt iste recusandae consequatur quibusdam
                soluta dolore maxime officiis ea neque, cum omnis asperiores
                voluptatem nam, architecto, odit in nobis.
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {" "}
          {/* <button onClick={toggleStyle} type="button" class="btn btn-dark my-3">
            {btnText}
          </button> */}
        </div>
      </div>
    </div>
  );
}
