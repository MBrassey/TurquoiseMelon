import React, { Component } from "react";
import Identicon from "identicon.js";
const logo =
  "https://bafybeihsinpke2suokiqj2zafs3yyklan72ear7znjo6kz5nhjlpd6i36m.ipfs.infura-ipfs.io/";
const eth =
  "https://bafybeia4ayfexmi7fyf47se4z6ilnlzopd4wonwtezxu6fuqdnztste2mq.ipfs.infura-ipfs.io/";

document.body.style = "background: #2B2B28;";
class Main extends Component {
  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <main
            role="main"
            className="col-lg-12 ml-auto mr-auto"
            style={{ maxWidth: "700px" }}
          >
            <div className="content mr-auto ml-auto logo">
              <center>
                <img src={logo} alt="TurquoiseMelon" />
              </center>
              <br />
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  const description = this.imageDescription.value;
                  this.props.uploadImage(description);
                }}
              >
                <div className="upload-btn-wrapper">
                  <button className="btn">
                    <i className="fas fa-upload"></i>&nbsp; Select Image
                  </button>
                  <input
                    type="file"
                    className=""
                    accept=".jpg, .jpeg, .png, .bmp, .gif"
                    onChange={this.props.captureFile}
                  />
                </div>
                <div className="form-group">
                  <input
                    id="imageDescription"
                    type="text"
                    ref={(input) => {
                      this.imageDescription = input;
                    }}
                    className="form-control input card-body"
                    placeholder="Image Description..."
                    required
                  />
                </div>
                <button type="submit" className="btn btn-block btn-lg">
                  Upload!
                </button>
              </form>
              <p>&nbsp;</p>
              {this.props.images.map((image, key) => {
                return (
                  <div className="card card-props mb-4" key={key}>
                    <div className="card-header top">
                      <img
                        className="mr-2"
                        width="30"
                        height="30"
                        src={`data:image/png;base64,${new Identicon(
                          image.author,
                          30
                        ).toString()}`}
                      />
                      <small className="text-muted">{image.author}</small>
                    </div>
                    <div className="card-body">
                      <ul
                        id="imageList"
                        className="list-group list-group-flush"
                      >
                        <li className="list-group-item card-body">
                          <p className="text-center">
                            <img
                              src={`https://ipfs.infura.io/ipfs/${image.hash}`}
                              style={{ maxWidth: "100%" }}
                            />
                          </p>
                          <p className="description">{image.description}</p>
                        </li>
                        <li
                          key={key}
                          className="list-group-item py-2 card-body"
                        >
                          <small className="float-left text-muted tips">
                            TIPS:{" "}
                            {window.web3.utils.fromWei(
                              image.tipAmount.toString(),
                              "Ether"
                            )}{" "}
                            <svg
                              className="eth"
                              width="22px"
                              viewBox="0 0 40 40"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.9 30L7.5 22.7 19.9 40l12.4-17.3zm.2-30L7.7 20.4l12.4 7.3 12.4-7.2z"
                                fill="#006ee4"
                              />
                            </svg>
                            ETH
                          </small>
                          <button
                            className="btn btn-sm float-right"
                            name={image.id}
                            onClick={(event) => {
                              let tipAmount = window.web3.utils.toWei(
                                "0.1",
                                "Ether"
                              );
                              console.log(event.target.name, tipAmount);
                              this.props.tipImageOwner(
                                event.target.name,
                                tipAmount
                              );
                            }}
                          >
                            TIP 0.1 ETH
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;
