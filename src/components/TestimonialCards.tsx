"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const techTestimonials = [
  {
    quote:
      "Learning Java transformed my understanding of programming and helped me discover my true potential as a developer. The instructors were world-class and made mastering Java effortless!",
    name: "Vaibhav",
    title: "Java Student",
  },
  {
    quote:
      "The community and support in this Python program are unmatched. I've grown not just as a programmer, but also as a problem-solver, thanks to their comprehensive approach.",
    name: "Manasvi",
    title: "Python Student",
  },
  {
    quote:
      "The support and community in this MERN stack program are incredible. I've not only improved as a full-stack developer but also sharpened my problem-solving abilities.",
    name: "Amrit",
    title: "MERN Student",
  },
  {
    quote:
      "As a developer, finding the right mentor can be challenging, but this DevOps program matched me with an instructor who truly understands my goals and challenges in mastering the DevOps lifecycle.",
    name: "Ritika",
    title: "DevOps Student",
  },
  {
    quote:
      "The Angular courses here opened my eyes to the intricacies of building dynamic web applications. I highly recommend them for any aspiring developers!",
    name: "Shreya",
    title: "AngularJS Student",
  },
];

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear Our Harmony: Voices Of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={techTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;