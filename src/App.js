import "./App.css"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Content from "./pages/Content"
import Header from "./Component/Header"
import Footer from "./Component/Footer"
import DirectMessage from "./pages/DirectMessage"
import Search from "./pages/Search"
import Profile from "./pages/Profile"

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Router>
        <Header />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
          }}
        >
          <Switch>
            <Route exact path="/">
              <Content />
            </Route>
            <Route path="/direct-message">
              <DirectMessage />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
