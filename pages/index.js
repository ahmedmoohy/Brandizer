import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>My Apple-Like Site</title>
      </Head>
      <main className="flex flex-col items-center justify-center py-20">
        <motion.h1 
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Your Apple-Like Site
        </motion.h1>
      </main>
    </div>
  )
}
