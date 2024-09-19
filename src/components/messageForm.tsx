"use client";

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
import { sendContactEmail } from "@/server/sendContactEmail";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
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

export type SendMeAMessageFormValues = z.infer<typeof formSchema>;

export function MessageForm() {
  const t = useTranslations("HOME.SEND_ME_A_MESSAGE");

  const form = useForm<SendMeAMessageFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values: SendMeAMessageFormValues) {
    try {
      const response = await sendContactEmail(values);
      if (response.error) {
        throw new Error(response.error.message);
      }

      form.reset();
      toast.success(t("SUCCESS"));
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error);
      toast.error(t("ERROR"));
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8 py-6 w-full max-w-[750px]"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>{t("FORM.NAME.LABEL")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("FORM.NAME.PLACEHOLDER")}
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
              <FormItem className="w-full">
                <FormLabel>{t("FORM.EMAIL.LABEL")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("FORM.EMAIL.PLACEHOLDER")}
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("FORM.MESSAGE.LABEL")}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t("FORM.MESSAGE.PLACEHOLDER")}
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
        <Button type="submit" disabled={isLoading} className="self-center">
          {isLoading ? t("LOADING_BUTTON") : t("BUTTON")}
          <ArrowRight size={16} weight="bold" />
        </Button>
      </form>
    </Form>
  );
}
