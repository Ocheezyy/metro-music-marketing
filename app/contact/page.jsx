"use client"

import {zodResolver} from "@hookform/resolvers/zod";
import contactSchema from "@/app/contact/contact-schema";
import {useForm} from "react-hook-form";

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Textarea} from "@/components/ui/textarea";
import {CheckCircle, Send} from "lucide-react";
import {useState} from "react";
import ThankYou from "@/app/contact/thank-you";


export default function Page(props) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const form = useForm({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            city: "",
            reasonForWork: ""
        }
    })

    const onSubmit = (values) => {
        setIsSubmitting(true);
        console.log(values);
        setIsSubmitted(true);
    }

    if (isSubmitted) {
        return <ThankYou />
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 p-4">
            <Card className="w-full max-w-md bg-gray-800 bg-opacity-50 backdrop-blur-lg border-gray-700 text-gray-100">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Contact Us</CardTitle>
                    <CardDescription className="text-center text-gray-400">
                        We&#39;d love to hear from you. Send us a message and we&#39;ll respond as soon as possible.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="space-y-2">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100"
                                                />
                                            </FormControl>
                                            {/*<FormDescription>*/}
                                            {/*    First and Last Name*/}
                                            {/*</FormDescription>*/}
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="space-y-2">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100"
                                                />
                                            </FormControl>
                                            {/*<FormDescription>*/}
                                            {/*    Your email address*/}
                                            {/*</FormDescription>*/}
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="space-y-2">
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Phone</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100"
                                                />
                                            </FormControl>
                                            {/*<FormDescription>*/}
                                            {/*    Your phone number*/}
                                            {/*</FormDescription>*/}
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="space-y-2">
                                <FormField
                                    control={form.control}
                                    name="city"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>City</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100"
                                                />
                                            </FormControl>
                                            {/*<FormDescription>*/}
                                            {/*    Your home city*/}
                                            {/*</FormDescription>*/}
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="space-y-2">
                                <FormField
                                    control={form.control}
                                    name="reasonForWork"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Primary Reason for working with us</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    {...field}
                                                    className="bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100"
                                                />
                                            </FormControl>
                                            {/*<FormDescription>*/}
                                            {/*    Primary reason for working with us*/}
                                            {/*</FormDescription>*/}
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 ease-in-out transform hover:scale-105"
                            >
                                <Send className="mr-2 h-4 w-4"/> Send Message
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>


    )
}