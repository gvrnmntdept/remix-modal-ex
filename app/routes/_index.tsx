import type { MetaFunction } from "@remix-run/node";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { useLocation, useNavigate } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const TEST_DIALOG_ID = "TEST-DIALOG-ID";

export default function Index() {
  const location = useLocation();
  const navigate = useNavigate();

  const open = location.state?.dialogID === TEST_DIALOG_ID;

  const handeOpenChange = (newOpen: boolean) => {
    if (newOpen) {
      navigate("/", {
        replace: false,
        relative: "route",
        state: { dialogID: TEST_DIALOG_ID },
      });
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-background text-foreground">
      <div className="max-w-md">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Dialog Navigation
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-8">
          This dialog is integrated with browser's session history stack. Try
          using back and forward buttons.
        </p>
        <Dialog open={open} onOpenChange={handeOpenChange}>
          <DialogTrigger asChild>
            <Button size="lg" className="min-w-full">
              Open
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>This is a test</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                sagittis at erat quis vestibulum. Nam feugiat turpis pretium,
                tempor lectus sed, tempus ante. Nullam vitae dui eros. Nunc vel
                tortor sit amet libero vulputate cursus ut in dui. Duis
                tincidunt tempor ex, eget accumsan eros tincidunt volutpat. Nam
                varius dui sed elit fermentum, nec ultrices neque gravida. Ut
                placerat volutpat nunc eu posuere. Nunc rhoncus elit at arcu
                elementum hendrerit. Proin viverra in ligula nec volutpat.
                Vestibulum quam enim, luctus vitae sollicitudin eu, egestas non
                justo. Mauris tincidunt iaculis velit. Aenean ut interdum ipsum,
                sit amet gravida sapien. Fusce nec consectetur eros, in
                imperdiet tellus. Curabitur finibus purus ac aliquet vehicula.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
