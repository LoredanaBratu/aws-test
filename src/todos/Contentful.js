import React, { Component } from "react";
import Content from "./Content";

var contentful = require("contentful");

class Contentful extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      url: [],
      imgList: [],
      pdfList: [],
      videoList: []
    };
  }
  client = contentful.createClient({
    space: "o6c22u77epoj",
    accessToken: "2JxnWyKGFqWM1LNsIhCRP7jWt5zIA-KCeqRAGsZIEpk"
  });

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }
  fetchPosts = () => this.client.getEntries();
  setPosts = response => {
    this.setState({
      posts: response.items
    });
    console.log(response.items, "resp content call");

    this.client
      .getAssets()
      .then(assets => {
        debugger;
        assets.items.map((asset, index) => {
          let url = "https:" + asset.fields.file.url + "?w=200&h=200";
          this.setState({ url: url });
          if (asset.fields.file.contentType === "image/jpeg") {
            this.setState(state => {
              const imgList = [...state.imgList, url];
              return {
                imgList
              };
            });
          } else if (asset.fields.file.contentType === "application/pdf") {
            this.setState(state => {
              const pdfList = [...state.pdfList, url];
              return {
                pdfList
              };
            });
          } else {
            this.setState(state => {
              const videoList = [...state.videoList, url];
              return {
                videoList
              };
            });
          }
        });
      })
      .catch(function(e) {
        console.log(e);
      });
  };

  render() {
    const { imgList, pdfList, videoList } = this.state;

    return (
      <div>
        <p>Content goes here</p>
        {this.state.posts.map(({ fields }, i) => (
          //   <pre key={i}>{JSON.stringify(fields, null, 2)}</pre>
          <Content key={i} {...fields} />
        ))}
        <div className="images">
          <img src={imgList && imgList.length && imgList[1]} alt="photo"></img>
          <a href={pdfList}>Aici</a> <br />
          <a href={videoList}>Video</a>
        </div>
      </div>
    );
  }
}
export default Contentful;
