import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { 
  calculateMonthlyConsumption, 
  calculateRequiredCapacity,
  calculateSystemCost,
  calculateSavings,
  calculateBreakEvenYears,
  calculateLifetimeSavings,
  calculateRequiredArea
} from "@/utils/calculatorUtils";
import { Sun, Battery, CreditCard, TrendingUp, CalendarClock, MapPin, Zap, IndianRupee, Square, Bolt } from "lucide-react";

const SolarCalculator = () => {
  const [formValues, setFormValues] = useState({
    monthlyBill: "2000",
    powerPhase: "single",
    tariffRate: 6,
    roofArea: "500",
    areaUnit: "sqft",
    sanctionLoad: "5",
    pinCode: ""
  });
  
  const [results, setResults] = useState<{
    consumption: number;
    capacity: number;
    requiredArea: {
      sqft: number;
      sqm: number;
    };
    systemCost: {
      originalCost: number;
      subsidyAmount: number;
      finalCost: number;
    };
    savings: {
      monthlySavings: number;
      annualSavings: number;
      percentSavings: number;
    };
    breakEven: number;
    lifetimeSavings: number;
  } | null>(null);

  const handleInputChange = (field: string, value: string | number) => {
    setFormValues(prev => ({ ...prev, [field]: value }));
  };

  const handleCalculate = () => {
    const billValue = parseFloat(formValues.monthlyBill);
    if (isNaN(billValue) || billValue <= 0) return;

    const consumption = calculateMonthlyConsumption(billValue, formValues.tariffRate);
    const capacity = calculateRequiredCapacity(consumption);
    const requiredArea = calculateRequiredArea(capacity);
    const systemCost = calculateSystemCost(capacity);
    const savings = calculateSavings(consumption, formValues.tariffRate);
    const breakEven = calculateBreakEvenYears(systemCost.finalCost, savings.annualSavings);
    const lifetimeSavings = calculateLifetimeSavings(savings.annualSavings, systemCost.finalCost);
    
    const percentSavings = Math.min(Math.round((savings.monthlySavings / billValue) * 100), 100);

    setResults({
      consumption,
      capacity,
      requiredArea,
      systemCost,
      savings: {
        ...savings,
        percentSavings
      },
      breakEven,
      lifetimeSavings
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Solar Savings Calculator</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find out how much you can save with solar energy and what size system you need.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-lg border-solar-yellow/20">
          <CardContent className="p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-medium text-xl mb-6">Enter Your Details</h3>
                <div className="space-y-6">
                  {/* PIN Code Input - Replacing static Odisha location */}
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-solar-blue mr-2" />
                      <Label htmlFor="pinCode">PIN Code</Label>
                    </div>
                    <Input
                      id="pinCode"
                      type="text"
                      placeholder="Enter your PIN code"
                      value={formValues.pinCode}
                      onChange={(e) => handleInputChange("pinCode", e.target.value)}
                      maxLength={6}
                      className="text-lg"
                    />
                    <p className="text-xs text-gray-500">Enter your 6-digit postal code</p>
                  </div>
                  
                  {/* Power Supply Phase */}
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 text-solar-blue mr-2" />
                      <Label>Power Supply Phase</Label>
                    </div>
                    <RadioGroup
                      value={formValues.powerPhase}
                      onValueChange={(value) => handleInputChange("powerPhase", value)}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="single" id="single" />
                        <Label htmlFor="single">Single Phase</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="three" id="three" />
                        <Label htmlFor="three">Three Phase</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  {/* Tariff Rates */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <IndianRupee className="h-5 w-5 text-solar-blue mr-2" />
                        <Label>Tariff Rates</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Input
                          type="number"
                          value={formValues.tariffRate.toString()}
                          onChange={(e) => handleInputChange("tariffRate", parseFloat(e.target.value) || 6)}
                          className="w-20 text-center"
                        />
                        <span className="text-sm text-gray-500">INR</span>
                      </div>
                    </div>
                    <Slider 
                      value={[formValues.tariffRate]} 
                      min={4} 
                      max={12} 
                      step={0.5}
                      onValueChange={(value) => handleInputChange("tariffRate", value[0])}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>4</span>
                      <span>12</span>
                    </div>
                  </div>
                  
                  {/* Monthly Electricity Bill */}
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <IndianRupee className="h-5 w-5 text-solar-blue mr-2" />
                      <Label htmlFor="monthlyBill">Monthly Electricity Bill</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Input
                        id="monthlyBill"
                        type="number"
                        placeholder="e.g., 2000"
                        value={formValues.monthlyBill}
                        onChange={(e) => handleInputChange("monthlyBill", e.target.value)}
                        className="text-lg flex-1"
                      />
                      <span className="text-sm text-gray-500 w-12">INR</span>
                    </div>
                  </div>
                  
                  {/* Available Roof Top Area */}
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Square className="h-5 w-5 text-solar-blue mr-2" />
                      <Label htmlFor="roofArea">Available Roof Top Area</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Input
                        id="roofArea"
                        type="number"
                        placeholder="e.g., 500"
                        value={formValues.roofArea}
                        onChange={(e) => handleInputChange("roofArea", e.target.value)}
                        className="flex-1"
                      />
                      <RadioGroup
                        value={formValues.areaUnit}
                        onValueChange={(value) => handleInputChange("areaUnit", value)}
                        className="flex space-x-4"
                      >
                        <div className="flex items-center space-x-1">
                          <RadioGroupItem value="sqft" id="sqft" />
                          <Label htmlFor="sqft" className="text-sm">Sq.ft.</Label>
                        </div>
                        <div className="flex items-center space-x-1">
                          <RadioGroupItem value="sqm" id="sqm" />
                          <Label htmlFor="sqm" className="text-sm">Sq.m</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    *Note: 1kW system requires ~120sq ft area
                  </div>
                  
                  {/* Sanction Load */}
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Bolt className="h-5 w-5 text-solar-blue mr-2" />
                      <Label htmlFor="sanctionLoad">Sanction Load</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Input
                        id="sanctionLoad"
                        type="number"
                        placeholder="e.g., 5"
                        value={formValues.sanctionLoad}
                        onChange={(e) => handleInputChange("sanctionLoad", e.target.value)}
                        className="flex-1"
                      />
                      <span className="text-sm text-gray-500 w-12">kW</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handleCalculate} 
                    className="w-full bg-solar-blue hover:bg-solar-blue/90 text-white"
                  >
                    Generate Results
                  </Button>
                </div>
              </div>

              {results ? (
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-medium text-xl mb-6">Your Results</h3>
                  <div className="space-y-6">
                    {/* Recommended solar capacity */}
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-start">
                        <div className="flex-1">
                          <p className="text-sm text-gray-600">Recommended solar capacity</p>
                          <p className="text-xl font-semibold">{results.capacity} kWp</p>
                        </div>
                        <Sun className="h-12 w-12 text-solar-blue" />
                      </div>
                    </div>
                    
                    {/* Required area */}
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-start">
                        <div className="flex-1">
                          <p className="text-sm text-gray-600">Required area for solar installation</p>
                          <p className="text-xl font-semibold">{results.requiredArea.sqft} sq.ft</p>
                          <p className="text-sm text-gray-500">{results.requiredArea.sqm} sq.m</p>
                        </div>
                        <Square className="h-12 w-12 text-solar-blue" />
                      </div>
                    </div>
                    
                    {/* Bill savings */}
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-start">
                        <div className="flex-1">
                          <p className="text-sm text-gray-600">Bill Savings</p>
                          <p className="text-xl font-semibold">{results.savings.percentSavings}%</p>
                          <p className="text-sm font-medium text-green-600">
                            Monthly: {formatCurrency(results.savings.monthlySavings)}
                          </p>
                        </div>
                        <CreditCard className="h-12 w-12 text-solar-blue" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Battery className="h-5 w-5 text-solar-blue mr-2" />
                        <div>
                          <p className="text-sm text-gray-600">System Cost</p>
                          <p className="font-medium">{formatCurrency(results.systemCost.finalCost)}</p>
                          <p className="text-xs text-gray-500">
                            Subsidy: {formatCurrency(results.systemCost.subsidyAmount)}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <CalendarClock className="h-5 w-5 text-solar-blue mr-2" />
                        <div>
                          <p className="text-sm text-gray-600">Break-Even</p>
                          <p className="font-medium">{results.breakEven} years</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-solar-blue/10 p-3 rounded-lg">
                      <p className="text-sm font-medium">25 Year Savings</p>
                      <p className="text-xl font-bold text-solar-blue">
                        {formatCurrency(results.lifetimeSavings)}
                      </p>
                    </div>
                    
                    <div className="pt-4">
                      <h4 className="font-medium mb-2">Your Solar Journey</h4>
                      <div className="flex justify-between items-center">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-16 h-16 rounded-full border-2 border-solar-blue flex items-center justify-center bg-white mb-2">
                            <Sun className="h-8 w-8 text-solar-blue" />
                          </div>
                          <p className="text-xs">Step 1:<br />Calculate Savings</p>
                        </div>
                        
                        <div className="border-t-2 border-dashed border-solar-blue/50 flex-1 mx-2"></div>
                        
                        <div className="flex flex-col items-center text-center">
                          <div className="w-16 h-16 rounded-full border-2 border-solar-blue flex items-center justify-center bg-white mb-2">
                            <MapPin className="h-8 w-8 text-solar-blue" />
                          </div>
                          <p className="text-xs">Step 2:<br />Schedule Survey</p>
                        </div>
                        
                        <div className="border-t-2 border-dashed border-solar-blue/50 flex-1 mx-2"></div>
                        
                        <div className="flex flex-col items-center text-center">
                          <div className="w-16 h-16 rounded-full border-2 border-solar-blue flex items-center justify-center bg-white mb-2">
                            <Zap className="h-8 w-8 text-solar-blue" />
                          </div>
                          <p className="text-xs">Step 3:<br />Install & Save</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center bg-blue-50 p-6 rounded-lg">
                  <Sun className="h-16 w-16 text-solar-blue/30 mb-4" />
                  <p className="text-gray-500 text-center">
                    Enter your details to calculate your potential savings with solar energy.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SolarCalculator;
