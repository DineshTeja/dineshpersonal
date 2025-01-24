"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // useEffect only runs on the client, so now we can safely show the UI
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null // or a placeholder that matches server-side dimensions
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-md p-2 hover:bg-accent transition-colors"
        >
            {theme === "dark" ? (
                <Sun className="h-4 w-4 text-foreground rotate-0 scale-100 transition-all dark:-rotate-90" />
            ) : (
                <Moon className="h-4 w-4 text-foreground rotate-0 scale-100 transition-all dark:rotate-90" />
            )}
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}