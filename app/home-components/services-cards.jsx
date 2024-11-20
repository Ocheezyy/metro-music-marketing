"use client";

import {
  Globe,
  Heart,
  Instagram,
  Music,
  Paintbrush,
  Users,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import MusicPromotion from "@/app/home-components/dialogs/music-promotion";
import SocialMediaManagement from "@/app/home-components/dialogs/social-media-management";
import BrandDevelopment from "@/app/home-components/dialogs/brand-development";
import WebsiteEPK from "@/app/home-components/dialogs/website-epk";
import FanEngagement from "@/app/home-components/dialogs/fan-engagement";
import AdditionalServices from "@/app/home-components/dialogs/additional-services";

const services = [
  {
    title: "Social Media Management",
    icon: Instagram,
    subtitle: "Turn Likes Into Fans",
    description:
      "Your social media should be as dynamic as your music. We create eye-catching content, engage your audience, and optimize your profiles to grow your following. From Instagram Reels to TikTok trends, we'll make sure your voice is heard on every platform.",
    dialogComponent: SocialMediaManagement,
  },
  {
    title: "Music Promotion",
    icon: Music,
    subtitle: "Get Your Tracks On Repeat",
    description:
      "Your music deserves to be heard. We pitch your songs to top playlists, coordinate strategic ad campaigns, and connect you with the fans who will stream, share, and love your music.",
    dialogComponent: MusicPromotion,
  },
  {
    title: "Brand Development",
    icon: Paintbrush,
    subtitle: "Define Your Artist Identity",
    description:
      "Your brand is your story, your style, your vibe. We'll help you craft a unique image and narrative that resonates with fans and the industry alike. From logos to album visuals, we'll build a brand that reflects your artistry.",
    dialogComponent: BrandDevelopment,
  },
  {
    title: "Website & EPK Creation",
    icon: Globe,
    subtitle: "Your Online HQ",
    description:
      "A sleek, professional website and electronic press kit (EPK) are essential for bookings, media coverage, and fan engagement. We'll design and build your digital home, making sure it's as impressive as your music.",
    dialogComponent: WebsiteEPK,
  },
  {
    title: "Fan Engagement Campaigns",
    icon: Heart,
    subtitle: "Create Superfans",
    description:
      "Fans are the lifeblood of your career. We'll help you stay connected through email newsletters, SMS campaigns, and exclusive offers that keep your audience excited and engaged.",
    dialogComponent: FanEngagement,
  },
  {
    title: "Additional Services",
    icon: Users,
    subtitle: "Tailored to Every Artist's Needs",
    description:
      "We offer SEO optimization to help fans discover your music, content strategy to keep you relevant, and monetization strategies to unlock new income streams.",
    dialogComponent: AdditionalServices,
  },
];

const Service = ({ service, idx }) => {
  const Icon = service.icon;
  const DialogComponent = service.dialogComponent;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card
          key={idx}
          className="bg-gray-800 bg-opacity-50 backdrop-blur-lg border-gray-700 text-gray-100 shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 cursor-pointer group"
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center">
                <Icon className="w-6 h-6 mr-2" />
                {service.title}
              </span>
              <ArrowRight className="w-5 h-5 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold mb-2">{service.subtitle}</h3>
            <p className="text-sm text-gray-300">{service.description}</p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogComponent />
    </Dialog>
  );
};

const Services = () => {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, idx) => (
        <Service key={`service-${idx}`} service={service} idx={idx} />
      ))}
    </div>
  );
};

export default Services;
