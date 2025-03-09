
import MainLayout from '@/layouts/MainLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from 'react';
import { Check, CreditCard, Lock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Payment successful!",
        description: "Thank you for your purchase. You now have access to the course.",
      });
      navigate('/courses');
    }, 2000);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-medium tracking-tight text-primary mb-2 flex items-center">
            <CreditCard className="mr-2 h-6 w-6" />
            Checkout
          </h1>
          <p className="text-muted-foreground mb-8">
            Complete your purchase securely
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>Choose how you want to pay</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Button 
                        variant={paymentMethod === 'card' ? 'default' : 'outline'} 
                        className="w-1/2"
                        onClick={() => setPaymentMethod('card')}
                      >
                        <CreditCard className="mr-2 h-4 w-4" />
                        Credit Card
                      </Button>
                      <Button 
                        variant={paymentMethod === 'paypal' ? 'default' : 'outline'} 
                        className="w-1/2"
                        onClick={() => setPaymentMethod('paypal')}
                      >
                        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M7.629 11.75h-1.54a.28.28 0 0 0-.275.25L5.11 19.19a.28.28 0 0 0 .275.31h1.445a.28.28 0 0 0 .275-.25l.704-4.454a.28.28 0 0 1 .275-.25h1.541c1.435 0 2.255-.747 2.47-2.208.098-.675.004-1.205-.277-1.578-.308-.402-.858-.589-1.62-.589h-.569zm.27 1.075c.135-.866.707-.866 1.276-.866h.138c.366 0 .844.107.844.701 0 .463-.304.845-1.072.845h-.9l-.285 1.807zm6.878-1.075h-1.541a.28.28 0 0 0-.275.25l-.704 4.464a.28.28 0 0 1-.275.25h-1.59a.28.28 0 0 0-.275.25l-.145.91a.28.28 0 0 0 .275.31h1.542a.28.28 0 0 0 .275-.25l.704-4.464a.28.28 0 0 1 .275-.25h1.59a.28.28 0 0 0 .275-.25l.144-.91a.28.28 0 0 0-.275-.31zm3.11 0h-1.54a.28.28 0 0 0-.275.25L15.37 19.19a.28.28 0 0 0 .275.31h1.445a.28.28 0 0 0 .275-.25l.704-4.454a.28.28 0 0 1 .275-.25h1.54c1.436 0 2.256-.747 2.472-2.208.097-.675.004-1.205-.278-1.578-.308-.402-.858-.589-1.62-.589h-.57zm.27 1.075c.135-.866.707-.866 1.276-.866h.138c.366 0 .844.107.844.701 0 .463-.304.845-1.072.845h-.9l-.285 1.807zM11.179 0H6.71c-.373 0-.691.278-.75.647L3.973 15.404a.45.45 0 0 0 .444.525h2.226c.373 0 .691-.279.75-.647l.536-3.395a.75.75 0 0 1 .75-.647h1.424c3.603 0 5.672-1.761 6.218-5.233.248-1.546.013-2.745-.692-3.59C14.899.541 13.324 0 11.18 0z" />
                        </svg>
                        PayPal
                      </Button>
                    </div>

                    {paymentMethod === 'card' && (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardName">Name on card</Label>
                          <Input id="cardName" placeholder="John Smith" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card number</Label>
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry date</Label>
                            <Input id="expiry" placeholder="MM/YY" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" required />
                          </div>
                        </div>
                        <Button type="submit" className="w-full" disabled={isProcessing}>
                          {isProcessing ? (
                            <>Processing...</>
                          ) : (
                            <>
                              Pay Now <Lock className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    )}

                    {paymentMethod === 'paypal' && (
                      <div className="text-center py-4 space-y-4">
                        <p className="text-muted-foreground">
                          You will be redirected to PayPal to complete your purchase securely.
                        </p>
                        <Button onClick={handleSubmit} className="w-full" disabled={isProcessing}>
                          {isProcessing ? "Processing..." : "Continue with PayPal"}
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>$1,098.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span>$87.84</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>$1,185.84</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">Secure encryption for your payments</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">14-day money-back guarantee</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">Instant access to all course materials</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Payment;
