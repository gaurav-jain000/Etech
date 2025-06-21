import {
  BookOpenIcon,
  DotIcon,
  GraduationCapIcon,
  PlayCircleIcon,
  PlayIcon,
  SearchIcon,
  StarIcon,
  User2Icon,
} from "lucide-react";
import type { MetaArgs } from "react-router";
import { Button, buttonVariants } from "~/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { Separator } from "~/components/ui/separator";

export function meta({}: MetaArgs) {
  return [
    { title: "Etech" },
    { name: "description", content: "Welcome to Etech!" },
  ];
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grid md:grid-cols-2 items-center maximus md:gap-4 min-h-[80vh] pt-24">
        <div className="flex flex-col max-md:items-center">
          <div className="prose max-w-full prose-headings:my-3 md:prose-xl max-md:text-center">
            <h1 className="font-bold">
              Develop your <br /> skills in a new & <br /> unique way
            </h1>
            <p className="text-sm">
              Explore a transformative approach to skill development on our
              online learning platform. Uncover a new realm of learning
              experiences and elevate your expertise in unique ways.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <Button className="bg-signature rounded-sm text-base" size="lg">
              Enroll Now
            </Button>
            <Button
              variant="link"
              className="underline underline-offset-2 text-base"
              size="lg"
            >
              <PlayCircleIcon className="bg-[var(--theme-gradient-bottom-right)] rounded-full text-[var(--background)] size-[1.8em]" />
              What&apos;s Etech?
            </Button>
          </div>
        </div>
        <div className="w-full grid place-items-center py-6">
          <div className="w-[320px] max-h-[400px] bg-signature aspect-square rounded-full outline-dashed outline-2 outline-offset-8 outline-[var(--theme-gradient-top-left)]" />
        </div>
      </section>
      {/* Clients */}
      <section className="py-2 md:py-8 bg-signature">
        <div className="px-4 flex items-center md:justify-evenly gap-4 max-md:overflow-x-scroll py-1 overflow-y-hidden md:w-full">
          {[
            "Duolingo",
            "Magic Leap",
            "Microsoft",
            "Codecov",
            "User Testing",
          ].map((brand) => (
            <div className="text-white font-bold text-xl md:text-3xl whitespace-nowrap">
              {brand}
            </div>
          ))}
        </div>
      </section>
      {/* Search courses */}
      <section className="maximus uni-padding-t">
        <div className="prose md:prose-xl max-w-full prose-headings:my-3 text-center md:mb-6">
          <h2>Search Courses</h2>
        </div>
        <div className="mx-auto w-fit">
          <form className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-white p-2 rounded-lg border focus-within:border-[var(--theme-gradient-top-left)] max-md:text-xs">
              <SearchIcon className="text-[var(--theme-gradient-top-left)]" />
              <input
                type="text"
                className="focus:outline-transparent"
                placeholder="Search for over 50+ courses"
              />
            </div>
            <Button
              type="submit"
              className="bg-signature text-xs md:text-lg"
              size="lg"
            >
              Search
            </Button>
          </form>
        </div>
      </section>
      {/* Benefits of Etech */}
      <section className="maximus uni-padding-y grid md:grid-cols-2 md:gap-4">
        <div className="w-full grid max-md:place-items-center md:justify-start md:items-center max-md:py-6">
          <div className="[--collective-border-radius:64px] min-h-[320px] max-lg:max-w-[320px] lg:h-full aspect-square mx-auto rounded-[var(--collective-border-radius)] outline-dashed outline-2 outline-offset-8 outline-[var(--theme-gradient-top-left)] overflow-hidden grid grid-cols-2 grid-rows-2">
            <div className="bg-[var(--theme-gradient-bottom-right)] rounded-br-[var(--collective-border-radius)]" />
            <div className="bg-[var(--theme-gradient-top-left)] rounded-bl-[var(--collective-border-radius)]" />
            <div className="bg-[var(--theme-gradient-top-left)] rounded-tr-[var(--collective-border-radius)]" />
            <div className="bg-[var(--theme-gradient-bottom-right)] rounded-tl-[var(--collective-border-radius)]" />
          </div>
        </div>
        <div>
          <div className="prose max-w-full prose-headings:my-3">
            <h2>
              <span className="bg-signature text-transparent bg-clip-text">
                Benefits{" "}
              </span>
              From Our Online Learning
            </h2>
            <ul className="space-y-5! ps-0">
              {[
                {
                  icon: <GraduationCapIcon />,
                  title: "Online Degrees",
                  desc: "Earn accredited degrees from the comfort of your home, opening doors to a world of possibilities.",
                },
                {
                  icon: <BookOpenIcon />,
                  title: "Short Courses",
                  desc: "Enhance your skills with our concise and focused short courses, designed for quick and effective learning.",
                },

                {
                  icon: <User2Icon />,
                  title: "Training From Experts",
                  desc: "Immerse yourself in knowledge with industry experts guiding you through hands-on experience.",
                },

                {
                  icon: <PlayIcon />,
                  title: "1.5k+ Video Courses",
                  desc: "Dive into a vast library of over 1.5k video courses covering many subjects, offering a visual learning experience.",
                },
              ].map((benefit) => (
                <li
                  className="flex gap-2 items-start group ps-0"
                  key={benefit.title}
                >
                  <div className="group-even:bg-[var(--theme-gradient-bottom-right)] group-odd:bg-[var(--theme-gradient-top-left)] p-3 rounded-full text-[var(--background)]">
                    {benefit.icon}
                  </div>
                  <div className="prose prose-max-w-full prose-headings:mt-0 prose-headings:mb-1">
                    <h3>{benefit.title}</h3>
                    <p className="text-xs lg:text-sm">{benefit.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* Popular Courses */}
      <section className="uni-padding-y bg-signature">
        <div className="maximus">
          <div className="md:pt-4 pb-6 md:pb-12 max-w-[500px] mx-auto prose prose-headings:my-2 md:prose-xl text-center prose-p:text-background">
            <h2 className="text-white">Our Popular Courses</h2>
            <p className="text-xs">
              Discover our most sought-after courses, casefully curated to meet
              the demands of today&apos;s leaners. Dive into engaging content
              crafted for success in every step of your educational journey.
            </p>
          </div>
          <div className="max-md:px-4 mx-auto grid min-[800px]:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                featured_img:
                  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2070&auto=format&fit=crop",
                category: "Web Development",
                title: "Mastering React for Beginners",
                ratings: "4.8",
                classes_count: "12",
                students_count: "850",
                price: "$149.00",
                teacher: "Aarav Mehta",
              },
              {
                featured_img:
                  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
                category: "UI/UX Design",
                title: "UI Design Essentials with Figma",
                ratings: "4.6",
                classes_count: "8",
                students_count: "620",
                price: "$139.00",
                teacher: "Simran Kaur",
              },
              {
                featured_img:
                  "https://images.unsplash.com/photo-1593642634367-d91a135587b5?q=80&w=2070&auto=format&fit=crop",
                category: "Digital Marketing",
                title: "SEO Fundamentals & Growth Hacks",
                ratings: "4.7",
                classes_count: "10",
                students_count: "730",
                price: "$145.00",
                teacher: "Rohan Desai",
              },
            ].map((course) => (
              <div
                key={course.title}
                className="p-2 bg-white rounded-3xl flex max-[530px]:flex-col min-[800px]:flex-col max-[530px]:gap-2 min-[800px]:gap-5 drop-shadow-sm"
              >
                <div className="rounded-2xl w-full min-[530px]:max-[800px]:flex-[0_0_50%] aspect-[4/3] overflow-hidden relative">
                  <img
                    src={course.featured_img}
                    alt={course.title}
                    className="size-full object-center object-cover"
                  />
                </div>
                <div className="min-[530px]:max-[800px]:space-y-4 max-[530px]:contents min-[530px]:max-[800px]:flex-[0_0_50%] min-[530px]:max-[800px]:flex min-[530px]:max-[800px]:justify-center min-[530px]:max-[800px]:flex-col min-[800px]:contents">
                  <div className="flex items-center justify-between px-3">
                    <Button
                      className="bg-[var(--theme-gradient-top-left)]/40 text-black gap-0 justify-start! ps-0! pe-1 lg:pe-3!"
                      size="sm"
                    >
                      <DotIcon className="text-[var(--theme-gradient-top-left)] size-[1.4em] lg:size-[2em]" />
                      <span className="text-xs">{course.category}</span>
                    </Button>
                    <div
                      className={buttonVariants({
                        className: "bg-[var(--theme-gradient-top-left)]!",
                        size: "sm",
                      })}
                    >
                      <StarIcon className="fill-white size-[10px]" />
                      <span className="text-xs">{course.ratings}</span>
                    </div>
                  </div>
                  <div className="prose lg:prose-lg max-w-full prose-headings:my-0 min-[800px]:grow px-3">
                    <h3>{course.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs px-3">
                    <div className="flex items-center gap-1">
                      <BookOpenIcon className="size-[1.4em] text-[var(--theme-gradient-top-left)] " />
                      {course.classes_count} Classes
                    </div>
                    <div className="flex items-center gap-1">
                      <User2Icon className="size-[1.4em] text-[var(--theme-gradient-top-left)] " />
                      {course.students_count} Students
                    </div>
                  </div>
                  <div className="px-3">
                    <Separator />
                  </div>
                  <div className="flex items-center justify-between gap-1 max-[530px]:pb-3 min-[800px]:pb-3 px-3 max-lg:text-sm">
                    <strong>{course.price}</strong>
                    <div className="flex items-center gap-2">
                      <div className="size-7 bg-[var(--theme-gradient-top-left)] rounded-full"></div>
                      {course.teacher}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Join as an Instructor */}
      <section className="maximus uni-padding-y grid md:grid-cols-2 items-center gap-8">
        <div>
          <div className="prose max-w-full md:prose-xl prose-h2:mt-0 prose-h2:mb-3 prose-p:mb-0 prose-h3:mb-0 prose-h3:mt-2">
            <h2>
              If You Are A Certified Teacher <br /> Then{" "}
              <span className="bg-signature text-transparent bg-clip-text">
                Join Us As An Instructor
              </span>
            </h2>
            <p className="text-xs md:text-sm max-w-[400px]">
              Unlock the opportunity to inspire and educate by joining our team
              of instructors. If you're a certified teacher, elevate your impact
              and share your expertise with learners worldwide.
            </p>
            <h3>Enjoy Many Perks</h3>
            <ul className="grid grid-cols-2 gap-x-4 ps-5">
              {[
                "Global Impact",
                "Flexible Schedule",
                "Innovative Teaching Tools",
                "Recognition And Reputation",
                "Creative Freedom",
                "Monetize Your Expertise",
                "Professional Development",
                "Networking Opportunities",
              ].map((perk) => (
                <li
                  className="text-xs md:text-sm my-1! font-semibold marker:text-lg marker:text-[var(--theme-gradient-top-left)]"
                  key={perk}
                >
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full grid max-md:place-items-center md:justify-end">
          <div className="max-md:w-11/12 h-[400px] 2xl:h-[500px] md:max-w-full md:h-full aspect-square mx-auto rounded-bl-full rounded-br-full outline-dashed outline-2 outline-offset-8 outline-[var(--theme-gradient-top-left)] bg-signature overflow-hidden grid grid-cols-2 grid-rows-2"></div>
        </div>
      </section>
      {/* Student's Testimonials */}
      <section className="py-[var(--uni-padding-value)] md:pb-[calc(var(--uni-padding-value)*3)]! bg-signature">
        <div className="maximus">
          <div className="pt-4 pb-12 max-w-[500px] mx-auto prose prose-headings:my-2 md:prose-xl text-center prose-p:text-background">
            <h2 className="text-white">Student&apos;s Testimonials</h2>
            <p className="text-xs">
              Here&apos;s what our students have to say about their
              transformative learning experience: Real stories, real growth.
              Discover firsthand the impact our courses have had on their lives.
            </p>
          </div>
          <div className="max-md:px-4 mx-auto">
            <Carousel
              plugins={[Autoplay({ delay: 5000 }), Fade({ active: false })]}
              opts={{
                loop: true,
              }}
            >
              <CarouselContent className="-ml-4">
                {[
                  {
                    avatar_img:
                      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=120&h=120&fit=crop",
                    profession: "Musician",
                    name: "Amara Patel",
                    ratings: 5,
                    message:
                      "Etech changed how I market my music online. The strategies are practical and easy to apply, and I've already boosted engagement on my platforms. The instructor support was outstanding—highly recommend for creative professionals.",
                  },
                  {
                    avatar_img:
                      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=120&h=120&fit=crop",
                    profession: "Analyst",
                    name: "Daniel Kim",
                    ratings: 5,
                    message:
                      "As a coding newbie, Etech's web development course was transformative. It balances theory and hands-on practice perfectly, and mentor support kept me motivated. Now I'm building real projects with confidence. Exactly what I needed.",
                  },
                  {
                    avatar_img:
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&h=120&fit=crop",
                    profession: "Engineer",
                    name: "Miguel Torres",
                    ratings: 4,
                    message:
                      "The UI/UX program at Etech delivered structured lessons with real utility. Design sprints and peer feedback refined my craft, and I feel more confident in prototyping workflows. Worth the investment.",
                  },
                  {
                    avatar_img:
                      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=120&h=120&fit=crop",
                    profession: "Manager",
                    name: "Olivia Chen",
                    ratings: 4,
                    message:
                      "Etech's marketing modules helped me guide campaigns strategically with confidence. The mix of analytics and creative strategy sharpened my leadership skills. Perfect for busy professionals who need quick, impactful training.",
                  },
                  {
                    avatar_img:
                      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=120&h=120&fit=crop",
                    profession: "Analyst",
                    name: "Michael Davis",
                    ratings: 5,
                    message:
                      "Etech's web development course mixes fun hands-on challenges with solid theory. The best part was the coding projects—they mirrored real-world problems and helped me build strong, practical skills.",
                  },
                  {
                    avatar_img:
                      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&h=120&fit=crop",
                    profession: "Artist",
                    name: "Isabella Russo",
                    ratings: 4,
                    message:
                      "I didn't expect a marketing course to speak to my creative side, but Etech's clear lessons and practical strategies helped me showcase my art online and reach a wider audience.",
                  },
                  {
                    avatar_img:
                      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=120&h=120&fit=crop",
                    profession: "Manager",
                    name: "David Lee",
                    ratings: 4,
                    message:
                      "Etech's UI/UX course was a career boost. Mastering tools like Figma and learning real workflow scenarios has leveled up my game. Now I guide product decisions with more design insight.",
                  },
                  {
                    avatar_img:
                      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=120&h=120&fit=crop",
                    profession: "Teacher",
                    name: "Robert Rodriguez",
                    ratings: 4,
                    message:
                      "I recommend Etech for educators too. Lessons are broken down clearly, and practical assignments brought concepts to life. I now feel ready to teach digital skills with confidence.",
                  },
                  {
                    avatar_img:
                      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=120&h=120&fit=crop",
                    profession: "Artist",
                    name: "Peter Jones",
                    ratings: 4,
                    message:
                      "Etech's marketing lessons gave me new tools to grow my art business. Focus on analytics, content strategy, and campaign planning paid off with real improvements in visibility.",
                  },
                  {
                    avatar_img:
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&h=120&fit=crop",
                    profession: "Designer",
                    name: "Lucas Ahmed",
                    ratings: 4,
                    message:
                      "Etech's marketing class blends modern strategy with hands-on tools and live Q&A. I left armed with actionable tactics and a fresh marketing mindset. Great for designers and strategists alike.",
                  },
                ].map((student) => (
                  <CarouselItem
                    key={student.name}
                    className="md:flex-[0_0_33.33%] pl-4"
                  >
                    <div>
                      <div className="p-4 bg-white rounded-3xl flex flex-col gap-5 drop-shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full size-14 border-2 border-[var(--theme-gradient-top-left)] overflow-hidden">
                            <img
                              src={student.avatar_img}
                              alt={student.name}
                              className="size-full"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <h3 className="text-[var(--theme-gradient-top-left)]">
                              {student.name}
                            </h3>
                            <span className="text-sm">
                              {student.profession}
                            </span>
                            <div className="flex items-center gap-1">
                              {Array(Math.floor(student.ratings)).map(
                                (_, i) => (
                                  <StarIcon
                                    className="size-[1em]!"
                                    key={"rating-star-" + { i }}
                                  />
                                )
                              )}
                            </div>
                          </div>
                        </div>
                        <p className="line-clamp-3 text-sm">
                          {student.message}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center mt-8 gap-4">
                <CarouselPrevious className="static -translate-y-0" />
                <CarouselNext className="static -translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      {/* Get in touch */}
      <section className="uni-padding-y max-md:py-30! relative -my-[calc(var(--uni-padding-value)*2)] md:bg-background md:rounded-tl-[calc(var(--uni-padding-value)*2)] md:rounded-br-[calc(var(--uni-padding-value)*2)] max-lg:px-2">
        <div className="max-w-4xl sm:w-3/4 p-4 md:p-12 bg-signature flex flex-col gap-4 items-center rounded-xl md:rounded-[32px] mx-auto">
          <div className="prose max-w-full md:prose-xl prose-headings:mt-0 prose-headings:mb-4 text-center">
            <h2 className="text-white">Get In Touch!</h2>
            <p className="mx-auto max-w-[400px] text-background text-sm">
              Subscribe us to get in touch and to enjoy discounts, promos and
              much more!
            </p>
          </div>
          <form className="flex max-[380px]:flex-col items-center gap-1 md:gap-4 w-full max-w-[500px]">
            <input
              type="email"
              placeholder="Enter your email..."
              className="bg-white rounded-lg py-2.5 px-4 md:py-4 md:px-6 block text-xs grow w-full"
            />
            <Button
              size="lg"
              type="submit"
              variant={"secondary"}
              className="md:text-lg py-2 h-auto md:py-3"
            >
              <span className="bg-signature text-transparent bg-clip-text font-bold">
                Subscribe
              </span>
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
