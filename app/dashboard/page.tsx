import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, PartyPopper, ShoppingBag, User2 } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Revenue</CardTitle>
            <DollarSign className="h-5 w-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$100.00</p>
            <p className="text-muted-foreground text-xs">
              Based on 100 Charges
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Sales</CardTitle>
            <ShoppingBag className="h-5 w-5 text-blue-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$50.00</p>
            <p className="text-muted-foreground text-xs">
              Total Sales on Shoe Marshal
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Products</CardTitle>
            <PartyPopper className="h-5 w-5 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">37</p>
            <p className="text-muted-foreground text-xs">
              Total Products Created
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Users</CardTitle>
            <User2 className="h-5 w-5 text-orange-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">120</p>
            <p className="text-muted-foreground text-xs">
              Total Users Signed Up
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-10 grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>
              Recent Transactions from your Store
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Jan Marshal</p>
                <p className="text-muted-foreground text-sm">test@test.com</p>
              </div>
              <p className="ml-auto font-medium">+$1,999.00</p>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Jan Marshal</p>
                <p className="text-muted-foreground text-sm">test@test.com</p>
              </div>
              <p className="ml-auto font-medium">+$1,999.00</p>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Jan Marshal</p>
                <p className="text-muted-foreground text-sm">test@test.com</p>
              </div>
              <p className="ml-auto font-medium">+$1,999.00</p>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Jan Marshal</p>
                <p className="text-muted-foreground text-sm">test@test.com</p>
              </div>
              <p className="ml-auto font-medium">+$1,999.00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
