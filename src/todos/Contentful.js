import React, { Component } from "react";
import Content from "./Content";

var contentful = require("contentful");

class Contentful extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  client = contentful.createClient({
    space: "o6c22u77epoj",
    accessToken: "2JxnWyKGFqWM1LNsIhCRP7jWt5zIA-KCeqRAGsZIEpk"
  });
  componentDidMount() {
    // var client = contentful.createClient({
    //   space: "o6c22u77epoj",
    //   accessToken: "2JxnWyKGFqWM1LNsIhCRP7jWt5zIA-KCeqRAGsZIEpk"
    // });
    // client.getEntries().then(entries => {
    //   entries.items.forEach(entry => {
    //     if (entry.fields) {
    //       console.log(entry.fields);
    //       console.log(entry.fields.title);
    //     }
    //   });
    // });

    this.fetchPosts().then(this.setPosts);
  }
  fetchPosts = () => this.client.getEntries();
  setPosts = response => {
    this.setState({
      posts: response.items
    });
    console.log(response.items);
  };

  render() {
    return (
      <div>
        <p>Content goes here</p>
        {this.state.posts.map(({ fields }, i) => (
          //   <pre key={i}>{JSON.stringify(fields, null, 2)}</pre>
          <Content key={i} {...fields} />
        ))}
      </div>
    );
  }
}
export default Contentful;
