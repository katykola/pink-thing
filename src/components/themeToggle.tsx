import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch

  const toggleTheme = () => {
    console.log('toggleTheme');
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme);
  }

  return (
    <button
      onClick={() => 
        toggleTheme()
    }
      className="p-0"
      >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
