import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import testimonalBanner from "@/assets/testimonials/bikebg.jpg";
import user1 from "@/assets/testimonials/avatar2.jpg";
import user2 from "@/assets/testimonials/avatar4.jpg";
import user3 from "@/assets/testimonials/avatar3.jpg";
import user4 from "@/assets/testimonials/avatar1.jpg";
import Container from "@/components/Shared/Container";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Star } from "lucide-react";

const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const testimonalData = [
    {
      id: 1,
      image: (className: string) => (
        <img src={user1} alt="user" className={className} />
      ),
      name: "John Doe",
      review:
        "BikeRiderz offers an outstanding rental service. The bikes are well-maintained and comfortable. I rented a mountain bike for a weekend trip, and it performed flawlessly.",
      position: "Web Developer",
    },
    {
      id: 2,
      image: (className: string) => (
        <img src={user2} alt="user" className={className} />
      ),
      name: "Michael Smith",
      review:
        "I had a great experience with BikeRiderz. The booking process was smooth, and the bike I rented was in excellent condition. Perfect for both city commutes and weekend rides.",
      position: "Graphic Designer",
    },
    {
      id: 3,
      image: (className: string) => (
        <img src={user3} alt="user" className={className} />
      ),
      name: "Cristiano Ronaldo",
      review:
        "BikeRiderz provides top-notch bikes and exceptional service. I rented a road bike for a charity event, and it was top-quality. The entire experience was hassle-free and enjoyable.",
      position: "Professional Athlete",
    },
    {
      id: 4,
      image: (className: string) => (
        <img src={user4} alt="user" className={className} />
      ),
      name: "Sarah Williams",
      review:
        "Highly recommend BikeRiderz for bike rentals. Their customer service is excellent, and the bikes are well-maintained. The rental process was quick and easy, making it perfect for my weekend adventures.",
      position: "Content Creator",
    },
  ];

  return (
    <div className=" mb-32 relative overflow-x-hidden">
      <img
        className="w-full h-[620px] object-cover object-center"
        src={testimonalBanner}
        alt=""
      />
      <div className="bg-gradient-to-l from-transparent to-[#ff0808]  absolute top-0  h-[620px] w-full opacity-90"></div>
      <div className=" absolute lg:top-32 md:top-24 top-10  w-full">
        <Container>
          <div className="flex lg:flex-row flex-col gap-6 items-center ">
            <div className=" space-y-4  xl:pl-0 md:pl-4 lg:w-[410px] w-full md:px-0 px-3">
              <div className="flex gap-3 items-center">
                <span className="bg-[#ffffff] w-2 xl:h-6 h-5"></span>
                <p className="xl:text-xl text-lg font-bold text-white">
                  OUR TESTIMONIALS
                </p>
              </div>
              <p className="xl:text-4xl lg:text-3xl text-2xl font-bold leading-none text-white">
                What our customers are saying
              </p>
              <p className="text-white lg:text-base text-sm">
                Our policy emphasizes transparency and fairness, aiming to
                create a trustworthy relationship with our valued customers.
              </p>
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
                  {testimonalData.map((member) => (
                    <CarouselItem
                      key={member.id}
                      className="xl:basis-1/2 xl:h-[385px] xl:w-[220px] lg:h-[350px] lg:w-[140px] md:h-[320px] md:w-[160px] h-[370px] w-[92px] "
                    >
                      <div className="p-4 ">
                        <Card className="border-none relative">
                          <CardContent className="group aspect-square px-8 pt-5 ">
                            <div className="">
                              {member.image(
                                "w-[80px] h-[80px] rounded-full mx-auto"
                              )}
                            </div>
                            <div className="flex flex-col items-center justify-center pt-3">
                              <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="md:w-[20px] w-[18px] h-[18px]"
                                    color="orange"
                                    fill="orange"
                                  />
                                ))}
                              </div>
                              <p className="xl:text-2xl md:text-lg text-base font-bold pt-2 pb-1">
                                {member.name}
                              </p>
                              <p className="text-sm text-[#82828a]">
                                {member.position}
                              </p>
                            </div>
                            <p className="lg:text-base text-sm text-center text-[#797f89] pt-5">
                              {member.review}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Testimonials;
