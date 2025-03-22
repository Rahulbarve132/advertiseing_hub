import { SiteHeader } from "@/components/site-header"
import { AdvertiserSidebar } from "@/components/advertiser-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdvertiserAudiencePage() {
  return (
    <div className="flex min-h-screen flex-col">
   

      <div className="flex-1 flex">
        <AdvertiserSidebar />

        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Audience Insights</h1>

            <div className="flex items-center gap-4">
              <Select defaultValue="30days">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">Last 7 days</SelectItem>
                  <SelectItem value="30days">Last 30 days</SelectItem>
                  <SelectItem value="90days">Last 90 days</SelectItem>
                  <SelectItem value="year">Last year</SelectItem>
                </SelectContent>
              </Select>

              <Button>Create Audience Segment</Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-4 mb-6">
            {[
              { title: "Total Audience Size", value: "245,682", change: "+8.3%", changeType: "positive" },
              { title: "Engagement Rate", value: "4.2%", change: "+0.5%", changeType: "positive" },
              { title: "Avg. Session Duration", value: "2m 18s", change: "+12s", changeType: "positive" },
              { title: "Returning Visitors", value: "38%", change: "-2%", changeType: "negative" },
            ].map((stat, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className={`text-xs ${stat.changeType === "positive" ? "text-green-600" : "text-red-600"}`}>
                    {stat.change} from previous period
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="demographics" className="space-y-4">
            <TabsList>
              <TabsTrigger value="demographics">Demographics</TabsTrigger>
              <TabsTrigger value="interests">Interests</TabsTrigger>
              <TabsTrigger value="behavior">Behavior</TabsTrigger>
              <TabsTrigger value="segments">Audience Segments</TabsTrigger>
            </TabsList>

            <TabsContent value="demographics" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Age Distribution</CardTitle>
                    <CardDescription>Age breakdown of your audience</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] bg-muted rounded-md flex items-center justify-center text-muted-foreground mb-4">
                      Age Chart Placeholder
                    </div>
                    <div className="space-y-2">
                      {[
                        { age: "18-24", percentage: "15%", change: "+2%" },
                        { age: "25-34", percentage: "32%", change: "+1%" },
                        { age: "35-44", percentage: "28%", change: "-1%" },
                        { age: "45-54", percentage: "18%", change: "-2%" },
                        { age: "55+", percentage: "7%", change: "0%" },
                      ].map((group, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="text-sm">{group.age}</div>
                          <div className="flex items-center">
                            <div className="text-sm font-medium mr-2">{group.percentage}</div>
                            <div
                              className={`text-xs ${
                                group.change.startsWith("+")
                                  ? "text-green-600"
                                  : group.change.startsWith("-")
                                    ? "text-red-600"
                                    : "text-muted-foreground"
                              }`}
                            >
                              {group.change}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Gender Distribution</CardTitle>
                    <CardDescription>Gender breakdown of your audience</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] bg-muted rounded-md flex items-center justify-center text-muted-foreground mb-4">
                      Gender Chart Placeholder
                    </div>
                    <div className="space-y-2">
                      {[
                        { gender: "Male", percentage: "48%", change: "-1%" },
                        { gender: "Female", percentage: "51%", change: "+1%" },
                        { gender: "Other", percentage: "1%", change: "0%" },
                      ].map((group, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="text-sm">{group.gender}</div>
                          <div className="flex items-center">
                            <div className="text-sm font-medium mr-2">{group.percentage}</div>
                            <div
                              className={`text-xs ${
                                group.change.startsWith("+")
                                  ? "text-green-600"
                                  : group.change.startsWith("-")
                                    ? "text-red-600"
                                    : "text-muted-foreground"
                              }`}
                            >
                              {group.change}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Geographic Distribution</CardTitle>
                  <CardDescription>Location of your audience</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] bg-muted rounded-md flex items-center justify-center text-muted-foreground mb-4">
                    Map Placeholder
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { region: "New York", percentage: "18%", change: "+2%" },
                      { region: "California", percentage: "15%", change: "+1%" },
                      { region: "Texas", percentage: "12%", change: "0%" },
                      { region: "Florida", percentage: "10%", change: "+1%" },
                      { region: "Illinois", percentage: "8%", change: "-1%" },
                      { region: "Pennsylvania", percentage: "7%", change: "0%" },
                      { region: "Ohio", percentage: "6%", change: "-1%" },
                      { region: "Other", percentage: "24%", change: "-1%" },
                    ].map((region, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="text-sm">{region.region}</div>
                        <div className="flex items-center">
                          <div className="text-sm font-medium mr-2">{region.percentage}</div>
                          <div
                            className={`text-xs ${
                              region.change.startsWith("+")
                                ? "text-green-600"
                                : region.change.startsWith("-")
                                  ? "text-red-600"
                                  : "text-muted-foreground"
                            }`}
                          >
                            {region.change}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="interests" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Top Interests</CardTitle>
                  <CardDescription>Most common interests among your audience</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] bg-muted rounded-md flex items-center justify-center text-muted-foreground mb-4">
                    Interests Chart Placeholder
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { interest: "Business & Finance", percentage: "42%", affinity: "High" },
                      { interest: "Technology", percentage: "38%", affinity: "High" },
                      { interest: "News & Politics", percentage: "35%", affinity: "Medium" },
                      { interest: "Travel", percentage: "28%", affinity: "Medium" },
                      { interest: "Food & Dining", percentage: "25%", affinity: "Low" },
                      { interest: "Sports", percentage: "22%", affinity: "Low" },
                    ].map((interest, index) => (
                      <div key={index} className="p-3 border rounded-md">
                        <div className="font-medium">{interest.interest}</div>
                        <div className="flex justify-between mt-1">
                          <div className="text-sm text-muted-foreground">{interest.percentage}</div>
                          <div
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              interest.affinity === "High"
                                ? "bg-green-100 text-green-800"
                                : interest.affinity === "Medium"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {interest.affinity} Affinity
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Content Categories</CardTitle>
                  <CardDescription>Types of content your audience engages with</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-4 p-4 font-medium border-b">
                      <div>Category</div>
                      <div>Engagement Rate</div>
                      <div>Avg. Time Spent</div>
                      <div>Trend</div>
                    </div>

                    {[
                      { category: "Business News", engagement: "5.2%", time: "3m 12s", trend: "Increasing" },
                      { category: "Technology", engagement: "4.8%", time: "2m 45s", trend: "Stable" },
                      { category: "Politics", engagement: "4.5%", time: "2m 30s", trend: "Decreasing" },
                      { category: "Economy", engagement: "4.2%", time: "2m 15s", trend: "Increasing" },
                      { category: "Markets", engagement: "3.8%", time: "1m 50s", trend: "Stable" },
                    ].map((category, index) => (
                      <div key={index} className="grid grid-cols-4 p-4 border-b last:border-0">
                        <div className="font-medium">{category.category}</div>
                        <div>{category.engagement}</div>
                        <div>{category.time}</div>
                        <div>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              category.trend === "Increasing"
                                ? "bg-green-100 text-green-800"
                                : category.trend === "Decreasing"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {category.trend}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="behavior" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Visit Frequency</CardTitle>
                    <CardDescription>How often users visit the site</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] bg-muted rounded-md flex items-center justify-center text-muted-foreground mb-4">
                      Frequency Chart Placeholder
                    </div>
                    <div className="space-y-2">
                      {[
                        { frequency: "Daily", percentage: "22%" },
                        { frequency: "2-3 times per week", percentage: "35%" },
                        { frequency: "Weekly", percentage: "18%" },
                        { frequency: "Monthly", percentage: "15%" },
                        { frequency: "Less than monthly", percentage: "10%" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="text-sm">{item.frequency}</div>
                          <div className="text-sm font-medium">{item.percentage}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Time of Day</CardTitle>
                    <CardDescription>When your audience is most active</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] bg-muted rounded-md flex items-center justify-center text-muted-foreground mb-4">
                      Time Chart Placeholder
                    </div>
                    <div className="space-y-2">
                      {[
                        { time: "Morning (6am-12pm)", percentage: "32%" },
                        { time: "Afternoon (12pm-5pm)", percentage: "28%" },
                        { time: "Evening (5pm-9pm)", percentage: "25%" },
                        { time: "Night (9pm-12am)", percentage: "12%" },
                        { time: "Late night (12am-6am)", percentage: "3%" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="text-sm">{item.time}</div>
                          <div className="text-sm font-medium">{item.percentage}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Device & Platform Usage</CardTitle>
                  <CardDescription>How your audience accesses content</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Device Type</h4>
                      <div className="h-[200px] bg-muted rounded-md flex items-center justify-center text-muted-foreground mb-4">
                        Device Chart Placeholder
                      </div>
                      <div className="space-y-2">
                        {[
                          { device: "Mobile", percentage: "62%" },
                          { device: "Desktop", percentage: "31%" },
                          { device: "Tablet", percentage: "7%" },
                        ].map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="text-sm">{item.device}</div>
                            <div className="text-sm font-medium">{item.percentage}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Traffic Source</h4>
                      <div className="h-[200px] bg-muted rounded-md flex items-center justify-center text-muted-foreground mb-4">
                        Traffic Chart Placeholder
                      </div>
                      <div className="space-y-2">
                        {[
                          { source: "Direct", percentage: "35%" },
                          { source: "Search", percentage: "28%" },
                          { source: "Social", percentage: "22%" },
                          { source: "Referral", percentage: "10%" },
                          { source: "Email", percentage: "5%" },
                        ].map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="text-sm">{item.source}</div>
                            <div className="text-sm font-medium">{item.percentage}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="segments" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Audience Segments</CardTitle>
                      <CardDescription>Custom audience segments for targeted advertising</CardDescription>
                    </div>
                    <Button>Create New Segment</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-5 p-4 font-medium border-b">
                      <div>Segment Name</div>
                      <div>Size</div>
                      <div>Created</div>
                      <div>Status</div>
                      <div>Actions</div>
                    </div>

                    {[
                      { name: "Business Professionals", size: "85,421", created: "Mar 15, 2023", status: "Active" },
                      { name: "Tech Enthusiasts", size: "62,345", created: "Feb 22, 2023", status: "Active" },
                      { name: "Finance Decision Makers", size: "45,678", created: "Jan 10, 2023", status: "Active" },
                      { name: "New York Readers", size: "38,912", created: "Apr 5, 2023", status: "Draft" },
                    ].map((segment, index) => (
                      <div key={index} className="grid grid-cols-5 p-4 border-b last:border-0">
                        <div className="font-medium">{segment.name}</div>
                        <div>{segment.size}</div>
                        <div>{segment.created}</div>
                        <div>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              segment.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {segment.status}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            Target
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lookalike Audiences</CardTitle>
                  <CardDescription>Find new audiences similar to your best customers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="p-6 border rounded-md text-center">
                    <h3 className="text-lg font-medium mb-2">Expand Your Reach</h3>
                    <p className="text-muted-foreground mb-4">
                      Create lookalike audiences based on your best-performing segments to find new potential customers
                      with similar characteristics.
                    </p>
                    <Button>Create Lookalike Audience</Button>
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

