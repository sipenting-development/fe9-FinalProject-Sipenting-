import React, { Component } from "react";
import { Crisp } from "crisp-sdk-web";

class ChatBox extends Component {
  componentDidMount() {
    Crisp.configure("51b50fc1-2ed2-4f2e-9d1c-5636b8a34d9a");
  }

  render() {
    return <div>My Awesome App</div>;
  }
}

export default ChatBox;
