import "./Portfolio.css";
const Portfolio = ({ information, link, imgUrl, name ,code ,tools,
}) => {
  return (
    <>
      <div
        className="Portfolio"
        style={{ background: "#000", color: "#fff" }}
        id="Portfolio"
      >
        <div
          className="projects"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
          style={{ margin: "auto", background: "#000", marginBottom: "20px" }}
        >
          <div className="content">
            <div
              className="left"
              style={{ display: "flex", flexDirection: "column", flex: "1" }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  marginTop: "20px",
                }}
              >
                {name}
              </span>
              <span style={{ fontSize: "16px", color: "#aaa" }}>
                {information}
              </span>

              <div className="stck-use" style={{ marginTop: "30px" }}>



 Tools: {tools}



                {/* <span
                  style={{
                    padding: "3px",
                    color: "#000",
                    marginRight: "30px",
                    background: "rgb(130 130 130)",
                    borderRadius: "5px",
                  }}
                >
                  React.js
                </span>
                <span
                  style={{
                    padding: "3px",
                    color: "#000",
                    background: "rgb(130 130 130)",
                    borderRadius: "5px",
                  }}
                >
                  vanila-Css
                </span>
                <img></img> */}
                {}
              </div>

              <div
                className="btn"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <button className="button">
                  <a style={{ color: "#fff" }} href={link}>
                    Deploy
                  </a>
                </button>
                <a href={code} className="button">Code</a>
              </div>
            </div>
            <div
              className="right "
              style={{ display: "flex", flex: "1", justifyContent: "flex-end" }}
            >
              <a className="imgweb" href={link}>
                <img src={imgUrl} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
