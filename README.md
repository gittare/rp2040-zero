# RP2040 Zero

A tiny development board for the RP2040 microcontroller in the [Xiao form factor](https://files.seeedstudio.com/wiki/XIAO/Seeed-Studio-XIAO-Series-SOM-Datasheet.pdf). Implemented in the [tscircuit](https://tscircuit.com) framework.

Based on the [Waveshare RP2040-Zero](https://www.waveshare.com/wiki/RP2040-Zero) board.

- [Waveshare RP2040-Zero wiki](https://www.waveshare.com/wiki/RP2040-Zero) — [Schematic (PDF)](https://files.waveshare.com/upload/4/4c/RP2040_Zero.pdf)

---

## Features

- **RP2040** microcontroller with 20 GPIO broken out (GPIO0–16, GPIO26–29)
- **Power**: 5 V from USB (VSYS) → RT9013-33 LDO → 3.3 V rail; input/output decoupling
- **USB**: Micro-B connector; D+/D- with 22 Ω series resistors (signal integrity/ESD); VBUS → VSYS
- **Flash**: W25Q16JVUXIQ (QSPI) for program storage
- **Crystal**: 12 MHz oscillator (ABM8 27.2 MHz or equivalent) for system clock
- **Buttons**: BOOTSEL (QSPI_SS_N, for USB boot) and RESET (RUN to GND)
- **Power LED**: Green indicator from 3.3 V rail
- **Status LED**: WS2812B addressable RGB on GPIO16
- **SWD debug header**: 4-pin (SWDIO, SWCLK, GND, 3V3) for CMSIS-DAP / J-Link
- **Pin header**: Xiao-style stamp (VSYS, GND, 3V3, GP29–GP26, GP15–GP0)

## Board dimensions

- **21 mm × 17.5 mm** (Xiao form factor)

---

## Validation (Fixes #2)

1. **Install**
   ```bash
   npm install
   ```

2. **Run dev server**
   ```bash
   npm run dev
   ```
   Open the URL shown in the terminal (e.g. http://localhost:3000).

3. **Build**
   ```bash
   npm run build
   ```

4. **Verify**
   - PCB renders with correct outline and footprints
   - Schematic loads with all nets connected
   - No TypeScript errors
   - All circuits present: power, USB, RP2040, flash, crystal, keys, power LED, WS2812B, SWD header, pinout

---

## Project structure

```
├── index.tsx              # Entry: exports RP2040ZeroBoard
├── src/
│   └── RP2040ZeroBoard.tsx # Board definition (21×17.5 mm), composes all circuits
├── lib/
│   ├── RP2040Circuit.tsx  # RP2040 + decoupling, full pin mapping
│   ├── PowerCircuit.tsx   # VSYS → 3.3 V LDO, decoupling
│   ├── UsbCircuit.tsx     # USB connector + 22 Ω on D+/D-
│   ├── FlashCircuit.tsx   # W25Q16 QSPI flash
│   ├── CrystalCircuit.tsx # 12 MHz crystal
│   ├── KeyCircuit.tsx     # BOOTSEL, RESET
│   ├── PowerLedCircuit.tsx# Power-on green LED
│   ├── LedCircuit.tsx     # WS2812B on GPIO16
│   ├── SwdCircuit.tsx     # SWD debug header
│   ├── PinOutCircuit.tsx   # Xiao header pinout
│   └── VoltageRegulator.tsx# (legacy) LDO; use PowerCircuit for full power tree
└── imports/               # Part definitions (RP2040, W25Q16, RT9013, etc.)
```

---

## Nets (main)

| Net    | Description        |
|--------|--------------------|
| VSYS   | 5 V from USB       |
| V3_3   | 3.3 V regulated    |
| V1_1   | RP2040 internal 1.1 V core |
| GND    | Ground             |
| USB_DP, USB_DM | USB data to RP2040 |
| GPIO0–16, GPIO26–29 | GPIO to header |
| QSPI_SS_N, QSPI_SCLK, QSPI_SD0–SD3 | Flash QSPI |
| SWDIO, SWCLK | SWD debug       |
| RUN    | Reset pin          |
| XIN, XOUT | Crystal        |
