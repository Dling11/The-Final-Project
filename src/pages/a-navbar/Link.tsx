import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { SelectedPage } from '~/mylinks/types';

type Props = {
   page: string;
   selectedPage: SelectedPage;
   setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {

   const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage; //=> / /g, "" removes space

   return (
      <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-primary-secondary" : ""}
            text-white
        `}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
      >
        {page}
      </AnchorLink>
    )
}

export default Link