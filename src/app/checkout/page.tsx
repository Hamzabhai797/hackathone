import { BsFillPeopleFill } from "react-icons/bs";
import { IoSearchSharp } from 'react-icons/io5';
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";


export default function checkout () {
    return (
        <div>
            <nav className="h-20 w-[800]px flex justify-between items-center mx-8">
                  <div>
                    <h2 className="text-4xl font-semibold">Furniro</h2>
                    </div>
                    <div className="h-16 w-80 text-2xl flex justify-center items-center">
                    <ul className="flex flex-row justify-center items-center space-y-1 gap-10 cursor-pointer">
                      <li>Home</li>
                      <li>Shop</li>
                      <li>blog</li>
                      <li><Link href="/contact">Contact</Link></li>
                    </ul>
                  </div>
                  <div className="h-16 w-40 flex items-center justify-center gap-5">
                  <BsFillPeopleFill />
                  <IoSearchSharp />
                  <FaRegHeart />
                  <FaCartShopping />
                  </div>
                  </nav>
                  <div style={{backgroundImage: "url('/image.png.webp')"}} className="h-96 w-auto bg-slate-500 flex flex-col justify-center items-center bg-cover bg-center">
                    <h4 className="font-bold text-7xl">Check out</h4>
                    <h5 className="text-4xl font-medium">Home ckeckout</h5>
                  </div>

                  <div className="h-[1150] w-auto bg-slate-100 flex">
                    <h2 className="text-2xl font-bold ml-28 mt-10">Billing details</h2>
                    <h6 className="font-semibold mt-24 -ml-[155]">First Name</h6>
                    <input type="text" placeholder="" className="h-12 w-36 rounded-md border border-gray-500 mt-32 -ml-[82] px-3" />
                    <h6 className="font-semibold mt-24 ml-8">Last Name</h6>
                    <input type="text" placeholder="" className="h-12 w-36 rounded-md border border-gray-500 mt-32 -ml-20 px-3" />
                    <h1 className="absolute mt-[200] ml-28 font-bold">Company Name (optional)</h1>
                    <input type="text" placeholder="" className="h-12 w-60 absolute rounded-md border border-gray-500 mt-[235] ml-28 px-3" />
                    <h1 className="absolute mt-[300] font-bold ml-28">Country / Religin</h1>
                    <select name="country" id="country"  className="absolute h-12 w-60 mt-[340] ml-28 rounded-lg border border-gray-500 px-3">
                        <option value="Pakistan">Pakistan</option>
                        <option value="India">India</option>
                        <option value="China">China</option>
                        <option value="Russia">Russia</option>
                        <option value="America">America</option>
                        <option value="Japan">Japan</option>
                        <option value="North Korea">North Korea</option>
                        <option value="South korea">South korea</option>
                        <option value="England">England</option>
                        <option value="Canada">Canada</option>
                    </select>
                    <h2 className="absolute mt-[400] font-bold ml-28">Street Address</h2>
                    <input type="text" placeholder="" className="absolute mt-[440] h-12 w-60 rounded-lg ml-28 px-5 border border-gray-500" />
                    <h3 className="absolute mt-[500] font-bold ml-28">Town City</h3>
                    <input type="text" placeholder="" className="absolute mt-[540] h-12 w-60 rounded-lg ml-28 px-5 border border-gray-500" />
                    <h4 className="absolute ml-28 mt-[605] font-bold">Province</h4>
                    <select name="Province" id="province" className="absolute h-12 w-60 mt-[650] ml-28 rounded-lg border border-gray-500 px-3">
                      <option value="Sindh">Sindh</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Khyber PukhtonKhwa">Khyber PukhtonKhwa</option>
                      <option value="Balochistan">Balochistan</option>
                    </select>
                    <h4 className="absolute ml-28 mt-[710] font-bold">Zip Code</h4>
                    <input type="text" placeholder="" className="h-12 w-60 rounded-md border border-gray-500 mt-[750] absolute ml-28 px-3" />
                    <h4 className="absolute ml-28 mt-[810] font-bold">Phone</h4>
                    <input type="text" placeholder="+92 000-0000000" className="h-12 w-60 rounded-md border border-gray-500 mt-[850] absolute ml-28 px-3" />
                    <h4 className="absolute ml-28 mt-[910] font-bold">Email Address</h4>
                    <input type="text" placeholder="Email" className="h-12 w-60 rounded-md border border-gray-500 mt-[950] absolute ml-28 px-3" />
                    <input type="text" placeholder="Additional information" className="h-12 w-60 rounded-lg border border-gray-500 absolute px-3 mt-[1040] ml-28" />
                    <h5 className="font-bold ml-[300] mt-10">Product</h5>
                    <h3 className="text-gray-400 mt-[80] -ml-[60]">Asgaard sofa<span className="text-black ml-3">X  1</span></h3>
                    <h2 className="mt-[110] -ml-[130]">subtotal</h2>
                    <h5 className="font-bold ml-[280] mt-10">Subtotal</h5>
                    <h1 className="mt-[140] -ml-[400]">Total</h1>
                    <p className="mt-[80] ml-[1075] absolute">Rs 250,000.00</p>
                    <p className="mt-[110] ml-[1075] absolute">Rs 250,000.00</p>
                    <p className="mt-[140] ml-[1030] text-yellow-500 absolute text-2xl">Rs 250,000.00</p>
                    <div className="h-1 w-[470] absolute bg-slate-400 mt-[200] ml-[730]"></div>
                    <label className="flex items-center text-gray-500">
                      <input type="radio" className="h-8 w-4 -mt-[710] -ml-8" />
                      <span className="ml-8 -mt-[710] text-black font-medium">Direct Bank Transfer</span>
                    </label>
                    <p className="mt-[260] -ml-[200] text-gray-600">Make your payment directly into our bank account. please use<br></br>
                    ypur order ID as the payment reference. your order will not be <br></br>
                    shipped until the funds have cleared in our account</p>

                    <label className="flex items-center text-gray-500">
                      <input type="radio" className="h-8 w-4 -mt-[440] -ml-[435]" />
                      <span className="ml-8 -mt-[440] text-gray-500 font-medium">Direct Bank Transfer</span>
                    </label>

                    <label className="flex items-center text-gray-500">
                      <input type="radio" className="h-8 w-4 -mt-[360] -ml-[435]" />
                      <span className="ml-8 -mt-[360] text-gray-500 font-medium">Cash On Delivery</span>
                    </label>
                    <p className="mt-[470] -ml-[440]">Your personal data will be use to support your experience<br></br>
                    throughout this website, to manage access to your account, and<br></br>
                    for other purposes describe in our <span className="font-semibold">privacy policy</span></p>
                    <div className="h-12 w-52 mt-[580] -ml-[320] flex items-center justify-center rounded-lg border border-gray-600">Place order</div>
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