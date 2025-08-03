import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Target, 
  Globe, 
  Star, 
  TrendingUp,
  Package,
  MapPin,
  Users,
  CheckCircle
} from "lucide-react";

const suppliers = [
  {
    id: 1,
    name: "TechGlobal Solutions",
    location: "Shenzhen, China",
    category: "Electronics",
    rating: 4.8,
    orders: 245,
    reliability: 96,
    responseTime: "2 hours",
    status: "verified"
  },
  {
    id: 2,
    name: "EuroTextile Corp",
    location: "Milan, Italy", 
    category: "Textiles",
    rating: 4.6,
    orders: 189,
    reliability: 94,
    responseTime: "4 hours",
    status: "verified"
  },
  {
    id: 3,
    name: "Pacific Manufacturing",
    location: "Vietnam",
    category: "General",
    rating: 4.5,
    orders: 167,
    reliability: 91,
    responseTime: "6 hours",
    status: "pending"
  }
];

export default function SupplierNetwork() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified": return "bg-success/10 text-success border-success/20";
      case "pending": return "bg-warning/10 text-warning border-warning/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Supplier Network
        </h1>
        <p className="text-muted-foreground">
          Manage your global supplier partnerships and performance
        </p>
      </div>

      {/* Network Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">1,247</div>
                <p className="text-sm text-muted-foreground">Total Suppliers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-gradient-accent rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">892</div>
                <p className="text-sm text-muted-foreground">Verified</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-info/20 rounded-full flex items-center justify-center">
                <Globe className="h-6 w-6 text-info" />
              </div>
              <div>
                <div className="text-2xl font-bold text-info">67</div>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-warning/20 rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 text-warning" />
              </div>
              <div>
                <div className="text-2xl font-bold text-warning">4.7</div>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Suppliers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            Top Performing Suppliers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {suppliers.map((supplier) => (
              <div key={supplier.id} className="p-4 rounded-lg border hover:shadow-accent transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold">{supplier.name}</h3>
                      <Badge variant="outline" className={getStatusColor(supplier.status)}>
                        {supplier.status === "verified" ? <CheckCircle className="h-3 w-3 mr-1" /> : null}
                        {supplier.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {supplier.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Package className="h-3 w-3" />
                        {supplier.category}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {supplier.orders} orders
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="h-4 w-4 text-warning fill-current" />
                      <span className="font-semibold">{supplier.rating}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Response: {supplier.responseTime}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Reliability Score</span>
                    <span>{supplier.reliability}%</span>
                  </div>
                  <Progress value={supplier.reliability} className="h-2" />
                </div>

                <div className="flex gap-2 mt-4">
                  <Button variant="outline" className="flex-1">
                    View Details
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Contact
                  </Button>
                  <Button className="flex-1 bg-gradient-primary hover:opacity-90">
                    Partner Settings
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}