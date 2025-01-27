import { Button } from "@/components/ui/button"
import { TestComponent } from "@/features/test";

export default function Home() {
  return (
    <div>
      Hello World
      <Button>Click me</Button>
      <TestComponent></TestComponent>
    </div>
  );
}
