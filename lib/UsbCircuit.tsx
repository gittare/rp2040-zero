/**
 * USB circuit: connector, USB_DP/USB_DM data lines, power (VSYS), ESD protection placeholder.
 * Connects USB connector to RP2040 USB pins and VSYS rail.
 */
export const UsbCircuit = () => (
  <group>
    <chip
      name="J1"
      footprint="usb_micro_b"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VBUS", "DM", "DP", "GND", "ID"],
        },
      }}
      pinLabels={{
        pin1: "VBUS",
        pin2: "DM",
        pin3: "DP",
        pin4: "GND",
        pin5: "ID",
      }}
      connections={{
        VBUS: "net.VSYS",
        DM: "net.USB_DM",
        DP: "net.USB_DP",
        GND: "net.GND",
      }}
    />
  </group>
)
