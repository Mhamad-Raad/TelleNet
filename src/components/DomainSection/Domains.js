import EducationIamage from '@/assets/Domain/Education.png';
import AssetAllocationImage from '@/assets/Domain/AssetAllocation.png';
import BuildingEnterprise from '@/assets/Domain/BuildingEnterprise.png';
import ServiceProvider from '@/assets/Domain/ServiceProvider.png';
import SolarPanel from '@/assets/Domain/SolarPanel.png';
import MobileOperatorTower from '@/assets/Domain/MobileOperatorTower.png';
import Connection from '@/assets/Domain/Connection.png';
import NSPNAP from '@/assets/Domain/NSPNAP.png';
import OpticFiber from '@/assets/Domain/OpticFiber.png';
import HealthCare from '@/assets/Domain/HealthCare.png';
import DataCener from '@/assets/Domain/DataCenter.png';
import UtilityDomain from '@/assets/Domain/UtilityDomain.png';
import PowerLine from '@/assets/Domain/PowerLine.png';
import OilGas from '@/assets/Domain/OilGas.png';
import Water from '@/assets/Domain/Water.png';
import Security from '@/assets/Domain/Security.png';
import Defence from '@/assets/Domain/Defence.png';
import Infrastructure from '@/assets/Domain/Infrastructure.png';
import PInfra from '@/assets/Domain/PInfra.png';

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
        title: 'Oil & Gas',
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
