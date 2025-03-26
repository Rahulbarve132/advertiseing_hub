"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart, FileText, Settings, LogOut, Users, CreditCard, ShieldCheck, Bell } from "lucide-react"

export function AdminSidebar() {
  const pathname = usePathname()

  const menuItems = [
    { icon: ShieldCheck, label: "Dashboard", href: "/dashboard/admin" },
    { icon: Users, label: "Users", href: "/dashboard/admin/users" },
    { icon: FileText, label: "Campaigns", href: "/dashboard/admin/campaigns" },
    { icon: BarChart, label: "Analytics", href: "/dashboard/admin/analytics" },
    { icon: CreditCard, label: "Billing", href: "/dashboard/admin/billing" },
    { icon: Bell, label: "Notifications", href: "/dashboard/admin/notifications" },
    { icon: Settings, label: "Settings", href: "/dashboard/admin/settings" },
  ]

  return (
    <div className="w-64 border-r bg-card h-[calc(100vh-theme(spacing.16))]">
      <div className="p-4">
        <div className="flex items-center gap-2 px-2 py-1.5">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
            A
          </div>
          <div>
            <div className="font-medium">Admin Portal</div>
            <div className="text-xs text-muted-foreground">The Advertiseing Hub</div>
          </div>
        </div>
      </div>

      <nav className="space-y-1 px-3 py-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md ${
                isActive ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:bg-secondary/50"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="absolute bottom-4 px-3 w-64">
        <Link href="/">
          <button className="flex items-center gap-2 w-full px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-secondary/50">
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </Link>
      </div>
    </div>
  )
}

