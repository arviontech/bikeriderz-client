import { CalendarDays, Heart, MessageCircleMore } from "lucide-react";
import Container from "@/components/Shared/Container";
import blog from "@/assets/blog/u4.jpg";
import blog1 from "@/assets/blog/topBike.jpg";
import blog2 from "@/assets/blog/maintenance.jpg";
import blog3 from "@/assets/blog/RightBike.jpg";
import blog4 from "@/assets/blog/safetygear.jpeg";
import blog5 from "@/assets/blog/Training.png";
import blog6 from "@/assets/blog/events.jpg";
import blog7 from "@/assets/blog/accessories.jpg";
import blog8 from "@/assets/blog/adventure.jpg";
import blog9 from "@/assets/blog/culture.jpg";
import blog10 from "@/assets/blog/customizaion.jpg";
import topBike from "@/assets/blog/blog2.jpg";
const Blog = () => {
  const blogData = [
    {
      id: 1,
      image: (className: string) => (
        <img src={blog1} alt="Top Bike Reviews" className={className} />
      ),
      title: "Top Bikes of 2024",
      description:
        "Explore our curated list of the top bikes for 2024, including detailed reviews and recommendations to help you choose the best ride for your needs.",
      date: "18 JULY 2024",
    },
    {
      id: 2,
      image: (className: string) => (
        <img src={blog2} alt="Bike Maintenance Tips" className={className} />
      ),
      title: "Essential Bike Maintenance Tips",
      description:
        "Learn how to keep your bike in top condition with our comprehensive maintenance tips. Discover common issues and how to address them yourself.",
      date: "20 JULY 2024",
    },
    {
      id: 3,
      image: (className: string) => (
        <img
          src={blog3}
          alt="Choosing the Right Bike Rental"
          className={className}
        />
      ),
      title: "Guide to Bike Rentals",
      description:
        "Everything you need to know about renting a bike, including how to choose the right bike for your needs and what to look for in a rental service.",
      date: "22 JULY 2024",
    },
    {
      id: 4,
      image: (className: string) => (
        <img src={blog4} alt="Bike Safety Gear" className={className} />
      ),
      title: "Top Safety Gear for Cyclists",
      description:
        "Discover the best safety gear to keep you protected while cycling. From helmets to reflective vests, ensure you have the right equipment for safe rides.",
      date: "02 AUG 2024",
    },
    {
      id: 5,
      image: (className: string) => (
        <img src={blog5} alt="Bike Training Routines" className={className} />
      ),
      title: "Effective Training Routines for Bikers",
      description:
        "Enhance your cycling performance with these training routines. Designed to improve endurance, strength, and overall fitness for cyclists.",
      date: "28 JULY 2024",
    },
    {
      id: 6,
      image: (className: string) => (
        <img src={blog6} alt="Upcoming Bike Events" className={className} />
      ),
      title: "Upcoming Bike Events and Competitions",
      description:
        "Stay updated with the latest bike events and competitions. From local races to major cycling events, find out where you can participate or watch.",
      date: "30 JULY 2024",
    },
    {
      id: 7,
      image: (className: string) => (
        <img
          src={blog7}
          alt="Must-Have Bike Accessories"
          className={className}
        />
      ),
      title: "Must-Have Bike Accessories",
      description:
        "Upgrade your ride with essential bike accessories. Explore our list of must-have items that can enhance your biking experience.",
      date: "25 JULY 2024",
    },
    {
      id: 8,
      image: (className: string) => (
        <img src={blog8} alt="Cycling Adventures" className={className} />
      ),
      title: "Top Cycling Adventures to Try",
      description:
        "Embark on exciting cycling adventures with our guide. Discover scenic routes, challenging trails, and unforgettable biking experiences.",
      date: "05 AUG 2024",
    },
    {
      id: 9,
      image: (className: string) => (
        <img src={blog9} alt="Bike Culture and Trends" className={className} />
      ),
      title: "Exploring Bike Culture and Trends",
      description:
        "Dive into the world of bike culture and the latest trends. From stylish gear to biking communities, see what's shaping the biking world.",
      date: "10 AUG 2024",
    },
    {
      id: 10,
      image: (className: string) => (
        <img src={blog10} alt="Customizing Your Bike" className={className} />
      ),
      title: "Bike Customization Tips",
      description:
        "Personalize your bike with these customization tips. Learn how to make your bike uniquely yours with modifications and accessories.",
      date: "12 AUG 2024",
    },
  ];

  return (
    <div>
      <div className="relative mb-20">
        <img
          className="object-cover md:h-[500px] h-[400px] w-full"
          src={blog}
          alt=""
        />
        <div className="bg-black opacity-45 md:h-[500px] h-[400px] w-full absolute top-0 z-1"></div>
        <div className="flex items-center gap-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-[#ff950a] w-16 h-1"></span>
          <h1 className="lg:text-4xl text-2xl text-white font-bold ">BLOG</h1>
          <span className="bg-[#ff950a] w-16 h-1"></span>
        </div>
      </div>
      <div className="md:my-24 my-20">
        <Container>
          <div className="grid md:grid-cols-12 grid-rows-12 lg:gap-10 md:gap-6 gap-24 xl:px-0 md:px-5 px-3">
            <div className="xl:col-span-9 md:col-span-8 row-span-12">
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-14">
                {blogData.slice(0, 8).map((data) => (
                  <div
                    className="relative w-full xl:h-[460px] lg:h-[500px] [460px] "
                    key={data.id}
                  >
                    <div className="group w-full lg:h-[300px] md:[220px] overflow-hidden relative">
                      {data.image(
                        "w-full lg:h-[300px] md:h-[220px]  group-hover:scale-110 transition-transform duration-500 object-cover object-center"
                      )}

                      <div className="bg-[#ff950a] text-white font-semibold flex lg:w-[240px] w-[200px] text-base h-10 divide-x-2 divide-white space-x-4 pl-2 absolute bottom-0">
                        <p className="pt-2 lg:pr-2 pr-0 text-sm ">
                          {data.date}
                        </p>
                        <span className="lg:pl-3 pl-2 pt-2 ">
                          <MessageCircleMore className="w-4 h-4" />
                        </span>
                        <span className="pl-2 pt-2 cursor-pointer">
                          <Heart className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 mt-6">
                      <p className="xl:text-xl lg:text-lg font-bold">
                        {data.title}
                      </p>
                      <p className="lg:text-sm text-[14px]  text-gray-500">
                        {data.description}
                      </p>
                      <div className="group relative w-[100px] cursor-pointer">
                        <p className="text-lg font-semibold group-hover:text-[#ff950a]">
                          Read More
                        </p>
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full h-0.5 bg-[#ff950a] transition-all duration-500 ease-in-out top-8"></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="xl:col-span-3 md:col-span-4 row-span-12">
              <div className="flex w-full max-w-sm items-center ">
                <input
                  type="text"
                  placeholder="Search"
                  className="p-2 w-full border border-[#ff950a] rounded-l focus:outline-none focus:border-[#ff950a]"
                />
                <button
                  className="bg-[#ff950a] px-4 py-2 h-full text-white rounded-r border border-[#ff950a] -ml-px"
                  type="submit"
                >
                  Search
                </button>
              </div>
              <p className="text-lg font-bold mt-16 mb-1">CATEGORIES</p>
              <div className="flex items-center">
                <span className="bg-[#ff950a] w-24 h-1"></span>
                <hr className="bg-[#6f7276] w-full" />
              </div>
              <div>
                <ul className="text-base divide-y divide-[#d4d5d5]">
                  <li className="py-5 cursor-pointer hover:text-[#ff950a]">
                    Top Bikes
                  </li>
                  <li className="py-5 cursor-pointer hover:text-[#ff950a]">
                    Maintenance Tips
                  </li>
                  <li className="py-5 cursor-pointer hover:text-[#ff950a]">
                    Bike Rentals
                  </li>
                  <li className="py-5 cursor-pointer hover:text-[#ff950a]">
                    Safety Gear
                  </li>
                  <li className="py-5 cursor-pointer hover:text-[#ff950a]">
                    Training & Fitness
                  </li>
                  <li className="py-5 cursor-pointer hover:text-[#ff950a]">
                    Events & Competitions
                  </li>
                  <li className="py-5 cursor-pointer hover:text-[#ff950a]">
                    Bike Accessories
                  </li>
                  <li className="py-5 cursor-pointer hover:text-[#ff950a]">
                    Travel & Adventure
                  </li>
                  <li className="py-5 cursor-pointer hover:text-[#ff950a]">
                    Bike Culture
                  </li>
                  <li className="py-5 cursor-pointer hover:text-[#ff950a]">
                    Bike Customization
                  </li>
                </ul>
              </div>
              <p className="text-lg font-bold mt-16 mb-1">RECENT POSTS</p>
              <div className="flex items-center">
                <span className="bg-[#ff950a] w-24 h-1"></span>
                <hr className="bg-[#6f7276] w-full" />
              </div>
              <div className="divide-y divide-[#d4d5d5] ">
                <div className="flex gap-5 py-5">
                  <img
                    className="lg:w-24 lg:h-24 w-20 h-20 object-cover object-center"
                    src={topBike}
                    alt=""
                  />
                  <div>
                    <p className="lg:text-base text-sm font-medium pb-3">
                      Top Classic Bike
                    </p>
                    <div className="flex gap-2">
                      <CalendarDays className="text-[#ff950a]" />
                      <p className="lg:text-sm text-xs">26 JULY 2024</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 py-5">
                  <img
                    className="lg:w-24 lg:h-24 w-20 h-20 object-cover object-center"
                    src={topBike}
                    alt=""
                  />
                  <div>
                    <p className="lg:text-base text-sm font-medium pb-3">
                      Top Classic Bike
                    </p>
                    <div className="flex gap-2">
                      <CalendarDays className="text-[#ff950a]" />
                      <p className="lg:text-sm text-xs">26 JULY 2024</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 py-5">
                  <img
                    className="lg:w-24 lg:h-24 w-20 h-20 object-cover object-center"
                    src={topBike}
                    alt=""
                  />
                  <div>
                    <p className="lg:text-base text-sm font-medium pb-3">
                      Top Classic Bike
                    </p>
                    <div className="flex gap-2">
                      <CalendarDays className="text-[#ff950a]" />
                      <p className="lg:text-sm text-xs">26 JULY 2024</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-lg font-bold mt-16 mb-1">TAGS</p>
              <div className="flex items-center">
                <span className="bg-[#ff950a] w-24 h-1"></span>
                <hr className="bg-[#6f7276] w-full" />
              </div>
              <div className="mt-7 md:mb-0 mb-10">
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 grid-cols-3 gap-3">
                  <div className="border border-[#d4d5d5] rounded-full hover:bg-[#ff950a] hover:text-white p-2 cursor-pointer transition-all duration-500 ease-in-out">
                    <p className="text-sm text-center">Gear</p>
                  </div>
                  <div className="border border-[#d4d5d5] rounded-full hover:bg-[#ff950a] hover:text-white p-2 cursor-pointer transition-all duration-500 ease-in-out">
                    <p className="text-sm text-center">Jogging</p>
                  </div>
                  <div className="border border-[#d4d5d5] rounded-full hover:bg-[#ff950a] hover:text-white p-2 cursor-pointer transition-all duration-500 ease-in-out">
                    <p className="text-sm text-center">Events</p>
                  </div>
                  <div className="border border-[#d4d5d5] rounded-full hover:bg-[#ff950a] hover:text-white p-2 cursor-pointer transition-all duration-500 ease-in-out">
                    <p className="text-sm text-center">Workouts</p>
                  </div>
                  <div className="border border-[#d4d5d5] rounded-full hover:bg-[#ff950a] hover:text-white p-2 cursor-pointer transition-all duration-500 ease-in-out">
                    <p className="text-sm text-center">Training</p>
                  </div>
                  <div className="border border-[#d4d5d5] rounded-full hover:bg-[#ff950a] hover:text-white p-2 cursor-pointer transition-all duration-500 ease-in-out">
                    <p className="text-sm text-center">Health</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Blog;
