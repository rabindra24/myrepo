"use client";
import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import "./style.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "../ui/use-toast";

const formSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  number: z.string().min(10).max(10),
  message: z.string(),
});

const ContactSection = () => {

  const {toast} = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      message: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
        title : 'WE WILL CONTACT YOU 😍',
        description : 'Have a good day.'
    })
  };

  return (
    <div className=" l-sign-up md:px-20 px-5">
      <div className="flex w-full py-10 md:flex-row flex-col justify-between gap-10">
        <div className="flex-1">
          <h3 className="text-white md:text-3xl text-xl mb-3">TAKE THE SILK ROAD TO</h3>
          <h4 className="text-[#04E4FF] font-bold  md:text-5xl text-3xl">Digitizing your Business Growth</h4>
        </div>
        <div className="flex-1 space-y-5 relative z-10">
          <h4 className="text-white md:text-2xl text-lg">Start a conversation with us</h4>
          <Form {...form}>
            <form
              action=""
              onSubmit={form.handleSubmit(handleSubmit)}
              className="flex w-full flex-col max-w-[600px] space-y-3"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        placeholder="Enter your name"
                        className="bg-transparent text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        placeholder="Email* "
                        className="text-white bg-transparent"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        placeholder="Phone"
                        className="text-white bg-transparent"
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Your Query"
                        className="text-white bg-transparent"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="text-white hover:bg-transparent bg-transparent border-white border-2">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
