import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Package } from "lucide-react";

const amounts = [10, 25, 50, 100];

const DonateSection = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState("");
  const [tab, setTab] = useState<"money" | "products">("money");

  const donationAmount = customAmount
    ? Number(customAmount)
    : selectedAmount || 0;

  const handlePayPal = () => {
    if (donationAmount <= 0) return;
    // PayPal donate link — user will configure their PayPal.me or button ID
    const paypalUrl = `https://www.paypal.me/hopeinabag/${donationAmount}`;
    window.open(paypalUrl, "_blank");
  };

  return (
    <AnimatedSection id="donate" className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Make a Difference
        </h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
          Your generosity changes lives. Choose how you'd like to give.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={tab === "money" ? "default" : "outline"}
            onClick={() => setTab("money")}
            className="rounded-full gap-2"
          >
            <Heart className="w-4 h-4" /> Donate Money
          </Button>
          <Button
            variant={tab === "products" ? "default" : "outline"}
            onClick={() => setTab("products")}
            className="rounded-full gap-2"
          >
            <Package className="w-4 h-4" /> Donate Products
          </Button>
        </div>

        {tab === "money" ? (
          <div className="bg-background rounded-2xl p-8 shadow-sm">
            {/* Amount buttons */}
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              {amounts.map((a) => (
                <button
                  key={a}
                  onClick={() => {
                    setSelectedAmount(a);
                    setCustomAmount("");
                  }}
                  className={`px-6 py-3 rounded-full font-bold text-lg transition-all ${
                    selectedAmount === a && !customAmount
                      ? "bg-primary text-primary-foreground shadow-md scale-105"
                      : "bg-muted text-foreground hover:bg-primary/10"
                  }`}
                >
                  ${a}
                </button>
              ))}
            </div>

            <div className="max-w-xs mx-auto mb-6">
              <Input
                type="number"
                placeholder="Custom amount ($)"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                className="rounded-full text-center text-lg"
                min={1}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handlePayPal}
                className="rounded-full bg-primary text-primary-foreground hover:scale-105 transition-transform px-8"
              >
                Pay with PayPal
              </Button>
            </div>

            {/* M-Pesa */}
            <div className="mt-8 p-6 rounded-2xl bg-hope-green/10 text-center">
              <h4 className="font-heading font-bold text-lg mb-2 text-hope-green">
                Pay via M-Pesa
              </h4>
              <p className="text-muted-foreground text-sm">
                Paybill:{" "}
                <span className="font-bold text-foreground">XXXXXX</span> |
                Account:{" "}
                <span className="font-bold text-foreground">HopeInABag</span>
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Contact us for more payment options.
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-background rounded-2xl p-8 shadow-sm text-center">
            <Package className="w-16 h-16 text-secondary mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-bold mb-3">
              Donate Products
            </h3>
            <p className="text-muted-foreground mb-4">
              We accept school supplies, clothing, hygiene products, and food
              items. Reach out to us to arrange drop-off or pickup.
            </p>
            <Button
              variant="outline"
              className="rounded-full"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Us to Arrange
            </Button>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
};

export default DonateSection;
