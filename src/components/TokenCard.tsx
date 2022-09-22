import { FC } from 'react';

type TokenProps = {
    imgSrc: string,
    displayName: string,
    floorPrice: number,
    projectId: string,
}

export const TokenCard: FC<TokenProps> = ({
  imgSrc, displayName, floorPrice, projectId,
}) => {
  return (
    <div />
  );
};
