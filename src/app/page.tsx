use client

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/34327213/pexels-photo-34327213.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"                               Lime Green Aston Martin"},
  {"id":"feature-1","url":"https://images.pexels.com/photos/1104768/pexels-photo-1104768.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Sleek black Mercedes-Benz interior featuring leather seats and modern dashboard design."},
  {"id":"feature-2","url":"https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a shiny car engine showing polished metal parts and gears in black and white."},
  {"id":"product-1","url":"https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A dramatic shot of a Nissan 370Z sports car illuminated in darkness with vibrant tail lights."},
  {"id":"product-2","url":"https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A sleek, modern luxury car showcasing its chrome detailing and LED headlights on a city street."},
  {"id":"product-3","url":"https://images.pexels.com/photos/104401/pexels-photo-104401.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A shiny black SUV parked on a snowy road with trees in the background, showcasing winter scenery."}
];

const getAssetUrl = (id) => {
  const asset = assetMap.find((a) => a.id === id);
  return asset ? asset.url : "/public/images/placeholder.webp";
};

const getAssetAlt = (id) => {
  const asset = assetMap.find((a) => a.id === id);
  return asset ? asset.alt : "Decorative image";
};

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple navItems={[{name:"Home",id:"home"},{name:"About",id:"about"},{name:"Cars",id:"cars"},{name:"Contact",id:"contact"}]} brandName="Car Showcase" />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Discover the Ultimate Car Experience"
            description="Explore our premium selection of luxury vehicles. Your dream car is just a test drive away."
            imageSrc={getAssetUrl("hero-image")}
            buttons={[{text:"View Cars",href:"cars"},{text:"Contact Us",href:"contact"}]}
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="We Specialize in Luxury Cars That Define Excellence"
            buttons={[{text:"Learn More",href:"about"}]}
          />
        </div>
      </div>

      <div id="features" data-section="features" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            title="Unmatched Features"
            description="Our cars offer features that prioritize comfort and safety without compromising on style."
            features={[
              {title:"Leather Interiors",description:"Luxurious and durable.",imageSrc:getAssetUrl("feature-1")},
              {title:"Advanced Engines",description:"High performance with efficiency.",imageSrc:getAssetUrl("feature-2")}
            ]}
          />
        </div>
      </div>

      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            title="Our Exclusive Collection"
            description="Browse through our range of cars and find the one that best suits you."
            products={[
              {id:"1",name:"Eclipse Motion Pro",price:"$150,000",imageSrc:getAssetUrl("product-1")},
              {id:"2",name:"Luxury Sedan",price:"$120,000",imageSrc:getAssetUrl("product-2")},
              {id:"3",name:"SUV X",price:"$90,000",imageSrc:getAssetUrl("product-3")}
            ]}
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenterForm
            title="Get in Touch"
            description="We're here to answer your questions and provide you with further assistance."
            inputs={[
              {name:"name",type:"text",placeholder:"Your Name",required:true},
              {name:"email",type:"email",placeholder:"Your Email",required:true}
            ]}
            textarea={{name:"message",placeholder:"Type your message...",rows:5,required:true}}
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBaseReveal
            columns={[
              {title:"Company",items:[{label:"About Us",href:"about"},{label:"Contact",href:"contact"}]},
              {title:"Explore",items:[{label:"Cars",href:"cars"},{label:"Features",href:"features"}]}
            ]}
            copyrightText="© 2025 Car Showcase"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
