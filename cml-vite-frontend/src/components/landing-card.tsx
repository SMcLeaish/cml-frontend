import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { Link } from "react-router-dom";
import { useAuth } from "react-oidc-context";

export const LandingCard: React.FC = () => {
  const auth = useAuth();

  return (
    <div className="flex items-center justify-center w-1/2 mx-auto">
      <div className="w-full max-w-lg px-4 py-16 ">
        <Card className="bg-gradient-to-r from-gray-500 to-purple-700 shadow-xl rounded-lg border-none ">
          <CardHeader>
            <CardTitle className="font-normal tracking-widest">
              <Logo />
            </CardTitle>
            <CardDescription>
              {auth.isAuthenticated ? "Try a demo of one of our projects" : ""}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-4">
              {auth.isAuthenticated ? (
                <Button asChild>
                  <Link to="/dashboard" className="w-full py-2">
                    Network Analysis
                  </Link>
                </Button>
              ) : (
                <>
                  <Button
                    onClick={() => auth.signinRedirect()}
                    className="w-full py-2"
                  >
                    Log in
                  </Button>
                  <Button asChild>
                    <a href="/register" className="w-full py-2">
                      Register
                    </a>
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
