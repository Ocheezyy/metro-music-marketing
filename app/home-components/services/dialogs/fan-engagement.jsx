"use client"

import {Button} from "@/components/ui/button";
import {ScrollArea} from "@/components/ui/scroll-area";
import {DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Mail, MessageSquare, Gift, TrendingUp} from "lucide-react";


export default function FanEngagement() {
    
    return (
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-hidden bg-gray-900 text-gray-100">
            <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-100">Fan Engagement Services for Musicians</DialogTitle>
                <DialogDescription className="text-gray-400">
                    Turn listeners into lifelong fans
                </DialogDescription>
            </DialogHeader>
            <ScrollArea className="mt-4 h-[calc(90vh-100px)] w-full rounded-md border border-gray-700 p-6 bg-gray-800">
                <div className="space-y-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">Turn Listeners Into Lifelong Fans</h2>

                    <p className="text-lg text-gray-300">
                        Your fans are your greatest asset, and keeping them engaged is the key to a sustainable music career. We&#39;ll help you nurture these relationships with creative fan engagement strategies that keep your audience excited and invested.
                    </p>

                    <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-100">Our services include:</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-700 p-4 rounded-lg">
                            <h4 className="text-xl font-semibold mb-2 flex items-center text-blue-300">
                                <Mail className="mr-2" />
                                Email Marketing
                            </h4>
                            <p className="text-gray-300">Build and maintain a mailing list to share updates, exclusive content, and merch drops.</p>
                        </div>

                        <div className="bg-gray-700 p-4 rounded-lg">
                            <h4 className="text-xl font-semibold mb-2 flex items-center text-blue-300">
                                <MessageSquare className="mr-2" />
                                SMS Campaigns
                            </h4>
                            <p className="text-gray-300">Connect with your fans directly through text messages to announce shows, new releases, or special offers.</p>
                        </div>

                        <div className="bg-gray-700 p-4 rounded-lg">
                            <h4 className="text-xl font-semibold mb-2 flex items-center text-blue-300">
                                <Gift className="mr-2" />
                                Exclusive Offers and Merch
                            </h4>
                            <p className="text-gray-300">Create VIP experiences, giveaways, and limited-edition merchandise that keep fans loyal and engaged.</p>
                        </div>

                        <div className="bg-gray-700 p-4 rounded-lg">
                            <h4 className="text-xl font-semibold mb-2 flex items-center text-blue-300">
                                <TrendingUp className="mr-2" />
                                Fan Growth Strategies
                            </h4>
                            <p className="text-gray-300">Develop and implement strategies to expand your fanbase and increase engagement across all platforms.</p>
                        </div>
                    </div>

                    <div className="mt-8 bg-blue-900 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-300">Why It Matters</h3>
                        <p className="text-lg text-gray-300">
                            Engaged fans are more likely to stream your music, attend your shows, and share your work with others, helping you grow organically.
                        </p>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-100">Ready to Supercharge Your Fan Engagement?</h3>
                        <p className="text-lg mb-4 text-gray-300">
                            Let&#39;s create a tailored fan engagement strategy that turns your listeners into a loyal, passionate fanbase. Our team of experts is ready to help you build lasting connections with your audience.
                        </p>
                        <Button size="lg" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
                    </div>

                    <div className="mt-8 text-sm text-gray-400">
                        <h4 className="font-semibold mb-2">SEO Keywords:</h4>
                        <p>fan engagement for artists, email marketing for musicians, how to engage music fans, SMS marketing for artists, grow a music fanbase</p>
                    </div>
                </div>
            </ScrollArea>
        </DialogContent>
    )
}