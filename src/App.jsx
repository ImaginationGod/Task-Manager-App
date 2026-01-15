import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Home />
      <Toaster position="top-center" />
    </>
  );
}
