import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Music, Users, Paintbrush, Globe, Heart } from 'lucide-react';

export default function MusicPromoterServicesDark() {
  return (

        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-900 to-gray-900">
            <div className="container px-4 md:px-6">
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
          <section id="services" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Social Media Management",
                    icon: Instagram,
                    subtitle: "Turn Likes Into Fans",
                    description: "Your social media should be as dynamic as your music. We create eye-catching content, engage your audience, and optimize your profiles to grow your following. From Instagram Reels to TikTok trends, we'll make sure your voice is heard on every platform."
                  },
                  {
                    title: "Music Promotion",
                    icon: Music,
                    subtitle: "Get Your Tracks On Repeat",
                    description: "Your music deserves to be heard. We pitch your songs to top playlists, coordinate strategic ad campaigns, and connect you with the fans who will stream, share, and love your music."
                  },
                  {
                    title: "Brand Development",
                    icon: Paintbrush,
                    subtitle: "Define Your Artist Identity",
                    description: "Your brand is your story, your style, your vibe. We'll help you craft a unique image and narrative that resonates with fans and the industry alike. From logos to album visuals, we'll build a brand that reflects your artistry."
                  },
                  {
                    title: "Website & EPK Creation",
                    icon: Globe,
                    subtitle: "Your Online HQ",
                    description: "A sleek, professional website and electronic press kit (EPK) are essential for bookings, media coverage, and fan engagement. We'll design and build your digital home, making sure it's as impressive as your music."
                  },
                  {
                    title: "Fan Engagement Campaigns",
                    icon: Heart,
                    subtitle: "Create Superfans",
                    description: "Fans are the lifeblood of your career. We'll help you stay connected through email newsletters, SMS campaigns, and exclusive offers that keep your audience excited and engaged."
                  },
                  {
                    title: "Additional Services",
                    icon: Users,
                    subtitle: "Tailored to Every Artist's Needs",
                    description: "We offer SEO optimization to help fans discover your music, content strategy to keep you relevant, and monetization strategies to unlock new income streams."
                  }
                ].map((service, index) => (
                    <Card key={index} className="bg-gray-800 bg-opacity-50 backdrop-blur-lg border-gray-700 text-gray-100 shadow-lg shadow-blue-500/20">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <service.icon className="w-6 h-6 mr-2" />
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <h3 className="font-semibold mb-2">{service.subtitle}</h3>
                        <p className="text-sm text-gray-300">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                ))}
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 bg-opacity-50 backdrop-blur-lg">
            <div className="container px-4 md:px-6">
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