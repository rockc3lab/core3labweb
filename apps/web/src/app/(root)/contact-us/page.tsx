import place from "@/assets/images/icon/place2.png";
import { ContactForm } from "@/components/contact-us/contact-form";
import SectionHeading from "@/components/ui/section-heading";
import { Mail, Map, Phone } from "lucide-react";
import Image from "next/image";
const Page = () => {
  return (
    <section className="flex-col w-full relative mt-10 wrapper">
      <SectionHeading dimTitle="Contact us" border={false} />
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex flex-col gap-5 basis-1/3">
          <div className="flex flex-col gap-5 bg-[#f7f9f8] rounded-4xl p-10">
            <div className="flex gap-5">
              <Image src={place} width={33} height={33} alt="core3lab" />
              <h1 className="font-bold text-xl">Dhaka</h1>
            </div>
            <div className="flex gap-5">
              <div className="w-[20px]">
                <Map />
              </div>
              <label className="text-xl capitalize">
                Flat: C-7, Siddique Sorrento, Road: 8/A, West Dhanmondi 289/290
                Navana, Dhaka 1209
              </label>
            </div>
            <div className="flex gap-5">
              <Phone />
              <label className="text-xl">+8809678800544</label>
            </div>
            <div className="flex gap-5">
              <Mail />
              <label className="text-xl">info@core3lab.com</label>
            </div>
          </div>
          <div id="map" className="map">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4313.1082610308085!2d90.371006!3d23.7433238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf834e93882d%3A0x17dd3a980ce91c00!2sCore3Lab%20ltd.!5e1!3m2!1sen!2sbd!4v1755496514806!5m2!1sen!2sbd"
              width="400"
              height="400"
              loading="lazy"
            ></iframe>
            <script
              type="text/javascript"
              src="https://embedmaps.com/google-maps-authorization/script.js?id=1247d247f0fc94561e54750a29b1ab2a07f8b6b2"
              async
            ></script> */}
          </div>
        </div>
        <ContactForm title="Leave a" subTitle="Message" />
      </div>
    </section>
  );
};

export default Page;
