import { Button } from "@/components/Button";
import Typography from "@/components/Typography";
import { CaretLeft } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center container space-y-3 text-center">
      <Typography.P className="font-bold text-lg">404</Typography.P>
      <Typography.H1 className="">Page not found</Typography.H1>
      <Typography.Muted className="">
        Sorry, the page you are looking for could not be found or has been
        removed.
      </Typography.Muted>
      <Button asChild>
        <a href="/">
          <CaretLeft size={16} />
          Go back to home
        </a>
      </Button>
    </main>
  );
}
