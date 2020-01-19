import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchData, filterData } from '../actions/list';

class Table extends React.PureComponent {

  componentDidMount() {
    const { actions } = this.props
    actions.fetchData();
  }

findMatches = (event) => {
    const { actions } = this.props
    actions.filterData(event.target.value)
}

onFormSubmit = event => {
  event.preventDefault();
}
  render() {
    const { places, wordToMatch } = this.props
    console.log(places)
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type='text' value={wordToMatch} onChange={this.findMatches}></input>
        </form>

        <table style={{ borderCollapse: 'collapse', width: '100%'}}>
          <tbody>
            <tr>
              <th style={{border: '1px solid red', textAlign: 'left', padding: '8px'}}>city</th>
              <th style={{border: '1px solid red', textAlign: 'left', padding: '8px'}}>state</th>
            </tr>
            {
              places.map((place, index) => {
                return (
                  <tr key={index}>
                    <th style={{border: '1px solid grey', textAlign: 'left', padding: '8px'}}>{place.city}</th>
                    <th style={{border: '1px solid grey', textAlign: 'left', padding: '8px'}}>{place.state}</th>

                  </tr>
                )
              })

            }
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    data: state.list.data,
    places: state.list.places,
    filterText: state.list.filterText

})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators ({ fetchData, filterData }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);