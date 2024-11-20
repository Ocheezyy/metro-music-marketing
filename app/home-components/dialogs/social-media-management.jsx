import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, TrendingUp, UserCheck, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function SocialMediaManagement() {
  return (
    <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-hidden bg-gray-900 text-gray-100">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-gray-100">
          Social Media Management for Musicians
        </DialogTitle>
        <DialogDescription className="text-gray-400">
          Discover how we can transform social platforms into your stage
        </DialogDescription>
      </DialogHeader>
      <ScrollArea className="mt-4 h-[calc(90vh-100px)] w-full rounded-md border border-gray-700 p-6 bg-gray-800">
        <div className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">
            Transform Social Platforms Into Your Stage
          </h2>

          <p className="text-lg text-gray-300">
            Social media is one of the most powerful tools for artists to grow
            their audience and engage with fans worldwide. However, navigating
            the ever-changing landscape of platforms like Instagram, TikTok, and
            Twitter can be overwhelming. That&#39;s why we take the reins,
            ensuring your profiles shine and your audience stays engaged.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-100">
            Our services include:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="text-xl font-semibold mb-2 flex items-center text-blue-300">
                <Calendar className="mr-2" />
                Customized Content Calendars
              </h4>
              <p className="text-gray-300">
                We&#39;ll create a monthly schedule filled with eye-catching
                posts, videos, reels, and stories that reflect your style and
                voice.
              </p>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="text-xl font-semibold mb-2 flex items-center text-blue-300">
                <UserCheck className="mr-2" />
                Profile Optimization
              </h4>
              <p className="text-gray-300">
                From crafting SEO-friendly bios to optimizing your profile
                links, we&#39;ll make sure fans and industry professionals can
                easily find and connect with you.
              </p>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="text-xl font-semibold mb-2 flex items-center text-blue-300">
                <MessageCircle className="mr-2" />
                Engagement Management
              </h4>
              <p className="text-gray-300">
                Never miss an opportunity to connect with your fans. We handle
                likes, comments, and DMs to keep your community thriving.
              </p>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="text-xl font-semibold mb-2 flex items-center text-blue-300">
                <TrendingUp className="mr-2" />
                Growth Tracking
              </h4>
              <p className="text-gray-300">
                With advanced analytics, we monitor your progress and refine
                strategies to help you gain followers, boost engagement, and
                grow your fanbase.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-blue-900 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">
              Why It Matters
            </h3>
            <p className="text-lg text-gray-300">
              A well-managed social media presence can turn casual listeners
              into loyal superfans, helping you expand your reach and monetize
              your music.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-100">
              Ready to Amplify Your Social Media Presence?
            </h3>
            <p className="text-lg mb-4 text-gray-300">
              Let&#39;s create a tailored social media strategy to boost your
              online presence and connect with your fans. Our team of experts is
              ready to help you take your music career to the next level.
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
              social media management for musicians, Instagram for artists, grow
              music followers, TikTok music promotion, social media growth for
              artists
            </p>
          </div>
        </div>
      </ScrollArea>
    </DialogContent>
  );
}
