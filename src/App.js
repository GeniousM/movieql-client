import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import client from "./apolloClient";

// function App() {
//   return <div className="App" />;
// }

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App" />
      </ApolloProvider>
    );
  }
}

export default App;
