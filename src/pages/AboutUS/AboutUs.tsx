import * as React from "react";
import aboutus from "@/assets/about/ab.jpg";
import teamMember1 from "@/assets/about/teamMember/team-1.jpg";
import teamMember2 from "@/assets/about/teamMember/team-2.jpg";
import teamMember3 from "@/assets/about/teamMember/team-3.jpg";
import teamMember4 from "@/assets/about/teamMember/team-5.jpg";
import teamMember5 from "@/assets/about/teamMember/team-6.jpg";
import teamMember6 from "@/assets/about/teamMember/team-8.jpg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  FaFacebookF,
  FaInstagram,
  FaMotorcycle,
  FaPinterest,
  FaRegStar,
  FaSkype,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/Shared/Container";
import { motion } from "framer-motion";
import us1 from "@/assets/about/us2.jpg";
import us2 from "@/assets/about/us5.jpg";
import { Link } from "react-router-dom";
import bg from "@/assets/hero-bg/vectorBg.jpg";
import contactbg2 from "@/assets/contact/contactbg2.jpg";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
type QusInput = {
  name: string;
  email: string;
  message: string;
};

const AboutUs = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const teamMemberData = [
    {
      id: 1,
      image: (className: string) => (
        <img src={teamMember1} alt="team member" className={className} />
      ),

      name: "Anselm Hannemen",
      role: "Supervisor",
    },
    {
      id: 2,
      image: (className: string) => (
        <img src={teamMember2} alt="team member" className={className} />
      ),

      name: "Emily Johnson",
      role: "Product Manager",
    },
    {
      id: 3,
      image: (className: string) => (
        <img src={teamMember3} alt="team member" className={className} />
      ),

      name: "Sarah Williams",
      role: "Supervisor",
    },
    {
      id: 4,
      image: (className: string) => (
        <img src={teamMember4} alt="team member" className={className} />
      ),

      name: "Sarah Williams",
      role: "Supervisor",
    },
    {
      id: 5,
      image: (className: string) => (
        <img src={teamMember5} alt="team member" className={className} />
      ),

      name: "Sarah Williams",
      role: "Supervisor",
    },
    {
      id: 6,
      image: (className: string) => (
        <img src={teamMember6} alt="team member" className={className} />
      ),

      name: "Sarah Williams",
      role: "Supervisor",
    },
  ];

  const milestones = [
    {
      year: "2015",
      title: "Founded",
      description:
        "BIKERIDERZ was established in 2015 with the goal of making bike rentals easily accessible to everyone in Dhaka. Our first shop opened with just 5 motorcycles.",
      icon: FaMotorcycle,
    },
    {
      year: "2017",
      title: "Fleet Expansion",
      description:
        "By 2017, our fleet grew to 50 motorcycles, offering a variety of models from sportbikes to cruisers.",
      icon: FaRegStar,
    },
    {
      year: "2020",
      title: "Online Platform Launch",
      description:
        "In 2020, we launched our online platform to enable seamless bike rental reservations and gear purchases.",
      icon: FaMotorcycle,
    },
    {
      year: "2023",
      title: "Partnerships with Global Brands",
      description:
        "BIKERIDERZ formed partnerships with global motorcycle brands in 2023, allowing access to the latest bikes and gear.",
      icon: FaRegStar,
    },
  ];
  const { register, handleSubmit, reset } = useForm<QusInput>();
  const onSubmit: SubmitHandler<QusInput> = async (data) => {
    try {
      console.log(data);

      if (data) {
        toast.success("Your message is submitted successfully");
      }
    } catch (err) {
      toast.error("Failed to send message");
      console.log(err);
    } finally {
      reset();
    }
  };
  return (
    <div>
      <div className="relative mb-20">
        <img
          className="object-cover md:h-[500px] h-[400px] w-full"
          src={aboutus}
          alt=""
        />
        <div className="bg-black opacity-45 md:h-[500px] h-[400px] w-full absolute top-0 z-1"></div>
        <div className="flex items-center gap-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-[#ff950a] w-16 h-1"></span>
          <h1 className="lg:text-4xl text-2xl text-white font-bold ">
            ABOUT US
          </h1>
          <span className="bg-[#ff950a] w-16 h-1"></span>
        </div>
      </div>
      <Container className="xl:px-0 px-4">
        <div className="grid lg:grid-cols-2 col-span-1 lg:gap-0 gap-14  mb-32">
          <div className=" col-span-1 relative lg:h-[800px] md:h-[400px] h-[350px] ">
            <div>
              <img
                src={us1}
                className="xl:w-[500px] xl:h-[450px] lg:w-[380px] lg:h-[430px] md:w-[380px] md:h-[380px] w-[320px] h-[320px] object-cover object-center lg:rounded-lg rounded-full  mx-auto "
                alt=""
              />
            </div>
            <div className="lg:block hidden">
              <img
                src={us2}
                className="xl:w-[450px] xl:h-[450px] lg:w-[380px] lg:h-[430px] md:w-[250px]  object-cover object-center  lg:rounded-lg rounded-full  absolute -bottom-4 "
                alt=""
              />
            </div>
          </div>

          <div className="xl:space-y-4 space-y-3 col-span-1">
            <div className="flex gap-3 items-center">
              <span className="bg-[#ff950a] w-2 xl:h-6 h-5"></span>
              <p className="xl:text-xl text-lg font-bold ">
                WELCOME TO BIKERIDERZ
              </p>
            </div>
            <p className="xl:text-4xl lg:text-3xl text-2xl font-bold leading-none lg:w-[450px] w-full">
              Your ultimate destination for premium bike rentals
            </p>
            <p className="md:text-base text-sm text-[#82828a] xl:pt-4 pt-3">
              BIKERIDERZ is your premier destination for top-quality bike
              rentals and unforgettable riding experiences. Located in the heart
              of Cox's Bazar, we offer an extensive selection of motorcycles for
              rent, catering to all riders, from beginners to seasoned
              adventurers. Whether you're looking for a quick city ride or a
              long-distance road trip, we have the perfect bike for you.
              <br />
              Our expert team at BIKERIDERZ is dedicated to making your rental
              experience as smooth and enjoyable as possible. We guide you
              through our diverse range of bikes, ensuring that you choose the
              one that best suits your style, comfort, and needs. Each bike in
              our fleet is carefully maintained, so you can ride with
              confidence, knowing you have a reliable and safe motorcycle.
              <br />
              In addition to rentals, BIKERIDERZ provides essential gear and
              accessories, so you're fully equipped for your journey. From
              helmets and gloves to jackets and safety gear, we ensure that your
              ride is both stylish and secure. We work with top global brands to
              offer the latest in motorcycle equipment and technology.
              <br />
              At BIKERIDERZ, we’re passionate about delivering not just a ride
              but an experience. Whether you're exploring Dhaka's streets or
              hitting the open road, we’re here to fuel your love for biking
              with unmatched service and quality.
            </p>

            <div className="flex items-center gap-4 pt-4 pb-7">
              <span className="inline-block bg-[#ff950a] rounded-lg p-2 lg:w-16 lg:h-16 md:w-14 md:h-14 h:16 w-16">
                <FaMotorcycle className="text-white lg:w-12 lg:h-12 md:w-10 md:h-10 h-12 w-12" />
              </span>
              <div>
                <p className="lg:text-xl text-lg font-bold">
                  Ride with Confidence
                </p>
                <p className="text-[#82828a] md:text-base text-sm">
                  BIKERIDERZ is dedicated to offering premium gear for every
                  rider, ensuring safety, style, and adventure on every journey.
                </p>
              </div>
            </div>

            <Link to={`/bike`}>
              <button
                type="submit"
                className="flex text-lg items-center justify-center bg-[#ffa633] text-white w-[180px] h-14  p-3  mt-4 md:ml-0  relative group overflow-hidden "
              >
                <span className="relative z-10">VIEW BIKE</span>
                <span className="absolute inset-0 bg-[#ff950a] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
              </button>
            </Link>
          </div>
        </div>

        {/* History & Milestones Section */}
        <section className="mb-32 relative">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Our Journey & Milestones
          </h2>

          <div className="relative before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-gray-300 md:before:left-5">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className={`relative md:flex items-center gap-6 mb-12 ${
                  index % 2 === 0
                    ? "xl:ml-24 md:ml-10 ml-0 md:justify-start"
                    : "xl:mr-24 md:mr-10 mr-0 md:justify-end"
                }`}
              >
                <div className="absolute left-1/2 md:left-5 w-1 bg-[#ff950a] h-full"></div>

                <div
                  className={`bg-[#ff950a] p-4 rounded-full relative z-10 ${
                    index % 2 === 0 ? "order-2" : "order-1"
                  } md:animate-pulse`}
                >
                  <milestone.icon className="text-white w-8 h-8" />
                </div>

                <div
                  className={`bg-white p-6 shadow-lg md:mt-0 mt-5 rounded-lg relative z-10 ${
                    index % 2 === 0 ? "md:order-1" : "md:order-2"
                  } hover:bg-[#ff950a] hover:text-white  transition-all duration-500 lg:w-[700px] md:w-[500px]`}
                >
                  <h3 className="text-2xl font-bold mb-2 ">{milestone.year}</h3>
                  <p className="text-lg font-semibold ">{milestone.title}</p>
                  <p className=" pt-1 ">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TeamMembers */}
        <div>
          <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-center">
            Meet our best professional
          </h1>
          <div className="flex items-center gap-3 xl:w-[435px] lg:w-[350px] w-[285px] mx-auto md:mb-10 mb-4">
            <span className="bg-[#ff950a] xl:w-14 lg:w-10 w-8 h-2"></span>
            <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-center">
              Team Members
            </h1>
            <span className="bg-[#ff950a] xl:w-14 lg:w-10 w-8 h-2"></span>
          </div>

          <div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full "
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {teamMemberData.map((member) => (
                  <CarouselItem
                    key={member.id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card className="border-none ">
                        <CardContent className="flex flex-col relative aspect-square items-center justify-center p-6">
                          <div>
                            {member.image(
                              "xl:w-[320px] xl:h-[362px] lg:w-[250px] lg:h-[284px] md:w-[305px] md:h-[345px] sm:w-[325px] sm:h-[385px] w-[272px] h-[330px]"
                            )}
                          </div>

                          <div className=" bg-white shadow-xl border-r-2  xl:w-[320px] xl:h-[120px] lg:w-[250px] lg:h-[110px] md:w-[305px] md:h-[120px] sm:w-[325px] sm:h-[120px]  w-[272px] h-[110px] border-[#ff950a]  border-b-2 relative">
                            <div className="absolute xl:bottom-[100px] lg:bottom-[90px] md:bottom-[100px] sm:bottom-[100px] bottom-[90px]  left-1/2 transform -translate-x-1/2 flex gap-5 items-center justify-center ">
                              <span className="inline-block bg-[#ff950a] rounded-full p-2 cursor-pointer hover:bg-[#10798b]">
                                <FaFacebookF className="text-white w-6 h-6" />
                              </span>
                              <span className="inline-block bg-[#ff950a] rounded-full p-2 cursor-pointer hover:bg-[#10798b]">
                                <FaInstagram className="text-white w-6 h-6" />
                              </span>
                              <span className="inline-block bg-[#ff950a] rounded-full p-2 cursor-pointer hover:bg-[#10798b]">
                                <FaSquareXTwitter className="text-white w-6 h-6" />
                              </span>
                              <span className="inline-block bg-[#ff950a] rounded-full p-2 cursor-pointer hover:bg-[#10798b]">
                                <FaSkype className="text-white w-6 h-6" />
                              </span>
                            </div>

                            <p className="xl:text-xl lg:text-lg font-bold text-center xl:pt-10 lg:pt-8 pt-10">
                              {member.name}
                            </p>
                            <p className="text-base text-center text-[#82828a]">
                              {member.role}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
                &#9664;
              </CarouselPrevious>
              <CarouselNext className="absolute right-0 top-1/2  transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
                &#9654;
              </CarouselNext>
            </Carousel>
          </div>
        </div>
      </Container>
      {/* Contact info */}
      <section>
        <div className="relative my-32">
          <div className="grid grid-cols-2 w-full relative">
            <div className="relative w-full md:col-span-1 col-span-2">
              <img
                className="w-full lg:h-[660px] h-[700px] object-cover object-center"
                src={bg}
                alt=""
              />
              <div className="absolute inset-0 flex justify-center  pt-20 xl:pr-12 lg:pr-20 pr-10 lg:pl-0 pl-1">
                <div className="space-y-4 xl:pl-0 md:pl-4 lg:w-[410px] w-full md:px-0 px-3">
                  <div className="flex gap-3 items-center">
                    <span className="bg-[#ff950a] w-2 xl:h-6 h-5"></span>
                    <p className="xl:text-xl text-lg font-bold">GET IN TOUCH</p>
                  </div>
                  <p className="xl:text-4xl lg:text-3xl text-2xl font-bold leading-none">
                    Contact us anytime
                  </p>
                  <p className="lg:text-base text-sm">
                    We're here to assist you with any inquiries or support you
                    need for your BikeRiderz experience. Feel free to reach out
                    anytime!
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 lg:flex lg:justify-center  lg:pt-72 pt-64 px-5 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="space-y-7 py-4">
                    <div className="flex lg:flex-row flex-col items-center lg:gap-8 gap-0">
                      <input
                        type="text"
                        placeholder="Name"
                        {...register("name", { required: true })}
                        className="w-full lg:mb-0 mb-7 h-12 pl-4 border border-[#fa8e00]"
                      />
                      <input
                        type="text"
                        placeholder="Email"
                        {...register("email", { required: true })}
                        className="w-full h-12 pl-4 border border-[#fa8e00]"
                      />
                    </div>

                    <textarea
                      placeholder="Type Your Message Here"
                      {...register("message", { required: true })}
                      className="w-full h-32 pl-4 border border-[#fa8e00] pt-2 "
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex text-lg items-center justify-center bg-[#ffa633] text-white w-[180px] h-14  p-3  mt-4 md:ml-0  relative group overflow-hidden "
                  >
                    <span className="relative z-10">Submit Now</span>
                    <span className="absolute inset-0 bg-[#ff950a] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                  </button>
                </form>
              </div>
            </div>
            <div className="md:col-span-1 col-span-2 relative">
              <img
                src={contactbg2}
                className="w-full lg:h-[660px] h-[670px] object-cover object-center"
                alt=""
              />
              <div className="bg-black absolute top-0 w-full lg:h-[660px] h-[670px] opacity-90"></div>

              {/* Centered Child Div */}
              <div className="absolute inset-0 flex items-center justify-center lg:pt-0 lg:px-5 px-8 space-y-1 text-white">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Office Location</h2>
                  <div className="flex space-x-2 text-base pt-1 pb-4">
                    <MapPin className="h-6" />
                    <p>No. 808 Belly Road, Cox's Bazar, Bangladesh</p>
                  </div>
                  <h2 className="text-xl font-semibold">Phone No.</h2>
                  <div className="flex space-x-2 text-base pt-1 pb-4">
                    <Phone className="h-6" />
                    <p>+880 1799-370138</p>
                  </div>
                  <h2 className="text-xl font-semibold">Email Address</h2>
                  <div className="flex space-x-2 text-base pt-1 pb-4">
                    <Mail className="h-6" />
                    <p>BikeRiderz@gmail.com</p>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold pb-2">Follow Us</h2>
                    <div className="flex space-x-3 cursor-pointer pt-1">
                      <div className="w-10 h-10 cursor-pointer text-white bg-[#ff950a] rounded-full transition-all duration-500 hover:scale-110 ease-in-out flex items-center justify-center p-2">
                        <FaFacebookF className="w-7 h-7" />
                      </div>
                      <div className="w-10 h-10 cursor-pointer text-white bg-[#ff950a] rounded-full transition-all duration-500 hover:scale-110 ease-in-out flex items-center justify-center p-2">
                        <FaInstagram className="w-7 h-7" />
                      </div>
                      <div className="w-10 h-10 cursor-pointer text-white bg-[#ff950a] rounded-full transition-all duration-500 hover:scale-110 ease-in-out flex items-center justify-center p-2">
                        <FaSquareXTwitter className="w-7 h-7" />
                      </div>
                      <div className="w-10 h-10 cursor-pointer text-white bg-[#ff950a] rounded-full transition-all duration-500 hover:scale-110 ease-in-out flex items-center justify-center p-2">
                        <FaPinterest className="w-7 h-7" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
