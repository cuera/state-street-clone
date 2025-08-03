import { Button } from "@/components/ui/button";

const FloorPlansSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-4">
                  Studio
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Starting at $2,800</div>
                  <div>400-500 sq ft</div>
                  <div>Available now</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-4">
                  One Bedroom
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Starting at $3,200</div>
                  <div>550-700 sq ft</div>
                  <div>Available now</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-4">
                  Two Bedroom
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Starting at $4,500</div>
                  <div>800-1,000 sq ft</div>
                  <div>Available March 2025</div>
                </div>
              </div>
            </div>
            
            <Button 
              variant="default"
              size="sm"
              className="mt-8 rounded-full px-6"
            >
              View All Floor Plans
            </Button>
          </div>
          
          {/* Right Floor Plan Images */}
          <div className="space-y-6">
            <img 
              src="https://cdn.sanity.io/images/xem89js7/production/a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0-800x600.jpg?w=600&q=75&auto=format"
              alt="Studio floor plan"
              className="w-full h-auto rounded-lg shadow-md bg-gray-100"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <img 
              src="https://cdn.sanity.io/images/xem89js7/production/b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1-800x600.jpg?w=600&q=75&auto=format"
              alt="One bedroom floor plan"
              className="w-full h-auto rounded-lg shadow-md bg-gray-100"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlansSection;