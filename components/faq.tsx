"use client"

import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"
import { Accordion } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does ADmyBRAND AI Suite work?",
    answer:
      "ADmyBRAND AI Suite uses advanced machine learning algorithms to analyze your brand, audience, and market trends. It then generates personalized content, optimizes campaigns, and provides actionable insights to improve your marketing performance. The platform integrates with your existing tools and learns from your data to deliver increasingly better results over time.",
  },
  {
    question: "Can I integrate ADmyBRAND with my existing marketing tools?",
    answer:
      "Yes! ADmyBRAND AI Suite offers seamless integrations with over 100+ popular marketing tools including Google Ads, Facebook Ads, HubSpot, Salesforce, Mailchimp, Shopify, and many more. Our robust API also allows for custom integrations with your proprietary systems and workflows.",
  },
  {
    question: "What kind of content can the AI generate?",
    answer:
      "Our AI can generate a wide variety of marketing content including social media posts, blog articles, email campaigns, ad copy, product descriptions, video scripts, landing page copy, press releases, and more. The content is tailored to your brand voice and optimized for your target audience across all channels.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a comprehensive 14-day free trial for all plans. No credit card required to start. During the trial, you'll have access to all features of your chosen plan, allowing you to fully experience the power of ADmyBRAND AI Suite before making any commitment.",
  },
  {
    question: "How accurate is the AI-generated content?",
    answer:
      "Our AI achieves 95%+ accuracy in content generation, thanks to continuous training on high-quality marketing data and advanced feedback loops. The system learns from your corrections and preferences, becoming more accurate over time. All content goes through quality checks and can be easily edited before publishing.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We provide comprehensive support including 24/7 chat support, email support, extensive documentation, video tutorials, and regular webinar training sessions. Pro and Enterprise customers also get priority support and dedicated account managers for personalized assistance.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time with no questions asked. There are no long-term contracts or cancellation fees. If you cancel, you'll continue to have access to your account until the end of your current billing period, and you can export all your data.",
  },
  {
    question: "Is my data secure with ADmyBRAND?",
    answer:
      "Absolutely. We take data security very seriously. All data is encrypted in transit and at rest using industry-standard AES-256 encryption. We're SOC 2 compliant and follow GDPR guidelines. Your data is never shared with third parties and you maintain full ownership of your content and insights.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl"
          >
            <HelpCircle className="h-10 w-10 text-white" />
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-gray-900 dark:text-white">Frequently Asked</span>
            <span className="gradient-text block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Everything you need to know about ADmyBRAND AI Suite and how it can transform your marketing
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Accordion faqs={faqs} />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-center mt-20"
        >
          <div className="glass p-10 lg:p-12 rounded-3xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 shadow-2xl">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Still have questions?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Our support team is here to help you get the most out of ADmyBRAND AI Suite and answer any questions you
              might have.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                Contact Support
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass border-2 border-blue-500/30 hover:border-blue-500/50 px-8 py-4 rounded-xl font-bold text-lg bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
