import Blogs from "./components/Blogs/Blogs"
import Courses from "./components/Courses/Courses"
import Footer from "./components/Footer/Footer"
import Landing from "./components/Landing/Landing"
import Navbar from "./components/Navbar/Navbar"
import Student from "./components/Student/Student"

const App = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Courses />
      <Student />
      <Blogs />
      <Footer />
    </div>
  )
}

export default App
