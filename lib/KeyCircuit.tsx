import { TS_1187A_B_A_B } from "../imports/TS_1187A_B_A_B"

/**
 * BOOTSEL (SW1): QSPI_SS_N pulled high via R2; when pressed, pulls to GND for USB boot.
 * RESET (SW2): RUN pin to GND to reset the RP2040.
 */
export const KeyCircuit = () => (
  <group>
    <resistor
      name="R2"
      resistance="1k"
      footprint="0402"
      connections={{
        pin1: "net.QSPI_SS_N",
        pin2: "net.BOOTSEL_NODE",
      }}
    />
    <TS_1187A_B_A_B
      name="SW1"
      connections={{
        pin1: "net.BOOTSEL_NODE",
        pin2: "net.GND",
      }}
    />
    <TS_1187A_B_A_B
      name="SW2"
      connections={{
        pin1: "net.RUN",
        pin2: "net.GND",
      }}
    />
  </group>
)
