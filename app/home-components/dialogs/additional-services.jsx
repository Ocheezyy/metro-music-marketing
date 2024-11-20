import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Search, FileText, DollarSign } from "lucide-react";
import Link from "next/link";

export default function AdditionalServices() {
  return (
    <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-hidden bg-gray-900 text-gray-100">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-gray-100">
          Additional Services for Musicians
        </DialogTitle>
        <DialogDescription className="text-gray-400">
          Helping you succeed on every level
        </DialogDescription>
      </DialogHeader>
      <ScrollArea className="mt-4 h-[calc(90vh-100px)] w-full rounded-md border border-gray-700 p-6 bg-gray-800">
        <div className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">
            Helping You Succeed on Every Level
          </h2>

          <p className="text-lg text-gray-300">
            Our comprehensive suite of services is designed to support your
            music career from every angle. From improving your online visibility
            to developing sustainable income streams, we&lsquo;ve got you
            covered.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-100">
            Our additional services include:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="text-xl font-semibold mb-2 flex items-center text-blue-300">
                <Search className="mr-2" />
                SEO Optimization for Musicians
              </h4>
              <p className="text-gray-300">
                Rank higher on Google and make it easy for new fans to discover
                your music online. We&#39;ll optimize your website and content
                to improve your search engine visibility.
              </p>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="text-xl font-semibold mb-2 flex items-center text-blue-300">
                <FileText className="mr-2" />
                Content Strategy
              </h4>
              <p className="text-gray-300">
                Stay consistent and relevant with a roadmap for your music
                marketing content. We&#39;ll help you plan and create engaging
                content that resonates with your audience.
              </p>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="text-xl font-semibold mb-2 flex items-center text-blue-300">
                <DollarSign className="mr-2" />
                Monetization Strategies
              </h4>
              <p className="text-gray-300">
                Unlock new income streams through merch, exclusive content, and
                more. We&#39;ll help you diversify your revenue sources and
                maximize your earning potential.
              </p>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="text-xl font-semibold mb-2 flex items-center text-blue-300">
                <Search className="mr-2" />
                Performance Analytics
              </h4>
              <p className="text-gray-300">
                Track your progress and make data-driven decisions. We&#39;ll
                provide insights into your online performance, audience
                engagement, and revenue streams.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-blue-900 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">
              Why It Matters
            </h3>
            <p className="text-lg text-gray-300">
              These additional services complement our core offerings, ensuring
              that every aspect of your music career is optimized for success.
              By improving your online visibility, creating engaging content,
              and diversifying your income streams, you&#39;ll be better
              positioned to thrive in the competitive music industry.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-100">
              Ready to Take Your Music Career to the Next Level?
            </h3>
            <p className="text-lg mb-4 text-gray-300">
              Let&#39;s work together to optimize your online presence, create
              compelling content, and develop sustainable income streams. Our
              team of experts is ready to help you succeed on every level.
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
              SEO for musicians, music content strategy, monetization for
              artists, music career optimization, artist revenue streams
            </p>
          </div>
        </div>
      </ScrollArea>
    </DialogContent>
  );
}
