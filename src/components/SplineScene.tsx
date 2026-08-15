const SPLINE_URL =
  "https://my.spline.design/xmaskcopycopy-ns62SVj5HKvFxvYOe3iapWM1-Mvr/";

export default function SplineScene() {
  return (
    <section id="spline-scene" aria-label="Interactive 3D scene" className="relative z-10 w-full bg-black">
      <div className="relative aspect-square w-full sm:aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9]">
        <iframe
          src={SPLINE_URL}
          title="Interactive 3D scene"
          loading="lazy"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </section>
  );
}
