import React from 'react'
import Table from './Table.js'
import Form from './Form.js'

const Header = () => {
  return (
    <div>
      <h1>React Tutorial</h1>
      <p>Add names and jobs to the table.</p>
    </div>
  )
}

class App extends React.Component {
  state = {
    characters: [],
  }

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  render() {
    const { characters } = this.state

    return (
      <div className="container">
        <Header />
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default App
