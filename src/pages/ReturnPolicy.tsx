import React from "react";
import { SEOHead } from "../components/seo/SEOHead";
import { seoData } from "../data/seo";
import { getBreadcrumbSchema } from "../lib/seo";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export const ReturnPolicy: React.FC = () => {
  const schemas = [
    getBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Return Policy", path: "/return-policy" },
    ]),
  ];

  return (
    <div className="bg-cream py-8 sm:py-10 lg:py-12">
      <SEOHead
        title={seoData.returnPolicy.title}
        description={seoData.returnPolicy.description}
        keywords={seoData.returnPolicy.keywords}
        canonicalPath={seoData.returnPolicy.canonicalPath}
        ogImage={seoData.returnPolicy.ogImage}
        schema={schemas}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          className="flex items-center space-x-2 text-xs text-muted-text mb-6 sm:mb-8"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <span className="text-dark-text font-medium">
            Return & Refund Policy
          </span>
        </nav>

        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-light-beige space-y-8">
          <div>
            <span className="font-jost text-xs font-bold uppercase tracking-[0.22em] text-gold block mb-2">
              CUSTOMER COMMITMENT & FOOD SAFETY
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-deep-brown font-bold tracking-tight">
              Return & Refund Policy
            </h1>
            <p className="text-muted-text text-sm sm:text-base mt-2 leading-relaxed">
              Our transparent replacement and refund guidelines designed to
              safeguard food hygiene, product freshness, and customer
              satisfaction for our handcrafted Kopra Pak (Coconut Barfi).
            </p>
          </div>

          {/* Quick Highlight Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 sm:p-5 rounded-2xl bg-cream/70 border border-light-beige flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-bold text-deep-brown text-sm">
                  100% Transit Damage Guarantee
                </h4>
                <p className="text-muted-text text-xs mt-1 leading-relaxed">
                  Damaged or tampered packages are replaced immediately or fully
                  refunded.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-cream/70 border border-light-beige flex items-start gap-3">
              <RefreshCw className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-bold text-deep-brown text-sm">
                  Fast 24-Hour Resolution
                </h4>
                <p className="text-muted-text text-xs mt-1 leading-relaxed">
                  Share photos of any transit issue on WhatsApp for instant
                  priority assistance.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Policy Sections */}
          <div className="space-y-6 text-sm text-dark-text/90 leading-relaxed border-t border-light-beige pt-6">
            <section className="space-y-2.5">
              <h2 className="font-serif font-bold text-xl text-deep-brown flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                1. Perishable Food Safety Standards (FSSAI Compliance)
              </h2>
              <p>
                Because authentic Kopra Pak is a freshly prepared, satvik
                edible sweet without synthetic chemical preservatives, we adhere
                to strict food safety hygiene regulations. Under standard
                conditions, edible food items cannot be accepted for return once
                opened or accepted by the customer, ensuring complete sanctity
                and hygiene for every household.
              </p>
            </section>

            <section className="space-y-2.5">
              <h2 className="font-serif font-bold text-xl text-deep-brown flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                2. Damaged, Defective, or Incorrect Deliveries
              </h2>
              <p>
                We take immense pride in our triple-layer airtight
                moisture-barrier packaging. However, in the rare event that your
                package arrives in a compromised, leaked, or physically damaged
                condition due to courier mishandling:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-text">
                <li>
                  Please take 2-3 clear photographs or a short video showing the
                  outer courier box label and the inner packaging condition.
                </li>
                <li>
                  Notify our customer support team within{" "}
                  <strong>24 hours of delivery</strong> via WhatsApp at{" "}
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-bold hover:underline"
                  >
                    {siteConfig.displayPhone}
                  </a>{" "}
                  or email at{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-primary font-bold hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                  .
                </li>
                <li>
                  Once verified, we will dispatch a{" "}
                  <strong>complimentary fresh replacement batch</strong> at zero
                  extra cost, or issue a <strong>100% full refund</strong>{" "}
                  directly to your original payment method.
                </li>
              </ul>
            </section>

            <section className="space-y-2.5">
              <h2 className="font-serif font-bold text-xl text-deep-brown flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                3. Order Cancellation Policy
              </h2>
              <p>Our sweets are prepared fresh in small batches:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-text">
                <li>
                  <strong>Before Kitchen Dispatch:</strong> You can cancel your
                  order and receive a full refund by contacting us within{" "}
                  <strong>4 hours</strong> of placing your order.
                </li>
                <li>
                  <strong>After Courier Handover:</strong> Once an order is
                  vacuum-sealed and handed over to our air/surface courier
                  partner with an active tracking ID, it cannot be recalled or
                  cancelled.
                </li>
              </ul>
            </section>

            <section className="space-y-2.5">
              <h2 className="font-serif font-bold text-xl text-deep-brown flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                4. Refund Processing Timelines
              </h2>
              <p>Approved refunds are processed without delay:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-text">
                <li>
                  <strong>UPI & Net Banking:</strong> 24 to 48 hours.
                </li>
                <li>
                  <strong>Credit / Debit Cards:</strong> 3 to 5 business days
                  (subject to your issuing bank’s standard settlement schedule).
                </li>
              </ul>
            </section>

            <section className="space-y-2.5">
              <h2 className="font-serif font-bold text-xl text-deep-brown flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                5. Non-Deliverable or Incorrect Address
              </h2>
              <p>
                Please ensure complete and accurate delivery addresses including
                landmark and pin code during checkout. If a consignment is
                returned to us due to an incorrect address or the recipient
                being repeatedly unavailable over 3 courier attempts, a
                re-dispatch fee may apply.
              </p>
            </section>
          </div>

          {/* Direct Support Assistance Card */}
          <div className="rounded-2xl bg-deep-brown text-cream p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <MessageCircle className="w-6 h-6 text-gold flex-shrink-0" />
              <div>
                <h4 className="font-serif font-bold text-base sm:text-lg text-cream">
                  Need Help With An Order?
                </h4>
                <p className="text-xs text-cream/80">
                  Our customer care team is available on WhatsApp daily from
                  9:00 AM to 8:00 PM.
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi,%20I%20have%20a%20question%20regarding%20my%20Kopra%20Pak%20order.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-deep-brown font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all flex-shrink-0"
            >
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
