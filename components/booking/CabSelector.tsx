// import { cabTypes } from "@/constants/cabTypes";
// import { CabCard } from "./CabCard";

// export function CabSelector() {
//   return (
//     <div className="grid gap-[18px]">
//       <h2>Select Cab Type</h2>
//       {/* <div className="grid gap-6 grid-cols-5 max-[1100px]:grid-cols-3 max-[900px]:grid-cols-1 max-[760px]:grid-cols-1">
//         {cabTypes.map((cab) => (
//           <CabCard cab={cab} key={cab.id} />
//         ))}
//       </div> */}
//     </div>
//   );
// }


import { cabTypes } from "@/constants/cabTypes";
import { HIDDEN_CABS } from "@/constants/hidecab";
import { CabCard } from "./CabCard";

export function CabSelector() {
  const filteredCabs = cabTypes.filter(
    (cab) => !HIDDEN_CABS.includes(cab.id)
  );

  return (
    <div className="grid gap-[18px]">
      <h2>Select Cab Type</h2>

      <div className="grid gap-6 grid-cols-5 max-[1100px]:grid-cols-3 max-[900px]:grid-cols-1 max-[760px]:grid-cols-1">
        {filteredCabs.map((cab) => (
          <CabCard cab={cab} key={cab.id} />
        ))}
      </div>
    </div>
  );
}