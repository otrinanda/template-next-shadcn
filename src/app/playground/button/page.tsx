import { Button } from "@/components/ui/button";

export default function ButtonPage() {
  return (
    <div className="flex  flex-col gap-4">
      <p>Button Playground</p>
      <div className="flex gap-2">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="outline">Outline</Button>
      </div>
    </div>
  );
}
