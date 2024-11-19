import { Button } from "@/components/ui/button";
import Services from "@/app/home-components/services/services";

export default function Home() {
  return (

        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-900 to-gray-900">
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
                  We specialize in helping artists like you break through the noise. Whether you&#39;re just starting out or ready to take your music to the next level, our tailored marketing solutions will help you connect with your audience, grow your presence, and turn listeners into loyal fans.
                </p>
              </div>
            </div>
          </section>
          <section id="services" className="w-full pb-12 md:pb-24 lg:pb-32">
            <div className="container mx-auto px-4 md:px-6">
              <Services />
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 bg-opacity-50 backdrop-blur-lg">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Amplify Your Music Career?
                  </h2>
                  <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Let&#39;s create a tailored strategy to boost your music and build your fanbase.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
  )
}