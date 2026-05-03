export default function Testimonials() {
  return (
    <section className="bg-[#F5F4F2] py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg md:text-xl text-neutral-700 leading-relaxed italic">
          &ldquo;Alex didn&apos;t just execute. He thought deeply about the
          product, pushed back when something didn&apos;t make sense, and
          delivered a codebase that our internal team actually enjoys working
          in. He&apos;s the kind of freelancer you give equity to.&rdquo;
        </p>

        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-neutral-300 flex items-center justify-center text-neutral-500 text-xs font-medium">
            SC
          </div>
          <p className="text-sm font-medium text-neutral-800">Sarah Chen</p>
          <p className="text-xs text-neutral-500">CTO, Meridian</p>
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-8">
          <p className="text-sm text-neutral-500 max-w-md mx-auto">
            &ldquo;Working with Alex felt like having a senior engineer on the
            team. Zero hand-holding required.&rdquo;
          </p>
          <p className="mt-2 text-xs text-neutral-400">
            — Marcus Rivera, Founder at Pinnacle Health
          </p>
        </div>
      </div>
    </section>
  );
}