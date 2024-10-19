// import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24  bg-test2">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  About Shuttle Cab
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Your reliable partner for comfortable and safe rides. Discover
                  our story and commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
              <div className="space-y-2 md:w-1/2">
                {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Mission
                </h2> */}
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We specialize in offering reliable and convenient cab services
                  for seamless travel between the Blaise Diagne International
                  Airport, Senegal, and any city in Senegal, as well as from any
                  city in Senegal to the Blaise Diagne International Airport,
                  Senegal.
                </p>
                <br />
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Whether you&apos;re arriving or departing, our experienced
                  chauffeurs ensure a comfortable and stress-free ride to your
                  destination.
                </p>
                <br />
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  With a strong focus on safety, punctuality, and customer
                  satisfaction, we are dedicated to making your journey smooth
                  and enjoyable.
                </p>
                <br />
                <p className="text-neutral-700 font-bold text-2xl">
                  Book with us for hassle-free airport transfers across Senegal
                  :)
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/images/cab.jpeg"
                  className="rounded-lg object-cover w-full h-[600px]"
                />
                {/* <Image
                  src="/images/cab.jpeg"
                  alt="Modern airport terminal"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-[600px]"
                /> */}
              </div>
            </div>
          </div>
        </section>
        {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8 text-center">
              Our Services
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 text-center p-6">
                  <Car className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Airport Transfers</h3>
                  <p className="text-gray-500">
                    Reliable and comfortable rides to and from the airport.
                  </p>
                  <Image
                    src="/placeholder.svg?height=150&width=200"
                    alt="Airport transfer"
                    width={200}
                    height={150}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 text-center p-6">
                  <Building className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">City Tours</h3>
                  <p className="text-gray-500">
                    Explore the city with our knowledgeable drivers.
                  </p>
                  <Image
                    src="/placeholder.svg?height=150&width=200"
                    alt="City tour"
                    width={200}
                    height={150}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 text-center p-6">
                  <Users className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Corporate Travel</h3>
                  <p className="text-gray-500">
                    Efficient transportation solutions for business travelers.
                  </p>
                  <Image
                    src="/placeholder.svg?height=150&width=200"
                    alt="Corporate travel"
                    width={200}
                    height={150}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}
        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Team
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the dedicated professionals behind Shuttle Cab who work
                  tirelessly to ensure your journey is smooth and enjoyable.
                </p>
              </div>
            </div>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-16">
              {[
                {
                  name: "John Doe",
                  role: "CEO",
                  image: "/placeholder.svg?height=200&width=200",
                },
                {
                  name: "Jane Smith",
                  role: "Operations Manager",
                  image: "/placeholder.svg?height=200&width=200",
                },
                {
                  name: "Mike Johnson",
                  role: "Customer Service Lead",
                  image: "/placeholder.svg?height=200&width=200",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full"
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-gray-500">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-test2 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Ride with Us?
                </h2>
                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience the Shuttle Cab difference today. Book your ride
                  and enjoy a journey like never before.
                </p>
              </div>
              <div className="flex space-x-4">
                <button className="mt-10 relative flex gap-2 h-[50px] w-40 items-center justify-center overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56 rounded-lg">
                  <span className="relative z-10 ">Book Now</span>
                  <MdArrowOutward className="z-10" />
                </button>
                <button className="mt-10 relative flex gap-2 h-[50px] w-40 items-center justify-center overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56 rounded-lg">
                  <span className="relative z-10 ">Learn More</span>
                  <MdArrowOutward className="z-10" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
