import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import NoDataComp from '@components/comp/NoDataComp';
// import { columns } from '@components/comp/columns';
import { customStyles, tableStyle } from '@components/comp/dataTabelCustomStyles';
import CustomLoader from '@components/comp/CustomLoader';
import { Container, Typography } from '@mui/material';
import {Lnk, ALnk} from "@components/atoms/Link";
import Link from 'next/link';
import { Box } from '@mui/system';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ImageEzbioLogo from '/public/img/strain/strainDetail/ezbiocloud_mini.png'
import ImageMicrobiomeLogo from '/public/img/strain/strainDetail/microbiome_mini.png'
import Image from 'next/image';
import {themeJeju} from '@src/components/variables/themeJeju';
import TaxnomyBtnStyle from '../strain/TaxnomyBtnStyle';
import { dataTableCustomStyles } from '@styles/common/dataTableCustomStyle';
const theme = themeJeju;

const StrainDataTable = (props) => {
  const { listToDisplay, pending, handleRowSelected, modalOpen, onClickTaxonomy } = props

  const columns = [
    {
      name: 'StrainName',
      selector: (row) => {
        if (row.strainName === '') {
          return '-';
        }
        return row.strainName;
      },
      cell: (row, index, column, id) => {
        const regex = new RegExp(row.taxonName, 'i')
        const filtered = listToDisplay.filter((item) => {

          const resultKeyword =
            item.strainName !== null && item.strainName.match(regex) ||
            item.taxonName !== null && item.taxonName.match(regex) ||
            item.taxonomy !== null && item.taxonomy.match(regex)
    
          return resultKeyword;
        });

        return(
          <>
            <Box sx={{mr:1}}>
              <Lnk  linkName={row.strainName} href={{pathname:`/strain/[strainName]`, query: {strainName: row.strainName, r:filtered.length}}} />
            </Box>
            <ALnk linkName={<OpenInNewIcon fontSize='15px'/>} href={{pathname:`/strain/[strainName]`, query: {strainName: row.strainName, r:filtered.length}}} target={'_blank'} />
            {/* <Link href={{pathname:`/strain/[strainName]`, query: {strainName: row.strainName}}}><a style={{marginLeft:'5px',}}  target={'_blank'}>새창</a></Link> */}
          </>
        )
      },
      style: {color:'blue'},
      sortable: true,
      width: '160px',
      // center: true,
    },
    {
      name: 'StrainBank',
      selector: (row) => {
        if (row.strainBank === '') {
          return '-';
        }
        return row.strainBank;
      },
      sortable: true,
      width: '150px',
      // center: true,
    },
    {
      name: 'TaxonName',
      selector: (row) => {
        if (row.taxonName === '') {
          return '-';
        }
        return row.taxonName;
      },
      cell: (row, index, column, id) => {
        const taxonName = row.taxonName        
        const convertTaxonName = taxonName ? taxonName.replace(/ /gi, '%') : ""
              
        return <Box sx={{width:'100%'}}>
          {
            row.taxonName &&
          <Box>
            <Box sx={{mr:'5px', mb:'5px'}}>{row.taxonName}</Box>
            <Box sx={{display:'flex', justifyContent:'flex-start', flexDirection:'row'}}>
              <Box sx={{mr:'10px'}} >
                <Link  href={{pathname : `https://www.ezbiocloud.net/taxon`, query: {tn: row.taxonName}}}>
                  <a target={'_blank'}>
                    <Image
                      src={ImageEzbioLogo}
                      width={'20px'}
                      height={'14px'}
                      alt="Ezbiocloud Taxon Link"
                      quality={90}
                      priority
                    />
                  </a>
                </Link>
              </Box>
              <Box>
                <ALnk linkName={
                  <Image
                    src={ImageMicrobiomeLogo}
                    width={'17px'}
                    height={'14px'}
                    alt="Taxon Detail Info"
                    quality={90}
                    priority
                  />}
                  href={''} 
                  onClick={()=>modalOpen(convertTaxonName)} 
                />
              </Box>
            </Box>
          </Box>
          }
        </Box>
      },
      width: '190px',
      sortable: true,
      wrap: true,
    },
    {
      name: 'Taxonomy',
      selector: (row) => {
        if (row.taxonomy === '') {
          return '-';
        }
        return row.taxonomy;
      },
      cell: (row, index, column, id) => {

        return <TaxnomyBtnStyle taxonomy={row.taxonomy} handler={onClickTaxonomy} />
        // const taxonomyArray = (row.taxonomy||'').split(/\;/);
        // const notEmptyTaxonomyArray = taxonomyArray.filter((taxonomy) => taxonomy.length > 0);
        // return notEmptyTaxonomyArray.map((taxonomy) => {
        //   return <Button sx={{backgroundColor:themeColor.grey[100], textTransform:'none'}} key={taxonomy} style={{margin:'2px', padding:'1px', paddingLeft:'7px', fontSize:'14px', fontWeight:'500', paddingRight:'7px', borderRadius:'15px', borderWidth:'1px', color:'black'}} onClick={()=> onClickTaxonomy(taxonomy)}>{taxonomy};</Button>
        // })
      },
      style : {
        display:'inline'
      },
      sortable: true,
      wrap: true,
    },
    {
      name: 'OriginalStrainName',
      selector: (row) => {
        if (row.originalStrainName === '') {
          return '-';
        }
        return row.originalStrainName;
      },
      sortable: true,
      width: '220px',
    },
    {
      name: 'StrainAlias',
      selector: (row) => {
        if (row.strainAlias === '') {
          return '-';
        }
        return row.strainAlias;
      },
      sortable: true,
      wrap: true,
      width: '145px',
      // center: true,
    },
    {
      name: '16S',
      selector: (row) => {
        return row.ssuSequenceCount
        // if (row.ssuSequenceCount === 0) {
        //   return '-';
        // }
        // else {
        //   return row.ssuSequenceCount
        // }
      },
      sortable: true,
      wrap: true,
      width: '90px',
      center: true,
    },
    {
      name: 'Genomes',
      selector: (row) => {
         return row.genomeSequenceCount
        // if (row.genomeSequenceCount === 0) {
        //   return '-';
        // }
        // else {
        //   return row.genomeSequenceCount
        // }
        
      },
      sortable: true,
      wrap: true,
      width: '120px',
      center: true,
    }
  ];

  return (
    <Container maxWidth={'xl'}>
      <DataTable
        noDataComponent={<NoDataComp />}
        columns={columns}
        data={listToDisplay}
        customStyles={dataTableCustomStyles}
        pagination
        persistTableHead
        progressPending={pending}
        progressComponent={<CustomLoader />}
        onSelectedRowsChange={handleRowSelected}
      />
    </Container>
  );
};



export default StrainDataTable;