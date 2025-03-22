"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CampaignForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Campaign created!",
        description: "Your campaign has been submitted for review.",
      })

      router.push("/dashboard/advertiser")
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Card className="border-2">
        <CardContent className="pt-6">
          <Tabs defaultValue="details" className="space-y-4">
            <TabsList>
              <TabsTrigger value="details">Campaign Details</TabsTrigger>
              <TabsTrigger value="creative">Creative Assets</TabsTrigger>
              <TabsTrigger value="targeting">Audience Targeting</TabsTrigger>
              <TabsTrigger value="budget">Budget & Schedule</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Campaign Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Summer Sale Promotion"
                  required
                  disabled={isLoading}
                  className="border-2"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Campaign Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe your campaign objectives and key messages"
                  rows={4}
                  required
                  disabled={isLoading}
                  className="border-2"
                />
              </div>

              <div className="space-y-2">
                <Label>Campaign Type</Label>
                <RadioGroup defaultValue="banner" name="type" required>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="banner" id="banner" />
                    <Label htmlFor="banner" className="font-normal">
                      Banner Advertisement
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="featured" id="featured" />
                    <Label htmlFor="featured" className="font-normal">
                      Featured Content
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="interactive" id="interactive" />
                    <Label htmlFor="interactive" className="font-normal">
                      Interactive Advertisement
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </TabsContent>

            <TabsContent value="creative" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="headline">Advertisement Headline</Label>
                <Input
                  id="headline"
                  name="headline"
                  placeholder="Compelling headline for your advertisement"
                  required
                  disabled={isLoading}
                  className="border-2"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="body">Advertisement Body</Label>
                <Textarea
                  id="body"
                  name="body"
                  placeholder="Main content of your advertisement"
                  rows={4}
                  required
                  disabled={isLoading}
                  className="border-2"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cta">Call to Action</Label>
                <Input
                  id="cta"
                  name="cta"
                  placeholder="Shop Now, Learn More, etc."
                  required
                  disabled={isLoading}
                  className="border-2"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Upload Image</Label>
                <div className="border-2 border-dashed rounded-md p-6 text-center">
                  <div className="text-muted-foreground mb-2">Drag and drop your image here, or click to browse</div>
                  <Button type="button" variant="outline" disabled={isLoading}>
                    Select Image
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="targeting" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="audience">Target Audience</Label>
                <Select defaultValue="all">
                  <SelectTrigger className="border-2">
                    <SelectValue placeholder="Select target audience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Readers</SelectItem>
                    <SelectItem value="business">Business Professionals</SelectItem>
                    <SelectItem value="tech">Technology Enthusiasts</SelectItem>
                    <SelectItem value="lifestyle">Lifestyle Readers</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Age Range</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="age-min" className="text-xs">
                      Minimum Age
                    </Label>
                    <Select defaultValue="18">
                      <SelectTrigger className="border-2">
                        <SelectValue placeholder="Min Age" />
                      </SelectTrigger>
                      <SelectContent>
                        {[18, 25, 35, 45, 55, 65].map((age) => (
                          <SelectItem key={age} value={age.toString()}>
                            {age}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="age-max" className="text-xs">
                      Maximum Age
                    </Label>
                    <Select defaultValue="65">
                      <SelectTrigger className="border-2">
                        <SelectValue placeholder="Max Age" />
                      </SelectTrigger>
                      <SelectContent>
                        {[25, 35, 45, 55, 65, 75].map((age) => (
                          <SelectItem key={age} value={age.toString()}>
                            {age}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Geographic Targeting</Label>
                <Select defaultValue="national">
                  <SelectTrigger className="border-2">
                    <SelectValue placeholder="Select geographic targeting" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="national">National</SelectItem>
                    <SelectItem value="regional">Regional</SelectItem>
                    <SelectItem value="local">Local</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>

            <TabsContent value="budget" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="budget">Campaign Budget</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5">$</span>
                  <Input
                    id="budget"
                    name="budget"
                    type="number"
                    placeholder="1000"
                    min="500"
                    required
                    disabled={isLoading}
                    className="border-2 pl-6"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Campaign Duration</Label>
                <RadioGroup defaultValue="30" name="duration" required>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="7" id="7days" />
                    <Label htmlFor="7days" className="font-normal">
                      7 Days
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="14" id="14days" />
                    <Label htmlFor="14days" className="font-normal">
                      14 Days
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="30" id="30days" />
                    <Label htmlFor="30days" className="font-normal">
                      30 Days
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="custom" id="custom" />
                    <Label htmlFor="custom" className="font-normal">
                      Custom
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Start Date</Label>
                <Input
                  type="date"
                  name="startDate"
                  required
                  disabled={isLoading}
                  className="border-2"
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div className="space-y-2">
                <Label>Billing Information</Label>
                <div className="p-4 border-2 rounded-md">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-6 bg-muted rounded mr-2"></div>
                    <div>
                      <div className="text-sm">Visa ending in 4242</div>
                      <div className="text-xs text-muted-foreground">Expires 12/25</div>
                    </div>
                    <Button variant="outline" size="sm" className="ml-auto">
                      Change
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Your card will be charged when your campaign is approved.
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end gap-4 mt-6">
            <Button
              type="button"
              variant="outline"
              disabled={isLoading}
              onClick={() => router.push("/dashboard/advertiser")}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Campaign"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  )
}

