/**
 * RP2040-Zero board: 21mm × 17.5mm, Xiao form factor.
 * Composes RP2040, power, USB, flash, crystal, buttons, LED, and pin header.
 */
import { PowerCircuit } from "../lib/PowerCircuit"
import { UsbCircuit } from "../lib/UsbCircuit"
import { RP2040Circuit } from "../lib/RP2040Circuit"
import { FlashCircuit } from "../lib/FlashCircuit"
import { CrystalCircuit } from "../lib/CrystalCircuit"
import { KeyCircuit } from "../lib/KeyCircuit"
import { LedCircuit } from "../lib/LedCircuit"
import { PinOutCircuit } from "../lib/PinOutCircuit"

export const RP2040ZeroBoard = () => (
  <board
    width="21mm"
    height="17.5mm"
    routingDisabled
    schMaxTraceDistance={5}
  >
    <PowerCircuit />
    <UsbCircuit />
    <RP2040Circuit />
    <FlashCircuit />
    <CrystalCircuit />
    <KeyCircuit />
    <LedCircuit />
    <PinOutCircuit />
  </board>
)
