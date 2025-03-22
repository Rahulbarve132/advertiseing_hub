import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserRound, BadgePercent, ShieldCheck } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { AdminSidebar } from "@/components/admin-sidebar"

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
     

      <div className="flex-1 flex">
        <AdminSidebar />

        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

          <div className="grid gap-6 md:grid-cols-3 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <UserRound className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,248</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Advertisers</CardTitle>
                <BadgePercent className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">324</div>
                <p className="text-xs text-muted-foreground">+5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                <ShieldCheck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">573</div>
                <p className="text-xs text-muted-foreground">+18% from last month</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="users" className="space-y-4">
            <TabsList>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="advertisers">Advertisers</TabsTrigger>
              <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
            </TabsList>
            <TabsContent value="users" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>View and manage all registered users on the platform.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-4 p-4 font-medium border-b">
                      <div>Name</div>
                      <div>Email</div>
                      <div>Joined</div>
                      <div>Actions</div>
                    </div>
                    {[1, 2, 3, 4, 5].map((id) => (
                      <div key={id} className="grid grid-cols-4 p-4 border-b last:border-0">
                        <div>User {id}</div>
                        <div>user{id}@example.com</div>
                        <div>{new Date().toLocaleDateString()}</div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            Delete
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="advertisers" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Advertiser Management</CardTitle>
                  <CardDescription>View and manage all advertisers on the platform.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-4 p-4 font-medium border-b">
                      <div>Company</div>
                      <div>Contact</div>
                      <div>Active Ads</div>
                      <div>Actions</div>
                    </div>
                    {[1, 2, 3, 4, 5].map((id) => (
                      <div key={id} className="grid grid-cols-4 p-4 border-b last:border-0">
                        <div>Company {id}</div>
                        <div>advertiser{id}@example.com</div>
                        <div>{Math.floor(Math.random() * 10)}</div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            Suspend
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="campaigns" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Campaign Management</CardTitle>
                  <CardDescription>View and manage all advertising campaigns.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-5 p-4 font-medium border-b">
                      <div>Campaign</div>
                      <div>Advertiser</div>
                      <div>Status</div>
                      <div>Performance</div>
                      <div>Actions</div>
                    </div>
                    {[1, 2, 3, 4, 5].map((id) => (
                      <div key={id} className="grid grid-cols-5 p-4 border-b last:border-0">
                        <div>Campaign {id}</div>
                        <div>Company {Math.ceil(id / 2)}</div>
                        <div>{Math.random() > 0.3 ? "Active" : "Pending"}</div>
                        <div>{["Low", "Medium", "High"][Math.floor(Math.random() * 3)]}</div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Review
                          </Button>
                          <Button variant="outline" size="sm">
                            Approve
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="revenue" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Overview</CardTitle>
                  <CardDescription>Track revenue from advertising campaigns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] bg-muted rounded-md flex items-center justify-center text-muted-foreground mb-6">
                    Revenue Chart Placeholder
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-sm font-medium text-muted-foreground">Monthly Revenue</div>
                        <div className="text-2xl font-bold">$45,231</div>
                        <div className="text-xs text-green-600">+12% from last month</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-sm font-medium text-muted-foreground">Quarterly Revenue</div>
                        <div className="text-2xl font-bold">$142,568</div>
                        <div className="text-xs text-green-600">+8% from last quarter</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-sm font-medium text-muted-foreground">Annual Projection</div>
                        <div className="text-2xl font-bold">$580,000</div>
                        <div className="text-xs text-green-600">+15% from last year</div>
                      </CardContent>
                    </Card>
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

