import Layer from '@/assets/layer.png';
import EducationIamage from '@/assets/Education.png';
import AssetAllocationImage from '@/assets/AssetAllocation.png';
import BuildingEnterprise from '@/assets/BuildingEnterprise.png';
import ServiceProvider from '@/assets/ServiceProvider.png';
import SolarPanel from '@/assets/SolarPanel.png';
import MobileOperatorTower from '@/assets/MobileOperatorTower.png';
import Connection from '@/assets/Connection.png';
import NSPNAP from '@/assets/NSPNAP.png';

const Domains = [
  {
    title: 'Service Provioders',
    img: ServiceProvider,
    sections: [
      {
        Icon: MobileOperatorTower,
        title: 'Mobile Operators',
      },
      {
        Icon: Connection,
        title: 'Broadband ISPs',
      },
      {
        Icon: Layer,
        title: '⁠Cable Operators MSOs',
      },
      {
        Icon: Layer,
        title: 'Network service providers NSPs',
      },
      {
        Icon: NSPNAP,
        title: 'Network access point providers NAPs',
      },
    ],
  },
  {
    title: 'Enterprises',
    img: BuildingEnterprise,
    sections: [
      {
        Icon: EducationIamage,
        title: 'Research & Education Networks',
      },
      {
        Icon: Layer,
        title: 'Healthcare',
      },
      {
        Icon: AssetAllocationImage,
        title: 'Financials',
      },
      {
        Icon: Layer,
        title: 'Data Center Xs',
      },
    ],
  },
  {
    title: 'Utilities UTelcos',
    img: Layer,
    sections: [
      {
        Icon: SolarPanel,
        title: 'Power Grid, Water, Oil, Gas & Solars',
      },
      {
        Icon: Layer,
        title: 'X/Private Industries',
      },
    ],
  },
  {
    title: 'Critical Infrastructure',
    img: Layer,
    sections: [],
  },
];

export default Domains;
