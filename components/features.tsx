"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Brain, Target, BarChart3, Zap, Users, MessageSquare, Sparkles, TrendingUp } from "lucide-react"
import { FeatureCard } from "@/components/ui/feature-card"
import { ScrollAnimationWrapper } from "@/components/scroll-animation-wrapper"
import { useRef } from "react"

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description:
      "Create compelling copy, visuals, and campaigns in seconds with our advanced AI engine powered by GPT-4.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Target,
    title: "Smart Audience Targeting",
    description:
      "Identify and reach your perfect customers with precision AI-driven audience analysis and segmentation.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track performance, optimize campaigns, and make data-driven decisions with comprehensive dashboards.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description: "Set up complex marketing funnels that run on autopilot and scale effortlessly across all channels.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Users,
    title: "Multi-Channel Integration",
    description: "Connect all your marketing channels and manage everything from one unified, powerful dashboard.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot Builder",
    description: "Deploy intelligent chatbots that convert visitors into customers 24/7 with natural conversations.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: Sparkles,
    title: "Predictive Insights",
    description: "Forecast trends and customer behavior to stay ahead of the competition with AI predictions.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: TrendingUp,
    title: "ROI Optimization",
    description: "Maximize your marketing spend with AI-powered budget allocation and performance optimization.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
]

export function Features() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])

  return (
    <section id="features" ref={ref} className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollAnimationWrapper className="text-center mb-20" delay={0.2}>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-gray-900 dark:text-white block mb-2">Powerful Features for</span>
            <span className="gradient-text block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Modern Marketers
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Everything you need to create, manage, and optimize your marketing campaigns with the power of artificial
            intelligence and machine learning.
          </motion.p>
        </ScrollAnimationWrapper>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 items-stretch">
          {features.map((feature, index) => (
            <ScrollAnimationWrapper
              key={feature.title}
              delay={index * 0.1}
              direction={index % 2 === 0 ? "up" : "down"}
              distance={30}
              className="h-full"
            >
              <FeatureCard {...feature} index={index} />
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollAnimationWrapper className="text-center" delay={0.4} direction="up">
          <div className="glass p-10 lg:p-12 max-w-3xl mx-auto rounded-3xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 shadow-2xl">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Ready to Transform Your Marketing?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Join thousands of marketers who are already using AI to drive better results and scale their businesses.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
                Start Your Free Trial
              </button>
            </motion.div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}
