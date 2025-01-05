import { BsFillPeopleFill } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function blog() {
  return (
    <div>
      <nav className="h-20 w-[800]px flex justify-between items-center mx-8">
        <div>
          <h2 className="text-4xl font-semibold">Furniro</h2>
        </div>
        <div className="h-16 w-96 text-2xl flex justify-center items-center">
          <ul className="flex flex-row justify-center items-center space-y-1 gap-10 cursor-pointer">
            <li>Home</li>
            <li>Shop</li>
            <li>blog</li>
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

      <div className="h-20 w-auto bg-pink-200 flex">
        <h5 className="mt-7 ml-24 text-slate-500">Home</h5>
        <h5 className="mt-7 ml-24 text-slate-500">Shop</h5>
        <div className="h-10 w-1 bg-slate-500 ml-12 mt-5"></div>
        <p className="ml-5 mt-7">Asgaard Sofa</p>
      </div>

      <div className="h-[630] w-auto bg-slate-100 flex">
        <div
          style={{ background: "url('/sofa1.png')" }}
          className="h-14 w-14 bg-pink-400 ml-24 mt-7 bg-cover bg-center"
        ></div>
        <div
          style={{ background: "url('/sofa2.png')" }}
          className="h-14 w-14 bg-pink-400 -ml-14 mt-28 bg-cover bg-center"
        ></div>
        <div
          style={{ background: "url('/sofa3png.jpg')" }}
          className="h-14 w-14 bg-pink-400 -ml-14 mt-48 bg-cover bg-center"
        ></div>
        <div
          style={{ background: "url('/sofa4.png')" }}
          className="h-14 w-14 bg-pink-400 -ml-14 mt-[270] bg-cover bg-center"
        ></div>
        <div
          style={{ background: "url('/sofabig.png')" }}
          className="h-96 w-96 bg-pink-500 ml-20 mt-8 bg-cover"
        ></div>

        <h3 className="ml-10 mt-8 text-3xl">Asgaard sofa</h3>
        <h6 className="mt-[80] -ml-44 text-slate-400">Rs. 250,000.00</h6>
        <h3 className="flex mt-[115] -ml-28">
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
        </h3>
        <div className="h-6 w-1 bg-slate-400 mt-[110] ml-7"></div>
        <h4 className="ml-7 mt-[110] text-slate-400">5 customer review</h4>
        <p className="mt-40 -ml-[265]">
          Setting the bar as oneof the loudest speaker in it class, the<br></br>
          kilburn is a compact, stout-hearted hero with a well-balanced<br></br>
          audio wgich baasts a clear midrange and extended high for a<br></br>
          sound
        </p>
        <h5 className="mt-[280] -ml-[430] text-gray-400">Size</h5>
        <div className="h-8 w-8 bg-yellow-600 flex items-center justify-center mt-[320] -ml-7 rounded-md">
          L
        </div>
        <div className="h-8 w-8 bg-pink-300 flex items-center justify-center mt-[320] ml-3 rounded-md">
          XL
        </div>
        <div className="h-8 w-8 bg-pink-300 flex items-center justify-center mt-[320] ml-3 rounded-md">
          XS
        </div>
        <div className="h-12 w-24 bg-slate-50 mt-[375] -ml-32 rounded-md border border-gray-300">
          <p className="mt-2 ml-2 text-2xl">-</p>
          <p className="-mt-8 ml-10 text-2xl">1</p>
          <p className="ml-20 -mt-8 text-2xl">+</p>
        </div>
        <div className="h-12 w-32 bg-slate-50 flex items-center justify-center rounded-lg mt-[375] ml-5 border border-gray-400 hover:border-gray-800">
          <Link href="/ADDToCard">Add To Cart</Link>
        </div>
        <div className="h-12 w-32 bg-slate-50 flex items-center justify-center rounded-lg mt-[375] ml-5 border border-gray-400">
          + Compare
        </div>

        <div className="space-y-3 text-gray-500 mt-[470] -ml-[390]">
          <div className="flex">
            <span className="font-medium">SKU</span>
            <span className="ml-4">: SS001</span>
          </div>
          <div className="flex">
            <span className="font-medium">Category</span>
            <span className="ml-4">: Sofas</span>
          </div>
          <div className="flex">
            <span className="font-medium">Tags</span>
            <span className="ml-4">: Sofa, Chair, Home, Shop</span>
          </div>

          <div className="flex items-center">
            <span className="font-medium">Share</span>
            <span className="ml-4 space-x-3">
              <a
                href="#"
                className="inline-block text-black hover:text-blue-500"
                aria-label="Facebook"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="#"
                className="inline-block text-black hover:text-blue-500"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="inline-block text-black hover:text-blue-500"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="h-[730] w-auto flex">
        <h2 className="text-2xl font-bold ml-[350] mt-8">Description</h2>
        <h3 className="text-2xl text-gray-500 mt-8 ml-14">Additional information</h3>
        <h3 className="text-2xl text-gray-500 mt-8 ml-14">Reviews [5]</h3>
        <p className="mt-28 -ml-[700] text-gray-500">Embody the row. wayword spirit if rock &apos;n&apos; roil, the kelburn partable active sterio speaker takes the unmistikable look and<br></br>
        sound of marshall, unplugs the chord, and take the show on the road.</p>
        <p className="mt-60 -ml-[845] text-gray-500">Weighing in under 7 pound, the kilburn is a lightweight piece of wintage styled engineering setting the bar as one of the loudest<br></br>
        speaker in it class the kelburn is a compact, stout-hearted hero with a well-balanced audio which biasts a clear midrange<br></br>
        and extented highs for a sound that is both articulate and pronounced. the analogue knobs allow you fine tune the control<br></br>
        to your personal preerence while the guitar-influenced leather strap anables easy stylish travel.</p>
        <div style={{background: "url('/sofa.png.jpg')"}} className="h-64 w-[500] bg-slate-900 relative mt-[400] -ml-[1000] bg-center"></div>
        <div style={{background: "url('/sofa1.png.jpg')"}} className="h-64 w-[500] bg-slate-900 relative mt-[400] ml-16 bg-cover bg-center"></div>
      </div>
      <div className="h-[500] w-auto bg-orange-50 flex">
        <h1 className="text-2xl font-bold ml-[550] mt-10">Related Products</h1>

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

          <div className="h-80 w-[250] bg-white relative mt-20 ml-[230]">
        <div style={{backgroundImage: "url('/outdoor bar.png')"}} className="h-56 w[250] bg-slate-500 bg-cover bg-center"></div>
        <h3 className="text-2xl ml-3 font-semibold">Respira</h3>
          <p className="text-slate-400 ml-3">outdoor bar table and stool</p>
          <p className="ml-3 font-medium">Rp 500.000</p></div>

          <button className="h-14 w-36 bg-white text-yellow-700 rounded-lg border border-yellow-500 hover:border-black -ml-[620] mt-[420]">Show More</button>
      </div>

      <div className="h-[550] w-auto flex">
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
  );
}
