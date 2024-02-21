import Aggregation from '@/assets/Product/Aggregation.png';
import CPE from '@/assets/Product/CPEr.png';
import AccessRouter from '@/assets/Product/AccessRouter.png';
import MetroRouter from '@/assets/Product/MetroRouter.png';
import DataCenterSwitch from '@/assets/Product/DataCenterSwitch.png';
import Series1 from '@/assets/Product/Series1.png';
import Series2 from '@/assets/Product/Series2.png';
import Series3 from '@/assets/Product/Series3.png';
import Type1 from '@/assets/Product/Type1.png';
import Type2 from '@/assets/Product/Type2.png';
import Type3 from '@/assets/Product/Type3.png';
import S1 from '@/assets/Product/S1.png';
import S2 from '@/assets/Product/S2.png';
import Gen6P from '@/assets/Product/Gen6+.png';
import Gen6 from '@/assets/Product/Gen6.png';
import Gen5P from '@/assets/Product/Gen5+.png';
import Gen5 from '@/assets/Product/Gen5.png';
import Gen4PP from '@/assets/Product/Gen4++.png';
import Gen4P from '@/assets/Product/Gen4+.png';
import Gen4 from '@/assets/Product/Gen4.png';
import Gen3P from '@/assets/Product/Gen3+.png';
import Gen3 from '@/assets/Product/Gen3.png';
import Transivers from '@/assets/Product/Transivers.png';

