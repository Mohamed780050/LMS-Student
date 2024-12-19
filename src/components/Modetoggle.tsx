import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useTheme } from "@/components/Provider/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className="justify-start space-x-2"
      variant="ghost"
      onClick={() => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
      }}
    >
      {theme === "dark" ? <Moon size={24} /> : <Sun size={24} />}
      <p className="text-lg">{theme}</p>
    </Button>
  );
}
