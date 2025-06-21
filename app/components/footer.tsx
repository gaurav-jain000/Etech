import { Link } from "react-router";
import { Logo, SocialIcons } from "./header";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="uni-padding-t md:pt-[calc(var(--uni-padding-value)*3)]! bg-signature bg-gradient-to-tl!">
      <div className="maximus grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <div className="grid xl:justify-center max-sm:col-span-2">
          <div className="space-y-5">
            <div className="prose max-w-full text-white!">
              <Logo theme="dark" />
              <p className="text-sm text-background">
                Explore a transformative approach to skill development on our
                online learning platform.
              </p>
            </div>
            <SocialIcons />
          </div>
        </div>
        <div className="grid xl:justify-center">
          <div className="space-y-2 md:space-y-4">
            <div className="prose max-w-full prose-headings:text-white">
              <h3>Company</h3>
            </div>
            <ul className="text-background space-y-1 md:space-y-3">
              <li>
                <Link className="hover:text-white duration-100 text-sm" to="#">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-white duration-100 text-sm" to="#">
                  Services
                </Link>
              </li>
              <li>
                <Link className="hover:text-white duration-100 text-sm" to="#">
                  Community
                </Link>
              </li>
              <li>
                <Link className="hover:text-white duration-100 text-sm" to="#">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid xl:justify-center">
          <div className="space-y-2 md:space-y-4">
            <div className="prose max-w-full prose-headings:text-white">
              <h3>Support</h3>
            </div>
            <ul className="text-background space-y-1 md:space-y-3">
              <li>
                <Link className="hover:text-white duration-100 text-sm" to="#">
                  Help Center
                </Link>
              </li>
              <li>
                <Link className="hover:text-white duration-100 text-sm" to="#">
                  Tweet @ us
                </Link>
              </li>
              <li>
                <Link className="hover:text-white duration-100 text-sm" to="#">
                  Webinars
                </Link>
              </li>
              <li>
                <Link className="hover:text-white duration-100 text-sm" to="#">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid xl:justify-center">
          <div className="space-y-2 md:space-y-4">
            <div className="prose max-w-full prose-headings:text-white">
              <h3>Links</h3>
            </div>
            <ul className="text-background space-y-1 md:space-y-3">
              <li>
                <Link className="hover:text-white duration-100 text-sm" to="#">
                  Courses
                </Link>
              </li>
              <li>
                <Link className="hover:text-white duration-100 text-sm" to="#">
                  Become Instructor
                </Link>
              </li>
              <li>
                <Link className="hover:text-white duration-100 text-sm" to="#">
                  Service
                </Link>
              </li>
              <li>
                <Link className="hover:text-white duration-100 text-sm" to="#">
                  All in One
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid xl:justify-center">
          <div className="space-y-2 md:space-y-4">
            <div className="prose max-w-full prose-headings:text-white">
              <h3>Contact Us</h3>
            </div>
            <ul className="text-background space-y-1 md:space-y-3">
              <li>
                <a
                  className="hover:text-white duration-100 text-sm"
                  href="tel:+15551234567"
                >
                  +1(555) 123-4567
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white duration-100 text-sm break-all"
                  href="mailto:etechinfo@gmail.com"
                >
                  etechinfo@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Separator className="maximus bg-gradient-to-r from-transparent via-muted to-transparent mt-6" />
      <div className="text-center text-xs py-4 text-background">
        Copyright &copy; 2023 Etech. All rights reserved.
      </div>
    </footer>
  );
}
