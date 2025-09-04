
import { CustomCursor } from "./components/CustomCursor"
import { Footer } from "./components/Footer"
import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar"

function App() {

  return (
    <>
      <div > {/* hide default cursor */}
        {/* <CustomCursor /> */}
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  )
}

export default App
