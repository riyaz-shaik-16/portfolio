import { Button } from "./components/ui/button";
import { Toaster, toast } from "sonner";

const App = () => {
  return (
    <>
      <Toaster />
      <Button onClick={() => toast("Clicked")}>Click</Button>
      hi
    </>
  );
};

export default App;
