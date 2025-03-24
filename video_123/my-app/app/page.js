import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-5 size-80 bg-amber-100 ">
     
     <Image className="mx-auto object-contain"
      src="https://www.facebook.com/images/fb_icon_325x325.png"
      alt="Picture facebook icon"
      width={150}
      height={150}
    />
    </div>
  );
}
