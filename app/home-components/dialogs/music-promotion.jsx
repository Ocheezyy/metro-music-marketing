import { Button } from "@/components/ui/button";
import { PlayCircle, TrendingUp, Users, Music } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";

export default function MusicPromotion() {
  return (
    <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-hidden bg-gray-900 text-gray-100">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-gray-100">
          Music Promotion Services
        </DialogTitle>
        <DialogDescription className="text-gray-400">
          Discover how we can help get your tracks in front of the right
          audience
        </DialogDescription>
      </DialogHeader>
      <ScrollArea className="mt-4 h-[calc(90vh-100px)] w-full rounded-md border border-gray-700 p-6 bg-gray-800">
        <div className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">
            Get Your Tracks in Front of the Right Audience
          </h2>

          <p className="text-lg text-gray-300">
            Creating amazing music is just the beginning—getting it heard is
            where the magic happens. With so many artists competing for
            attention, you need a strategic promotion plan to break through the
            noise. That&#39;s exactly what we deliver.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-100">
            Our music promotion services include:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="text-xl font-semibold mb-2 flex items-center text-blue-300">
                <PlayCircle className="mr-2" />
                Playlist Placement
              </h4>
              <p className="text-gray-300">
                We pitch your tracks to top Spotify, Apple Music, and YouTube
                playlists, giving your songs the visibility they deserve.
              </p>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="text-xl font-semibold mb-2 flex items-center text-blue-300">
                <TrendingUp className="mr-2" />
                Targeted Ad Campaigns
              </h4>
              <p className="text-gray-300">
                Using platforms like Facebook, Instagram, and YouTube, we run
                ads that target fans based on their music preferences, ensuring
                your sound reaches listeners who love your genre.
              </p>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="text-xl font-semibold mb-2 flex items-center text-blue-300">
                <Users className="mr-2" />
                Influencer Partnerships
              </h4>
              <p className="text-gray-300">
                Collaborating with music influencers and bloggers, we create
                buzz around your releases, helping you tap into new audiences.
              </p>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="text-xl font-semibold mb-2 flex items-center text-blue-300">
                <Music className="mr-2" />
                Release Campaigns
              </h4>
              <p className="text-gray-300">
                From teaser videos to launch countdowns, we&#39;ll craft a
                promotional campaign that builds excitement around your singles,
                EPs, or albums.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-blue-900 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">
              Why It Matters
            </h3>
            <p className="text-lg text-gray-300">
              Strategic music promotion not only boosts your streams and
              downloads but also builds long-term connections with fans who will
              follow your journey. It&#39;s about creating a sustainable career,
              not just a one-hit wonder.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-100">
              Ready to Amplify Your Music?
            </h3>
            <p className="text-lg mb-4 text-gray-300">
              Let&#39;s create a tailored strategy to boost your music and build
              your fanbase. Our team of experts is ready to help you take your
              music career to the next level.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white"
              >
                Get Started
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <h4 className="font-semibold mb-2">SEO Keywords:</h4>
            <p>
              music promotion services, Spotify playlist pitching, promote music
              online, best ways to market music, indie artist promotion
            </p>
          </div>
        </div>
      </ScrollArea>
    </DialogContent>
  );
}
