import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { useAuth } from "react-oidc-context";

const LandingCard: React.FC = () => {
  const auth = useAuth();

  return (
    <div className="max-w-md mx-auto mt-6 md:mt-4 lg:mt-2">
      <Card>
        <CardHeader>
          <CardTitle>
            <Logo />
          </CardTitle>
          {auth.isAuthenticated ? (
            <CardDescription>Try a demo of one of our projects</CardDescription>
          ) : (
            <CardDescription>
              Powerful tools for visualization, transformation, and analysis
            </CardDescription>
          )}
        </CardHeader>

        <CardContent>
          {auth.isAuthenticated ? (
            <div className="grid w-full items-center gap-4">
              <Button asChild>
                <Link to="/dashboard">Network Analysis</Link>
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <Button onClick={() => void auth.signinRedirect()}>Log in</Button>
              <Button asChild>
                <a href="/register">Register</a>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default LandingCard;
