import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import systemetLogo from '../resources/systembolaget.png';
import vivinoLogo from '../resources/vivino.png';

export default class ReductionReactTable extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
    };
  }
  componentWillMount() {
    fetch('http://192.168.1.101:3000/systemetpage?size=30000')
      // fetch('http://localhost:3000/systemetpage?size=10&sort=reduction,desc&date')
      // fetch('http://swapi.co/api/people/?format=json')
      .then(reponse => reponse.json())
      .then(({ content: items }) => this.setState({ items }))
      .catch(() => {
        console.error('error');
      });
  }

  render() {
    const data = this.state.items;
    return (
      <div style={{ textAlign: 'center' }}>
        {/* <h1>Hello, World!</h1>
        {data.map(item => <h4 key={item.id}>{item.name}</h4>)} */}
        <ReactTable
          data={data}
          columns={[
            {
              Header: 'Information',
              columns: [
                {
                  Header: 'Nummer',
                  accessor: 'object',
                },
                {
                  Header: 'Namn',
                  accessor: 'name',
                },
                {
                  Header: 'Typ',
                  accessor: 'type',
                },
              ],
            },
            {
              Header: 'Prisföränding',
              columns: [
                {
                  Header: 'Pris',
                  accessor: 'price',
                  defaultSortDesc: 'true',
                },
                {
                  Header: 'Förändring %',
                  accessor: 'reduction',
                  defaultSortDesc: 'true',
                },
                {
                  Header: 'Datum',
                  accessor: 'date',
                  Cell: row => <span>{new Date(row.value).toISOString().slice(0, 10)}</span>,

                  //
                  //
                },
              ],
            },
            {
              Header: 'Länkar',
              columns: [
                {
                  Header: 'Systemet',
                  accessor: 'number',
                  maxWidth: 100,
                  Cell: row => <a href={`http://www.systembolaget.se/sok-dryck/?searchquery=${row.value}`} target='_blank'><img alt="Systemet" src={systemetLogo} width="30" height="30" /></a>
                },
                {
                  Header: 'Vivino',
                  accessor: 'name',
                  maxWidth: 100,
                  Cell: row => <a href={`https://www.vivino.com/search/wines?q=${row.value}`} target='_blank'><img alt="Vivino" src={vivinoLogo} width="25" height="25" /></a>
                }
              ]
            }
          ]}
          defaultSorted={[
            {
              id: 'date',
              desc: true,
            },
            {
              id: 'reduction',
              desc: true,
            },
          ]}
          defaultPageSize={20}
          className="-striped -highlight"
          SubComponent={row => (
            <div style={Object.assign({}, { padding: 20 }, { background: '#eeeeee' })}>
              <ReactTable
                data={[row.original]}
                columns={[
                  {
                    Header: 'Land',
                    accessor: 'country',
                  },
                  {
                    Header: 'Område',
                    accessor: 'origin',
                  },
                  {
                    Header: 'Producent',
                    accessor: 'producer',
                  },
                  {
                    Header: 'Undertyp',
                    accessor: 'subtype',
                  },
                  {
                    Header: 'Alkohol',
                    accessor: 'alcohol',
                  },
                  {
                    Header: 'Volym',
                    accessor: 'volume',
                  },
                ]}
                defaultPageSize={1}
                showPagination={false}
              />
            </div>
          )}
        />
      </div>
    );
  }
}
