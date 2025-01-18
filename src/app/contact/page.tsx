import { BsFillPeopleFill } from "react-icons/bs";
import { IoSearchSharp } from 'react-icons/io5';
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import Link from "next/link";

export default function contact () {
    return (
        <div className="hamza">
        <nav className="h-20 w-[800]px flex justify-between items-center mx-8">
      <div>
        <h2 className="text-4xl font-semibold">Furniro</h2>
        </div>
        <div className="h-16 w-96 text-2xl flex justify-center items-center">
        <ul className="flex flex-row justify-center items-center space-y-1 gap-10 cursor-pointer">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/blog">blog</Link></li>
          <li>Contact</li>
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
<h4 className="font-bold text-7xl">Contact</h4>
<h5 className="text-4xl font-medium">Home contact</h5>
</div>

<div className="h-[850] w-auto flex bg-slate-400">
    <h2 className="text-3xl font-bold mt-10 ml-[500]">Get In Touch With Us</h2>
    <p className="text-gray-500 mt-20 absolute ml-[420] capitalize">For more information About our product & services please feel free to drop us<br></br>
    an email, our staff always be there to help you out. do not hestate!</p>
    <FaMapMarkerAlt className="font-bold text-2xl mt-44 absolute ml-[220]"/>
    <h1 className="absolute mt-44 ml-[260] text-2xl font-extrabold">Address</h1>
    <p className="absolute mt-52 ml-[260]">Big socity Avenue, Pak<br></br>
    Islamabad, housing<br></br>
    Socity</p>
    <FaPhoneAlt className="text-2xl font-bold absolute mt-[300] ml-[220]"/>
    <h1 className="absolute mt-[295] ml-[260] text-2xl font-extrabold">Phone</h1>
    <p className="absolute mt-[330] ml-[260]">Mobile: +(92) 000 000 0000</p>
    <p className="absolute mt-[350] ml-[260]">Hotline: +(92) 188 234 5678</p>
    <IoTime className="absolute mt-[395] text-2xl font-bold ml-[215]"/>
    <h4 className="absolute mt-[393] text-2xl font-extrabold ml-[257]">Working Time</h4>
    <p className="absolute mt-[425] ml-[255]">Monday-Friday: 9:00-<br></br>
    22:00</p>
    <p className="absolute mt-[470] ml-[255]">Saturday-Sunday: 9:00-<br></br>
    21:00</p>

    <h1 className="absolute font-bold mt-[170] ml-[700]">Your Name</h1>
    <input type="text" placeholder="ABC" className="absolute h-14 w-96 p-3 rounded-lg border border-gray-500 mt-52 ml-[700]" />
    <h2 className="absolute font-bold mt-[310] ml-[700]">Email address</h2>
    <input type="text" placeholder="Abc@gmail.com" className="h-14 w-96 rounded-lg absolute border border-gray-500 mt-[340] ml-[700] p-3" />
    <h3 className="absolute font-bold mt-[440] ml-[700]">Subject</h3>
    <input type="text" placeholder="This is an optional" className="h-14 w-96 absolute border border-gray-500 rounded-lg mt-[470] p-3 ml-[700]" />
    <h2 className="absolute font-bold mt-[568] ml-[700]">Message</h2>
    <textarea name="Message" id="Message" rows={5} placeholder="Hi! I'd like to ask about" className="h-28 p-3 rounded-lg border border-gray-500 w-96 absolute mt-[600] ml-[700]"></textarea>
    <button className="h-12 absolute w-60 mt-[740] ml-[700] bg-yellow-700 rounded-md border border-gray-500">Submit</button>
</div>

         <div className="h-48 w-auto bg-pink-200 flex">
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
    )
}