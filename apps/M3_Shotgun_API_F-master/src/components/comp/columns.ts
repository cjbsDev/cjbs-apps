
import React from 'react'

export const columns = [
  {
    name: 'StrainName',
    selector: (row) => {
      if (row.strainName === '') {
        return '-';
      }
      return row.strainName;
    },
    cell: (row, index, column, id) =>  <Lnk linkName={row.strainName} href={`/stain/${row.strainName}`} />,
    style: {color:'blue'},
    sortable: true,
    width: '150px',
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
    sortable: true,
    wrap: true,
  },
  {
    name: 'taxonomy',
    selector: (row) => {
      if (row.taxonomy === '') {
        return '-';
      }
      return row.taxonomy;
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
    width: '210px',
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
    width: '150px',
    // center: true,
  },
  {
    name: 'UUID',
    selector: (row) => {
      if (row.uuid === '') {
        return '-';
      }
      return row.uuid;
    },
    sortable: true,
    wrap: true,
    width: '150px',
  }
  // {
  //   name: 'something',
  //   cell: (row) => {
  //     return <button onClick={() => console.log(row.id)}>Something</button>
  //   },
  //   width: '120px',
  //   center: true,
  // },
];
