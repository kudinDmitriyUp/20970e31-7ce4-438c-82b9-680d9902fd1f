import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactSplitEmail from '@/components/sections/contact/ContactSplitEmail';
import FeaturesComparison from '@/components/sections/features/FeaturesComparison';
import FooterBrandReveal from '@/components/sections/footer/FooterBrandReveal';
import HeroBrandCarousel from '@/components/sections/hero/HeroBrandCarousel';
import MetricsGradientCards from '@/components/sections/metrics/MetricsGradientCards';
import NavbarCentered from '@/components/ui/NavbarCentered';
import ProductVariantCards from '@/components/sections/product/ProductVariantCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialDetailedCards from '@/components/sections/testimonial/TestimonialDetailedCards';
import { Heart, Scissors, Star } from "lucide-react";

export default function App() {
  return (
    <>
  <div id="nav" data-section="nav">
      <NavbarCentered
      logo="Penelopa"
      navItems={[
        {
          name: "About",
          href: "#about",
        },
        {
          name: "Flowers",
          href: "#products",
        },
        {
          name: "Reviews",
          href: "#testimonials",
        },
        {
          name: "Contact",
          href: "#contact",
        },
      ]}
      ctaButton={{
        text: "Order Now",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBrandCarousel
      brand="Penelopa"
      description="Crafting floral art that transforms your most cherished moments into lasting memories."
      primaryButton={{
        text: "Explore Gallery",
        href: "#products",
      }}
      secondaryButton={{
        text: "Contact Us",
        href: "#contact",
      }}
      items={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=bhdn0t",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=waxaw2",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ksylby",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=bk1kv0",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ehoiuj",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=w9bxew",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMediaOverlay
      tag="Our Story"
      title="Artisan Flowers in Every Bloom"
      description="At Penelopa, we believe flowers are more than decoration; they are a language of emotion. Our studio curates exceptional arrangements, blending traditional techniques with contemporary design to tell your unique story through nature's finest petals."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=f88xlv"
    />
  </div>

  <div id="features" data-section="features">
      <FeaturesComparison
      tag="Why Choose Us"
      title="Excellence in Floral Design"
      description="We stand apart through our commitment to quality, creativity, and sustainability in every single arrangement we deliver."
      negativeItems={[
        "Mass-produced bouquets",
        "Delayed local delivery",
        "Generic design styles",
      ]}
      positiveItems={[
        "Sustainably sourced petals",
        "Same-day artisan delivery",
        "Personalized custom designs",
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductVariantCards
      tag="Signature Collections"
      title="Artistic Arrangements"
      description="Discover our collection of hand-curated floral compositions, designed to bring elegance and life to any occasion."
      products={[
        {
          name: "Midnight Roses",
          variant: "Deep Red",
          price: "$85",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=6wiu13",
        },
        {
          name: "Tulip Serenity",
          variant: "Pastel Mix",
          price: "$65",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=xpdliq",
        },
        {
          name: "Sunbeam Joy",
          variant: "Golden Yellow",
          price: "$75",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=px00cl",
        },
        {
          name: "Minimalist Lily",
          variant: "Pure White",
          price: "$90",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=6408ew",
        },
        {
          name: "Tropical Dream",
          variant: "Exotic Blend",
          price: "$120",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=uylsk8",
        },
        {
          name: "Meadow Breeze",
          variant: "Wildflower",
          price: "$55",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=efcmm5",
        },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricsGradientCards
      tag="Our Impact"
      title="A Legacy of Blooming Moments"
      description="Our passion for floral artistry has touched thousands of lives and events across the city."
      metrics={[
        {
          value: "2,500+",
          title: "Bouquets Delivered",
          description: "Hand-delivered with love",
          icon: Star,
        },
        {
          value: "450+",
          title: "Weddings Designed",
          description: "Creating fairy-tale days",
          icon: Heart,
        },
        {
          value: "15",
          title: "Expert Designers",
          description: "Mastering the craft daily",
          icon: Scissors,
        },
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialDetailedCards
      tag="What Clients Say"
      title="Stories of Beauty"
      description="Kind words from those who have trusted us to make their moments memorable."
      testimonials={[
        {
          title: "Stunning Wedding Design",
          quote: "Penelopa created the most breathtaking arrangements for our big day. Truly magical.",
          name: "Sarah Miller",
          role: "Bride",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=fqhzsr",
        },
        {
          title: "Perfect Anniversary Gift",
          quote: "The bouquet lasted longer than I expected, and the design was incredibly artistic.",
          name: "David Chen",
          role: "Client",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=f71cwr",
        },
        {
          title: "Creative Excellence",
          quote: "I love how each arrangement they create feels like a bespoke work of art.",
          name: "Emily Rodriguez",
          role: "Interior Designer",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=69ukan",
        },
        {
          title: "Reliable & Beautiful",
          quote: "Consistently high quality. Their flowers are the only ones I buy for special events.",
          name: "Katherine White",
          role: "Corporate Client",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=dfed3j",
        },
        {
          title: "Elegant Arrangements",
          quote: "Professional, creative, and timely. Everything you could want in a floral designer.",
          name: "Jessica Lee",
          role: "Client",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=a866e6",
        },
      ]}
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofMarquee
      tag="As Seen In"
      title="Trusted by Prestigious Brands"
      description="We are proud to collaborate with top-tier partners across the city for their luxury floral needs."
      names={[
        "Vogue Living",
        "Urban Bride",
        "Floral Digest",
        "City Elegance",
        "Modern Wedding",
        "Boutique Design",
        "Artisanal Home",
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitEmail
      tag="Let's Talk"
      title="Begin Your Floral Journey"
      description="Subscribe for exclusive floral design tips and upcoming collection releases."
      inputPlaceholder="Enter your email"
      buttonText="Subscribe"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hmx7rk"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBrandReveal
      brand="Penelopa"
      columns={[
        {
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Collection",
              href: "#products",
            },
            {
              label: "Contact Us",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "FAQ",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Instagram",
              href: "https://instagram.com",
            },
            {
              label: "Pinterest",
              href: "https://pinterest.com",
            },
            {
              label: "Facebook",
              href: "https://facebook.com",
            },
          ],
        },
      ]}
    />
  </div>
    </>
  );
}
