import Layer from '@/assets/layer.png';
import EducationIamage from '@/assets/Education.png';
import AssetAllocationImage from '@/assets/AssetAllocation.png';
import BuildingEnterprise from '@/assets/BuildingEnterprise.png';

const Domains = [
  {
    title: 'Service Provioders',
    img: Layer,
    sections: [
      {
        Icon: Layer,
        title: 'Mobile Operators',
      },
      {
        Icon: Layer,
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
        Icon: Layer,
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
        Icon: Layer,
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
