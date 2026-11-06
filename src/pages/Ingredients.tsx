import React from "react";
import { SEOHead } from "../components/seo/SEOHead";
import { seoData } from "../data/seo";
import { getBreadcrumbSchema } from "../lib/seo";
import { ingredientsData } from "../data/ingredients";
import { SectionHeading } from "../components/common/SectionHeading";
import { NutritionTable } from "../components/common/NutritionTable";
import { Button } from "../components/common/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export const Ingredients: React.FC = () => {
  const schemas = [
    getBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Ingredients", path: "/ingredients" },
    ]),
  ];

  return (
    <div className="bg-cream py-8 sm:py-10 lg:py-12">
      <SEOHead
        title={seoData.ingredients.title}
        description={seoData.ingredients.description}
        keywords={seoData.ingredients.keywords}
        canonicalPath={seoData.ingredients.canonicalPath}
        ogImage={seoData.ingredients.ogImage}
        schema={schemas}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          className="flex items-center space-x-2 text-xs text-muted-text mb-6 sm:mb-8"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <span className="text-dark-text font-medium">Ingredients</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <span className="font-jost text-primary font-bold text-xs uppercase tracking-[0.22em] mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-4 h-0.5 bg-gold/70"></span>
            100% PURE & HONEST SOURCING
            <span className="inline-block w-4 h-0.5 bg-gold/70"></span>
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-deep-brown font-normal tracking-tight leading-tight">
            What Is Kopra Pak Made Of?
          </h1>
          <p className="mt-3 sm:mt-4 text-muted-text text-base sm:text-lg leading-relaxed">
            Traditional Gujarati Kopra Pak is handcrafted using tender grated coconut, 100% Pure Premium Ghee, slow-cooked whole milk mawa, Kashmiri saffron, fragrant green cardamom, and emerald pistachios for melt-in-the-mouth texture and authentic festive aroma.
          </p>
        </div>

        {/* Banner with Ingredients Flat Lay */}
        <div className="rounded-3xl overflow-hidden border border-light-beige mb-8 sm:mb-12 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-center space-y-4 sm:space-y-5">
              <span className="font-jost text-gold font-bold text-xs uppercase tracking-[0.22em] flex items-center gap-2">
                <span className="inline-block w-3 h-0.5 bg-gold/70"></span>
                premium ghee & PURE COCONUT PURITY
              </span>
              <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl text-deep-brown font-normal leading-tight">
                Honoring the Purity of 100% Pure Premium Ghee & Fresh Grated Coconut
              </h2>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed">
                Traditional halwais of Gujarat mastered the balance of fresh coconut roasted gently in 100% pure clarified butter (premium ghee) and simmered with fresh milk mawa. By refusing artificial food colors, dalda, or chemical essences, our Kopra Pak delivers pure divine satisfaction.
              </p>
              <div className="pt-2 flex flex-col gap-2.5 text-xs sm:text-sm text-deep-brown font-medium">
                <span className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-muted-green flex-shrink-0" />
                  100% Clarified Pure Premium Ghee
                </span>
                <span className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-muted-green flex-shrink-0" />
                  Fresh Tender Grated Mature Coconut (Naturally Gluten-Free & Farali)
                </span>
                <span className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-muted-green flex-shrink-0" />
                  Slow-Cooked Fresh Whole Milk Mawa (Khoya)
                </span>
                <span className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-muted-green flex-shrink-0" />
                  Kashmiri Mongra Saffron & Stone-Pounded Elaichi
                </span>
                <span className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-muted-green flex-shrink-0" />
                  Zero Dalda, Zero Palm Oil & Zero Preservatives
                </span>
              </div>
            </div>
            <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] lg:min-h-full bg-cream-card">
              <img
                src="/images/kopra-pak-ingredients-flatlay.jpg"
                alt="Overhead flat lay of pure authentic Kopra Pak (Coconut Barfi / Nariyal Barfi) ingredients: fresh grated white coconut, 100% Pure Premium Ghee in brass vessel, slow-cooked mawa, Kashmiri saffron, cardamom, and slivered pistachios"
                className="w-full h-full object-cover object-center absolute inset-0"
                loading="eager"
                fetchPriority="high"
                width="1200"
                height="896"
              />
            </div>
          </div>
        </div>

        {/* In-depth Breakdown of Each Ingredient */}
        <div className="space-y-8 mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="DETAILED INGREDIENT PROFILES"
            title="Every Ingredient Has a Wholesome Role"
            subtitle="Understand how each natural component shapes the rich aroma, velvety texture, and divine flavor of our sweet."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {ingredientsData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 sm:p-7 border border-light-beige hover:border-primary transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold">
                      {item.category}
                    </span>
                    <span className="text-xs font-serif italic text-primary">
                      {item.gujaratiName}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-deep-brown mb-2.5">
                    {item.name}
                  </h3>
                  <p className="text-muted-text text-sm sm:text-base leading-relaxed mb-4">
                    {item.detailedRole}
                  </p>
                </div>

                <div className="pt-4 border-t border-light-beige text-xs text-muted-green font-medium flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-dark-text">Sourcing:</strong> {item.sourcing}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nutritional Facts Table */}
        <NutritionTable />

        {/* Call to Next Stage: Process */}
        <div className="bg-deep-brown text-cream rounded-3xl p-8 sm:p-12 border border-gold/40 text-center space-y-4 sm:space-y-5">
          <span className="font-jost text-gold font-bold text-xs uppercase tracking-[0.22em]">
            TRADITIONAL GUJARATI HALWAI WISDOM
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-cream">
            Ready to See How We Prepare Kopra Pak?
          </h3>
          <p className="text-cream/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Explore our 6-step artisanal roasting, mawa reduction, and saffron-cardamom tray setting technique that gives our Kopra Pak its signature melt-in-the-mouth texture.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Button
              to="/process"
              variant="gold"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Learn How Kopra Pak Is Made
            </Button>
            <Button
              to="/"
              variant="outline"
              size="lg"
              className="text-cream border-cream/40 hover:bg-white/10"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
