import { createFileRoute } from "@tanstack/react-router"
import { Button } from "@radix-ui/themes"
import { useState } from "react"

export const Route = createFileRoute("/")({ component: App })

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold">Hello</h1>
        <Button size="3" onClick={() => setCount((c) => c + 1)}>
          Count: {count}
        </Button>
      </div>
    </div>
  )
}
