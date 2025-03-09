
import MainLayout from '@/layouts/MainLayout';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { X, ShoppingCart, CreditCard } from "lucide-react";

const Cart = () => {
  // Mock cart data
  const cartItems = [
    {
      id: '001',
      title: 'Fundamentals of Structural Analysis',
      instructor: 'Dr. Robert Chen',
      price: 499,
      image: 'https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: '002',
      title: 'Advanced Concrete Design',
      instructor: 'Dr. Emily Wong',
      price: 599,
      image: 'https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    }
  ];

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-medium tracking-tight text-primary mb-2 flex items-center">
            <ShoppingCart className="mr-2 h-6 w-6" />
            Your Cart
          </h1>
          <p className="text-muted-foreground mb-8">
            Review your items before proceeding to checkout.
          </p>

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-8">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-32 h-24 bg-muted">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="flex-1 flex flex-col p-4">
                        <div className="flex items-start justify-between mb-2">
                          <Link to={`/courses/${item.id}`} className="hover:underline">
                            <h3 className="font-medium">{item.title}</h3>
                          </Link>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                            <X className="h-4 w-4" />
                            <span className="sr-only">Remove</span>
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          Instructor: {item.instructor}
                        </p>
                        <div className="mt-auto">
                          <p className="font-medium">${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax (8%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to="/payment" className="w-full">
                    <Button className="w-full">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Proceed to Checkout
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ) : (
            <div className="text-center py-12">
              <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">
                Looks like you haven't added any courses to your cart yet.
              </p>
              <Link to="/courses">
                <Button>Browse Courses</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;
