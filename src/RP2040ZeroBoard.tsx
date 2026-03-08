/**
 * RP2040-Zero board: 21mm × 17.5mm, Xiao form factor.
 * Composes RP2040, power, USB (with series R), flash, crystal, BOOTSEL/RESET, power LED, WS2812B, SWD header, and pin header.
 */
import { PowerCircuit } from "../lib/PowerCircuit"
import { UsbCircuit } from "../lib/UsbCircuit"
import { RP2040Circuit } from "../lib/RP2040Circuit"
import { FlashCircuit } from "../lib/FlashCircuit"
import { CrystalCircuit } from "../lib/CrystalCircuit"
import { KeyCircuit } from "../lib/KeyCircuit"
import { PowerLedCircuit } from "../lib/PowerLedCircuit"
import { LedCircuit } from "../lib/LedCircuit"
import { SwdCircuit } from "../lib/SwdCircuit"
import { PinOutCircuit } from "../lib/PinOutCircuit"

export const RP2040ZeroBoard = () => (
  <board
    width="21mm"
    height="17.5mm"
    title="RP2040-Zero"
    routingDisabled
    schMaxTraceDistance={5}
  >
    <PowerCircuit />
    <UsbCircuit />
    <RP2040Circuit />
    <FlashCircuit />
    <CrystalCircuit />
    <KeyCircuit />
    <PowerLedCircuit />
    <LedCircuit />
    <SwdCircuit />
    <PinOutCircuit />
  </board>
)
