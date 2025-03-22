import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { AdvertiserSidebar } from "@/components/advertiser-sidebar"

export default function AdvertiserDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
     

      <div className="flex-1 flex">
        <AdvertiserSidebar />

        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Advertisement Dashboard</h1>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Create New Campaign
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">2 pending approval</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Impressions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24,521</div>
                <p className="text-xs text-muted-foreground">+12% from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Click-through Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.2%</div>
                <p className="text-xs text-muted-foreground">Industry avg: 2.5%</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="campaigns" className="space-y-4">
            <TabsList className="grid grid-cols-3 w-[400px]">
              <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>

            <TabsContent value="campaigns" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Your Advertising Campaigns</CardTitle>
                  <CardDescription>Manage your active and scheduled advertising campaigns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-5 p-4 font-medium border-b">
                      <div>Campaign Name</div>
                      <div>Type</div>
                      <div>Status</div>
                      <div>Performance</div>
                      <div>Actions</div>
                    </div>

                    {[
                      { name: "Summer Sale Promotion", type: "Banner", status: "Active", performance: "High" },
                      { name: "Product Launch", type: "Featured", status: "Scheduled", performance: "N/A" },
                      { name: "Brand Awareness", type: "Interactive", status: "Pending Approval", performance: "N/A" },
                    ].map((campaign, index) => (
                      <div key={index} className="grid grid-cols-5 p-4 border-b last:border-0">
                        <div>{campaign.name}</div>
                        <div>{campaign.type}</div>
                        <div>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              campaign.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : campaign.status === "Scheduled"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {campaign.status}
                          </span>
                        </div>
                        <div>{campaign.performance}</div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Campaign Templates</CardTitle>
                  <CardDescription>Start with a pre-designed template to create your next campaign</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { name: "Standard Banner", description: "Classic banner ads for website header and sidebar" },
                      { name: "Featured Article", description: "Sponsored content that appears as a featured article" },
                      { name: "Interactive Poll", description: "Engage readers with an interactive poll or quiz" },
                    ].map((template, index) => (
                      <Card key={index}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-md">{template.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                          <Button variant="outline" size="sm" className="w-full">
                            Use Template
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Campaign Performance</CardTitle>
                  <CardDescription>View detailed analytics for your advertising campaigns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                    Analytics Chart Placeholder
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                    {[
                      { label: "Impressions", value: "24,521", change: "+12%" },
                      { label: "Clicks", value: "785", change: "+8%" },
                      { label: "CTR", value: "3.2%", change: "+0.5%" },
                      { label: "Conversions", value: "142", change: "+15%" },
                    ].map((stat, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <div className="text-xs text-green-600">{stat.change}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Audience Demographics</CardTitle>
                  <CardDescription>Understand who is engaging with your advertisements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Age Distribution</h4>
                      <div className="h-[200px] bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                        Age Chart Placeholder
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Geographic Distribution</h4>
                      <div className="h-[200px] bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                        Geography Chart Placeholder
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="billing" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Billing Summary</CardTitle>
                  <CardDescription>View and manage your billing information and invoices</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 border rounded-md">
                      <div>
                        <div className="font-medium">Current Plan</div>
                        <div className="text-sm text-muted-foreground">Premium Advertiser</div>
                      </div>
                      <Button variant="outline">Upgrade Plan</Button>
                    </div>

                    <div className="border rounded-md">
                      <div className="grid grid-cols-4 p-4 font-medium border-b">
                        <div>Invoice</div>
                        <div>Date</div>
                        <div>Amount</div>
                        <div>Status</div>
                      </div>

                      {[
                        { id: "INV-001", date: "Mar 15, 2023", amount: "$1,200.00", status: "Paid" },
                        { id: "INV-002", date: "Apr 15, 2023", amount: "$1,200.00", status: "Paid" },
                        { id: "INV-003", date: "May 15, 2023", amount: "$1,500.00", status: "Pending" },
                      ].map((invoice, index) => (
                        <div key={index} className="grid grid-cols-4 p-4 border-b last:border-0">
                          <div>{invoice.id}</div>
                          <div>{invoice.date}</div>
                          <div>{invoice.amount}</div>
                          <div>
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                invoice.status === "Paid"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {invoice.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 border rounded-md">
                      <div className="font-medium mb-2">Payment Method</div>
                      <div className="flex items-center">
                        <div className="w-10 h-6 bg-muted rounded mr-2"></div>
                        <div>
                          <div className="text-sm">Visa ending in 4242</div>
                          <div className="text-xs text-muted-foreground">Expires 12/25</div>
                        </div>
                        <Button variant="outline" size="sm" className="ml-auto">
                          Update
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

