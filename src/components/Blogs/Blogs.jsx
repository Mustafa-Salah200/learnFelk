import './Blogs.css'
import vector from '../../assets/Vector.png'
import blog1 from "../../assets/blogs1.jpg";
import blog2 from "../../assets/blogs2.jpg";
import blog3 from "../../assets/blogs3.jpg";


const Blogs = () => {
  return (
    <div className="blogs">
        <h1 className="mark">Blogs
            <img src={vector} alt="" />
        </h1>
        <div className="blogs_box">
        <Blog image={blog1} title="amet consectetur sequi reiciendis " />
        <Blog image={blog2} title="amet consectetur sequi reiciendis " />
        <Blog image={blog3} title="amet consectetur sequi reiciendis " />
        </div>
    </div>
  )
}

export default Blogs

// eslint-disable-next-line react/prop-types
const Blog = ({image,title})=>{
    return(
        <div className="blog">
            <img src={image} alt="" />
            <div className="info">
                <div className="top">
                    <span>May 01, 2023</span>
                    <span>10 Comments</span>
                </div>
                <h2>{title}</h2>
                <a href="#">Read more...</a>
            </div>
        </div>
    )
}