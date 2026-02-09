"use client";

import { useEffect } from "react";

import { Button } from "@/shared/ui/button";
import { createClient } from "@/shared/utils/supabase/client";

export const Home = () => {
  const client = createClient();

  useEffect(() => {
    client.auth.getUser().then(({ data }) => {
      console.log(data.user);
    });
  }, [client.auth]);

  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
};
