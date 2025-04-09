import Container from "../Shared/Container";
import blog1 from "@/assets/blog/blog1.jpg";
import blog2 from "@/assets/blog/blog2.jpg";
import blog3 from "@/assets/blog/blog3.jpg";
import writer1 from "@/assets/blog/writer1.jpg";
import writer2 from "@/assets/blog/writer2.jpg";
import writer3 from "@/assets/blog/writer3.jpg";
import { ArrowRight, MessagesSquare } from "lucide-react";

const Blog = () => {
  const blogData = [
    {
      id: 1,
      blogName: "Exploring Nature's Beauty with Bikes",
      image: (className: string) => (
        <img src={blog1} alt="blog1" className={className} />
      ),
      blogDescription:
        "Discover how biking through scenic trails offers a refreshing way to connect with nature and enjoy the outdoors.",
      writerName: "John Doe",
      writerImage: (className: string) => (
        <img src={writer1} alt="blog1" className={className} />
      ),
      comments: 2,
      publishDate: "15 Sept 2024",
    },
    {
      id: 2,
      blogName: "Top 5 Bike Trails for Adventure Seekers",
      image: (className: string) => (
        <img src={blog2} alt="blog2" className={className} />
      ),
      blogDescription:
        "A guide to the most thrilling bike trails for those who crave adventure and a challenge on two wheels.",
      writerName: "Sarah Lee",
      writerImage: (className: string) => (
        <img src={writer3} alt="blog1" className={className} />
      ),
      comments: 5,
      publishDate: "10 Sept 2024",
    },
    {
      id: 3,
      blogName: "How to Choose the Right Bike for Your Ride",
      image: (className: string) => (
        <img src={blog3} alt="blog3" className={className} />
      ),
      blogDescription:
        "Tips and advice on selecting the perfect bike for your riding style, from road bikes to mountain bikes.",
      writerName: "Michael Smith",
      writerImage: (className: string) => (
        <img src={writer2} alt="blog1" className={className} />
      ),
      comments: 8,
      publishDate: "5 Sept 2024",
    },
  ];

  return (
    <div className="mb-24 xl:px-0 px-4">
      <Container>
        <h1 className="xl:text-4xl md:text-3xl text-2xl text-center font-bold mb-6">
          Latest Blog & Articles
        </h1>
        <p className="text-gray-500 text-base md:w-[600px] w-full text-center mx-auto mb-14">
          Stay updated with our latest blog posts and articles, featuring expert
          tips, exciting bike adventures, and industry insights tailored just
          for you!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-8 lg:gap-5 ">
          {blogData?.map((blog) => (
            <div className=" relative group h-[600px]" key={blog.id}>
              {/* image div */}
              <div className="relative overflow-hidden group xl:w-[390px] xl:h-[300px] lg:w-[300px] lg:h-[280px] md:w-[320px] sm:w-[350px] w-[320px] h-[300px] rounded-xl mx-auto">
                {blog?.image(
                  "xl:h-[300px] lg:h-[280px] h-[300px]  w-full  group-hover:scale-110 transition-transform duration-500 object-cover object-center rounded-xl"
                )}
                <div className="bg-[#ff950a] text-white font-semibold flex w-[120px] text-sm h-10   absolute top-0 left-0 items-center justify-center ">
                  <p className=" ">26 JULY 2024</p>
                </div>
              </div>

              {/* blog card div */}
              <div className="bg-white xl:w-[340px] xl:h-[300px] lg:w-[270px] lg:h-[340px] sm:w-[300px] w-[290px] h-[300px] rounded-xl shadow-lg absolute bottom-12 -translate-x-1/2 left-1/2">
                {blog?.writerImage(
                  "rounded-full w-11 h-11 border-[#ff3a23] border-2 absolute left-8 -top-5 object-cover object-center"
                )}
                <div className="px-8 pt-8 pb-0 ">
                  <p className="text-sm text-gray-500 pt-3 pb-2">
                    By {blog?.writerName}
                  </p>
                  <p className="text-lg font-bold group-hover:text-[#ff950a] pb-3 transition-all duration-500 ease-in-out">
                    {blog?.blogName}
                  </p>
                  <p className="text-sm text-gray-500  ">
                    {blog?.blogDescription?.length > 80
                      ? `${blog?.blogDescription?.slice(0, 80)}...`
                      : blog?.blogDescription}
                  </p>
                </div>
                <div className="absolute bottom-7 w-full">
                  <hr className="bg-gray-600  " />
                  <div className="flex justify-between items-center px-8 pt-5">
                    <p className="flex gap-1 text-gray-500 text-sm">
                      <MessagesSquare className="text-[#ff950a]" />
                      {blog?.comments} comments
                    </p>
                    <p className="text-sm flex gap-1 text-gray-500 group-hover:text-[#ff950a] transition-all duration-500 ease-in-out">
                      <ArrowRight />
                      More
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Blog;
