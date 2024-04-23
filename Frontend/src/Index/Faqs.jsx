import { React, useState } from "react";

export default function Faqs() {
  const [text, setText] = useState("");

  const textonchange = (event) => {
    setText(event.target.value);
  };

  const [Validation, setValidation] = useState("col-lg-6 mx-auto");

  const validationcheck = () => {
    setValidation("col-lg-6 mx-auto was-validated");
  };

  return (
    <>

      <figure className="container">
        <div className="row">
          <form className={Validation}>
            <h1 className="fw-light">FAQs -</h1>
            <blockquote className="blockquote">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ width: "fit-content" }}
                  required
                />
                <label htmlFor="floatingTextarea2">Email</label>
              </div>
              <br />
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  value={text}
                  style={{ minHeight: 100 }}
                  onChange={textonchange}
                  required
                />
                <label htmlFor="floatingTextarea2">Messages</label>
              </div>
            </blockquote>
            <figcaption className="footer">
              {text.split(" ").length}{" "}
            </figcaption>
            <button
              type="submit"
              onClick={validationcheck}
              className="btn btn-primary"
            >
              Send
            </button>
          </form>
        </div>
      </figure>
      <div className="custom-shape-divider-bottom-1674155641">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          />
        </svg>
      </div>
    </>
  );
}
