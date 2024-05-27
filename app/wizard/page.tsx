import { CurrencyComboBox } from "@/components/CurrencyComboBox";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await currentUser();
  console.log(user);
  if (!user) {
    redirect("/sign-in");
  }
  return (
    <div className="container flex max-w-2l flex-col items-center justify-between gap-4">
      <div>
        <h1 className="text-center text-3xl">
          Welcome,<span className="ml-2 font-bold">{user.firstName}! 👋</span>
        </h1>
        <h2 className="mt-4 text-center text-base text-muted-foreground">
          Let &apos;s get started by setting up your currency
        </h2>
        <h3 className="text-center mt-2 text-sm text-muted-foreground">
          You can change these settings at any time
        </h3>
      </div>
      <Separator />
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Currency</CardTitle>
          <CardDescription>
            Set your default currency for transactions
          </CardDescription>
          <CardContent>
            <CurrencyComboBox />
          </CardContent>
        </CardHeader>
      </Card>
      <Separator />
      <Button className="w-full" asChild>
        <Link href={"/"}>I&apos;m done! Take me to the dashboard</Link>
      </Button>
      <div>
        <Logo />
      </div>
    </div>
  );
};

export default page;
