import React from 'react';

export default class About extends React.Component {

  goToDestination(e) {
    e.preventDefault()
    console.log('in go home function')
    const destination = this.formInput.value.toLowerCase()
    console.log("stored input value: " + destination)
    this.context.router.transitionTo(`/about/${destination}`)
  }

  render () {
    return (
      <div className="About">
        <p>About Page</p>

        <form>
          <input  type="text"
                  placeholder="Destination"
                  ref={(input) => { this.formInput = input }}
          />
          <button onClick={(e) => this.goToDestination(e)}>
            Transition To Destination
          </button>
        </form>
      </div>
    )
  }
}

About.contextTypes = {
  router: React.PropTypes.object
}
