import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HashtagPage } from "./pages/hashtags/HashtagPage";
import { Signin } from "./pages/home/Signin";
import { Signup } from "./pages/home/Signup";
import { Timeline } from "./pages/timeline/Timeline";
 

export default function App(){
    return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Signin />} />
              <Route path="/sign-up" element={<Signup />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/hashtags/:hashtag" element={<HashtagPage />}/>
            </Routes>
          </BrowserRouter>
        </>
      );
}