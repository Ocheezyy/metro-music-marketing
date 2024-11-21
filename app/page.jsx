import { Button } from "@/components/ui/button";
import Services from "./home-components/services-cards";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div>
      <div className="relative min-h-screen flex flex-col">
        {/* Full-screen background image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('/rolling-balls.webp?height=1080&width=1920')",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-50 z-10"
          aria-hidden="true"
        />
        <div className="relative z-20 flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="px-6 sm:pt-0 md:pt-4 lg:pt-6 rounded-full mb-8">
            <Image
              src="/metro-media.svg"
              alt="metro-media-logo"
              height={2}
              width={2}
              className="w-96 h-96 text-blue-600"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-4">
            Welcome to Metro Media
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 text-center mb-8 max-w-2xl">
            Amplify your sound. Build your brand. Reach the right fans.
          </p>
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-2 px-6"
          >
            <Link href="/#services">Explore Our Services</Link>
          </Button>
        </div>
      </div>
      <div className="flex-1">
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-900 to-gray-900"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Our Services
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-2xl/relaxed xl:text-3xl/relaxed">
                  Amplify Your Sound. Build Your Brand. Reach the Right Fans.
                </p>
              </div>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed">
                We specialize in helping artists like you break through the
                noise. Whether you&#39;re just starting out or ready to take
                your music to the next level, our tailored marketing solutions
                will help you connect with your audience, grow your presence,
                and turn listeners into loyal fans.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full pb-12 md:pb-24 lg:pb-32">
          <div className="container mx-auto px-4 md:px-6">
            <Services />
          </div>
        </section>
      </div>
    </div>
  );
}
