"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calculator } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PricingCalculator() {
  const [users, setUsers] = useState(5)
  const [campaigns, setCampaigns] = useState(10)
  const [content, setContent] = useState(100)

  const calculatePrice = () => {
    let basePrice = 29

    // User scaling
    if (users > 5) basePrice += (users - 5) * 10

    // Campaign scaling
    if (campaigns > 10) basePrice += (campaigns - 10) * 5

    // Content scaling
    if (content > 100) basePrice += Math.ceil((content - 100) / 50) * 15

    return Math.min(basePrice, 199) // Cap at Enterprise price
  }

  const recommendedPlan = () => {
    const price = calculatePrice()
    if (price <= 29) return "Basic"
    if (price <= 79) return "Pro"
    return "Enterprise"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto"
    >
      <Card className="glass p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
            <Calculator className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Pricing Calculator</h3>
          <p className="text-gray-600 dark:text-gray-300">Customize your plan based on your specific needs</p>
        </div>

        <div className="space-y-6">
          {/* Users Slider */}
          <div>
            <label className="block text-sm font-medium mb-2">Team Members: {users}</label>
            <input
              type="range"
              min="1"
              max="50"
              value={users}
              onChange={(e) => setUsers(Number.parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>

          {/* Campaigns Slider */}
          <div>
            <label className="block text-sm font-medium mb-2">Active Campaigns: {campaigns}</label>
            <input
              type="range"
              min="1"
              max="100"
              value={campaigns}
              onChange={(e) => setCampaigns(Number.parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>

          {/* Content Slider */}
          <div>
            <label className="block text-sm font-medium mb-2">AI Content Pieces/Month: {content}</label>
            <input
              type="range"
              min="10"
              max="1000"
              step="10"
              value={content}
              onChange={(e) => setContent(Number.parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>

          {/* Results */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 p-6 rounded-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">${calculatePrice()}/month</div>
              <div className="text-lg font-medium mb-4">
                Recommended Plan: <span className="text-purple-600">{recommendedPlan()}</span>
              </div>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Get Started with {recommendedPlan()}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
