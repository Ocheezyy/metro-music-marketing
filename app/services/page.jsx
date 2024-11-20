import Services from "@/app/home-components/services-cards";

export default function ServicesPage() {
  return (
    <div className="flex-1">
      <section
        id="services"
        className="w-full pb-12 md:pb-24 lg:pb-32 xl:pb-48 pt-4 md:pt-6 lg:pt-12 xl:pt-24 bg-gradient-to-b from-blue-900 to-gray-900"
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
              We specialize in helping artists like you break through the noise.
              Whether you&#39;re just starting out or ready to take your music
              to the next level, our tailored marketing solutions will help you
              connect with your audience, grow your presence, and turn listeners
              into loyal fans.
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
  );
}
