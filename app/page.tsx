import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold">
          PrepAI
        </h1>

        <div className="flex gap-4">
          <Button variant="ghost">
            Login
          </Button>

          <Button>
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">

        <h1 className="text-6xl font-bold max-w-4xl leading-tight">
          Crack FAANG Interviews Using AI
        </h1>

        <p className="text-gray-400 text-xl mt-6 max-w-2xl">
          Practice coding interviews, track progress,
          and generate personalized interview questions instantly.
        </p>

        <div className="flex gap-4 mt-10">
          <Button size="lg">
            Start Practicing
          </Button>

          <Button size="lg" variant="outline">
            View Demo
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 px-8 pb-20">

        <Card className="bg-zinc-900 border-gray-800">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-3">
              AI Mock Interviews
            </h2>

            <p className="text-gray-400">
              Generate real interview questions for DSA,
              system design, and behavioral rounds.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-gray-800">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-3">
              Progress Tracking
            </h2>

            <p className="text-gray-400">
              Analyze strengths, weaknesses,
              and improvement areas visually.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-gray-800">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-3">
              Resume Analysis
            </h2>

            <p className="text-gray-400">
              Upload resume and get personalized
              interview preparation roadmap.
            </p>
          </CardContent>
        </Card>

      </section>

    </main>
  )
}
