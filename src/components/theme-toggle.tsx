"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()
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
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="rounded-md p-2 hover:bg-accent transition-colors"
        >
            {resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4 text-foreground transition-all" />
            ) : (
                <Moon className="h-4 w-4 text-foreground transition-all" />
            )}
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}