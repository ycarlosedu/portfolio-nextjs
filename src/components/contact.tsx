import { Typography } from "@/components/ui/Typography";
import Logo from "images/logo/full.svg";
import Image from "next/image";

export function Contact() {
  return (
    <section className="px-default bg-gray-light flex flex-col items-center justify-center py-4 gap-12">
      <footer className="flex flex-col gap-12">
        <hr className="h-[2px] w-full bg-black" />
        <div className="flex flex-col items-center justify-center gap-12">
          <Image src={Logo} alt="Carlos Silva Logo" width={200} height={56} />
          <Typography.P className="text-center">
            Copyright ©2024 Carlos Eduardo Oliveira da Silva
          </Typography.P>
        </div>
      </footer>
    </section>
  );
}
