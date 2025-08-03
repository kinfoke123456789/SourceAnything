import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Bot, 
  Send, 
  Sparkles, 
  Package, 
  DollarSign, 
  Truck,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";
import { toast } from "sonner";

interface SourcedProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  supplier: string;
  estimatedDelivery: string;
  status: "sourcing" | "found" | "ordered" | "shipped" | "delivered";
  confidence: number;
}

export default function AISourcing() {
  const [prompt, setPrompt] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [sourcedProducts, setSourcedProducts] = useState<SourcedProduct[]>([]);

  const handleSourceProduct = async () => {
    if (!prompt.trim()) return;

    setIsProcessing(true);
    toast.info("AI is sourcing your request...");

    // Simulate AI processing
    setTimeout(() => {
      const newProduct: SourcedProduct = {
        id: Date.now().toString(),
        title: `AI Sourced: ${prompt.slice(0, 50)}...`,
        description: `Premium quality product matching your request: "${prompt}"`,
        price: Math.floor(Math.random() * 500) + 50,
        supplier: "Verified Global Supplier",
        estimatedDelivery: "5-7 business days",
        status: "found",
        confidence: Math.floor(Math.random() * 20) + 80
      };

      setSourcedProducts(prev => [newProduct, ...prev]);
      setPrompt("");
      setIsProcessing(false);
      toast.success("Product sourced successfully!");
    }, 3000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "sourcing": return <Clock className="h-4 w-4 text-warning" />;
      case "found": return <CheckCircle className="h-4 w-4 text-success" />;
      case "ordered": return <Package className="h-4 w-4 text-info" />;
      case "shipped": return <Truck className="h-4 w-4 text-primary" />;
      case "delivered": return <CheckCircle className="h-4 w-4 text-success" />;
      default: return <AlertCircle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "sourcing": return "bg-warning/10 text-warning border-warning/20";
      case "found": return "bg-success/10 text-success border-success/20";
      case "ordered": return "bg-info/10 text-info border-info/20";
      case "shipped": return "bg-primary/10 text-primary border-primary/20";
      case "delivered": return "bg-success/10 text-success border-success/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-hero rounded-lg p-8 text-center border border-border">
        <div className="flex justify-center mb-4">
          <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
            <Bot className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
          AI-Powered Product Sourcing
        </h1>
        <p className="text-muted-foreground text-lg mb-6">
          Describe anything you need, and our AI will source it globally with automated payment and tracking
        </p>
        
        {/* Sourcing Input */}
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <div className="space-y-4">
              <Textarea
                placeholder="Describe what you need... (e.g., 'High-quality wireless headphones with noise cancellation under $200' or 'Organic cotton t-shirts for a small business, bulk order')"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[100px] resize-none"
                disabled={isProcessing}
              />
              <Button 
                onClick={handleSourceProduct}
                disabled={!prompt.trim() || isProcessing}
                className="w-full bg-gradient-primary hover:opacity-90 transition-all shadow-glow"
                size="lg"
              >
                {isProcessing ? (
                  <>
                    <Sparkles className="h-4 w-4 mr-2 animate-spin" />
                    AI is Sourcing...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Source with AI
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Processing Indicator */}
      {isProcessing && (
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                <span className="font-medium">AI Processing Your Request</span>
              </div>
              <Progress value={66} className="h-2" />
              <div className="text-sm text-muted-foreground space-y-1">
                <div>✓ Analyzing product requirements</div>
                <div>✓ Scanning global supplier network</div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full animate-pulse" />
                  Negotiating prices and terms
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Sourced Products */}
      {sourcedProducts.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Sourced Products</h2>
          <div className="grid gap-4">
            {sourcedProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-accent transition-all">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{product.title}</CardTitle>
                      <p className="text-muted-foreground text-sm">{product.description}</p>
                    </div>
                    <Badge variant="outline" className={getStatusColor(product.status)}>
                      {getStatusIcon(product.status)}
                      <span className="ml-1 capitalize">{product.status}</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-success" />
                      <span className="font-medium">${product.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-info" />
                      <span>{product.supplier}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4 text-primary" />
                      <span>{product.estimatedDelivery}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-warning" />
                      <span>{product.confidence}% match</span>
                    </div>
                  </div>
                  
                  {product.status === "found" && (
                    <div className="flex gap-2">
                      <Button className="flex-1" variant="outline">
                        Request Details
                      </Button>
                      <Button className="flex-1 bg-gradient-primary hover:opacity-90">
                        Order Now
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {sourcedProducts.length === 0 && !isProcessing && (
        <Card className="text-center py-12">
          <CardContent>
            <Bot className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Ready to Source Anything</h3>
            <p className="text-muted-foreground">
              Enter a description above and let our AI find the perfect products for you
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}