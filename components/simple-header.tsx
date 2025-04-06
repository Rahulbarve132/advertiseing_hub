export function SimpleHeader() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <>
      {/* Breaking News Banner */}
      <div className="bg-black text-white py-2 overflow-hidden">
        <div className="container flex items-center gap-4">
          <span className="bg-red-600 text-white px-2 py-1 text-xs font-bold uppercase whitespace-nowrap">
            Breaking News
          </span>
          <div className="overflow-hidden whitespace-nowrap w-full">
            <div className="inline-block animate-marquee font-serif">
              <span className="mx-8">Premium advertising spaces now available for Q2</span>
              <span className="mx-8">New interactive ad formats launching next month</span>
              <span className="mx-8">Limited-time offer: 20% off premium placements</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

