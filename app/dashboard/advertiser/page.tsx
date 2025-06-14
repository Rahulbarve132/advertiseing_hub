"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle } from "lucide-react";
import { AdvertiserSidebar } from "@/components/advertiser-sidebar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toast } from "react-hot-toast";
import { ProtectedRoute } from "@/components/protected-route";

interface Analytics {
  impressions: number;
  clicks: number;
  ctr: number;
}

interface Advertiser {
  _id: string;
  fullName: string;
  companyName: string;
}

interface Campaign {
  _id: string;
  advertiser: Advertiser;
  campaignName: string;
  campaignType: "BANNER" | "FEATURED" | "INTERACTIVE";
  headline: string;
  body: string;
  callToAction: string;
  imageUrl: string;
  status: "ACTIVE" | "PENDING" | "SCHEDULED";
  analytics: Analytics;
  createdAt?: string;
  updatedAt?: string;
  campaignDescription?: string;
}

// You can place this above your component or in a separate file
function SkeletonRow() {
  return (
    <div className="grid grid-cols-4 p-4 border-b last:border-0 animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      <div className="flex gap-2">
        <div className="h-8 w-12 bg-gray-200 rounded"></div>
        <div className="h-8 w-12 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}

export default function AdvertiserDashboard() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    const fetchCampaigns = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://advertisemedia.onrender.com/api/campaigns"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch campaigns");
        }
        const data = await response.json();

        // Filter campaigns where advertiser._id === user.id
        const filteredCampaigns = (data.campaigns || data).filter(
          (campaign: Campaign) =>
            campaign.advertiser &&
            (campaign.advertiser._id === user?.id ||
              (typeof campaign.advertiser === "string" &&
                campaign.advertiser === user?.id)) // handle both object and string cases
        );

        setCampaigns(filteredCampaigns);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
        toast.error("Failed to fetch campaigns. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, [user?.id]);

  return (
    <ProtectedRoute allowedRoles={["ADVERTISER"]}>
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

            <div className="grid gap-6 md:grid-cols-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Campaigns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {
                      campaigns.filter((campaign) => campaign.status === "ACTIVE")
                        .length
                    }
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {
                      campaigns.filter(
                        (campaign) => campaign.status === "PENDING"
                      ).length
                    }{" "}
                    pending approval
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Impressions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {campaigns
                      .reduce(
                        (sum, campaign) =>
                          sum + (campaign.analytics?.impressions || 0),
                        0
                      )
                      .toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +0% from last week
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Clicks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {campaigns
                      .reduce(
                        (sum, campaign) =>
                          sum + (campaign.analytics?.clicks || 0),
                        0
                      )
                      .toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Industry avg: 2.5%
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">CTR</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {campaigns
                      .reduce(
                        (sum, campaign) => sum + (campaign.analytics?.ctr || 0),
                        0
                      )
                      .toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Industry avg: 2.5%
                  </p>
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
                    <CardDescription>
                      Manage your active and scheduled advertising campaigns
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="border rounded-md">
                      <div className="grid grid-cols-4 p-4 font-medium border-b">
                        <div>Campaign Name</div>
                        <div>Type</div>
                        <div>Status</div>
                        <div>Actions</div>
                      </div>

                      {loading ? (
                        // Show 4 shimmer rows while loading
                        <>
                          <SkeletonRow />
                          <SkeletonRow />
                          <SkeletonRow />
                          <SkeletonRow />
                        </>
                      ) : campaigns.length === 0 ? (
                        <div className="p-4 text-center text-muted-foreground">
                          No campaigns found. Create your first campaign!
                        </div>
                      ) : (
                        campaigns.map((campaign) => (
                          <div
                            key={campaign._id}
                            className="grid grid-cols-4 p-4 border-b last:border-0"
                          >
                            <div>{campaign.campaignName}</div>
                            <div>{campaign.campaignType}</div>
                            <div>
                              <span
                                className={`px-2 py-1 rounded-full text-xs ${
                                  campaign.status === "ACTIVE"
                                    ? "bg-green-100 text-green-800"
                                    : campaign.status === "SCHEDULED"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {campaign.status}
                              </span>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                
                              >
                                Edit
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  setSelectedCampaign(campaign);
                                  setIsModalOpen(true);
                                }}
                              >
                                View
                              </Button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Campaign Performance</CardTitle>
                    <CardDescription>
                      View detailed analytics for your advertising campaigns
                    </CardDescription>
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
                            <div className="text-sm font-medium text-muted-foreground">
                              {stat.label}
                            </div>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <div className="text-xs text-green-600">
                              {stat.change}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Audience Demographics</CardTitle>
                    <CardDescription>
                      Understand who is engaging with your advertisements
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-medium mb-2">
                          Age Distribution
                        </h4>
                        <div className="h-[200px] bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                          Age Chart Placeholder
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">
                          Geographic Distribution
                        </h4>
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
                    <CardDescription>
                      View and manage your billing information and invoices
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 border rounded-md">
                        <div>
                          <div className="font-medium">Current Plan</div>
                          <div className="text-sm text-muted-foreground">
                            Premium Advertiser
                          </div>
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
                          {
                            id: "INV-001",
                            date: "Mar 15, 2023",
                            amount: "$1,200.00",
                            status: "Paid",
                          },
                          {
                            id: "INV-002",
                            date: "Apr 15, 2023",
                            amount: "$1,200.00",
                            status: "Paid",
                          },
                          {
                            id: "INV-003",
                            date: "May 15, 2023",
                            amount: "$1,500.00",
                            status: "Pending",
                          },
                        ].map((invoice, index) => (
                          <div
                            key={index}
                            className="grid grid-cols-4 p-4 border-b last:border-0"
                          >
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
                            <div className="text-xs text-muted-foreground">
                              Expires 12/25
                            </div>
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

            {selectedCampaign && (
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Campaign</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Campaign Name
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        value={selectedCampaign.campaignName}
                        onChange={(e) =>
                          setSelectedCampaign({
                            ...selectedCampaign,
                            campaignName: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Campaign Type
                      </label>
                      <select
                        className="w-full p-2 border rounded-md"
                        value={selectedCampaign.campaignType}
                        onChange={(e) =>
                          setSelectedCampaign({
                            ...selectedCampaign,
                            campaignType: e.target.value as
                              | "BANNER"
                              | "FEATURED"
                              | "INTERACTIVE",
                          })
                        }
                      >
                        <option value="BANNER">Banner</option>
                        <option value="FEATURED">Featured</option>
                        <option value="INTERACTIVE">Interactive</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Status
                      </label>
                      <select
                        className="w-full p-2 border rounded-md"
                        value={selectedCampaign.status}
                        onChange={(e) =>
                          setSelectedCampaign({
                            ...selectedCampaign,
                            status: e.target.value as "ACTIVE" | "PENDING" | "SCHEDULED",
                          })
                        }
                      >
                        <option value="ACTIVE">Active</option>
                        <option value="PENDING">Pending</option>
                        <option value="SCHEDULED">Scheduled</option>
                      </select>
                    </div>

                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={() => {
                          // TODO: Handle save campaign
                          setIsModalOpen(false);
                        }}
                      >
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </main>
        </div>

        {/* Campaign Details Modal */}
        <Dialog open={isModalOpen} onOpenChange={() => {
          setIsModalOpen(false);
          setSelectedCampaign(null);
        }}>
          <DialogContent className="max-w-2xl bg-white max-h-[90vh] overflow-y-auto">
            {selectedCampaign && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedCampaign.campaignName}</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <img
                        src={selectedCampaign.imageUrl}
                        alt={selectedCampaign.headline}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">Analytics</h3>
                      <div className="grid grid-cols-3 gap-4 mt-2">
                        <div className="p-2 bg-gray-50 rounded-lg">
                          <div className="text-sm text-gray-500">Impressions</div>
                          <div className="font-semibold">{selectedCampaign.analytics.impressions}</div>
                        </div>
                        <div className="p-2 bg-gray-50 rounded-lg">
                          <div className="text-sm text-gray-500">Clicks</div>
                          <div className="font-semibold">{selectedCampaign.analytics.clicks}</div>
                        </div>
                        <div className="p-2 bg-gray-50 rounded-lg">
                          <div className="text-sm text-gray-500">CTR</div>
                          <div className="font-semibold">{selectedCampaign.analytics.ctr}%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">Campaign Information</h3>
                      <div className="mt-2 space-y-2">
                        <div>
                          <div className="text-sm text-gray-500">Campaign Type</div>
                          <div>{selectedCampaign.campaignType}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Status</div>
                          <div className={selectedCampaign.status === 'ACTIVE' ? 'text-green-600' : 'text-yellow-600'}>
                            {selectedCampaign.status}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold">Content</h3>
                      <div className="mt-2 space-y-2">
                        <div>
                          <div className="text-sm text-gray-500">Headline</div>
                          <div>{selectedCampaign.headline}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Body</div>
                          <div className="text-sm">{selectedCampaign.body}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Call to Action</div>
                          <div>{selectedCampaign.callToAction}</div>
                        </div>
                      </div>
                    </div>
                    {selectedCampaign.campaignDescription && (
                      <div>
                        <h3 className="font-semibold">Description</h3>
                        <div className="mt-2">
                          <div className="text-sm">{selectedCampaign.campaignDescription}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </ProtectedRoute>
  );
}
