import React from 'react'
import FilterLink from "../containers/FilterLink";
import {Button} from 'react-bootstrap'
import {ButtonGroup} from 'react-bootstrap'
import PropTypes from 'prop-types'

import {VisibilityFilters} from "../actions";

class Footer extends React.Component {
  render() {
    return (
      <ButtonGroup>
        <Button><FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink></Button>
        <Button><FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink></Button>
        <Button><FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink></Button>
      </ButtonGroup>
    )
  }
}

export default Footer