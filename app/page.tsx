import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Studio from '@/components/Studio';
import FeaturedHeader from '@/components/FeaturedHeader';
import ProjectGrid from '@/components/ProjectGrid';
import Process from '@/components/Process';
import Testimonial from '@/components/Testimonial';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function HomePage() { return <main><Nav/><Hero/><Studio/><section className="featured" id="work"><FeaturedHeader/><ProjectGrid/></section><Process/><Testimonial/><CTA/><Footer/></main>; }

