import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background">
      <Card className="w-[380px]">
        <CardHeader>
          <CardTitle>Selamat Datang di Proyek Keren!</CardTitle>
          <CardDescription>
            Ini adalah contoh penggunaan komponen dari Shadcn UI di Next.js.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Kamu bisa menambahkan komponen apa pun dengan mudah menggunakan CLI.
            Kodenya langsung masuk ke proyekmu, jadi bisa diubah sesuka hati.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Mulai Sekarang</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
