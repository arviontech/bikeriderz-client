import { Button } from "@/components/ui/button";
import { Expand, X } from "lucide-react";
import { useState } from "react";
import gal1 from "@/assets/gallery/g1.jpeg";
import gal2 from "@/assets/gallery/g2.jpg";
import gal3 from "@/assets/gallery/g3.jpg";
import gal4 from "@/assets/gallery/g4.jpg";
import gal5 from "@/assets/gallery/g5.jpg";
import gal6 from "@/assets/gallery/g6.jpg";
import { motion } from "framer-motion";
import Container from "../Shared/Container";

const Gallary = () => {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState("");
  const [imageNo, setImageNo] = useState(1);

  const handleModal = (galImage: string, imageNumber: number) => {
    setModal(true);
    setImage(galImage);
    setImageNo(imageNumber);
  };

  const galleryImages = [
    { src: gal1, height: "h-[300px]", additionalClass: "" },
    { src: gal2, height: "h-[500px]", additionalClass: "" },
    { src: gal4, height: "h-[300px]", additionalClass: "" },
    { src: gal6, height: "h-[500px]", additionalClass: "md:-mt-[200px] mt-0" },
    { src: gal3, height: "h-[300px]", additionalClass: "" },
    { src: gal5, height: "h-[500px]", additionalClass: "md:-mt-[200px] mt-0" },
  ];

  return (
    <div className="mb-32 xl:px-0 px-4">
      <Container>
        <h1 className="xl:text-4xl md:text-3xl text-2xl text-center font-bold mb-6">
          Captured Moments From Customers
        </h1>
        <p className="text-gray-500 text-base md:w-[600px] w-full text-center mx-auto mb-14">
          Discover unforgettable moments from our BikeRiderz customers! Scenic
          rides and thrilling adventures captured in every snapshot.
        </p>

        <div className="grid grid-cols-12 gap-4 mt-16 relative">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              onClick={() => handleModal(img.src, index + 1)}
              className={`md:col-span-4 col-span-12 w-full ${img.height} rounded-lg cursor-pointer relative group ${img.additionalClass}`}
            >
              <img
                src={img.src}
                alt={`Gallery Image ${index + 1}`}
                className="h-full w-full object-cover rounded-lg"
              />

              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-[#ffffff] p-3 rounded-full">
                  <Expand className=" w-8 h-8" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {modal && (
          <div
            onClick={() => setModal(false)}
            className="fixed z-50 inset-0 bg-black/90"
          >
            <div className="flex justify-between items-center gap-10 px-10 pt-5">
              <div>
                <h2 className="text-white text-xl font-semibold">
                  {imageNo}/6
                </h2>
              </div>
              <Button
                onClick={() => setModal(false)}
                className="bg-transparent hover:bg-transparent"
              >
                <X />
              </Button>
            </div>
            <div className="flex justify-center items-center pt-10">
              <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                onClick={(e) => e.stopPropagation()}
                // By using e.stopPropagation(), you prevent the click event on the image from reaching the modal’s background, allowing the user to interact with the image without closing the modal.
                src={image}
                alt={`Modal Image ${imageNo}`}
                className="md:w-[500px] md:h-[500px] sm:w-[400px] sm:h-[400px] w-[310px] h-[330px] object-cover rounded-lg"
              />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Gallary;
