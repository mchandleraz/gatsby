import React, { createElement } from "react"

class ComponentRenderer extends React.Component {
  render() {
    // Try getting the component and data for this
    // component. If they aren't ready return null or an
    // included widget spinner.
    //
    // then Listen for PAGE_RESOURCES_LOADED event for this
    // path to then render the page.
    return createElement(this.props.children, { ...this.props.otherProps })
  }
}

export default ComponentRenderer
