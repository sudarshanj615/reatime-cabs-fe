// import { cabTypes } from "@/constants/cabTypes";
// import { CabCard } from "./CabCard";

// export function CabSelector() {
//   return (
//     <div className="stack">
//       <h2>Select Cab Type</h2>
//       {/* <div className="grid grid-5">
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
    <div className="stack">
      <h2>Select Cab Type</h2>

      <div className="grid grid-5">
        {filteredCabs.map((cab) => (
          <CabCard cab={cab} key={cab.id} />
        ))}
      </div>
    </div>
  );
}