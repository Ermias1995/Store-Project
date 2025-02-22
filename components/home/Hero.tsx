import HeroCarousel from "./HeroCarousel"
import {Button} from "../ui/button";
import Link from "next/link";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button asChild size='lg' className="mt-10">
          <Link href='/products'>Our Products</Link>
        </Button>
      </div>
      <HeroCarousel/>
    </section>
  )
}
export default Hero