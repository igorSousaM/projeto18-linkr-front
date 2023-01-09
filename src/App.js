import { Children } from "react";

import { BrowserRouter,Navigate, Route, Routes } from "react-router-dom";
import { HashtagPage } from "./pages/hashtags/HashtagPage";

import { Signin } from "./pages/home/Signin";
import { Signup } from "./pages/home/Signup";
import { Timeline } from "./pages/timeline/Timeline";

export default function App() {
  let token = localStorage.getItem("tokenLikr");

  const Private = ({ children }) => {
    if (!token) {
      return <Navigate to={"/"} />;
    }
    return children;
  };

    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route
              path="/timeline"
              element={
                <Private>
                  <Timeline />
                </Private>
              }
            />
            <Route path="/hashtags/:hashtag" element={<HashtagPage />} />

          </Routes>
        </BrowserRouter>
      </>
    );
  }
