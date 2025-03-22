import { AdvertiserSidebar } from "@/components/advertiser-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export default function AdvertiserSettingsPage() {
  return (
    <div className="flex min-h-screen flex-col">
     
      <div className="flex-1 flex">
        <AdvertiserSidebar />

        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">Account Settings</h1>

          <Tabs defaultValue="profile" className="space-y-4">
            <TabsList>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="company">Company</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal information</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" defaultValue="Smith" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="john.smith@acme.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" defaultValue="(555) 123-4567" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="job-title">Job Title</Label>
                      <Input id="job-title" defaultValue="Marketing Director" />
                    </div>

                    <Button>Save Changes</Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Profile Picture</CardTitle>
                  <CardDescription>Update your profile picture</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center text-2xl font-bold">
                      JS
                    </div>
                    <div className="space-y-2">
                      <Button variant="outline">Upload New Picture</Button>
                      <p className="text-xs text-muted-foreground">
                        Recommended: Square image, at least 200x200 pixels.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="company" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Company Information</CardTitle>
                  <CardDescription>Update your company details</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Company Name</Label>
                      <Input id="company-name" defaultValue="Acme Inc." />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company-website">Website</Label>
                      <Input id="company-website" type="url" defaultValue="https://acme.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company-description">Company Description</Label>
                      <Textarea
                        id="company-description"
                        rows={4}
                        defaultValue="Acme Inc. is a leading provider of innovative solutions for businesses of all sizes."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Input id="industry" defaultValue="Technology" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company-size">Company Size</Label>
                      <Input id="company-size" defaultValue="50-100 employees" />
                    </div>

                    <Button>Save Changes</Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Company Logo</CardTitle>
                  <CardDescription>Update your company logo</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                      Logo
                    </div>
                    <div className="space-y-2">
                      <Button variant="outline">Upload New Logo</Button>
                      <p className="text-xs text-muted-foreground">
                        Recommended: Square image, at least 400x400 pixels.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Email Notifications</CardTitle>
                  <CardDescription>Manage your email notification preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        id: "campaign-updates",
                        label: "Campaign Updates",
                        description: "Receive updates about your campaign performance",
                      },
                      {
                        id: "billing-alerts",
                        label: "Billing Alerts",
                        description: "Receive notifications about billing and payments",
                      },
                      {
                        id: "new-features",
                        label: "New Features",
                        description: "Get notified about new advertising features and opportunities",
                      },
                      {
                        id: "tips-guides",
                        label: "Tips & Guides",
                        description: "Receive tips and guides to optimize your advertising",
                      },
                      {
                        id: "newsletter",
                        label: "Newsletter",
                        description: "Receive our monthly newsletter with industry insights",
                      },
                    ].map((notification) => (
                      <div key={notification.id} className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{notification.label}</div>
                          <div className="text-sm text-muted-foreground">{notification.description}</div>
                        </div>
                        <Switch defaultChecked={notification.id !== "newsletter"} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notification Frequency</CardTitle>
                  <CardDescription>Control how often you receive notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Campaign Performance Reports</Label>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="daily" name="frequency" className="h-4 w-4" />
                          <Label htmlFor="daily" className="font-normal">
                            Daily
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="weekly" name="frequency" className="h-4 w-4" defaultChecked />
                          <Label htmlFor="weekly" className="font-normal">
                            Weekly
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="monthly" name="frequency" className="h-4 w-4" />
                          <Label htmlFor="monthly" className="font-normal">
                            Monthly
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Alert Threshold</Label>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="all" name="threshold" className="h-4 w-4" />
                          <Label htmlFor="all" className="font-normal">
                            All Changes
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="significant" name="threshold" className="h-4 w-4" defaultChecked />
                          <Label htmlFor="significant" className="font-normal">
                            Significant Changes
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="critical" name="threshold" className="h-4 w-4" />
                          <Label htmlFor="critical" className="font-normal">
                            Critical Only
                          </Label>
                        </div>
                      </div>
                    </div>

                    <Button>Save Preferences</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                  <CardDescription>Update your account password</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>

                    <Button>Update Password</Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Two-Factor Authentication</CardTitle>
                  <CardDescription>Add an extra layer of security to your account</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Two-Factor Authentication</div>
                        <div className="text-sm text-muted-foreground">
                          Protect your account with an additional security layer
                        </div>
                      </div>
                      <Switch />
                    </div>

                    <div className="p-4 border rounded-md bg-muted/50">
                      <p className="text-sm text-muted-foreground">
                        Two-factor authentication adds an extra layer of security to your account by requiring more than
                        just a password to sign in.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Session Management</CardTitle>
                  <CardDescription>Manage your active sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { device: "Chrome on Windows", location: "New York, USA", lastActive: "Active now" },
                      { device: "Safari on iPhone", location: "New York, USA", lastActive: "2 hours ago" },
                      { device: "Firefox on MacOS", location: "Boston, USA", lastActive: "3 days ago" },
                    ].map((session, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-md">
                        <div>
                          <div className="font-medium">{session.device}</div>
                          <div className="text-sm text-muted-foreground">
                            {session.location} • {session.lastActive}
                          </div>
                        </div>
                        {index === 0 ? (
                          <div className="text-sm text-green-600 font-medium">Current Session</div>
                        ) : (
                          <Button variant="outline" size="sm">
                            Sign Out
                          </Button>
                        )}
                      </div>
                    ))}

                    <Button variant="outline" className="w-full">
                      Sign Out of All Sessions
                    </Button>
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

