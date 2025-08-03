import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BarChart3,
  TrendingUp,
  Users,
  Package,
  DollarSign,
  Bot,
  Globe,
  ShoppingCart,
  Truck,
  AlertTriangle
} from "lucide-react";

// Mock data - replace with real data from your database
const dashboardStats = {
  totalRevenue: 1250000,
  totalOrders: 3420,
  activeUsers: 890,
  successRate: 94.2,
  aiProcessingJobs: 127,
  supplierNetwork: 1500
};

const recentOrders = [
  { id: "ORD-001", product: "Wireless Headphones", customer: "John Doe", value: 299, status: "processing" },
  { id: "ORD-002", product: "Laptop Stand", customer: "Jane Smith", value: 89, status: "shipped" },
  { id: "ORD-003", product: "Ergonomic Chair", customer: "Mike Johnson", value: 459, status: "delivered" },
  { id: "ORD-004", product: "Smart Watch", customer: "Sarah Wilson", value: 349, status: "sourcing" },
  { id: "ORD-005", product: "Coffee Machine", customer: "David Brown", value: 899, status: "processing" }
];

const aiMetrics = [
  { label: "Sourcing Success Rate", value: 94.2, color: "bg-success" },
  { label: "Average Processing Time", value: 85, color: "bg-primary" },
  { label: "Customer Satisfaction", value: 96.8, color: "bg-accent" },
  { label: "Cost Optimization", value: 78.5, color: "bg-warning" }
];

export default function AdminDashboard() {
  const getStatusBadge = (status: string) => {
    const colors = {
      processing: "bg-warning/10 text-warning border-warning/20",
      shipped: "bg-info/10 text-info border-info/20",
      delivered: "bg-success/10 text-success border-success/20",
      sourcing: "bg-primary/10 text-primary border-primary/20"
    };
    return colors[status as keyof typeof colors] || "bg-muted/10 text-muted-foreground";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Admin Dashboard
        </h1>
        <p className="text-muted-foreground">
          Monitor your AI sourcing platform performance and operations
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <Card className="hover:shadow-accent transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">
              ${dashboardStats.totalRevenue.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-accent transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {dashboardStats.totalOrders.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">+8.2% from last month</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-accent transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-info">
              {dashboardStats.activeUsers}
            </div>
            <p className="text-xs text-muted-foreground">+15.3% from last month</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-accent transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Success Rate</CardTitle>
            <Bot className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">
              {dashboardStats.successRate}%
            </div>
            <p className="text-xs text-muted-foreground">+2.1% from last month</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-accent transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Processing</CardTitle>
            <Package className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">
              {dashboardStats.aiProcessingJobs}
            </div>
            <p className="text-xs text-muted-foreground">Currently active</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-accent transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Supplier Network</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {dashboardStats.supplierNetwork}
            </div>
            <p className="text-xs text-muted-foreground">Verified suppliers</p>
          </CardContent>
        </Card>
      </div>

      {/* AI Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            AI Performance Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiMetrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{metric.label}</span>
                  <span className="text-sm text-muted-foreground">{metric.value}%</span>
                </div>
                <Progress value={metric.value} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              Recent Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{order.id}</span>
                      <Badge variant="outline" className={getStatusBadge(order.status)}>
                        {order.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{order.product}</p>
                    <p className="text-xs text-muted-foreground">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-success">${order.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Health */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              System Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-success/10">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-success rounded-full" />
                  <span className="text-sm font-medium">AI Processing Engine</span>
                </div>
                <span className="text-xs text-success">Operational</span>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg bg-success/10">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-success rounded-full" />
                  <span className="text-sm font-medium">Payment Gateway</span>
                </div>
                <span className="text-xs text-success">Operational</span>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg bg-warning/10">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-warning rounded-full" />
                  <span className="text-sm font-medium">Supplier API</span>
                </div>
                <span className="text-xs text-warning">Degraded</span>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg bg-success/10">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-success rounded-full" />
                  <span className="text-sm font-medium">Tracking System</span>
                </div>
                <span className="text-xs text-success">Operational</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}