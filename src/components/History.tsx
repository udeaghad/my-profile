const History = () => {
  return (
    <div className="m-5" data-testid='history'>
      <h2 className="text-center font-bold text-xl mb-2">Professional History</h2>

      <div className="flex mb-2 border-b">
        <div className="w-[17%] min-w-[17%]">
          <img src="system-trackers-logo.jpg" alt="STT-logo" className="aspect-[4/4] object-cover"/>
        </div>

        <div className="ml-2">
          <h3 className="text-base font-bold">Full Stack Developer</h3>
          <p className="text-sm">System Trackers Technology</p>
          <span className="text-xs">Sep 2022 - Present</span>
        </div>
      </div>

      <div className="flex mb-2 border-b">
        <div className="w-[17%] min-w-[17%]">
          <img src="microverse-logo.jpg" alt="STT-logo" className="aspect-[4/4] object-cover"/>
        </div>

        <div className="ml-2">
          <h3 className="text-base font-bold">Mentor(Volunteer)</h3>
          <p className="text-sm">Microverse</p>
          <span className="text-xs">May 2022 - Nov 2022</span>
        </div>
      </div>

      <div className="flex mb-2 border-b">
        <div className="w-[17%] min-w-[17%]">
          <img src="sterling-logo.jpg" alt="STT-logo" className="aspect-[4/4] object-cover"/>
        </div>

        <div className="ml-2">
          <h3 className="text-base font-bold">Service Manager</h3>
          <p className="text-sm">Sterling Bank Plc</p>
          <span className="text-xs">Mar 2014 - Sep 2016</span>
        </div>
      </div>

      <div className="flex mb-2 border-b">
        <div className="w-[17%] min-w-[17%]">
          <img src="sterling-logo.jpg" alt="STT-logo" className="aspect-[4/4] object-cover"/>
        </div>

        <div className="ml-2">
          <h3 className="text-base font-bold">Customer Service Manager</h3>
          <p className="text-sm">Sterling Bank Plc</p>
          <span className="text-xs">Nov 2008 - Feb 2014</span>
        </div>
      </div>
    </div>
  )
}

export default History;