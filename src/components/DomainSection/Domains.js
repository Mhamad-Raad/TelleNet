import EducationIamage from '@/assets/Education.png';
import AssetAllocationImage from '@/assets/AssetAllocation.png';
import BuildingEnterprise from '@/assets/BuildingEnterprise.png';
import ServiceProvider from '@/assets/ServiceProvider.png';
import SolarPanel from '@/assets/SolarPanel.png';
import MobileOperatorTower from '@/assets/MobileOperatorTower.png';
import Connection from '@/assets/Connection.png';
import NSPNAP from '@/assets/NSPNAP.png';
import OpticFiber from '@/assets/OpticFiber.png';
import HealthCare from '@/assets/HealthCare.png';
import DataCener from '@/assets/DataCenter.png';
import UtilityDomain from '@/assets/UtilityDomain.png';
import PowerLine from '@/assets/PowerLine.png';
import OilGas from '@/assets/OilGas.png';
import Water from '@/assets/Water.png';
import Security from '@/assets/Security.png';
import Defence from '@/assets/Defence.png';
import Infrastructure from '@/assets/Infrastructure.png';
import PInfra from '@/assets/PInfra.png';

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
        Icon: OpticFiber,
        title: '⁠Cable Operators MSOs',
      },
      {
        Icon: NSPNAP,
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
        Icon: HealthCare,
        title: 'Healthcare',
      },
      {
        Icon: AssetAllocationImage,
        title: 'Financials',
      },
      {
        Icon: DataCener,
        title: 'Data Center Xs',
      },
    ],
  },
  {
    title: 'Utilities UTelcos',
    img: UtilityDomain,
    sections: [
      {
        Icon: PowerLine,
        title: 'Power Grid',
      },
      {
        Icon: Water,
        title: 'Water',
      },
      {
        Icon: OilGas,
        title: 'Oil, Gas',
      },
      {
        Icon: SolarPanel,
        title: 'Solars',
      },
      {
        Icon: Security,
        title: 'X/Private Industries',
      },
    ],
  },
  {
    title: 'Critical Infrastructure',
    img: Infrastructure,
    sections: [
      {
        Icon: Defence,
        title: 'Defence & Military',
      },
      {
        Icon: PInfra,
        title: 'Public Infrastructure',
      },
    ],
  },
];

export default Domains;
