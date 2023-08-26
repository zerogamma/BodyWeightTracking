import { Icon } from '@aws-amplify/ui-react';
// import ArrowDown from '~/assets/arrow-down-square.svg';
// import ArrowUp from '~/assets/arrow-up-square.svg';
// import ArrowEqual from '~/assets/minus-square.svg';
import { ArrowDownCircleIcon, ArrowUpCircleIcon, MinusCircleIcon } from '@heroicons/react/24/solid';

export const Status = ({ type }: { type: string }) => {
  switch (type) {
    case 'up':
      return <Icon className="mr-1 text-green-500" as={ArrowUpCircleIcon} />;
    case 'down':
      return <Icon className="mr-1 text-red-500" as={ArrowDownCircleIcon} />;
    case 'equal':
      return <Icon className="mr-1 text-yellow-400" as={MinusCircleIcon} />;
  }
};
