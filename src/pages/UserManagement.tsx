import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  Search, 
  UserPlus, 
  MoreHorizontal,
  Shield,
  Mail,
  Calendar,
  Edit,
  Trash
} from "lucide-react";

const users = [
  { id: 1, name: "John Smith", email: "john@example.com", role: "Customer", status: "active", joined: "2024-01-15", orders: 12 },
  { id: 2, name: "Sarah Johnson", email: "sarah@example.com", role: "Customer", status: "active", joined: "2024-01-20", orders: 8 },
  { id: 3, name: "Mike Wilson", email: "mike@example.com", role: "Admin", status: "active", joined: "2023-12-01", orders: 0 },
  { id: 4, name: "Emily Davis", email: "emily@example.com", role: "Customer", status: "inactive", joined: "2024-01-10", orders: 3 },
];

export default function UserManagement() {
  const getStatusColor = (status: string) => {
    return status === "active" 
      ? "bg-success/10 text-success border-success/20"
      : "bg-muted/10 text-muted-foreground border-muted/20";
  };

  const getRoleColor = (role: string) => {
    return role === "Admin"
      ? "bg-primary/10 text-primary border-primary/20"
      : "bg-info/10 text-info border-info/20";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            User Management
          </h1>
          <p className="text-muted-foreground">
            Manage platform users and their permissions
          </p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90">
          <UserPlus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              All Users
            </CardTitle>
            <div className="flex items-center gap-4">
              <Input placeholder="Search users..." className="w-64" />
              <Button variant="outline">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/30 transition-all">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg`} />
                    <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold">{user.name}</h3>
                      <Badge variant="outline" className={getRoleColor(user.role)}>
                        {user.role === "Admin" ? <Shield className="h-3 w-3 mr-1" /> : null}
                        {user.role}
                      </Badge>
                      <Badge variant="outline" className={getStatusColor(user.status)}>
                        {user.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {user.email}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Joined {user.joined}
                      </div>
                      <span>{user.orders} orders</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
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