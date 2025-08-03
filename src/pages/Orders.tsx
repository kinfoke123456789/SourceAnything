import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Package, 
  Search, 
  Truck, 
  Clock,
  CheckCircle,
  MapPin,
  ExternalLink
} from "lucide-react";

const mockOrders = [
  {
    id: "ORD-2024-001",
    product: "Wireless Bluetooth Headphones",
    status: "delivered",
    tracking: "TRK123456789",
    estimatedDelivery: "2024-01-15",
    supplier: "TechGlobal Inc.",
    price: 89.99
  },
  {
    id: "ORD-2024-002", 
    product: "Ergonomic Office Chair",
    status: "shipped",
    tracking: "TRK987654321",
    estimatedDelivery: "2024-01-18",
    supplier: "FurniCorp Ltd.",
    price: 299.99
  },
  {
    id: "ORD-2024-003",
    product: "Smart Fitness Watch",
    status: "processing", 
    tracking: "TRK456789123",
    estimatedDelivery: "2024-01-22",
    supplier: "WearTech Solutions",
    price: 199.99
  },
  {
    id: "ORD-2024-004",
    product: "Premium Coffee Machine",
    status: "sourcing",
    tracking: "TRK321654987",
    estimatedDelivery: "2024-01-25",
    supplier: "KitchenPro Global",
    price: 449.99
  }
];

export default function Orders() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "bg-success/10 text-success border-success/20";
      case "shipped": return "bg-info/10 text-info border-info/20";
      case "processing": return "bg-warning/10 text-warning border-warning/20";
      case "sourcing": return "bg-primary/10 text-primary border-primary/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered": return <CheckCircle className="h-4 w-4" />;
      case "shipped": return <Truck className="h-4 w-4" />;
      case "processing": return <Package className="h-4 w-4" />;
      case "sourcing": return <Search className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            My Orders
          </h1>
          <p className="text-muted-foreground">
            Track all your AI-sourced products and deliveries
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Input 
            placeholder="Search orders..." 
            className="w-64"
          />
          <Button variant="outline">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {mockOrders.map((order) => (
          <Card key={order.id} className="hover:shadow-accent transition-all">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-lg">{order.product}</CardTitle>
                    <Badge variant="outline" className={getStatusColor(order.status)}>
                      {getStatusIcon(order.status)}
                      <span className="ml-1 capitalize">{order.status}</span>
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Order: {order.id}</span>
                    <span>•</span>
                    <span>Tracking: {order.tracking}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-success">${order.price}</div>
                  <div className="text-sm text-muted-foreground">Total</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-muted-foreground" />
                  <span>{order.supplier}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>Est. Delivery: {order.estimatedDelivery}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Tracking Available</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <Truck className="h-4 w-4 mr-2" />
                  Track Package
                </Button>
                <Button variant="outline" className="flex-1">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Details
                </Button>
                {order.status === "delivered" && (
                  <Button className="flex-1 bg-gradient-accent hover:opacity-90">
                    Rate & Review
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {mockOrders.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Orders Yet</h3>
            <p className="text-muted-foreground mb-4">
              Start by sourcing your first product with our AI assistant
            </p>
            <Button className="bg-gradient-primary hover:opacity-90">
              Start Sourcing
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}