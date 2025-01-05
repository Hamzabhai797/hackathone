import { BsFillPeopleFill } from "react-icons/bs";
import { IoSearchSharp } from 'react-icons/io5';
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
   <div>
    <nav className="h-20 w-[800]px flex justify-between items-center mx-8">
      <div>
        <h2 className="text-4xl font-semibold">Furniro</h2>
        </div>
        <div className="h-16 w-96 text-2xl flex justify-center items-center">
        <ul className="flex flex-row justify-center items-center space-y-1 gap-10 cursor-pointer">
          <li>Home</li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/blog">blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="h-16 w-48 flex items-center justify-center gap-10">
      <BsFillPeopleFill />
      <IoSearchSharp />
      <FaRegHeart />
      <FaCartShopping />
      </div>
      </nav>

      <div style={{backgroundImage: "url('/download.png.jpg')"}} className="h-[500] bg-slate-500 bg-cover bg-center" >
      <div className="h-[400] w-[500] bg-pink-100 absolute ml-[750] mt-14">
        <h6 className="mt-10 ml-8">New Arrival</h6>
        <h2 className="text-5xl mt-5 ml-7 font-bold text-yellow-700">Discover Our</h2>
        <h2 className="text-5xl mt-2 ml-7 font-bold text-yellow-700">New Collection</h2>
        <p className="ml-8 mt-5 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
           Veniam ipsum aliquid expedita.</p>
           <button className="h-[60] w-[150] bg-yellow-600 ml-7 mt-8">Buy Now</button>
      </div>
      </div>

      <div className="h-[550] w-auto bg-slate-100">
        <h2 className="absolute mt-5 font-semibold text-4xl ml-[520]">Browse The Range</h2>
        <p className="absolute mt-16 ml-[370] text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <div style={{backgroundImage: "url('/imagespng.jpg')"}} className=" absolute h-96 w-[320] bg-slate-50 mt-36 ml-40 bg-cover bg-center rounded-lg border-2"></div>
        <p className="absolute mt-[540] ml-72 text-2xl">Dining</p>
        <div style={{backgroundImage: "url('/images1.png')"}} className=" absolute h-96 w-[320] bg-slate-50 mt-36 ml-[505] rounded-lg border-2 bg-cover bg-center"></div>
        <p className="absolute mt-[540] ml-[620] text-2xl">Living</p>
        <div style={{backgroundImage: "url('/bedroom.png')"}} className=" absolute h-96 w-[320] bg-slate-50 mt-36 ml-[850] rounded-lg border-2 bg-center bg-cover"></div>
        <p className="absolute mt-[540] ml-[950] text-2xl">Bedroom</p>
      </div>

      <div className="h-[850] w-[1343] bg-slate-100 absolute">
        <p className="text-4xl font-semibold absolute ml-[550] mt-6">Our Product</p>

        <div className="h-80 w-[250] bg-white absolute mt-24 ml-28">
          <div style={{backgroundImage: "url('/stylishchair.png')"}} className="h-56 w[250] bg-slate-500 bg-cover bg-center"></div>
          <h3 className="text-2xl ml-3 font-semibold">Syltherine</h3>
          <p className="text-slate-400 ml-3">Stylish Cafe chair</p>
          <p className="ml-3 font-medium">Rp 2,000.000</p></div>

        <div className="h-80 w-[250] bg-white absolute mt-24 ml-[400]">
        <div style={{backgroundImage: "url('/stylish chair2.png')"}} className="h-56 w[250] bg-slate-500 bg-cover bg-center"></div>
        <h3 className="text-2xl ml-3 font-semibold">Leviosa</h3>
          <p className="text-slate-400 ml-3">Stylish Cafe chair</p>
          <p className="ml-3 font-medium">Rp 2,000.000</p></div>

        <div className="h-80 w-[250] bg-white absolute mt-24 ml-[680]">
        <div  style={{backgroundImage: "url('/bigsofa.png')"}} className="h-56 w[250] bg-slate-500 bg-cover bg-center"></div>
        <h3 className="text-2xl ml-3 font-semibold">Lolito</h3>
          <p className="text-slate-400 ml-3">Luxury big sofa</p>
          <p className="ml-3 font-medium">Rp 7,000.000</p></div>

        <div className="h-80 w-[250] bg-white relative mt-24 ml-[970]">
        <div style={{backgroundImage: "url('/outdoor bar.png')"}} className="h-56 w[250] bg-slate-500 bg-cover bg-center"></div>
        <h3 className="text-2xl ml-3 font-semibold">Respira</h3>
          <p className="text-slate-400 ml-3">outdoor bar table and stool</p>
          <p className="ml-3 font-medium">Rp 500.000</p></div>

        <div className="h-80 w-[250] bg-white absolute mt-8 ml-28">
          <div style={{backgroundImage: "url('/night lamp.png')"}} className="h-56 w-[250] bg-slate-500 bg-cover bg-center"></div>
          <h3 className="text-2xl ml-3 font-semibold">Grifo</h3>
          <p className="text-slate-400 ml-3">Night Lamp</p>
          <p className="ml-3 font-medium">Rp 1,500.000</p></div>

        <div className="h-80 w-[250] bg-white absolute mt-8 ml-[400]">
          <div style={{backgroundImage: "url('/mugg.png')"}} className="h-56 w-[250] bg-slate-500 bg-cover bg-center"></div>
          <h3 className="text-2xl ml-3 font-semibold">Muggo</h3>
          <p className="text-slate-400 ml-3">Small mugg</p>
          <p className="ml-3 font-medium">Rp 150.000</p></div>

        <div className="h-80 w-[250] bg-white absolute mt-8 ml-[685]">
        <div style={{backgroundImage: "url('/cute.png')"}} className="h-56 w-[250] bg-slate-500 bg-cover bg-center"></div>
          <h3 className="text-2xl ml-3 font-semibold">Pingky</h3>
          <p className="text-slate-400 ml-3">Cute Bed set</p>
          <p className="ml-3 font-medium">Rp 7,000.000</p></div>

        <div className="h-80 w-[250] bg-white relative mt-8 ml-[970]">
        <div style={{backgroundImage: "url('/flower.png')"}} className="h-56 w-[250] bg-slate-500 bg-cover bg-center"></div>
          <h3 className="text-2xl ml-3 font-semibold">Potty</h3>
          <p className="text-slate-400 ml-3">Minimalist flower pot</p>
          <p className="ml-3 font-medium">Rp 500.000</p></div>
          <button className="h-14 w-32 bg-white text-yellow-700 rounded-lg border border-yellow-500 ml-[600] mt-3">Show More</button>
          <div className="h-[550] w-[1343] mt-5 bg-slate-500 flex">
            <h1 className="mt-32 text-4xl ml-12 font-bold">50 + Beautiful rooms</h1>
            <h2 className="mt-[170] -ml-[355] text-4xl font-bold">inspiration</h2>
            <p className="mt-[220] -ml-[185]">Our designer already made a lot of beautiful<br></br>
            prototipe of rooms that inspire you</p>
            <button className="h-12 w-40 bg-yellow-600 text-white font-bold mt-[280] -ml-[310]">Explore More</button>
            <div style={{backgroundImage: "url('/bedroominner.png')"}} className="h-[420] w-80 bg-slate-100 mt-16 ml-72 bg-cover bg-current"></div>
            <div style={{backgroundImage: "url('/wall.png')"}} className="h-[360] w-80 bg-slate-50 mt-16 ml-5 bg-cover"></div>
          </div>
          <div className="h-[570] w-auto flex">
        <h1 className="ml-16 mt-10 absolute text-4xl font-bold">Funiro</h1>
        <p className="ml-14 mt-32 text-1xl">400 universities Drive Suite 200 Coral<br></br>
        Gables,<br></br>
        Fl 33134 USA</p>
        <p className="ml-[420] mt-12 absolute text-2xl">Links</p>
        <h1 className="mt-32 ml-[420] absolute font-semibold">Home</h1>
        <h1 className="mt-48 ml-[420] absolute font-semibold">Shop</h1>
        <h1 className="mt-64 ml-[420] absolute font-semibold">About</h1>
        <h1 className="mt-80 ml-[420] absolute font-semibold">Contact</h1>
        <p className="ml-[670] mt-12 absolute text-2xl">Help</p>
        <h2 className="mt-32 ml-[660] absolute font-semibold">Payment Options</h2>
        <h2 className="mt-48 ml-[660] absolute font-semibold">Returns</h2>
        <h2 className="mt-64 ml-[660] absolute font-semibold">Privacy Policies</h2>
        <p className="ml-[970] mt-12 absolute text-2xl">Newsletter</p>
        <input type="text" placeholder="Enter Your Email" className="h-10 ml-[970] mt-24 border-b-4 absolute" />
        <h1 className="ml-[1175] absolute mt-24 text-2xl font-semibold">SUBSCRIBE</h1>
        <div className="h-1 w-32 bg-black mt-[130] absolute ml-[1175]"></div>
        <div className="h-1 w-[1270] mt-[400] ml-10 absolute bg-slate-300"></div>
        <p className="ml-12 absolute mt-[430] text-3xl">2023 furino. All rights reverved</p>
      </div>
      </div>
   </div>
  );
}
