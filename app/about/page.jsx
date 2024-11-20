import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Zap, ChevronRight } from "lucide-react";

export default function AboutUs() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-900 to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              About Us
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-2xl/relaxed">
              Empowering artists to reach new heights in their music careers
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg border-gray-700 text-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  Our Story
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300">
                  Founded in 2020, Metro Media was born from a passion for music
                  and a desire to help independent artists thrive in the digital
                  age. Our team of industry veterans and tech innovators came
                  together with a shared vision: to democratize music promotion
                  and level the playing field for talented artists everywhere.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg border-gray-700 text-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-6 h-6 mr-2" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300">
                  At Metro Media, our mission is to empower artists with the
                  tools, strategies, and support they need to build sustainable
                  careers in music. We believe that great talent deserves to be
                  heard, and we&#39;re committed to helping artists connect with
                  their audience and achieve their goals.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg border-gray-700 text-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-6 h-6 mr-2" />
                  Our Approach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300">
                  We combine industry expertise with cutting-edge technology to
                  deliver results-driven promotion strategies. Our approach is
                  always artist-centric, tailoring our services to each
                  client&#39;s unique sound, style, and career goals. We stay
                  ahead of industry trends to ensure our clients are always one
                  step ahead.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/*<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 bg-opacity-50 backdrop-blur-lg">*/}
      {/*    <div className="container px-4 md:px-6">*/}
      {/*        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">*/}
      {/*            Meet Our Team*/}
      {/*        </h2>*/}
      {/*        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">*/}
      {/*            {[*/}
      {/*                { name: "Alex Johnson", role: "Founder & CEO", image: "/placeholder.svg" },*/}
      {/*                { name: "Samantha Lee", role: "Head of Artist Relations", image: "/placeholder.svg" },*/}
      {/*                { name: "Marcus Chen", role: "Lead Strategist", image: "/placeholder.svg" },*/}
      {/*                { name: "Olivia Taylor", role: "Social Media Director", image: "/placeholder.svg" },*/}
      {/*                { name: "David Patel", role: "Tech Innovation Lead", image: "/placeholder.svg" },*/}
      {/*                { name: "Emma Rodriguez", role: "Content Creation Manager", image: "/placeholder.svg" },*/}
      {/*            ].map((member, index) => (*/}
      {/*                <Card key={index} className="bg-gray-800 bg-opacity-50 backdrop-blur-lg border-gray-700 text-gray-100">*/}
      {/*                    <CardHeader>*/}
      {/*                        <Avatar className="w-24 h-24 mx-auto">*/}
      {/*                            <AvatarImage src={member.image} alt={member.name} />*/}
      {/*                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>*/}
      {/*                        </Avatar>*/}
      {/*                        <CardTitle className="text-center mt-4">{member.name}</CardTitle>*/}
      {/*                        <CardDescription className="text-center text-gray-400">{member.role}</CardDescription>*/}
      {/*                    </CardHeader>*/}
      {/*                </Card>*/}
      {/*            ))}*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*</section>*/}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Boost Your Music Career?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let&#39;s create a tailored strategy to amplify your sound and
              grow your fanbase.
            </p>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              size="lg"
            >
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
