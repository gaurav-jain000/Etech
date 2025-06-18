import {
  BookOpenIcon,
  GraduationCapIcon,
  PlayCircleIcon,
  PlayIcon,
  SearchIcon,
  User2Icon,
} from "lucide-react";
import type { MetaArgs } from "react-router";
import { Button } from "~/components/ui/button";

export function meta({}: MetaArgs) {
  return [
    { title: "Etech" },
    { name: "description", content: "Welcome to Etech!" },
  ];
}

export default function Home() {
  return (
    <>
      <section className="grid md:grid-cols-2 items-center maximus gap-4 pb-8 min-h-[60vh]">
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
        <div className="h-[400px] w-full grid place-items-center">
          <div className="w-3/4 bg-signature aspect-square rounded-full outline-dashed outline-2 outline-offset-8 outline-[var(--theme-gradient-top-left)]" />
        </div>
      </section>
      <section className="py-8 bg-signature">
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
      <section className="maximus py-8">
        <div className="prose max-w-full prose-headings:my-3 text-center md:mb-8">
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
      <section className="maximus py-8 grid md:grid-cols-2 items-center gap-4">
        <div className="h-[400px] w-full grid place-items-center">
          <div className="[--collective-border-radius:64px] max-md:w-11/12 md:max-w-full md:h-full aspect-square mx-auto rounded-[var(--collective-border-radius)] outline-dashed outline-2 outline-offset-8 outline-[var(--theme-gradient-top-left)] overflow-hidden grid grid-cols-2 grid-rows-2">
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
                    <p className="text-xs md:text-sm">{benefit.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
