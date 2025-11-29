import { ContainerScroll } from "@/components/ui/container-scroll-animation";
const ScrollShowcase = () => {
  return <div className="flex flex-col overflow-hidden bg-black">
      <ContainerScroll titleComponent={<>
            <h2 className="text-4xl font-semibold text-white">
              Unleash the power of <br />
              <span className="text-4xl font-bold mt-1 leading-none text-[#C8F200] md:text-7xl">Conversion Focused Ads</span>
            </h2>
          </>}>
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&auto=format&fit=crop&q=80" alt="showcase" className="mx-auto rounded-2xl object-cover h-full object-left-top w-full" draggable={false} />
      </ContainerScroll>
    </div>;
};
export default ScrollShowcase;