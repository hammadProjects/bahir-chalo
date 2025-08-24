import BgGradient from "@/components/common/BgGradient";
import { Button } from "@/components/ui/button";
import { steps } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <BgGradient />
      <section className="py-30 text-center space-y-10">
        <h1 className="text-3xl lg:text-5xl font-bold lg:leading-14">
          Simplifying Study Abroad{" "}
          <span className="">
            <span className="inline-block relative">
              with AI{" "}
              <span className="rounded-md bg-teal-400/50 absolute top-0 -right-2 h-10 lg:h-14 w-26 lg:w-40 -rotate-2 -z-10" />
            </span>
            <br />
            and Expert Guidance
          </span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto">
          Seek personalized guidance from AI and connect with expert consultants
          to simplify every step of your study abroad journey - from courses to
          scholarships.
        </p>
        <div className="space-x-4">
          <Button className="bg-linear-to-r from-emerald-400 to-teal-600 hover:from-teal-600 hover:to-emerald-400 hover:scale-110 text-lg !px-6 py-6 rounded-full transition-all duration-300">
            Get Started <ArrowRight />
          </Button>
          <Button
            className="bg-muted/60 border-none px-6 py-6 text-lg rounded-full hover:scale-110 transition-all duration-300"
            variant={"outline"}
          >
            Find consultants
          </Button>
        </div>
      </section>

      {/* <section className="py-20 text-center space-y-6">
        <h1 className="text-3xl font-bold max-w-lg mx-auto">
          Everything You Need to start Your{" "}
          <span className="text-teal-600">Study Abroad Journey</span>
        </h1>
        <p className="max-w-xl mx-auto text-muted-foreground">
          From exploring the right courses to securing scholarships and getting
          expert advice, our platform combines AI-powered tools and professional
          guidance — all in one place.
        </p>
      </section> */}

      <section className="flex flex-col items-center justify-center bg-gray-50 py-20 px-4">
        <h3 className="text-teal-600 font-bold text-xl">What to Expect?</h3>
        <p className="text-center text-2xl md:text-3xl teal-600 font-bold max-w-lg mt-4">
          Get matched with scholarships in just a few clicks.
        </p>
        <div className="mt-10 max-w-3xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map(({ icon, title, description }, index) => (
            <div
              className="relative border-transparent hover:border-emerald-400 transition-all text-center border-[2px] p-6 rounded-md"
              key={index}
            >
              <div className="w-16 h-16 mb-6 bg-gradient-to-r from-emerald-200/30 to-emerald-200/10  text-emerald-500/80 rounded-lg flex items-center justify-center mx-auto">
                {icon}
              </div>
              <h4 className="font-semibold text-xl mb-1">{title}</h4>
              <p className="text-sm text-muted-foreground">{description}</p>
              {index < 2 && (
                <ArrowRight
                  size={20}
                  className="hidden lg:block absolute -right-4 top-5/12 text-emerald-400/80"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center justify-center py-20 px-4">
        <h4 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold">
          From Dreaming to Departing — Let&apos;s Make It Happen
        </h4>
        <p className="md:text-lg text-muted-foreground mt-2 max-w-xl mx-auto text-center">
          The earlier you start, the smoother your study abroad process becomes.
          Begin today.
        </p>
        <Button
          className="mt-6 text-white bg-linear-to-r from-emerald-400 to-teal-600 hover:from-teal-600 hover:to-emerald-400 transition-all"
          variant={"link"}
        >
          <Link className="group flex items-center px-3" href={"/"}>
            <span className="mr-1 group-hover:mr-2 transition-margin duration-200">
              Get Started
            </span>
            <ArrowRight />
          </Link>
        </Button>
      </section>
    </>
  );
}
