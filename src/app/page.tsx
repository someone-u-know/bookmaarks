"use client";

import Image from "next/image";
import Button from "@/components/ui/button";
import SecondaryButton from "@/components/ui/secondaryButton";
import Footer from "@/components/ui/footer";
import { CaretRight, Gear, Moon, Sun, User } from "@phosphor-icons/react";
import LightButton from "@/components/ui/lightButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="relative flex justify-between mt-2 items-center px-8 py-6">
        {/* Logo + Name */}
        <div className="text-xl font-bold flex items-center gap-1 z-10">
          <Image src="/favicon.svg" alt="Logo" width={28} height={28} />
          Bookmaarks
        </div>

        {/* Centered Link (only visible on md and up) */}
        <a
          href="#"
          className="hidden md:block absolute left-1/2 transform -translate-x-1/2 text-sm font-semibold decoration-2 underline underline-offset-4"
        >
          Try our Extension
        </a>

        {/* Right Side: Button + Icon */}
        <div className="flex items-center gap-2 text-sm z-10">
          <SecondaryButton>Login / SignUp</SecondaryButton>
          <Sun size={36} className="bg-[#e6e6e6] p-2 rounded-md" />
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center text-center mt-24  px-4">
        <h1 className="text-3xl md:text-5xl tracking-tight font-bold max-w-4xl leading-tight">
          Your Second Brain for{" "}
          <span className="bg-[#FFC1B6] px-1">Bookmarks.</span>
        </h1>
        <p className="text-[#1e1e1e] font-semibold text-lg leading-tight mt-2 max-w-3xl">
          AI-powered bookmark manager that auto-tags, summarizes, and sorts
          <br /> — so you don't have to.
        </p>
        <div className="mt-6">
          <Button className="flex items-center">
            Start making your Internet Organised
            <CaretRight size={16} weight="bold"></CaretRight>
          </Button>
        </div>

        {/* Card Graphic */}
        {/* <div className="mt-16 relative w-72 h-80">
          <div className="absolute top-4 left-4 w-full h-full bg-[#FF6B4D] rotate-[-6deg] rounded-xl opacity-70" />
          <div className="absolute top-2 left-2 w-full h-full bg-[#FF6B4D] rotate-[6deg] rounded-xl opacity-70" />
          <div className="relative w-full h-full bg-[#FF6B4D] rounded-xl flex items-center justify-center">
            <p className="text-white text-lg font-semibold px-6 text-center">
              We don’t let you forget any website you liked
            </p>
          </div>
        </div> */}

        <div className="mt-16">
          <Image
            src="/herosvgimage.svg"
            alt="Illustration"
            width={540}
            height={600}
            className="mx-auto"
          />
        </div>

        {/* Version Notice */}
        <div className="mt-12 bg-[#FF6B4D] text-[#1e1e1e] text-lg px-8 py-4 rounded-md">
          <strong>
            This Version [ 0.1.0 ] is Just 0.1% of what we want to create
          </strong>
        </div>

        <div className="mt-4">
          <LightButton className="flex items-center">Start making your Internet Organised 
          <CaretRight size={16} weight="bold"></CaretRight>
          </LightButton>
          
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16">
        <Footer />
      </footer>
    </div>
  );
}
