export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  gujaratiTitle: string;
  summary: string;
  details: string;
  duration: string;
  craftSecret: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    number: 'Step 01',
    title: 'Coconut Selection & Precision Hand-Grating',
    gujaratiTitle: 'પ્રીમિયમ નાળિયેરની પસંદગી અને છીણવું',
    summary: 'Selecting fresh, mature coastal coconuts and grating them into tender, uniform flakes.',
    details: 'Only sun-ripened, mature coconuts with rich flesh are selected. The brown skin is cleanly pared away, leaving pure white coconut meat, which is grated into delicate medium shreds to preserve natural coconut milk, sweetness, and juicy moisture.',
    duration: '30 mins',
    craftSecret: 'Paring away every speck of the outer brown shell is essential so the base of the Kopra Pak remains snow-white, tender, and free of bitter woody bits.',
  },
  {
    step: '02',
    number: 'Step 02',
    title: 'Gentle Roasting in 100% Pure Premium Ghee',
    gujaratiTitle: 'શુદ્ધ પ્રીમિયમ ઘીમાં ધીમા તાપે શેકવું',
    summary: 'Roasting freshly grated coconut in pure bilona premium ghee on gentle embers in a heavy brass kadai.',
    details: 'Pure golden premium ghee is melted in a wide brass kadai. The grated coconut is slowly stirred on mild heat, coaxing out its intoxicating nutty-tropical aroma without scorching or browning the shreds.',
    duration: '25 mins',
    craftSecret: 'Heat control is paramount. Slow roasting seals the natural coconut milk within each shred while removing raw excess water, ensuring prolonged freshness.',
  },
  {
    step: '03',
    number: 'Step 03',
    title: 'Slow-Cooked Milk Mawa (Khoya) Blending',
    gujaratiTitle: 'શુદ્ધ દૂધનો માવો અને ઘટ્ટ મિશ્રણ',
    summary: 'Folding rich, slow-simmered milk mawa into the warm coconut to form a velvety fudge base.',
    details: 'Freshly prepared whole-milk mawa (khoya) is gradually crumbled into the warm roasted coconut. As the mawa gently melts, it coats every coconut particle, turning the texture into a luxurious, melt-in-the-mouth consistency.',
    duration: '20 mins',
    craftSecret: 'Fresh unadulterated khoya gives Kopra Pak its signature tender bite that dissolves effortlessly on your tongue, unlike dry or chewy packaged barfis.',
  },
  {
    step: '04',
    number: 'Step 04',
    title: 'Single-String Saffron & Cardamom Syrup Infusion',
    gujaratiTitle: 'એક-તારની કેસર-ઈલાયચી ચાસણીનું સંયોજન',
    summary: 'Simmering sulphur-free cane sugar with Kashmiri saffron and green cardamom to an ek-taar stage.',
    details: 'Refined cane sugar is boiled with pure water to a precise one-string (ek-taar) stage. Freshly crushed green cardamom pods and Kashmiri saffron threads bloomed in warm milk are stirred in, infusing the sweet nectar with an exquisite royal golden perfume before uniting with the coconut mixture.',
    duration: '20 mins',
    craftSecret: 'The syrup must reach the exact single-string consistency. Too thin makes the barfi soggy; too thick makes it crystallize and turn hard.',
  },
  {
    step: '05',
    number: 'Step 05',
    title: 'Tray Setting, Kesar Crown & Royal Garnish',
    gujaratiTitle: 'પીતળના થાળમાં ઢાળવું, કેસર લેયર અને પિસ્તા-ચાંદી વરખ',
    summary: 'Pouring into ghee-greased brass trays, creating the iconic kesar top layer, and garnishing lavishly.',
    details: 'The warm, fragrant halwa-like coconut mixture is spread evenly onto Pure Premium Ghee-greased brass trays and gently leveled. A glowing saffron-infused layer is smoothed over the surface, followed by a shower of slivered emerald pistachios, Mamra almond flakes, and pure vegetarian silver leaf (chandi vark).',
    duration: '20 mins',
    craftSecret: 'Lightly pressing the pistachio and almond slivers into the warm surface locks them securely into the barfi while it sets.',
  },
  {
    step: '06',
    number: 'Step 06',
    title: 'Artisanal Natural Setting & Diamond Slicing',
    gujaratiTitle: 'કુદરતી ઠંડક અને પરંપરાગત કટિંગ',
    summary: 'Allowing the tray to set naturally at ambient room temperature before precision diamond cutting.',
    details: 'The trays are rested under controlled ambient room temperature for several hours so the mawa, ghee, and coconut naturally bind into a tender, sliceable fudge. Master craftsmen use fine confectioners blades to cut perfect, glossy diamond and square pieces.',
    duration: '60 mins',
    craftSecret: 'Never force-cooling in deep freezers preserves the delicate moisture barrier, allowing the Kopra Pak to retain its lush juicy mouthfeel for weeks.',
  },
];
