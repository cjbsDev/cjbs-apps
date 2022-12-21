import * as React from 'react';
import {styled} from '@mui/material/styles';
import {Box} from '@mui/material';

import CheckBoxListWithChip from '@src/components/checkbox/CheckBoxListWithChip';


/**
 * 
 * @param data
 *   [{name: 'clinical', value: 'clinical', checked: true, disabled: true}]
 * @returns 
 */
const MenuSideClinical = ({filter, filterHandleChange}) => {

  const ContainerBox = styled(Box)`
    width: 100%;
  `

  const ItemBox = styled(Box)`
    display: flex;
    flex-direction: row;
    margin-bottom: 28px;
    width: 100%;
  `
  return (
    <ContainerBox>
      {
        filter.map((check, i) => {
          return (
          <ItemBox key={i}>
            <CheckBoxListWithChip
              data={check.list}
              handleChange={(e) => filterHandleChange(e, check.name)}
              groupLabel={"group01"}
              title={check.name}
              classNameLabel={"text-gray-100"}
              iconSz={24}
            />
          </ItemBox>
        )})
      }
      {/* <ItemBox key="2">
        <CheckBoxListWithChip
          data={conditions}
          groupLabel={"group01"}
          title={"연구 현황"}
          classNameLabel={"text-gray-100"}
          iconSz={24}
        />
      </ItemBox> */}
    </ContainerBox>
  );
};

export default MenuSideClinical;



// export const getStaticProps: GetStaticProps = async (context) => {

// };
