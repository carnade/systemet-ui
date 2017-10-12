import React, { Component } from 'react';
import ReductionReactTable from './components/ReductionReactTable';
// import ReactTable from 'react-table';
// import 'react-table/react-table.css';

export default class App extends Component {
  // constructor() {
  //   super();
  //   // this.state = {
  //   //   items: [],
  //   // };
  // }
  // componentWillMount() {
  //   fetch('http://192.168.1.101:3000/systemetpage?size=30000')
  //     // fetch('http://localhost:3000/systemetpage?size=10&sort=reduction,desc&date')
  //     // fetch('http://swapi.co/api/people/?format=json')
  //     .then(reponse => reponse.json())
  //     .then(({ content: items }) => this.setState({ items }))
  //     .catch(() => {
  //       console.error('error');
  //     });
  // }
  render() {
    // const data = this.state.items;
    return (
      <ReductionReactTable />
      //   <div>
      //     {/* <h1>Hello, World!</h1>
      //     {data.map(item => <h4 key={item.id}>{item.name}</h4>)} */}
      //     <ReactTable
      //       data={data}
      //       columns={[
      //         {
      //           Header: 'Information',
      //           columns: [
      //             {
      //               Header: 'Nummer',
      //               accessor: 'object',
      //             },
      //             {
      //               Header: 'Namn',
      //               accessor: 'name',
      //             },
      //             {
      //               Header: 'Typ',
      //               accessor: 'type',
      //             },
      //           ],
      //         },
      //         {
      //           Header: 'Prisföränding',
      //           columns: [
      //             {
      //               Header: 'Pris',
      //               accessor: 'price',
      //               defaultSortDesc: 'true',
      //             },
      //             {
      //               Header: 'Förändring %',
      //               accessor: 'reduction',
      //               defaultSortDesc: 'true',
      //             },
      //             {
      //               Header: 'Datum',
      //               accessor: 'date',
      //               Cell: row => <span>{new Date(row.value).toISOString().slice(0, 10)}</span>,
      //
      //               //
      //               //
      //             },
      //           ],
      //         },
      //       ]}
      //       defaultSorted={[
      //         {
      //           id: 'date',
      //           desc: true,
      //         },
      //         {
      //           id: 'reduction',
      //           desc: true,
      //         },
      //       ]}
      //       defaultPageSize={20}
      //       className="-striped -highlight"
      //       SubComponent={row => (
      //         <div style={Object.assign({}, { padding: 20 }, { background: '#ffffe9' })}>
      //           <ReactTable
      //             data={[row.original]}
      //             columns={[
      //               {
      //                 Header: 'Land',
      //                 accessor: 'country',
      //               },
      //               {
      //                 Header: 'Område',
      //                 accessor: 'origin',
      //               },
      //               {
      //                 Header: 'Producent',
      //                 accessor: 'producer',
      //               },
      //               {
      //                 Header: 'Undertyp',
      //                 accessor: 'subtype',
      //               },
      //               {
      //                 Header: 'Alkohol',
      //                 accessor: 'alcohol',
      //               },
      //               {
      //                 Header: 'Volym',
      //                 accessor: 'volume',
      //               },
      //             ]}
      //             defaultPageSize={1}
      //             showPagination={false}
      //           />
      //         </div>
      //       )}
      //     />
      //   </div>
      // );

      // const items = this.state.items;
      // return (
      //   <div>
      //     <h1>Hello, World!</h1>
      //     {items.map(item => <h4 key={item.id}>{item.name}</h4>)}
      //   </div>
      // );
      //  }
    );
  }
  //
  //
  // export default class Reduction extends Component {
  //
  //   static propTypes = {};
  //
  //   constructor() {
  //     super();
  //
  //     this.state = {};
  //   }
  //
  //   render() {
  //     return (
  //       <div>MyComponent</div>
  //     );
  //   }
  //
  // }
  //
  // export default class ReductionList extends Component {
  //
  //   static propTypes = {};
  //
  //   constructor(props) {
  //     super(props);
  //
  //     this.state = {};
  //   }
  //
  //   render() {
  //     return (
  //       <div>MyComponent</div>
  //     );
  //   }
  //
}
