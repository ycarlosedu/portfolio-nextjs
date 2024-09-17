"use client";

import { Typography } from "@/components/ui/Typography";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "./ui/Button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/TextArea";

const MAX_NAME_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 1000;

const formSchema = z.object({
  name: z.string().min(3).max(MAX_NAME_LENGTH),
  email: z.string().email(),
  message: z.string().min(10).max(MAX_MESSAGE_LENGTH)
});

type SendMeAMessageFormValues = z.infer<typeof formSchema>;

export function SendMeAMessage() {
  const form = useForm<SendMeAMessageFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  function onSubmit(values: SendMeAMessageFormValues) {
    console.log(values);
    form.reset();
    toast.success("Message sent successfully!");
  }

  return (
    <section className="px-default flex flex-col justify-center py-20">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2 className="text-5xl leading-[1.2] text-center">
            Send me a <span className="text-primary">message</span>!
          </Typography.H2>
          <Typography.H3 className="text-center">
            Got a question or proposal, or just want to say hello? Go ahead.
          </Typography.H3>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-8 py-6"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="What`s your name?"
                        type="text"
                        autoCapitalize="words"
                        maxLength={MAX_NAME_LENGTH}
                        {...field}
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
                    <FormLabel>Email Adress</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@dev.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Hi, I think we need a website for our Company X. How soon can we talk about this?"
                        maxLength={MAX_MESSAGE_LENGTH}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      {form.getValues().message?.length} / {MAX_MESSAGE_LENGTH}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="self-center">
                SEND IT
                <ArrowRight size={16} weight="bold" />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
