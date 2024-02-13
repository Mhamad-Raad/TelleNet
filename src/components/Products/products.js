import Layer from '@/assets/layer.png';

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
        image: Layer,
      },

      {
        title: 'Access Router',
        description:
          'optimized for 5G xHaul, converged interconnect networks (CIN), broadband backhaul, and mission-critical applications, they excel in converging access edge networks by supporting multiple technologies including Ethernet, TDM (CES), and XGSPON. Available in both integrated and modular configurations, these routers ensure seamless connectivity with full redundancy options.',
        image: Layer,
      },
      {
        title: 'Aggregation Router',
        description:
          'For high-scale aggregation needs, our best-in-class Aggregation Routers offer carrier-class reliability with terabit-scale connectivity, making them ideal for service providers, MSOs, enterprises, and mission-critical networks. Their modular architecture enables efficient growth alongside service expansion, while redundancy ensures uninterrupted service delivery.',
        image: Layer,
      },
      {
        title: 'Metro Router',
        description:
          'leverage cutting-edge switching silicon to deliver high performance and capacity, perfectly suited for supporting 5GxHaul, residential broadband backhaul, and CIN networks. With interfaces supporting up to 400G, these routers provide the necessary horsepower for demanding network environments.',
        image: Layer,
      },
      {
        title: 'Datacenter Switches',
        description:
          'Datacenter Switches extend our IP router portfolio to cater to data center environments, offering a highly energy-efficient solution based on a commercial SONiC distribution. Equipped with features such as Layer 3 functionality, BGP EVPN-VXLAN support, and high-capacity interfaces, they provide a scalable and flexible solution for modern data center architectures.',
        image: Layer,
      },
    ],
  },

  {
    title: 'Optical Networking',
    description:
      'Our Open Optical Networking solutions meet escalating bandwidth demands, offering operators customizable, future-proof options. These networks optimize channel capacity with high-performance optical links and cost-power efficient configurations. Using scalable, pay-as-you-grow pluggable interfaces ensures flexible network expansion. With SDN-controlled ROADMs and OTN switches, link and service routing from access to core is dynamic, streamlining network management. Our solutions cater to diverse requirements, ensuring adaptability and efficiency in optical networking.',
    image: Layer,
    types: [
      {
        title: 'Series 1',
        description:
          'targets large communication service providers and webscale operators with ultra-high density and ultra-low power consumption, exemplified by our initial platform offering up to 1.2T wavelengths',
        image: Layer,
      },
      {
        title: 'Series 2',
        description:
          'allows customization with a rich set of line cards for transponders, muxponders, ROADMs, and amplifiers, ensuring tailored solutions without engineering restrictions.',
        image: Layer,
      },
      {
        title: 'Series 3',
        description:
          'Access to Core OTN Switching offers platforms with capacity scaling from 400G to 16T, making OTN switching economically feasible throughout the network. With features like streamlined service delivery, optimized wavelength fill, point-and-click service provisioning, and dynamic restoration, our Open Optical Networking solutions elevate OTN/DWDM Transport Solutions while reducing Capex, Opex, and ensuring higher availability.',
        image: Layer,
      },
    ],
  },
  {
    title: 'Domain orchestration',
    description:
      "Our Domain Orchestration suite maximizes network operation efficiency. Its modular applications enable swift service deployment, ensuring optimized and available networks. Powered by a carrier-grade PaaS, our solution provides real-time control over programmable network infrastructure, automating service and network operations. Users access only necessary applications, ensuring an efficient user experience. With Domain Orchestration, unlock your network's potential, enhancing operational agility and responsiveness while streamlining processes and reducing manual intervention.",
    image: Layer,
    types: [],
  },
  {
    title: 'FTTX OLT/ONT',
    description:
      'Our Fiber-to-the-X (FTTX) solutions drive the Gigabit Society, enhancing broadband connectivity to revitalize communities and foster economic growth. Meeting the soaring demand for reliable high-speed broadband, our solutions empower communication service providers to deliver gigabit services to residential, business, and community users. Tailored for various network operator segments, our operator-specific 10G fiber platforms offer flexibility and agility. With modern, open, and disaggregated solutions, providers can expedite new customer applications, reduce overhead costs, and minimize time-to-market delays.',
    image: Layer,
    types: [
      {
        title: 'Series 1 OLT',
        description:
          'open and disaggregated Optical Line Terminals (OLTs), we deliver unprecedented levels of network simplicity, sustainability, and scale to both MSOs and CSPs. These OLTs support a broad range of PON standards, including 10G Combo PON, XGS-PON, GPON, and 10G-EPON, providing operators with the flexibility to address diverse deployment scenarios ranging from rural to dense urban environments.',
        image: Layer,
      },
      {
        title: 'Series 2 OLT',
        description:
          'is a highly extensible chassis-based OLT system designed to meet the needs of regional and municipal network operators. With environmentally hardened and operationally deterministic design, Series 2 offers simplified workflow, advanced analytics, and intuitive operational environments to streamline network turnup and service delivery. Supporting a variety of services including 10G Combo PON, GPON, XGS-PON, and dedicated Carrier Ethernet services, Series 2 bridges the gap between existing and next-generation networks, ensuring operators can deliver highly profitable service offerings while meeting the bandwidth demands of modern applications.',
        image: Layer,
      },
      {
        title: 'Type 1 XGS-PON ONTs',
        description:
          'designed to support the growing smart home ecosystem and small business startups, providing an array of features to meet the demands of bandwidth-intensive applications.',
        image: Layer,
      },
      {
        title: 'Type 2 XGS-PON ONTs',
        description:
          'leverage high data rates of fiber optic transmission to deliver unmatched flexibility and performance. With support for next-generation 10Gbit/s architectures, these ONTs ensure that service providers can economically meet the needs of multigigabit services well into the future.',
        image: Layer,
      },
      {
        title: 'Type 3 GPON ONTs',
        description:
          'engineered to support demanding multigigabit residential and business services, cloud services, and remote work scenarios. With their high-performance capabilities, these ONTs set the standard for industry-leading voice, data, and video capabilities, ensuring that service providers can deliver superior connectivity experiences to their subscribers.',
        image: Layer,
      },
    ],
  },
];

export default Products;
