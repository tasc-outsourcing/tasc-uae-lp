export function IntroSection() {
  return (
    <section 
      className="relative py-20 px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=800&fit=crop')"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm p-12 rounded-xl shadow-lg text-center">
          <div className="w-16 h-1 bg-gradient-to-r from-[#06C1FF] to-[#43DA37] rounded-full mb-6 mx-auto"></div>
          <h2 className="text-3xl mb-6 text-[#005f83]">
            Your Success is Our Mission
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Wherever you're taking your business, we'll help you get there. As the region's leading staffing and HR services expert, TASC offers comprehensive people solutions — from recruitment and onboarding to payroll and visa support.
          </p>
          <div className="bg-gradient-to-r from-[#06C1FF]/10 to-[#43DA37]/10 p-6 rounded-xl border border-gray-100">
            <p className="text-lg text-[#005f83]">
              <span className="font-semibold">Focus on what you do best. We'll handle the rest.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}