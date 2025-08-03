import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  Search,
  Package,
  Truck,
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const trackingSteps = [
  { label: "Order Confirmed", completed: true, date: "2024-01-10" },
  { label: "AI Sourcing Complete", completed: true, date: "2024-01-11" },
  { label: "Payment Processed", completed: true, date: "2024-01-11" },
  { label: "Shipped from Supplier", completed: true, date: "2024-01-12" },
  { label: "In Transit", completed: false, date: "2024-01-15", current: true },
  { label: "Out for Delivery", completed: false, date: "2024-01-16" },
  { label: "Delivered", completed: false, date: "2024-01-16" }
];

export default function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [showTracking, setShowTracking] = useState(false);

  const handleTrack = () => {
    if (trackingNumber.trim()) {
      setShowTracking(true);
    }
  };

  const completedSteps = trackingSteps.filter(step => step.completed).length;
  const progressPercentage = (completedSteps / trackingSteps.length) * 100;

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Track Your Order
          </h1>
          <p className="text-muted-foreground text-lg">
            Enter your tracking number to see real-time updates on your SourceAnything order
          </p>
        </div>

        {/* Tracking Input */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" />
              Track Your Package
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <Input
                placeholder="Enter tracking number (e.g., TRK123456789)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={handleTrack}
                className="bg-gradient-primary hover:opacity-90"
              >
                <Search className="h-4 w-4 mr-2" />
                Track
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              You can find your tracking number in your order confirmation email
            </p>
          </CardContent>
        </Card>

        {/* Tracking Results */}
        {showTracking && (
          <div className="space-y-6">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    Order Details
                  </CardTitle>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    <Truck className="h-3 w-3 mr-1" />
                    In Transit
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-lg">Wireless Bluetooth Headphones</h3>
                    <p className="text-muted-foreground">Premium noise-canceling headphones</p>
                    <div className="flex items-center gap-4 mt-2 text-sm">
                      <span>Order: ORD-2024-001</span>
                      <span>•</span>
                      <span>Tracking: {trackingNumber || "TRK123456789"}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>From: Shanghai, China</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>To: New York, NY, USA</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Est. Delivery: Jan 16, 2024</span>
                    </div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Delivery Progress</span>
                    <span>{Math.round(progressPercentage)}% Complete</span>
                  </div>
                  <Progress value={progressPercentage} className="h-3" />
                </div>
              </CardContent>
            </Card>

            {/* Tracking Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Tracking Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trackingSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`
                          h-8 w-8 rounded-full flex items-center justify-center border-2
                          ${step.completed 
                            ? 'bg-success border-success text-white' 
                            : step.current 
                              ? 'bg-primary border-primary text-white animate-pulse'
                              : 'bg-muted border-muted text-muted-foreground'
                          }
                        `}>
                          {step.completed ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : step.current ? (
                            <Clock className="h-4 w-4" />
                          ) : (
                            <AlertCircle className="h-4 w-4" />
                          )}
                        </div>
                        {index < trackingSteps.length - 1 && (
                          <div className={`
                            w-0.5 h-8 mt-2
                            ${step.completed ? 'bg-success' : 'bg-muted'}
                          `} />
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-medium ${
                            step.completed 
                              ? 'text-foreground' 
                              : step.current 
                                ? 'text-primary font-semibold'
                                : 'text-muted-foreground'
                          }`}>
                            {step.label}
                          </h4>
                          <span className="text-sm text-muted-foreground">
                            {step.date}
                          </span>
                        </div>
                        {step.current && (
                          <p className="text-sm text-primary mt-1">
                            Your package is currently in transit and on its way to you
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <h3 className="font-semibold">Need Help?</h3>
                  <p className="text-muted-foreground text-sm">
                    If you have any questions about your order, our AI-powered support is here to help 24/7
                  </p>
                  <Button variant="outline">
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Quick Access */}
        {!showTracking && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="text-center p-6 hover:shadow-accent transition-all cursor-pointer">
              <Package className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Sample Tracking</h3>
              <p className="text-sm text-muted-foreground mb-4">
                See how our tracking works
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  setTrackingNumber("TRK123456789");
                  setShowTracking(true);
                }}
              >
                Try Demo
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-accent transition-all">
              <Truck className="h-8 w-8 text-success mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Average delivery time: 5-7 days globally
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-accent transition-all">
              <CheckCircle className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Reliable Service</h3>
              <p className="text-sm text-muted-foreground">
                99.5% successful delivery rate
              </p>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}