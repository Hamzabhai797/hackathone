import Link from "next/link";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoSearchSharp } from 'react-icons/io5';
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";


export default function shop() {
    return (
      <div>
         <nav className="h-20 w-[800]px flex justify-between items-center mx-8">
      <div>
        <h2 className="text-4xl font-semibold">Furniro</h2>
        </div>
        <div className="h-16 w-96 text-2xl flex justify-center items-center">
        <ul className="flex flex-row justify-center items-center space-y-1 gap-10 cursor-pointer">
          <li><Link href="/">Home</Link></li>
          <li>Shop</li>
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

      <div style={{backgroundImage: "url('/image.png.webp')"}} className="h-96 w-auto bg-slate-500 flex flex-col justify-center items-center bg-cover bg-center">
        <h4 className="font-bold text-7xl">Shop</h4>
        <h5 className="text-4xl font-medium">Home Shop</h5>
      </div>
        <div className="h-20 w-auto bg-pink-200 flex">
          <h6 className="ml-20 mt-6 text-2xl font-semibold">Filter</h6>
          <h5 className="ml-28 mt-6 text-2xl">Showing 1-16 of 32 results</h5>
          <h6 className="ml-72 mt-6 text-2xl font-semibold">Show</h6>
          <div className="h-10 w-10 bg-slate-100 mt-4 ml-5 flex items-center justify-center">16</div>
          <h6 className="ml-16 mt-6 text-2xl font-semibold">Short by</h6>
          <div className="h-10 w-20 bg-slate-100 mt-4 ml-5 flex items-center justify-center">Default</div>
        </div>


        <div className="h-[1720] w-[1343] bg-slate-100 absolute">
        <div className="h-80 w-[250] bg-white absolute mt-20 ml-28">
          <div style={{backgroundImage: "url('/stylishchair.png')"}} className="h-56 w[250] bg-slate-500 bg-cover bg-center"></div>
          <h3 className="text-2xl ml-3 font-semibold">Syltherine</h3>
          <p className="text-slate-400 ml-3">Stylish Cafe chair</p>
          <p className="ml-3 font-medium">Rp 2,000.000</p></div>

        <div className="h-80 w-[250] bg-white absolute mt-20 ml-[400]">

        <div style={{backgroundImage: "url('/stylish chair2.png')"}} className="h-56 w[250] bg-slate-500 bg-cover bg-center"></div>
        <h3 className="text-2xl ml-3 font-semibold">Leviosa</h3>
          <p className="text-slate-400 ml-3">Stylish Cafe chair</p>
          <p className="ml-3 font-medium">Rp 2,000.000</p></div>

        <div className="h-80 w-[250] bg-white absolute mt-20 ml-[680]">
        <div  style={{backgroundImage: "url('/bigsofa.png')"}} className="h-56 w[250] bg-slate-500 bg-cover bg-center"></div>
        <h3 className="text-2xl ml-3 font-semibold">Lolito</h3>
          <p className="text-slate-400 ml-3">Luxury big sofa</p>
          <p className="ml-3 font-medium">Rp 7,000.000</p></div>

          <div className="h-80 w-[250] bg-white relative mt-20 ml-[970]">
        <div style={{backgroundImage: "url('/outdoor bar.png')"}} className="h-56 w[250] bg-slate-500 bg-cover bg-center"></div>
        <h3 className="text-2xl ml-3 font-semibold">Respira</h3>
          <p className="text-slate-400 ml-3">outdoor bar table and stool</p>
          <p className="ml-3 font-medium">Rp 500.000</p></div>

          <div className="h-80 w-[250] bg-white absolute mt-20 ml-28">
          <div style={{backgroundImage: "url('/stylishchair.png')"}} className="h-56 w[250] bg-slate-500 bg-cover bg-center"></div>
          <h3 className="text-2xl ml-3 font-semibold">Syltherine</h3>
          <p className="text-slate-400 ml-3">Stylish Cafe chair</p>
          <p className="ml-3 font-medium">Rp 2,000.000</p></div>

        <div className="h-80 w-[250] bg-white absolute mt-20 ml-[400]">
        <div style={{backgroundImage: "url('/stylish chair2.png')"}} className="h-56 w[250] bg-slate-500 bg-cover bg-center"></div>
        <h3 className="text-2xl ml-3 font-semibold">Leviosa</h3>
          <p className="text-slate-400 ml-3">Stylish Cafe chair</p>
          <p className="ml-3 font-medium">Rp 2,000.000</p></div>

          <div className="h-80 w-[250] bg-white absolute mt-20 ml-[680]">
        <div  style={{backgroundImage: "url('/bigsofa.png')"}} className="h-56 w[250] bg-slate-500 bg-cover bg-center"></div>
        <h3 className="text-2xl ml-3 font-semibold">Lolito</h3>
          <p className="text-slate-400 ml-3">Luxury big sofa</p>
          <p className="ml-3 font-medium">Rp 7,000.000</p></div>

          <div className="h-80 w-[250] bg-white relative mt-20 ml-[970]">
        <div style={{backgroundImage: "url('/outdoor bar.png')"}} className="h-56 w[250] bg-slate-500 bg-cover bg-center"></div>
        <h3 className="text-2xl ml-3 font-semibold">Respira</h3>
          <p className="text-slate-400 ml-3">outdoor bar table and stool</p>
          <p className="ml-3 font-medium">Rp 500.000</p></div>

          <div className="h-80 w-[250] bg-white absolute mt-20 ml-28">
          <div style={{backgroundImage: "url('/stylishchair.png')"}} className="h-56 w[250] bg-slate-500 bg-cover bg-center"></div>
          <h3 className="text-2xl ml-3 font-semibold">Syltherine</h3>
          <p className="text-slate-400 ml-3">Stylish Cafe chair</p>
          <p className="ml-3 font-medium">Rp 2,000.000</p></div>

        <div className="h-80 w-[250] bg-white absolute mt-20 ml-[400]">
        <div style={{backgroundImage: "url('/stylish chair2.png')"}} className="h-56 w[250] bg-slate-500 bg-cover bg-center"></div>
        <h3 className="text-2xl ml-3 font-semibold">Leviosa</h3>
          <p className="text-slate-400 ml-3">Stylish Cafe chair</p>
          <p className="ml-3 font-medium">Rp 2,000.000</p></div>

          <div className="h-80 w-[250] bg-white absolute mt-20 ml-[680]">
        <div  style={{backgroundImage: "url('/bigsofa.png')"}} className="h-56 w[250] bg-slate-500 bg-cover bg-center"></div>
        <h3 className="text-2xl ml-3 font-semibold">Lolito</h3>
          <p className="text-slate-400 ml-3">Luxury big sofa</p>
          <p className="ml-3 font-medium">Rp 7,000.000</p></div>

          <div className="h-80 w-[250] bg-white relative mt-20 ml-[970]">
        <div style={{backgroundImage: "url('/outdoor bar.png')"}} className="h-56 w[250] bg-slate-500 bg-cover bg-center"></div>
        <h3 className="text-2xl ml-3 font-semibold">Respira</h3>
          <p className="text-slate-400 ml-3">outdoor bar table and stool</p>
          <p className="ml-3 font-medium">Rp 500.000</p></div>

          <div className="h-80 w-[250] bg-white absolute mt-20 ml-28">
          <div style={{backgroundImage: "url('/stylishchair.png')"}} className="h-56 w[250] bg-slate-500 bg-cover bg-center"></div>
          <h3 className="text-2xl ml-3 font-semibold">Syltherine</h3>
          <p className="text-slate-400 ml-3">Stylish Cafe chair</p>
          <p className="ml-3 font-medium">Rp 2,000.000</p></div>

        <div className="h-80 w-[250] bg-white absolute mt-20 ml-[400]">
        <div style={{backgroundImage: "url('/stylish chair2.png')"}} className="h-56 w[250] bg-slate-500 bg-cover bg-center"></div>
        <h3 className="text-2xl ml-3 font-semibold">Leviosa</h3>
          <p className="text-slate-400 ml-3">Stylish Cafe chair</p>
          <p className="ml-3 font-medium">Rp 2,000.000</p></div>

          <div className="h-80 w-[250] bg-white absolute mt-20 ml-[680]">
        <div  style={{backgroundImage: "url('/bigsofa.png')"}} className="h-56 w[250] bg-slate-500 bg-cover bg-center"></div>
        <h3 className="text-2xl ml-3 font-semibold">Lolito</h3>
          <p className="text-slate-400 ml-3">Luxury big sofa</p>
          <p className="ml-3 font-medium">Rp 7,000.000</p></div>

          <div className="h-80 w-[250] bg-white relative mt-20 ml-[970]">
        <div style={{backgroundImage: "url('/outdoor bar.png')"}} className="h-56 w[250] bg-slate-500 bg-cover bg-center"></div>
        <h3 className="text-2xl ml-3 font-semibold">Respira</h3>
          <p className="text-slate-400 ml-3">outdoor bar table and stool</p>
          <p className="ml-3 font-medium">Rp 500.000</p></div>
            
          <div className="h-10 w-10 bg-yellow-400 ml-[520] mt-8 flex items-center justify-center">1</div>
          <div className="h-10 w-10 bg-pink-200 ml-[600] -mt-10 relative flex items-center justify-center">2</div>
          <div className="h-10 w-10 bg-pink-200 ml-[670] -mt-10 flex items-center justify-center">3</div>
          <div className="h-10 w-14 bg-pink-200 ml-[740] -mt-10 flex items-center justify-center">Next</div>

          <div className="h-48 w-auto bg-pink-200 flex mt-10">
        <h2 className="ml-20 mt-16 absolute text-4xl font-semibold">High Quality</h2>
        <p className="ml-20 mt-28 absolute text-2xl">Crafted from top materials</p>
        <h2 className="ml-[420] mt-16 absolute text-3xl font-semibold">Warranty Protection</h2>
        <p className="ml-[420] mt-28 absolute text-2xl">Over 2 years</p>
        <h2 className="ml-[770] mt-16 absolute text-3xl font-semibold">Free Shipping</h2>
        <p className="ml-[770] mt-28 absolute text-2xl">Order Over 150$</p>
        <h2 className="ml-[1060] mt-16 absolute text-3xl font-semibold">24 / 7 Support</h2>
        <p className="ml-[1060] mt-28 absolute text-2xl">Dedicated Support</p>
      </div>

      <div className="h-[520] w-auto flex">
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