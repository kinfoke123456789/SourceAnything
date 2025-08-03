import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Package, 
  Globe,
  Bot,
  Clock,
  Target
} from "lucide-react";

const monthlyData = [
  { month: "Jan", revenue: 45000, orders: 320, users: 89 },
  { month: "Feb", revenue: 52000, orders: 380, users: 95 },
  { month: "Mar", revenue: 61000, orders: 420, users: 108 },
  { month: "Apr", revenue: 58000, orders: 395, users: 102 },
  { month: "May", revenue: 67000, orders: 460, users: 118 },
  { month: "Jun", revenue: 74000, orders: 510, users: 125 }
];

const aiPerformanceData = [
  { metric: "Success Rate", value: 94.2, trend: "+2.1%" },
  { metric: "Avg Response Time", value: 2.3, trend: "-0.5s" },
  { metric: "Cost Savings", value: 23.7, trend: "+1.2%" },
  { metric: "Supplier Match", value: 89.5, trend: "+3.1%" }
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Analytics Dashboard
        </h1>
        <p className="text-muted-foreground">
          Comprehensive insights into your sourcing platform performance
        </p>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:shadow-accent transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">$357K</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">↗ +12.5%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-accent transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">2,485</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">↗ +8.2%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-accent transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders Completed</CardTitle>
            <Package className="h-4 w-4 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-info">1,847</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">↗ +15.3%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-accent transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Success Rate</CardTitle>
            <Bot className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">94.2%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">↗ +2.1%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Monthly Revenue Growth
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyData.map((month, index) => (
                <div key={month.month} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{month.month}</span>
                    <span className="text-success">${month.revenue.toLocaleString()}</span>
                  </div>
                  <Progress value={(month.revenue / 80000) * 100} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-accent" />
              Order Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyData.map((month, index) => (
                <div key={month.month} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="space-y-1">
                    <div className="font-medium">{month.month}</div>
                    <div className="text-sm text-muted-foreground">{month.orders} orders</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-accent">{month.users}</div>
                    <div className="text-xs text-muted-foreground">new users</div>
                  </div>
                </div>
              ))}
            </div>
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
            {aiPerformanceData.map((metric, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{metric.metric}</span>
                  <span className="text-sm text-success">{metric.trend}</span>
                </div>
                <div className="text-2xl font-bold">{metric.value}%</div>
                <Progress value={metric.value} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Geographic Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-info" />
              Top Sourcing Regions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { region: "Asia Pacific", percentage: 45, orders: 823 },
                { region: "North America", percentage: 28, orders: 512 },
                { region: "Europe", percentage: 18, orders: 329 },
                { region: "South America", percentage: 6, orders: 110 },
                { region: "Africa", percentage: 3, orders: 55 }
              ].map((region, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{region.region}</span>
                    <span className="text-muted-foreground">{region.orders} orders</span>
                  </div>
                  <Progress value={region.percentage} className="h-2" />
                  <div className="text-right text-xs text-muted-foreground">
                    {region.percentage}%
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-warning" />
              Performance Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Monthly Revenue Target</span>
                  <span className="text-sm text-muted-foreground">$74K / $80K</span>
                </div>
                <Progress value={92.5} className="h-2" />
                <p className="text-xs text-muted-foreground">92.5% achieved</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">AI Success Rate Target</span>
                  <span className="text-sm text-muted-foreground">94.2% / 95%</span>
                </div>
                <Progress value={99.2} className="h-2" />
                <p className="text-xs text-muted-foreground">99.2% achieved</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Customer Satisfaction</span>
                  <span className="text-sm text-muted-foreground">4.8 / 5.0</span>
                </div>
                <Progress value={96} className="h-2" />
                <p className="text-xs text-muted-foreground">96% achieved</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}