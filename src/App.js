
import Forgot from "./Components/Forgot";

import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Custom from './Components/Custom';
import CreateBlog from './Components/CreateBlog';
import BlogFormat2 from './Components/BlogFormat/BlogFormat2';
import BlogFormat1 from './Components/BlogFormat/BlogFormat1';
import BlogFormat3 from './Components/BlogFormat/BlogFormat3';

import Main from './Components/Main'
import ADD from './Components/ADD';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Task from "./Components/Task";

function App() {
  return (
    <Router>
   
      <Routes>
        <Route path="/ToDo" element={<Task />} />
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route element={<Main key="g" category="general"/>} exact path='/general'></Route>
        <Route element={<Main key="b" category="business" />} exact path='/business'></Route>
        <Route element={<Custom key="h"/>} exact path='/custom'></Route>
        <Route element={<Main key="e" category="entertainment" />} exact path='/entertainment'></Route>
       
        <Route element={<Main key="m" category="technology" />} exact path='/technology'></Route>
        <Route element={<ADD key="t"/>} exact path='/ADD'></Route>
        <Route element={<CreateBlog key="u"/>} exact path='/CreateBlog'></Route>
        <Route element={<BlogFormat1 key="q"/>} exact path='/BlogFormat1'></Route>
        <Route element={<BlogFormat2 key="e"/>} exact path='/BlogFormat2'></Route>
        <Route element={<BlogFormat3 key="i"/>} exact path='/BlogFormat3'></Route>
      </Routes>
    </Router>
  );
}

export default App;
