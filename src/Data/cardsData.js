import { AiOutlineLike } from 'react-icons/ai';
import { TbTags } from 'react-icons/tb';
import { TbAlignBoxBottomLeft } from 'react-icons/tb';
import { FiUsers } from 'react-icons/fi';

export const cardData = [
  {
    id: 1,
    title: 'Total Revenues',
    value: '2,129,430',
    icon: TbAlignBoxBottomLeft,
    color: {
      backGround: '#ddefe0',
    },
  },
  {
    id: 2,
    title: 'Total Transactions',
    value: '1,520',
    icon: TbTags,
    color: {
      backGround: '#f4ecdd',
    },
  },
  {
    id: 3,
    title: 'Total Likes',
    value: '9,721',
    icon: AiOutlineLike,
    color: {
      backGround: '#EFDADA',
    },
  },
  {
    id: 4,
    title: 'Total Users',
    value: '892',
    icon: FiUsers,
    color: {
      backGround: '#def0ef',
    },
  },
];
