"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Gradients */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full" />
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold">PrepAI</h1>

        <div className="flex gap-4 items-center">
          <SignedOut>
            <SignInButton mode="modal">
              <Button>Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>

          <Button>Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32 overflow-hidden">

  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-6xl font-bold max-w-4xl leading-tight"
  >
    Crack FAANG Interviews Using AI
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
    className="text-gray-400 text-xl mt-6 max-w-2xl"
  >
    Practice coding interviews, track progress,
    and generate personalized interview questions instantly.
  </motion.p>

  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="flex gap-4 mt-10"
  >
    <Button size="lg">
      Start Practicing
    </Button>

    <Button size="lg" variant="outline">
      View Demo
    </Button>
  </motion.div>

</section>

      

      {/* Features */}
      <section className="relative z-10 grid md:grid-cols-3 gap-6 px-8 pb-20">
        <motion.div
  whileHover={{ y: -10 }}
  transition={{ duration: 0.2 }}
>

        <Card className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl">
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
        </motion.div>
        <motion.div
  whileHover={{ y: -10 }}
  transition={{ duration: 0.2 }}
>
        <Card className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl">
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
        </motion.div>
        <motion.div
  whileHover={{ y: -10 }}
  transition={{ duration: 0.2 }}
>
        <Card className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl">
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
        </motion.div>
      </section>

    </main>
    
  )
}
