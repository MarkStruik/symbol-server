This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Example:
http://localhost:3000/SFG-UCI----D?size=60

![image](https://user-images.githubusercontent.com/8427513/196964447-aff4d613-fec4-4fb5-bc0e-13d50e15382b.png)

This is using for imagary: https://github.com/spatialillusions/milsymbol
and all '/' are routed to the 'api/symbol/[symbolcode]'

you can add more as query parameters:
( currently i do not support sending this as part of the body, but i will add it at some point )

  additionalInformation?: string;
  alternateMedal?: boolean;
  altitudeDepth?: string;
  auxiliaryEquipmentIndicator?: string;
  civilianColor?: boolean;
  colorMode?: ColorMode | string;
  combatEffectiveness?: string;
  commonIdentifier?: string;
  country?: string;
  direction?: string;
  dtg?: string;
  engagementBar?: string;
  engagementType?: string;
  equipmentTeardownTime?: string;
  evaluationRating?: string;
  fill?: boolean;
  fillOpacity?: number;
  fontfamily?: string;
  frame?: boolean;
  frameColor?: ColorMode;
  guardedUnit?: string;
  headquartersElement?: string;
  higherFormation?: string;
  hostile?: string;
  hqStaffLength?: number;
  icon?: boolean;
  iconColor?: ColorMode | string;
  iffSif?: string;
  infoBackground?: ColorMode | string;
  infoBackgroundFrame?: ColorMode | string;
  infoColor?: ColorMode | string;
  infoFields?: boolean;
  infoSize?: number;
  installationComposition?: string;
  location?: string;
  monoColor?: string;
  outlineColor?: ColorMode | string;
  outlineWidth?: number;
  padding?: number;
  platformType?: string;
  quantity?: string;
  reinforcedReduced?: string;
  sidc?: string;
  sigint?: string;
  signatureEquipment?: string;
  simpleStatusModifier?: boolean;
  size?: number;
  specialDesignator?: string;
  specialHeadquarters?: string;
  speed?: string;
  speedLeader?: number;
  square?: boolean;
  staffComments?: string;
  standard?: string;
  strokeWidth?: number;
  type?: string;
  uniqueDesignation?: string;


## TODO:

* custom symbols ( add nvg's to a custom folder to expose )
* sending symbol configuration data as body
