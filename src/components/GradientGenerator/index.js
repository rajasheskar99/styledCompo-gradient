import {Component} from 'react'

import {Heading, Title, Container} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  render() {
    console.log(gradientDirectionsList)
    return (
      <Container>
        <Heading>Generate a CSS Color Gradient</Heading>
        <Title>Choose Direction</Title>
        <ul>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              directionItem={each}
            />
          ))}
        </ul>
      </Container>
    )
  }
}

export default GradientGenerator
