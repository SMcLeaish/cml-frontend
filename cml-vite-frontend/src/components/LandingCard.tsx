import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";

const LandingCard: React.FC = () => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <Card>
        <CardHeader>
          <CardTitle>
            <Logo />
          </CardTitle>
          <CardDescription>
            Powerful tools for visualization, transformation, and analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <Button asChild>
              <Link to="/demo">Network Analysis</Link>
            </Button>
            <Button asChild>
              <a href="https://api.civmillabs.com/login">GIS</a>
            </Button>
            <Button asChild>
              <a href="https://api.civmillabs.com/login">Machine Learning</a>
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="secondary" asChild>
            <a href="/register">Register Now</a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LandingCard;
