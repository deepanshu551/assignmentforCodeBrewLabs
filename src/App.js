import React,{useEffect} from 'react';
import Navbar from "./components/Navbar/Navbar";
import {createStore} from "redux";
import Home from "./Page/Home/Home";
import EditContact from "./Page/EditContact/EditContact";
import AddContact from "./Page/AddContact/AddContact";
import Favourite from "./Page/Favourite/Favourite";
import {BrowserRouter as Routes ,Route,Switch} from "react-router-dom";
import Reducer from "./redux/reducer/reducer";
import {Provider} from 'react-redux';

let initialState={contacts:[]};

export default function App() {
  initialState={contacts:JSON.parse(localStorage.getItem("data"))}
  if(initialState===null){
    initialState={contacts:[]};
  }
  const store=createStore(Reducer,initialState);

  return <Provider store={store}>
    <div>
  <Routes>
    <Navbar/>

    <Switch>
      <Route exact  path="/" component={Home}/>
      <Route  path="/add" component={AddContact}/>
      <Route  path="/favourite" component={Favourite}/>
      <Route  path="/edit/:id" component={EditContact}/>
    </Switch>
  </Routes>
  </div>
  </Provider>
}
