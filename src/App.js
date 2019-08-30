import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./todos/TaskOne";
import TaskOne from "./todos/TaskOne";
import Todo from "./todos/Todo";
import myInfo from "./firstEx/myInfo";
import Checkboxes from "./firstEx/Checkboxes";
import Contacts from "./contactCards/Contacts";
import JokeList from "./jokes/JokeList";
import TestList from "./teste/TestList";
import JokesMap from "./jokeMap/JokesMap";
import ProductList from "./products/ProductList";
import ProductMap from "./products/ProductMap";
import ThirdEx from "./class-based/ThiredEx";
import Logged from "./class-based/Logged";
import TodoState from "./todos/TodoState";
import FirstEvent from "./events/FirstEvent";
import SecondEvent from "./events/SecondEvent";
import FirstMeth from "./class-based/methods/FirstMeth";
import Log from "./class-based/methods/Log";
import Todo1 from "./todos/Todo1";
import FirstForm from "./forms/FirstForm";
import Contentful from "./todos/Contentful";
import { ContentfulClient, ContentfulProvider } from "react-contentful";
import Page from "./todos/Page"; // @see Page component defined in `Query` example below

//class App extends Component {
//  render() {

const contentfulClient = new ContentfulClient({
  accessToken: "2JxnWyKGFqWM1LNsIhCRP7jWt5zIA-KCeqRAGsZIEpk",
  space: "o6c22u77epoj"
});
function App() {
  return (
    <ContentfulProvider client={contentfulClient}>
      <Router>
        <React.Fragment>
          <div className="conatiner">
            <Switch>
              <Route exact path="/" component={TaskOne} />
              <Route exact path="/todo" component={Todo} />
              <Route exact path="/my-info" component={myInfo} />
              <Route exact path="/check" component={Checkboxes} />
              <Route exact path="/contacts" component={Contacts} />
              <Route exact path="/jokes" component={JokeList} />
              <Route exact path="/tests" component={TestList} />
              <Route exact path="/joke-map" component={JokesMap} />
              <Route exact path="/products" component={ProductList} />
              <Route exact path="/product-map" component={ProductMap} />
              <Route exact path="/constructor" component={ThirdEx} />
              <Route exact path="/logged" component={Logged} />
              <Route exact path="/todo-state" component={TodoState} />
              <Route exact path="/event-a" component={FirstEvent} />
              <Route exact path="/event-b" component={SecondEvent} />
              <Route exact path="/method-a" component={FirstMeth} />
              <Route exact path="/log" component={Log} />
              <Route exact path="/todo-a" component={Todo1} />
              <Route exact path="/form-a" component={FirstForm} />
              <Route exact path="/content" component={Contentful} />
              <Route path="/:slug*" component={Page} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </ContentfulProvider>
  );
}
//}

export default App;