const Products = [
  {
    title: 'IP ROUTERS',
    description:
      'Our suite of IP routers encompasses a versatile range of solutions tailored to meet specific networking requirements across various industries. offering multiple routing technologies including IP/MPLS, MPLS-TP, Segment routing, RSVP-TE, FlexE, and supporting a wide range of services such as Ethernet, Layer 2 VPN, Layer 3 VPN, EVPN, Circuit emulation, and XGS-PON.',
    types: [
      {
        title: 'Compact CPE customer premises equipment',
        description:
          'designed for applications like 4G and 5G Fronthaul, Critical Infrastructure, and Enterprise use, these devices offer hardened high-availability for mission-critical sectors while providing cost-effective solutions for multiservice edge needs.',
        image: CPE,
      },

      {
        title: 'Access Router',
        description:
          'optimized for 5G xHaul, converged interconnect networks (CIN), broadband backhaul, and mission-critical applications, they excel in converging access edge networks by supporting multiple technologies including Ethernet, TDM (CES), and XGSPON. Available in both integrated and modular configurations, these routers ensure seamless connectivity with full redundancy options.',
        image: AccessRouter,
      },
      {
        title: 'Aggregation Router',
        description:
          'For high-scale aggregation needs, our best-in-class Aggregation Routers offer carrier-class reliability with terabit-scale connectivity, making them ideal for service providers, MSOs, enterprises, and mission-critical networks. Their modular architecture enables efficient growth alongside service expansion, while redundancy ensures uninterrupted service delivery.',
        image: Aggregation,
      },
      {
        title: 'Metro Router',
        description:
          'leverage cutting-edge switching silicon to deliver high performance and capacity, perfectly suited for supporting 5GxHaul, residential broadband backhaul, and CIN networks. With interfaces supporting up to 400G, these routers provide the necessary horsepower for demanding network environments.',
        image: MetroRouter,
      },
      {
        title: 'Datacenter Switches',
        description:
          'Datacenter Switches extend our IP router portfolio to cater to data center environments, offering a highly energy-efficient solution based on a commercial SONiC distribution. Equipped with features such as Layer 3 functionality, BGP EVPN-VXLAN support, and high-capacity interfaces, they provide a scalable and flexible solution for modern data center architectures.',
        image: DataCenterSwitch,
      },
    ],
  },

  {
    title: 'Optical Networking',
    description:
      'Our Open Optical Networking solutions meet escalating bandwidth demands, offering operators customizable, future-proof options. These networks optimize channel capacity with high-performance optical links and cost-power efficient configurations. Using scalable, pay-as-you-grow pluggable interfaces ensures flexible network expansion. With SDN-controlled ROADMs and OTN switches, link and service routing from access to core is dynamic, streamlining network management. Our solutions cater to diverse requirements, ensuring adaptability and efficiency in optical networking.',
    types: [
      {
        title: 'Series 1',
        description:
          'targets large communication service providers and webscale operators with ultra-high density and ultra-low power consumption, exemplified by our initial platform offering up to 1.2T wavelengths',
        image: Series1,
      },
      {
        title: 'Series 2',
        description:
          'allows customization with a rich set of line cards for transponders, muxponders, ROADMs, and amplifiers, ensuring tailored solutions without engineering restrictions.',
        image: Series2,
      },
      {
        title: 'Series 3',
        description:
          'Core OTN Switching: scalable platforms (400G to 16T) for cost-effective switching. Open Optical Networking enhances OTN/DWDM Transport Solutions, reducing costs and improving availability.',
        image: Series3,
      },
    ],
  },
  {
    title: 'Domain orchestration',
    description:
      "Our Domain Orchestration suite maximizes network operation efficiency. Its modular applications enable swift service deployment, ensuring optimized and available networks. Powered by a carrier-grade PaaS, our solution provides real-time control over programmable network infrastructure, automating service and network operations. Users access only necessary applications, ensuring an efficient user experience. With Domain Orchestration, unlock your network's potential, enhancing operational agility and responsiveness while streamlining processes and reducing manual intervention.",
    types: [],
  },
  {
    title: 'FTTX OLT/ONT',
    description:
      'Our Fiber-to-the-X (FTTX) solutions drive the Gigabit Society, enhancing broadband connectivity to revitalize communities and foster economic growth. Meeting the soaring demand for reliable high-speed broadband, our solutions empower communication service providers to deliver gigabit services to residential, business, and community users. Tailored for various network operator segments, our operator-specific 10G fiber platforms offer flexibility and agility. With modern, open, and disaggregated solutions, providers can expedite new customer applications, reduce overhead costs, and minimize time-to-market delays.',
    types: [
      {
        title: 'Series 1 OLT',
        description:
          'open and disaggregated Optical Line Terminals (OLTs), we deliver unprecedented levels of network simplicity, sustainability, and scale to both MSOs and CSPs. These OLTs support a broad range of PON standards, including 10G Combo PON, XGS-PON, GPON, and 10G-EPON, providing operators with the flexibility to address diverse deployment scenarios ranging from rural to dense urban environments.',
        image: S1,
      },
      {
        title: 'Series 2 OLT',
        description:
          'Series 2 stands as a robust OLT system tailored for regional networks, offering streamlined operations through advanced analytics. With its support for 10G Combo PON, GPON, XGS-PON, and Carrier Ethernet services, it effectively bridges the gap between existing infrastructures and the demands of next-generation networks.',
        image: S2,
      },
      {
        title: 'Type 1 XGS-PON ONTs',
        description:
          'designed to support the growing smart home ecosystem and small business startups, providing an array of features to meet the demands of bandwidth-intensive applications.',
        image: Type1,
      },
      {
        title: 'Type 2 XGS-PON ONTs',
        description:
          'leverage high data rates of fiber optic transmission to deliver unmatched flexibility and performance. With support for next-generation 10Gbit/s architectures, these ONTs ensure that service providers can economically meet the needs of multigigabit services well into the future.',
        image: Type2,
      },
      {
        title: 'Type 3 GPON ONTs',
        description:
          'engineered to support demanding multigigabit residential and business services, cloud services, and remote work scenarios. With their high-performance capabilities, these ONTs set the standard for industry-leading voice, data, and video capabilities, ensuring that service providers can deliver superior connectivity experiences to their subscribers.',
        image: Type3,
      },
    ],
  },
  {
    title: 'Pluggable and transceivers',
    description: `COMING SOON Gen6+: Revolutionizing Coherent Optical Solutions
Gen6+ is a cutting-edge coherent DSP innovation poised to transform fiber networks with unparalleled capacity. Supporting 1.6Tb/s single-carrier wavelengths for metro ROADM networks and 800Gb/s across extensive links, it offers a remarkable 15% improvement in spectral efficiency. Beyond technical prowess, Gen6+ boasts a substantial 50% reduction in space and power per bit compared to existing technology. As the first 200GBaud coherent optical solution, Gen6+ sets a new standard for efficiency and performance in coherent pluggable and transceiver components.`,
    types: [
      {
        title: 'COMING SOON Gen6+: Revolutionizing Coherent Optical Solutions',
        description:
          'Gen6+ is a leading coherent DSP solution, offering high capacity over fiber networks. Supporting 1.6Tb/s single-carrier wavelengths for metro ROADM networks and 800Gb/s across long links, it improves spectral efficiency by 15% compared to its predecessor. With a 50% reduction in space and power per bit, it sets new standards in efficiency and performance.',
        image: Gen6P,
      },
      {
        title:
          'Gen6: Driving Efficiency and Innovation in Coherent Pluggable Technology',
        description:
          'Gen6 emerges as a footprint-optimized solution, powering 400G-800G coherent pluggables for enhanced efficiency. It extends to interoperable 800ZR DCI applications, showcasing versatility. With innovative engineering, Gen6 introduces the pioneering 800LR design, integrating coherent technology within data center campuses for the first time, promising a new era of innovation in pluggable components.',
        image: Gen6,
      },
      {
        title: 'Gen5+: Next-Gen Long-Haul Performance',
        description:
          'Gen5+ is an advanced pluggable solution leveraging cutting-edge CMOS technology, ensuring long-haul performance with low power. It enables seamless 800G transmission over 2,000 km, with features like remote diagnostics and encryption for optimized efficiency and security. Compliant with QSFP-DD800 and OSFP MSAs, it reshapes optical networking.',
        image: Gen5P,
      },
      {
        title: 'Gen5: Versatile Metro and Data Center Solution',
        description:
          'Gen5 utilizes cutting-edge 3-nm-based CMOS technology and advanced multi-vendor interoperability, including open probabilistic constellation shaping. Scheduled for QSFP-DD800 and OSFP form factors, it offers high capacity and flexible bit rates for metro and data center interconnect. Integrated intelligence ensures seamless deployment, performance, and network resiliency, reducing optical transport costs.',
        image: Gen5,
      },
      {
        title: 'Gen4++: Intelligent Bandwidth Allocation',
        description:
          'Gen4++ distinguishes itself with its flexible bandwidth range (from 25 Gb/s to 400 Gb/s), seamless integration options, and versatile applications like metro aggregation, data center interconnect, and mobile/5G xHaul, ensuring substantial cost savings and operational ease.',
        image: Gen4PP,
      },
      {
        title: 'Gen4+: Record-Setting Fiber Transmission',
        description:
          'Gen4+ revolutionizes coherent pluggable solutions for high-performance applications, supporting 400 Gb/s transmission on standard fiber routes. Available in QSFP-DD and CFP2 form factors, it offers adaptability from 100 Gb/s to 400 Gb/s connectivity. With features like dual management options, remote diagnostics, and inflight encryption, Gen4+ promises efficiency gains and enhanced customer experiences, transforming the pluggable landscape.',
        image: Gen4P,
      },
      {
        title: 'Gen4: Streamlined 400G Transport',
        description:
          'Gen4 optimizes 400G transport for metro and data center interconnect. With dual management options, it ensures reliability and interoperability. Its applications span data center interconnect, metro aggregation, DSL/PON backhaul, cable fiber deep, and mobile/5G xHaul, offering cost-efficient, simplified operations.',
        image: Gen4,
      },
      {
        title: 'Gen3+: Revolutionizing Edge Connectivity',
        description:
          'Gen3+ offers edge-optimized transmission with software-configurable bandwidth from 25 Gb/s to 100 Gb/s. Achieving 100G transmission in 25 GHz doubles fiber capacity. In QSFP-DD and CFP2 form factors, it ensures compatibility, integrated with dual management options. Gen3+ excels in diagnostics, telemetry, and encryption, supporting applications like metro aggregation, data center interconnect, and backhaul.',
        image: Gen3P,
      },
      {
        title: 'Gen3: Seamless 100G Integration',
        description:
          'Gen3 revolutionizes pluggable tech for high-performance point-to-point apps. Supporting 100 Gb/s transmission, it integrates seamlessly in QSFP-DD form factor. With integrated intelligence, dual management options, and encryption, it optimizes operations and security. Tunable across the C-band, it complies with QSFP-DD MSA standards, catering to various applications while reducing costs.',
        image: Gen3,
      },
      {
        title: 'Transceivers',
        description:
          'Telenetpro offers a wide range of transceivers, including Dual/SIngle Fiber (BIDI), CWDM, DWDM, PON, and PHY (SGMII) for various data rates. Operating across different wavelengths and distances, they feature Digital Diagnostic Function and wide temperature support. Compliant with RoHS standards, these transceivers ensure compatibility with equipment from leading vendors, ideal for diverse networks.',
        image: Transivers,
      },
    ],
  },
];

export default Products;
